import React from 'react';
import './App.css';
import BottomInfo from './components/BottomInfo';
import Header from './components/Header';
import InformationBox from './components/InformationBox';
import MainSection from './components/MainSection';
import SideMenu from './components/SideMenu';

function App() {
  return (
    <div>
      <Header />
      <InformationBox />
      <MainSection />
      <SideMenu />
      <BottomInfo />
    </div>
  );
}

export default App;
