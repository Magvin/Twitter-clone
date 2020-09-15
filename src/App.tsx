import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './styles/theme';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <h1>test</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
