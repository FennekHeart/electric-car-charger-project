import React from 'react';
import './App.css';
import BottomInfo from './components/BottomInfo';
import Header from './components/Header';
import InformationBox from './components/InformationBox';
import Map from './components/Map';
import SideMenu from './components/SideMenu';

function App() {
  return (
    <div>
      <Header />
      <InformationBox topic='NOTICE' body='Development of web application is still ongoing!' />
      <Map />
      <SideMenu />
      <BottomInfo />
    </div>
  );
}

export default App;
