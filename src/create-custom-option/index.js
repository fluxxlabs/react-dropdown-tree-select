import React, { PureComponent } from 'react'

class CreateCustomOption extends PureComponent {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = e => {
    const { searchTerm, onCustomOptionCreate } = this.props
    e.stopPropagation()
    onCustomOptionCreate(searchTerm)
  }

  render() {
    const { searchTerm } = this.props
    return (
      <div className="create-custom-option">
        <button
          id="add-custom-option"
          className="add-custom-option-btn"
          type="button"
          aria-label="add option"
          onClick={this.handleClick}
        >
          Add "{searchTerm}"
        </button>
      </div>
    )
  }
}

export default CreateCustomOption
