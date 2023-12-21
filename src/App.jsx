import "./App.css";
import './Css.css'
import Counters from "./Counter";
import Team from "./Team";

function App() {
  const btn = (num) => {
    alert(num + 5)
  }
  return (
    <>
      <h2 className="bgm">React core concept Part2</h2>

      <Team></Team>

      <Counters></Counters>

      <button className="gap" onClick={() => {btn(6)}}>Click</button>
      <button onClick={() => {alert("tumi sesh")}}>koro</button>
    </>
  );
}

export default App;
