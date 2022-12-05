import React from 'react';
import logo from './assets/images/logo.svg';
import robots from './mockdata/robots.json';
import Robot from './components/Robot';
import styles from './App.module.css';

// const html = "<img onerror='alert(\"Hacked!\")' src='invalid_image'/>"; //這段會被阻擋
// const jsHacked = "javascript: alert('Hakced!')"; // 這段無法阻擋

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} alt="logo" className={styles.appLogo} />
        <h1>羅伯特機器人 Robot 裝甲明朝</h1>
      </div>
      <div className={styles.robotList}>
        {robots.map((r) => (
          <Robot id={r.id} email={r.email} name={r.name} />
        ))}
      </div>
    </div>
  );
}

export default App;
