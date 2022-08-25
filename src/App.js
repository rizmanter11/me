import React, { useContext } from 'react';
import Home from './pages/Home';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider} from 'styled-components';
import ThemeContext from './contexts/ThemeContext';

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <ThemeProvider theme={{theme}}>
        <GlobalStyles />
        <Home/>
      </ThemeProvider>
    </>
  );
}

export default App;
