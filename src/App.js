import React, { useContext } from 'react';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';
import { ThemeProvider} from 'styled-components';
import ThemeContext from './contexts/ThemeContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';


function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <ThemeProvider theme={{theme}}>
        <Router>
          <GlobalStyles />
          <Header />
          <ScrollToTop />
          <Routes>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/projects" element={<ProjectsPage/>}/>
            <Route path="/" element={<Home/>}/>
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
