import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as style from './style.css'
import { Footer } from '../Footer'
import { TodoItem } from '../TodoItem'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../constants/filters'
import { RootState } from '../../reducers';
import { completeTodo, deleteTodo, editTodo, clearCompleted, completeAll } from '../../actions/todos'

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: (todo: TodoItemData) => !todo.completed,
  [SHOW_COMPLETED]: (todo: TodoItemData) => todo.completed,
}

type StateToProps = {
  todos: TodoItemData[]
}

type DispatchToProps = {
  editTodo: (todo: TodoItemData) => void
  completeTodo: (id: TodoItemId) => void
  deleteTodo: (id: TodoItemId) => void
  clearCompleted: () => void
  completeAll: () => void
}

type Props = StateToProps & DispatchToProps

type InnerState = {
  filter: TodoFilterType
}

class MainSection extends Component<Props, InnerState> {
  constructor(props: Props) {
    super(props)
    this.state = { filter: SHOW_ALL }
  }

  handleClearCompleted = () => {
    const { todos, clearCompleted} = this.props
    const atLeastOneCompleted = todos.some((todo) => todo.completed)
    if (atLeastOneCompleted) {
      clearCompleted()
    }
  }

  handleShow = (filter: TodoFilterType) => {
    this.setState({ filter })
  }

  renderToggleAll(completedCount: number) {
    const { todos, completeAll } = this.props
    if (todos.length > 0) {
      return (
        <input
          className={style.toggleAll}
          type="checkbox"
          checked={completedCount === todos.length}
          onChange={completeAll}
        />
      )
    }
  }

  renderFooter(completedCount: number) {
    const { todos } = this.props
    const { filter } = this.state
    const { handleClearCompleted, handleShow } = this
    const activeCount = todos.length - completedCount

    if (todos.length) {
      return (
        <Footer
          filter={filter}
          activeCount={activeCount}
          completedCount={completedCount}
          onClearCompleted={handleClearCompleted}
          onShow={handleShow}
        />
      )
    }
  }

  render() {
    const { todos, completeTodo, deleteTodo, editTodo } = this.props
    const { filter } = this.state

    const filteredTodos = todos.filter(TODO_FILTERS[filter])
    const completedCount = todos.reduce((count, todo) => (todo.completed ? count + 1 : count), 0)

    return (
      <section className={style.main}>
        {this.renderToggleAll(completedCount)}
        <ul className={style.normal}>
          {filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              completeTodo={completeTodo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          ))}
        </ul>
        {this.renderFooter(completedCount)}
      </section>
    )
  }
}

const mapStateToProps = (state: RootState) => ({
  todos: state.todos,
})

const mapDispatchToProps = {
  completeTodo,
  deleteTodo,
  editTodo,
  clearCompleted,
  completeAll
}

export default connect(mapStateToProps, mapDispatchToProps)(MainSection)
