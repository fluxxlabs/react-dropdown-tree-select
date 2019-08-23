import React, { PureComponent } from 'react'
import CustomOption from '../custom-option'

class CustomOptions extends PureComponent {
  render() {
    const { customOptions, onCustomOptionRemove } = this.props

    return (
      <div className="custom-options">
        <ul>
          {customOptions.map(option => {
            return (
              <CustomOption
                option={option}
                onCustomOptionRemove={onCustomOptionRemove}
                key={`custom-option-${option.id}`}
              />
            )
            // return (
            //   <li className="custom-option" key={`custom-option-${i}`}>
            //     {label}
            //     {id}
            //     <button
            //       id={`clear-option-${id}`}
            //       className="clear-custom-option-btn"
            //       type="button"
            //       aria-label="clear option"
            //       onClick={this.handleClick}
            //     >
            //       x
            //     </button>
            //   </li>
            // )
          })}
        </ul>
      </div>
    )
  }
}

export default CustomOptions
