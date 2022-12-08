import React, { useState, useEffect } from 'react';
import logo from './assets/images/logo.svg';
// import robots from './mockdata/robots.json';
import Robot from './components/Robot';
import styles from './App.module.css';
import ShoppingCart from './components/ShoppingCart';

// const html = "<img onerror='alert(\"Hacked!\")' src='invalid_image'/>"; //這段會被阻擋
// const jsHacked = "javascript: alert('Hakced!')"; // 這段無法阻擋

interface Props {}

/**
 * 來自網路請求的資源
 */
interface State {
  robotGallery: any[];
  count: number;
}

const App: React.FC = (props) => {
  const [count, setCount] = useState<number>(0);
  const [robotGallery, setRobotGallery] = useState<any>([]); // data from api, type any
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    document.title = `點擊${count}次`;
  }, [count]);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );
        // .then((response) => response.json())
        // .then((data) => setRobotGallery(data));
        const data = await response.json();
        setRobotGallery(data);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        }
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} alt="logo" className={styles.appLogo} />
        <h1>羅伯特機器人 Robot 裝甲明朝</h1>
      </div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click
      </button>
      <span>count: {count}</span>
      <ShoppingCart />
      {!error || (error !== '' && <div>網站出錯: {error}</div>)}
      {!loading ? (
        <div className={styles.robotList}>
          {robotGallery.map((r) => (
            <Robot id={r.id} email={r.email} name={r.name} />
          ))}
        </div>
      ) : (
        <h2>loading 加載中</h2>
      )}
    </div>
  );
};

export default App;
