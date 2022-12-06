import React from 'react';
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

class App extends React.Component<Props, State> {
  /**
   * 生命週期第一階段：初始化
   * 初始化組件 state
   */
  constructor(props) {
    super(props);
    this.state = {
      robotGallery: [],
      count: 0,
    };
  }

  /**
   * api
   * component 建立好 dom 元素後，掛載進頁面時調用
   */
  componentDidMount(): void {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => this.setState({ robotGallery: data }));
  }

  /**
   * 生命週期第二階段：更新
   */

  // 組件接收到新的 prop (更新後) 被調用，會產生無法預測的副作用
  // componentWillReceiveProps(
  //   nextProps: Readonly<Props>,
  //   nextContext: any
  // ): void {}

  // 取代，組件更新或初始化後被調用
  // getDeriveStateFromProps(nextProps,prevState){}

  // 花費較大的資源開銷，判斷何時更新畫面
  // shouldComponentUpdate(
  //   nextProps: Readonly<Props>,
  //   nextState: Readonly<State>,
  //   nextContext: any
  // ): boolean {
  //   return nextState.some !== this.state.some;
  // }

  // 組件更新後被調用
  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
    snapshot?: any
  ): void {}

  /**
   * 生命週期第三階段：銷毀
   * 組件銷毀後調用
   * 可以當作 destructor 來使用
   * 用來避免組件銷毀時可能產生的記憶體洩漏
   */
  componentWillUnmount(): void {}

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} alt="logo" className={styles.appLogo} />
          <h1>羅伯特機器人 Robot 裝甲明朝</h1>
        </div>
        <button
          onClick={() => {
            this.setState(
              (preState, preProps) => {
                return { count: preState.count + 1 };
              },
              () => {
                console.log('count', this.state.count);
              }
            );
            this.setState(
              (preState, preProps) => {
                return { count: preState.count + 1 };
              },
              () => {
                console.log('count', this.state.count);
              }
            );
          }}
        >
          click
        </button>
        <span>count: {this.state.count}</span>
        <ShoppingCart />
        <div className={styles.robotList}>
          {this.state.robotGallery.map((r) => (
            <Robot id={r.id} email={r.email} name={r.name} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
