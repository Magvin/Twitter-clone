import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './styles/theme';
import { SignIn } from './pages/Sigin/SignIn';
import { Route, Switch } from 'react-router';
import { Home } from './pages/Home/Home';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App' data-testid='app'>
        <Switch>
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/home' component={Home} />
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
