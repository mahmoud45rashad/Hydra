import React, { useEffect } from 'react';
import './App.css';
import Navba from './commponents/Nav/Nav';
import Home from './commponents/Home/Home';
import Footer from './commponents/footer/Footer';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';
function App() {
  const { i18n } = useTranslation(); 
  useEffect(() => {

    window.document.dir = i18n.dir();
  }, [i18n.language]); 
  return (
    <div className="App">
      <Navba />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
