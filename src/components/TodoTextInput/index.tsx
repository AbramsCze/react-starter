import * as React from 'react'
import classNames from 'classnames'
import * as style from './style.css'

export interface Props {
  text?: string
  placeholder?: string
  newTodo?: boolean
  editing?: boolean
  onSave: (text: string) => any
}

export interface State {
  text: string
}

export class TodoTextInput extends React.Component<Props, State> {
  constructor(props: Props, context?: any) {
    super(props, context)
    this.state = {
      text: this.props.text || '',
    }
    this.handleBlur = this.handleBlur.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e: React.FormEvent<HTMLInputElement>) {
    const text = e.currentTarget.value.trim()
    this.props.onSave(text)
    if (this.props.newTodo) {
      this.setState({ text: '' })
    }
  }

  handleChange(e: React.FormEvent<HTMLInputElement>) {
    this.setState({ text: e.currentTarget.value })
  }

  handleBlur(e: React.FormEvent<HTMLInputElement>) {
    const text = e.currentTarget.value.trim()
    if (!this.props.newTodo) {
      this.props.onSave(text)
    }
  }

  render() {
    const classes = classNames(
      {
        [style.edit]: this.props.editing,
        [style.new]: this.props.newTodo,
      },
      style.normal,
    )

    return (
      <input
        className={classes}
        type="text"
        autoFocus
        placeholder={this.props.placeholder}
        value={this.state.text}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
      />
    )
  }
}
