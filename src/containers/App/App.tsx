// libs
import React, { FunctionComponent } from 'react'
import { Route, Switch } from 'react-router'
import { IntlProvider } from 'react-intl'
import { SnackbarProvider } from 'notistack'
import { makeStyles } from '@material-ui/styles'

// others
import routes from '../../constants/routes'
import AddUserPage from '../Users/AddUserPage'
import { Homepage } from '../Homepage/Homepage'
import messagesCs from '../../i18n/cs.json'
import messagesEn from '../../i18n/en.json'

const messages: Record<string, Record<string, string>> = {
  'cs': messagesCs,
  'en': messagesEn
}
const language = navigator.language.split(/[-_]/)[0]  // language without region code

export const App: FunctionComponent = () => {
  const rootStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #00ddff 30%, #FFFFFF 90%)',
      color: 'midnightblue',
    },
  })
  const classes = rootStyles()

  return (
    <div className={classes.root}>
      <IntlProvider locale={language} messages={messages[language]}>
        <SnackbarProvider>
          <Switch>
            <Route path={routes.USER_FORM} component={AddUserPage} />
            <Route path={routes.EMPTY} component={Homepage} />
          </Switch>
        </SnackbarProvider>
      </IntlProvider>
    </div>
  )
}

export default App
