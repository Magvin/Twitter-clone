import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './styles/theme';
import { SignIn } from './pages/Home/SignIn';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App' data-testid='app'>
        <SignIn />
      </div>
    </ThemeProvider>
  );
}

export default App;
