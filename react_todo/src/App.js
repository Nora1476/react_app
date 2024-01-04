import { useState } from "react";

function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setTodos] = useState([]);

  const onChange = (e) => setTodo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === "") return;

    setTodos((crruentArray) => [toDo, ...crruentArray]);
    setTodo("");
  };

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..." />
        <button>Add To do</button>
      </form>
      <hr />

      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li> //유니크한 키를 설정해 주어야함
        ))}
      </ul>
    </div>
  );
}

export default App;
