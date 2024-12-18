import { HashRouter} from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';

import useCustomizer from './hooks/useCustomizer';
import Links from './components/Links';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  const {bgColor, fontFamily, navColor} = useCustomizer();

  useEffect(() => {
    document.body.style.backgroundColor = `#${bgColor}`

    if (fontFamily === 'Calibri') {
      document.body.style.fontFamily = `'Calibri', sans-serif`;
    }
    if (fontFamily === 'Arial') {
      document.body.style.fontFamily = `'Arial', sans-serif`;
    }
    if (fontFamily === 'Roboto') {
      document.body.style.fontFamily = `'Roboto', sans-serif`;
    }
    if (fontFamily === 'Poppins') {
      document.body.style.fontFamily = `'Poppins', sans-serif`;
    }
    if (fontFamily === 'DotGothic') {
      document.body.style.fontFamily = `'DotGothic16', sans-serif`;
    }

    document.querySelector('nav').style.backgroundColor = navColor;
    document.querySelector('footer').style.backgroundColor = navColor;
  }, [bgColor, fontFamily, navColor])

  return (
    <HashRouter>
      <Navbar/>
      <Links/>
      <Footer/>
    </HashRouter>
  )
}

export default App
