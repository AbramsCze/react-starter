// libs
import React from 'react'
import { Route, Switch } from 'react-router'
import { IntlProvider } from 'react-intl'
import { SnackbarProvider } from 'notistack'

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

export const App: React.FunctionComponent = () => {
  return (
      <IntlProvider locale={language} messages={messages[language]}>
        <SnackbarProvider>
          <Switch>
            <Route path={routes.USER_FORM} component={AddUserPage} />
            <Route path={routes.EMPTY} component={Homepage} />
          </Switch>
        </SnackbarProvider>
      </IntlProvider>
  )
}

export default App
