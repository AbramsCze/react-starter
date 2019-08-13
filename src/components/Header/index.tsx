import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TodoTextInput } from '../TodoTextInput'
import { addTodo } from '../../actions/todos'

type DispatchToProps = {
  addTodo: (todo: TodoItemData) => void;
}

type Props = DispatchToProps

class Header extends Component<Props> {
  constructor(props: Props) {
    super(props)
    this.handleSave = this.handleSave.bind(this)
  }

  handleSave(text: string) {
    if (text.length) {
      this.props.addTodo({ id: 0, text, completed: false })
    }
  }

  render() {
    return (
      <header>
        <h1>Todos</h1>
        <TodoTextInput newTodo onSave={this.handleSave} placeholder="What needs to be done?" />
      </header>
    )
  }
}

const mapDispatchToProps = {
  addTodo,
}

export default connect(null, mapDispatchToProps)(Header)

