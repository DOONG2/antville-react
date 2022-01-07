import { Route, Switch } from 'react-router-dom'
import Core from './components/base/Core'
import MainPage from './components/elements/main/MainPage'

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route
          path={[
            '/user/:nickname/profile',
            '/user/:nickname/profile/:mode(all|like)',
          ]}
          component={() => <></>}
          exact
        />
        <Route path="/stock/:ticker" component={() => <></>} exact />
      </Switch>

      <Core />
    </>
  )
}

export default App
