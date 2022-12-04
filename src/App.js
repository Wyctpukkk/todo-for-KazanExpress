import { useState } from 'react';
import './App.css';
import FormChangeName from './components/FormChangeName';
import ModalChangeNameList from './components/ModalChangeNameList';
import { AiOutlineEdit, AiOutlineCheck, AiFillDelete } from 'react-icons/ai';

function App() {
  const [nameOfMain, setNameOfMain] = useState('Todo KazanExpress');
  const [inputName, setInputName] = useState('');
  const [show, setShow] = useState(false); // Show modal window
  const [newTodo, setNewTodo] = useState(''); // input add todo in list
  const [todos, setTodos] = useState([]); // list todo

  function deleteTodo(x) {
    console.log(x);
    setTodos(todos.filter((p) => p.id !== x.id));
  }

  function addNewTodo() {
    const todoList = {
      id: Date.now(),
      newTodo,
    };

    setTodos([...todos, todoList]);
    setNewTodo('');
  }

  function changeInputName(e) {
    e.preventDefault();
    setNameOfMain(inputName);
    setInputName('');
  }

  return (
    <div className="App">
      <header>
        {nameOfMain}
        <AiOutlineEdit
          title="Change List Name"
          className="btn-edit"
          onClick={() => setShow(true)}
        />
      </header>

      <div>
        <ModalChangeNameList show={show} setShow={setShow}>
          <FormChangeName
            inputName={inputName}
            setInputName={setInputName}
            changeInputName={changeInputName}
          />
        </ModalChangeNameList>
      </div>

      <div className="div-input">
        <input
          className="main-input"
          placeholder="Add some Todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        ></input>
        <button onClick={addNewTodo}>Add</button>
      </div>
      <div>
        {todos.map((value, index) => (
          <div key={value.id}>
            <div className="todoList">{`${index + 1}. ${value.newTodo} `}</div>
            <div className="icons">
              <AiOutlineCheck />
              <AiOutlineEdit />
              <AiFillDelete onClick={() => deleteTodo(value)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
