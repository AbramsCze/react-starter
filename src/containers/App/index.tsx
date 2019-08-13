import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import * as style from './style.css'
import * as TodoActions from '../../actions/todos'
import { Header, MainSection } from '../../components'

export interface Props extends RouteComponentProps<void> {
  todos: TodoItemData[]
  actions: typeof TodoActions
}

export class App extends React.Component<Props> {
  render() {
    const { children } = this.props
    return (
      <div className={style.normal}>
        <Header />
        <MainSection />
        {children}
      </div>
    )
  }
}
