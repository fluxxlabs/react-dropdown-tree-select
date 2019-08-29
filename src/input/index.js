import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames/bind'
import styles from './index.css'
import { debounce } from '../utils'
import { getAriaLabel } from '../a11y'

const cx = cn.bind(styles)

class Input extends PureComponent {
  static propTypes = {
    texts: PropTypes.object,
    onInputChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onKeyDown: PropTypes.func,
    inputRef: PropTypes.func,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    activeDescendant: PropTypes.string,
  }

  constructor(props) {
    super(props)
    this.delayedCallback = debounce(e => this.props.onInputChange(e.target.value), 300)
  }

  handleInputChange = e => {
    e.persist()
    this.delayedCallback(e)
  }

  render() {
    const {
      inputRef,
      texts = {},
      onFocus,
      onBlur,
      disabled,
      readOnly,
      onKeyDown,
      activeDescendant,
      clearSearch,
      searchModeOn,
    } = this.props

    return (
      <div className="search-input">
        <input
          type="text"
          disabled={disabled}
          ref={inputRef}
          className={cx('search')}
          placeholder={texts.placeholder || 'Choose...'}
          onKeyDown={onKeyDown}
          onChange={this.handleInputChange}
          onFocus={onFocus}
          onBlur={onBlur}
          readOnly={readOnly}
          aria-activedescendant={activeDescendant}
          aria-autocomplete={onKeyDown ? 'list' : undefined}
          {...getAriaLabel(texts.label)}
        />
        {searchModeOn && (
          <button
            id="clear-search"
            onClick={clearSearch}
            className="clear-search-btn"
            type="button"
            aria-label="clear-search-button"
          >
            &#10005;
          </button>
        )}
      </div>
    )
  }
}

export default Input
