/*!
 * React Dropdown Tree Select
 * A lightweight, fast and highly customizable tree select component.
 * Hrusikesh Panda <hrusikesh.panda@dowjones.com>
 * Copyright (c) 2017 Dow Jones, Inc. <support@dowjones.com> (http://dowjones.com)
 * license MIT
 * see https://github.com/dowjones/react-dropdown-tree-select
 */
import cn from 'classnames/bind'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { isOutsideClick, clientIdGenerator } from './utils'
import Input from './input'
import Trigger from './trigger'
import Tree from './tree'
import Tags from './tags'
import CustomOptions from './custom-options'
import CreateCustomOption from './create-custom-option'
import TreeManager from './tree-manager'
import keyboardNavigation from './tree-manager/keyboardNavigation'

import styles from './index.css'
import { getAriaLabel } from './a11y'

const cx = cn.bind(styles)

class DropdownTreeSelect extends Component {
  static propTypes = {
    data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
    allowCustomOptions: PropTypes.bool,
    customOptions: PropTypes.array,
    clearSearchOnChange: PropTypes.bool,
    keepTreeOnSearch: PropTypes.bool,
    keepChildrenOnSearch: PropTypes.bool,
    keepOpenOnSelect: PropTypes.bool,
    texts: PropTypes.shape({
      placeholder: PropTypes.string,
      noMatches: PropTypes.string,
      label: PropTypes.string,
      labelRemove: PropTypes.string,
      customOptionsPlaceholderTitle: PropTypes.string,
      customOptionsPlaceholderSubtitle: PropTypes.string,
    }),
    showDropdown: PropTypes.oneOf(['default', 'initial', 'always']),
    className: PropTypes.string,
    onChange: PropTypes.func,
    onAction: PropTypes.func,
    onNodeToggle: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    mode: PropTypes.oneOf(['multiSelect', 'simpleSelect', 'radioSelect', 'hierarchical']),
    showPartiallySelected: PropTypes.bool,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    id: PropTypes.string,
    searchPredicate: PropTypes.func,
    onCustomOptionChange: PropTypes.func,
    onTagUpdate: PropTypes.func,
    focusSearchInputOnMount: PropTypes.bool,
    disableParentSelect: PropTypes.bool,
    customOptionsPlaceholder: PropTypes.func,
  }

  static defaultProps = {
    onFocus: () => {},
    onBlur: () => {},
    onChange: () => {},
    texts: {},
    showDropdown: 'default',
  }

  constructor(props) {
    super(props)
    this.state = {
      searchModeOn: false,
      currentFocus: undefined,
      searchTerm: null,
    }
    this.clientId = props.id || clientIdGenerator.get(this)
    this.onCustomOptionRemove = this.onCustomOptionRemove.bind(this)
    this.onCustomOptionCreate = this.onCustomOptionCreate.bind(this)
    this.clearSearch = this.clearSearch.bind(this)
  }

  initNewProps = ({ data, customOptions, mode, showDropdown, showPartiallySelected, searchPredicate }) => {
    this.treeManager = new TreeManager({
      data,
      mode,
      showPartiallySelected,
      rootPrefixId: this.clientId,
      searchPredicate,
    })
    // Restore focus-state
    const currentFocusNode = this.state.currentFocus && this.treeManager.getNodeById(this.state.currentFocus)
    if (currentFocusNode) {
      currentFocusNode._focused = true
    }
    this.setState(prevState => ({
      showDropdown: /initial|always/.test(showDropdown) || prevState.showDropdown === true,
      customOptions,
      ...this.treeManager.getTreeAndTags(),
    }))
  }

  resetSearchState = () => {
    // clear the search criteria and avoid react controlled/uncontrolled warning
    this.searchInput.value = ''
    return {
      tree: this.treeManager.restoreNodes(), // restore the tree to its pre-search state
      searchModeOn: false,
      allNodesHidden: false,
    }
  }

  componentWillMount() {
    this.initNewProps(this.props)
  }

