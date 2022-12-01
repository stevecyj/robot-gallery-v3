import styles from './App.module.css';
import robots from './mockdata/robots.json';
import Robot from './components/Robot';

const html = "<img onerror='alert(\"Hacked!\")' src='invalid_image'/>"; //這段會被阻擋
const jsHacked = "javascript: alert('Hakced!')"; // 這段無法阻擋

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.robotList}>
        {robots.map((r) => (
          <Robot id={r.id} email={r.email} name={r.name} />
        ))}
      </div>
    </div>
  );
}

export default App;
