import cn from 'classnames/bind'
import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import Checkbox from '../checkbox'
import RadioButton from '../radio'

import styles from './index.css'

const cx = cn.bind(styles)

class NodeLabel extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    actions: PropTypes.array,
    title: PropTypes.string,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    partial: PropTypes.bool,
    disabled: PropTypes.bool,
    dataset: PropTypes.object,
    mode: PropTypes.oneOf(['multiSelect', 'simpleSelect', 'radioSelect', 'hierarchical']),
    showPartiallySelected: PropTypes.bool,
    onCheckboxChange: PropTypes.func,
    readOnly: PropTypes.bool,
    clientId: PropTypes.string,
  }

  handleCheckboxChange = e => {
    const { mode, id, onCheckboxChange } = this.props

    if (mode === 'simpleSelect' || mode === 'radioSelect') {
      onCheckboxChange(id, true)
    } else {
      const {
        target: { checked },
      } = e
      onCheckboxChange(id, checked)
    }
    e.stopPropagation()
    e.nativeEvent.stopImmediatePropagation()
  }

  handleNodeToggle = e => {
    const { id, onNodeToggle } = this.props
    onNodeToggle(id)

    e.stopPropagation()
    e.nativeEvent.stopImmediatePropagation()
  }

  shouldHideSelect = () => {
    const { disableParentSelect, isParent } = this.props
    return disableParentSelect && isParent
  }

  $select() {
    const { mode, id, partial, checked, value, disabled, showPartiallySelected, readOnly, clientId } = this.props
    const sharedProps = { id, value, checked, disabled, readOnly, tabIndex: -1 }
    const shouldHideSelect = this.shouldHideSelect()

    if (shouldHideSelect) return null

    if (mode === 'radioSelect')
      return (
        <RadioButton name={clientId} className="radio-item" onChange={this.handleCheckboxChange} {...sharedProps} />
      )
    return (
      <Checkbox
        name={id}
        className={cx('checkbox-item', { 'simple-select': mode === 'simpleSelect' })}
        indeterminate={showPartiallySelected && partial}
        onChange={this.handleCheckboxChange}
        {...sharedProps}
      />
    )
  }

  render() {
    const { mode, title, label, id, disabled, readOnly } = this.props
    const nodeLabelProps = { className: 'node-label' }
    const shouldHideSelect = this.shouldHideSelect()

    // in case of simple select mode, there is no checkbox, so we need to handle the click via the node label
    // but not if the control is in readOnly or disabled state
    const shouldRegisterClickHandler = mode === 'simpleSelect' && !readOnly && !disabled

    if (shouldRegisterClickHandler) {
      nodeLabelProps.onClick = this.handleCheckboxChange
    } else if (shouldHideSelect) {
      nodeLabelProps.onClick = this.handleNodeToggle
    }

    return (
      <label title={title || label} htmlFor={id}>
        {this.$select()}
        <span {...nodeLabelProps}>{label}</span>
      </label>
    )
  }
}

export default NodeLabel