  componentDidMount() {
    const { focusSearchInputOnMount } = this.props
    if (focusSearchInputOnMount) this.searchInput.focus()
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick, false)
  }

  componentWillReceiveProps(nextProps) {
    this.initNewProps(nextProps)
  }

  handleClick = (e, callback) => {
    this.setState(prevState => {
      // keep dropdown active when typing in search box
      const showDropdown = this.props.showDropdown === 'always' || this.keepDropdownActive || !prevState.showDropdown

      // register event listeners only if there is a state change
      if (showDropdown !== prevState.showDropdown) {
        if (showDropdown) {
          document.addEventListener('click', this.handleOutsideClick, false)
        } else {
          document.removeEventListener('click', this.handleOutsideClick, false)
        }
      }

      if (showDropdown) this.props.onFocus()
      else this.props.onBlur()

      return !showDropdown ? { showDropdown, ...this.resetSearchState() } : { showDropdown }
    }, callback)
  }

  handleOutsideClick = e => {
    if (this.props.showDropdown === 'always' || !isOutsideClick(e, this.node)) {
      return
    }

    this.handleClick()
  }

  onInputChange = value => {
    const { allNodesHidden, tree } = this.treeManager.filterTree(
      value,
      this.props.keepTreeOnSearch,
      this.props.keepChildrenOnSearch
    )
    const trimmedValue = value.trim()
    const searchModeOn = trimmedValue.length > 0

    this.setState({
      tree,
      searchModeOn,
      allNodesHidden,
      searchTerm: value,
    })
  }

  onTagRemove = (id, isKeyboardEvent) => {
    const { tags: prevTags } = this.state
    this.onCheckboxChange(id, false, tags => {
      if (!isKeyboardEvent) return

      keyboardNavigation.getNextFocusAfterTagDelete(id, prevTags, tags, this.searchInput).focus()
    })
  }

  onCustomOptionRemove = value => {
    const { customOptions } = this.state
    const newOptions = customOptions.filter((option, i) => option !== value)
    this.setState({ customOptions: newOptions }, this.onCustomChangeCallback(newOptions))
  }

  onCustomOptionCreate = value => {
    const { customOptions } = this.state
    const options = customOptions || []
    const newOptions = [...options, value]
    this.setState({ customOptions: newOptions, ...this.resetSearchState() }, this.onCustomChangeCallback(newOptions))
  }

  onCustomChangeCallback = newOptions => {
    const { onCustomOptionChange } = this.props
    onCustomOptionChange(newOptions)
  }

  clearSearch = () => {
    this.setState({ ...this.resetSearchState() })
  }

  prepareTagData = (tagData, treeManager) => {
    return tagData.map(tag => {
      const { _parent } = tag
      const parent = _parent ? treeManager.getNodeById(_parent) : null
      tag.parentLabel = parent ? parent.label : null
      return tag
    })
  }

  onNodeToggle = id => {
    this.treeManager.toggleNodeExpandState(id)
    const tree = this.state.searchModeOn ? this.treeManager.matchTree : this.treeManager.tree
    this.setState({ tree })
    typeof this.props.onNodeToggle === 'function' && this.props.onNodeToggle(this.treeManager.getNodeById(id))
  }

  onCheckboxChange = (id, checked, callback) => {
    const { mode, keepOpenOnSelect } = this.props
    this.treeManager.setNodeCheckedState(id, checked)
    let tags = this.treeManager.tags
    const isSingleSelect = ['simpleSelect', 'radioSelect'].indexOf(mode) > -1
    const showDropdown = isSingleSelect && !keepOpenOnSelect ? false : this.state.showDropdown

    if (!tags.length) {
      this.treeManager.restoreDefaultValues()
      tags = this.treeManager.tags
    }

    const tree = this.state.searchModeOn ? this.treeManager.matchTree : this.treeManager.tree
    const nextState = {
      tree,
      tags,
      showDropdown,
    }

    if ((isSingleSelect && !showDropdown) || this.props.clearSearchOnChange) {
      Object.assign(nextState, this.resetSearchState())
    }

    if (isSingleSelect && !showDropdown) {
      document.removeEventListener('click', this.handleOutsideClick, false)
    }

    this.setState(nextState, () => {
      callback && callback(tags)
    })
    const preparedTags = this.prepareTagData(tags, this.treeManager)

    this.props.onChange(this.treeManager.getNodeById(id), tags, preparedTags)
  }

  onAction = (nodeId, action) => {
    this.props.onAction(this.treeManager.getNodeById(nodeId), action)
  }

  onInputFocus = () => {
    this.keepDropdownActive = true
  }

  onInputBlur = () => {
    this.keepDropdownActive = false
  }

  onTrigger = e => {
    this.handleClick(e, () => {
      // If the dropdown is shown after key press, focus the input
      if (this.state.showDropdown) {
        this.searchInput.focus()
      }
    })
  }

  onKeyboardKeyDown = e => {
    const { readOnly, mode, allowCustomOptions } = this.props
    const { showDropdown, searchModeOn, currentFocus } = this.state
    const tm = this.treeManager
    const tree = searchModeOn ? tm.matchTree : tm.tree
    const searchInputValue = this.searchInput.value.trim()

    if (allowCustomOptions && e.key === 'Enter' && searchInputValue.length > 1) {
      e.preventDefault()
      this.onCustomOptionCreate(this.searchInput.value)
    }

    if (!showDropdown && (keyboardNavigation.isValidKey(e.key, false) || /^\w$/i.test(e.key))) {
      // Triggers open of dropdown and retriggers event
      e.persist()
      this.handleClick(null, () => this.onKeyboardKeyDown(e))
      if (/\w/i.test(e.key)) return
    } else if (showDropdown && keyboardNavigation.isValidKey(e.key, true)) {
      const newFocus = tm.handleNavigationKey(
        currentFocus,
        tree,
        e.key,
        readOnly,
        !searchModeOn,
        this.onCheckboxChange,
        this.onNodeToggle
      )
      if (newFocus !== currentFocus) {
        this.setState({ currentFocus: newFocus })
      }
    } else if (showDropdown && ['Escape', 'Tab'].indexOf(e.key) > -1) {
      if (mode === 'simpleSelect' && tree.has(currentFocus)) {
        this.onCheckboxChange(currentFocus, true)
      } else {
        // Triggers close
        this.keepDropdownActive = false
        this.handleClick()
      }
      return
    } else {
      return
    }
    e.preventDefault()
  }

  getAriaAttributes = () => {
    const { mode, texts } = this.props

    if (mode !== 'radioSelect') return {}

    return {
      role: 'radiogroup',
      ...getAriaLabel(texts.label),
    }
  }

  render() {
    const {
      disabled,
      readOnly,
      mode,
      texts,
      allowCustomOptions,
      onTagUpdate,
      disableParentSelect,
      customOptionsPlaceholder,
    } = this.props
    const { showDropdown, currentFocus, tags, customOptions, searchModeOn, searchTerm } = this.state

    const activeDescendant = currentFocus ? `${currentFocus}_li` : undefined
    const showCustomOptionCreate = allowCustomOptions && searchModeOn

    const commonProps = { disabled, readOnly, activeDescendant, texts, mode, clientId: this.clientId }

    return (
      <div
        id={this.clientId}
        className={cx(this.props.className, 'react-dropdown-tree-select')}
        ref={node => {
          this.node = node
        }}
      >
        <div
          className={cx(
            'dropdown',
            { 'simple-select': mode === 'simpleSelect' },
            { 'radio-select': mode === 'radioSelect' }
          )}
        >
          <div className="tag-container">
            <Tags
              tags={tags}
              onTagUpdate={onTagUpdate}
              onTagRemove={this.onTagRemove}
              treeManager={this.treeManager}
              {...commonProps}
            />
            {allowCustomOptions && (
              <CustomOptions
                tags={tags}
                customOptions={customOptions}
                onCustomOptionRemove={this.onCustomOptionRemove}
                customOptionsPlaceholder={customOptionsPlaceholder}
              />
            )}
          </div>
          <div className="bulk-select-body">
            <div className="search-with-options">
              <Trigger onTrigger={this.onTrigger} showDropdown={showDropdown} {...commonProps} tags={tags}>
                <Input
                  inputRef={el => {
                    this.searchInput = el
                  }}
                  tags={tags}
                  onInputChange={this.onInputChange}
                  onFocus={this.onInputFocus}
                  onBlur={this.onInputBlur}
                  onKeyDown={this.onKeyboardKeyDown}
                  clearSearch={this.clearSearch}
                  searchModeOn={searchModeOn}
                  {...commonProps}
                />
              </Trigger>
              {showCustomOptionCreate && (
                <CreateCustomOption searchTerm={searchTerm} onCustomOptionCreate={this.onCustomOptionCreate} />
              )}
            </div>
            {showDropdown && (
              <div className="dropdown-content" {...this.getAriaAttributes()}>
                {this.state.allNodesHidden ? (
                  <span className="no-matches">{texts.noMatches || 'No matches found'}</span>
                ) : (
                  <Tree
                    data={this.state.tree}
                    keepTreeOnSearch={this.props.keepTreeOnSearch}
                    keepChildrenOnSearch={this.props.keepChildrenOnSearch}
                    searchModeOn={this.state.searchModeOn}
                    onAction={this.onAction}
                    onCheckboxChange={this.onCheckboxChange}
                    onNodeToggle={this.onNodeToggle}
                    mode={mode}
                    showPartiallySelected={this.props.showPartiallySelected}
                    customOptions={customOptions}
                    onCustomOptionRemove={this.onCustomOptionRemove}
                    onCustomOptionCreate={this.onCustomOptionCreate}
                    disableParentSelect={disableParentSelect}
                    {...commonProps}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default DropdownTreeSelect
