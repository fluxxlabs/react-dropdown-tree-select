import React, { PureComponent } from 'react'
import CustomOption from '../custom-option'

class CustomOptions extends PureComponent {
  render() {
    const { customOptions, onCustomOptionRemove } = this.props
    if (!customOptions) return null

    return (
      <div className="custom-options">
        <ul>
          {customOptions.map((option, i) => {
            return (
              <CustomOption option={option} onCustomOptionRemove={onCustomOptionRemove} key={`custom-option-${i}`} />
            )
          })}
        </ul>
      </div>
    )
  }
}

export default CustomOptions
