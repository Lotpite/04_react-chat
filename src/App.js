import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Navbar';
import AppRouter from './components/AppRouter';
import { createGlobalStyle } from 'styled-components';

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
      <Header />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
