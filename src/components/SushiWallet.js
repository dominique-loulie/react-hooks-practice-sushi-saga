import { useState } from "react"


export default function SushiWallet({addMoney}) {
    const [moreMoney, setMoreMoney] = useState(0);

    function handleSubmit(e) {
      e.preventDefault();
      addMoney(moreMoney);
      setMoreMoney(0)
    }

    return (
      <form onSubmit={handleSubmit}>
        More money:{''}
        <input 
          type="number" 
          value={moreMoney} 
          onChange={e => setMoreMoney(parseInt(e.target.value))}
        ></input>
        <button type="submit">ADD</button>
      </form>
    );
}