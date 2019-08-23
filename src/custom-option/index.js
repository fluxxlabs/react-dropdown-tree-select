import React, { PureComponent } from 'react'

class CustomOption extends PureComponent {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = e => {
    const {
      option: { label, id },
      onCustomOptionRemove,
    } = this.props
    // const { id, removeCustomOption } = this.props
    e.stopPropagation()
    console.log('remove:', label, id)
    onCustomOptionRemove(id)
  }

  render() {
    const {
      option: { label, id },
    } = this.props

    return (
      <li className="custom-option" key={`custom-option-${id}`}>
        {label}
        <button
          id={`clear-option-${id}`}
          className="clear-custom-option-btn"
          type="button"
          aria-label="clear option"
          onClick={this.handleClick}
        >
          x
        </button>
      </li>
    )
  }
}

export default CustomOption
