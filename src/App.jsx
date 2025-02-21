import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

/*
베이직반 - 12회차
axious / tanstackquery / zustand
vite 에서 환경변수를 다룰떄 어떻게 이름을 지어야할까?
VITE_접두사를 붙여서 나타낸다
useEffect({
html파트가 로드될때까지 기다린후 수행해야한다. dom 조작할때
},[])

비동기프로그래밍 : 긴 작업이 완료될때까지 다른 코드가 멈추지 않고 실행되도록 한다.
*/
