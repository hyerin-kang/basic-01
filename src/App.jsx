import { useEffect, useState } from "react";

import "./App.css";
import { todoClient } from "./lib/todoClient";
function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const getTodos = async () => {
    const { data } = await todoClient.get("/");

    setTodos(data);
  };
  useEffect(() => {
    getTodos();
  }, []);
  const addTodos = async () => {
    //서버에 데이타 추가
    const { data } = await todoClient.post("/", {
      text,
      completed: false,
    });

    await getTodos();

    return data;
  };
  const toggleTodoComplete = async (id, currentCompleted) => {
    const { data } = await todoClient.patch(`/${id}`, {
      completed: !currentCompleted,
    });
    await getTodos();
    return data;
  };

  const deleteTodo = async (id) => {
    const { data } = await todoClient.delete(`/${id}`);
    await getTodos();
    return data;
  };

  return (
    <>
      <h1>베이직반12회차 </h1>
      <form onSubmit={addTodos}>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            e.preventDefault();
            setText(e.target.value);
          }}
        />
        <button>추가하기</button>
      </form>
      {todos.map(function (todo) {
        return (
          <div key={todo.id}>
            <span onClick={() => toggleTodoComplete(todo.id, todo.completed)}>
              {todo.text}
            </span>
            <button
              onClick={() => {
                deleteTodo(todo.id);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}
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
