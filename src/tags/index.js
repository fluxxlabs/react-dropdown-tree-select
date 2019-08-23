import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Tag from '../tag'
import { getDataset } from '../utils'

const getTags = (tags = [], onDelete, readOnly, disabled, labelRemove) =>
  tags.map(tag => {
    const { _id, label, dataset } = tag
    return (
      <li className="tag-item" key={`tag-item-${_id}`} {...getDataset(dataset)}>
        <Tag
          label={label}
          id={_id}
          onDelete={onDelete}
          readOnly={readOnly}
          disabled={disabled}
          labelRemove={labelRemove}
        />
      </li>
    )
  })

class Tags extends PureComponent {
  static propTypes = {
    tags: PropTypes.array,
    texts: PropTypes.object,
    onTagRemove: PropTypes.func,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
  }

  render() {
    const { tags, onTagRemove, texts = {}, disabled, readOnly } = this.props

    return <div className="tag-list">{getTags(tags, onTagRemove, readOnly, disabled, texts.labelRemove)}</div>
  }
}

export default Tags
