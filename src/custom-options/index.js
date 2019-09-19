import React, { PureComponent } from 'react'
import CustomOption from '../custom-option'

class CustomOptions extends PureComponent {
  $emptyState() {
    const { tags, customOptionsPlaceholder } = this.props
    if (!tags.length || !customOptionsPlaceholder) return null

    return customOptionsPlaceholder
  }

  render() {
    const { customOptions, onCustomOptionRemove } = this.props
    const customOptionsExist = !!customOptions && customOptions.length
    if (!customOptionsExist) return this.$emptyState()

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
