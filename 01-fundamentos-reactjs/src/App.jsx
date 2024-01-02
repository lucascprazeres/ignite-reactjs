import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./styles/App.module.css";

import "./styles/global.css";

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post author="Lucas Prazeres" content="Hello world" />
        </main>
      </div>
    </div>
  );
}

export default App;
