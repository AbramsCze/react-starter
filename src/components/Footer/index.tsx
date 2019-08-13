import * as React from 'react'
import classNames from 'classnames'
import * as style from './style.css'
import {
  SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED, FILTER_TYPES,
} from '../../constants/filters'

export const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed',
}

export interface Props {
  filter: TodoFilterType
  activeCount: number
  completedCount: number
  onShow: (filter: TodoFilterType) => any
  onClearCompleted: () => any
}

export class Footer extends React.Component<Props> {
  renderTodoCount() {
    const { activeCount } = this.props
    const itemWord = activeCount === 1 ? 'item' : 'items'

    return (
      <span className={style.count}>
        <strong>{activeCount || 'No'}</strong>
        {' '}
        {itemWord}
        {' '}
left
      </span>
    )
  }

  renderFilterLink(filter: TodoFilterType) {
    const { filter: selectedFilter, onShow } = this.props

    return (
      <button
        className={classNames({ [style.selected]: filter === selectedFilter })}
        style={{ cursor: 'pointer' }}
        onClick={() => onShow(filter)}
      >
        {FILTER_TITLES[filter]}
      </button>
    )
  }

  renderClearButton() {
    const { completedCount, onClearCompleted } = this.props
    if (completedCount > 0) {
      return (
        <button className={style.clearCompleted} onClick={onClearCompleted}>
          Clear completed
        </button>
      )
    }
  }

  render() {
    return (
      <footer className={style.normal}>
        {this.renderTodoCount()}
        <ul className={style.filters}>
          {FILTER_TYPES.map((filter) => (
            <li key={filter}>{this.renderFilterLink(filter)}</li>
          ))}
        </ul>
        {this.renderClearButton()}
      </footer>
    )
  }
}
