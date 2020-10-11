import React from 'react';
import '../App.css';
import Map from '../components/Map';
import styles from './Home.module.css'

function Home() {
  return (
    <div className={ styles.container }>
      <Map />
    </div>
  );
}

export default Home;