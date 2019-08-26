import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Tag from '../tag'
import { getDataset } from '../utils'

const getTags = (tags = [], onDelete, readOnly, disabled, labelRemove, treeManager) => {
  return tags.map(tag => {
    const { _id, label, dataset, _parent } = tag
    const parent = _parent ? treeManager.getNodeById(_parent) : null
    const parentLabel = parent ? parent.label : null

    return (
      <li className="tag-item" key={`tag-item-${_id}`} {...getDataset(dataset)}>
        <Tag
          label={label}
          parentLabel={parentLabel}
          id={_id}
          onDelete={onDelete}
          readOnly={readOnly}
          disabled={disabled}
          labelRemove={labelRemove}
        />
      </li>
    )
  })
}

class Tags extends PureComponent {
  static propTypes = {
    tags: PropTypes.array,
    texts: PropTypes.object,
    onTagRemove: PropTypes.func,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
  }

  render() {
    const { tags, onTagRemove, texts = {}, disabled, readOnly, treeManager } = this.props

    return (
      <div className="tag-list">{getTags(tags, onTagRemove, readOnly, disabled, texts.labelRemove, treeManager)}</div>
    )
  }
}

export default Tags
