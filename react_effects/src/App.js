import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (e) => setKeyword(e.target.value);

  console.log("I run all the time");
  useEffect(() => console.log("I run only one"), []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) console.log("I run when 'keyword' changes");
  }, [keyword]);
  useEffect(() => console.log("I run when 'counter' changes"), [counter]);

  return (
    <div className="App">
      <input value={keyword} onChange={onChange} type="text" placeholder="Serch here...." />
      <h1 className={styles.title}> Welcome back!!!!</h1>
      <h2>{counter}</h2>
      <Button onClick={onClick} text={"Countinue"} />
    </div>
  );
}

export default App;
