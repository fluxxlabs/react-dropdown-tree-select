import React, { PureComponent } from 'react'

class CustomOption extends PureComponent {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = e => {
    const { option, onCustomOptionRemove } = this.props
    e.stopPropagation()
    onCustomOptionRemove(option)
  }

  render() {
    const { option } = this.props

    return (
      <li className="custom-option tag-item">
        <span className="tag-text custom-option-tag-text">"{option}"</span>
        <button className="clear-custom-option-btn" type="button" aria-label="clear option" onClick={this.handleClick}>
          &#10005;
        </button>
      </li>
    )
  }
}

export default CustomOption
