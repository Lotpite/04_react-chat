import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Navbar';
import AppRouter from './components/AppRouter';
import { createGlobalStyle } from 'styled-components';
import { StyledApp } from './styles/App.styled';

function App() {

  const GlobalStyle = createGlobalStyle`
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
    `
  return (
    <BrowserRouter>
    <GlobalStyle/>
      <StyledApp>
        <Header />
        <AppRouter />
      </StyledApp>
      
    </BrowserRouter>
  );
}

export default App;
