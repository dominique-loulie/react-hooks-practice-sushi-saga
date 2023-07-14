import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import SushiContainer from "./SushiContainer";
import SushiWallet from './SushiWallet';
import Table from "./Table";

const API = "http://localhost:3001/sushis";
const displaySize = 4
const startMoney = 100;

function App() {
  const [sushi, setSushi] = useState([])
  const [startSushi, setStartSushi] = useState(0);
  const [money, setMoney] = useState(startMoney);

  useEffect(
    () => 
      fetch(API)
        .then((res) => res.json())
        .then(setSushi), 
    []
  );

function nextSushis() {
  setStartSushi((startSushi + displaySize) % sushi.length)
}

function eatSushi(sush) {
  setSushi(sushi.map((s) => (sush.id === s.id ? {...s, eaten: true} : s)));
  if (sush.price <= money) {
    setMoney(money - sush.price);
}
}

function addMoney(amount) {
  setMoney(money + amount);
}

  return (
    <div className="app">
      <SushiContainer 
        sushi={sushi.slice(startSushi, startSushi + displaySize)}
        nextSushis={nextSushis}
        eatSushi={eatSushi} 
      />
      <Table money={money} plates={sushi.filter((s) => s.eaten)} />
      <SushiWallet addMoney={addMoney}/>
    </div>
  );
}

export default App;