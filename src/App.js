import { useEffect, useState } from 'react';
import './App.css';
import FormChangeName from './components/FormChangeName';
import ModalChangeNameList from './components/ModalChangeNameList';
import {
  AiOutlineEdit,
  AiOutlineCheck,
  AiFillDelete,
  AiOutlineGithub,
} from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';

function App() {
  const [nameOfMain, setNameOfMain] = useState(
    JSON.parse(sessionStorage.getItem('mainName'))
      ? JSON.parse(sessionStorage.getItem('mainName'))
      : 'Todo KazanExpress'
  );
  const [inputName, setInputName] = useState('');
  const [show, setShow] = useState(false); // Show modal window
  const [newTodo, setNewTodo] = useState(''); // input add todo in list
  const [todos, setTodos] = useState(
    JSON.parse(sessionStorage.getItem('posts'))
      ? JSON.parse(sessionStorage.getItem('posts'))
      : []
  ); // list todo

  function deleteTodo(currentTodoList) {
    setTodos(todos.filter((todoList) => todoList.id !== currentTodoList.id));
  }

  function checked(currentTodoList) {
    setTodos(
      todos.map((todoList) => {
        return currentTodoList.id === todoList.id
          ? { ...todoList, isDone: !todoList.isDone }
          : { ...todoList };
      })
    );
  }

  useEffect(() => {
    sessionStorage.setItem('posts', JSON.stringify(todos));
    sessionStorage.setItem('mainName', JSON.stringify(nameOfMain));
  }, [addNewTodo]);

  function addNewTodo() {
    const todoList = {
      id: Date.now(),
      newTodo,
      isDone: false,
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
        <button className="btn-add" onClick={addNewTodo}>
          Add
        </button>
      </div>
      <div>
        {todos.length < 1 ? (
          <div>For create todo push Add </div>
        ) : (
          todos.map((todoList, index) => (
            <div
              key={todoList.id}
              className={todoList.isDone ? 'todoList active' : 'todoList'}
            >
              <div className="todoListText">
                {`${index + 1}. ${todoList.newTodo} `}
              </div>
              <AiOutlineCheck
                className="icon-check"
                onClick={() => checked(todoList)}
              />
              {/* <AiOutlineEdit onClick={() => setShow(true)} /> */}
              <AiFillDelete
                className="icon-delete"
                onClick={() => deleteTodo(todoList)}
              />
            </div>
          ))
        )}
      </div>
      {todos.length > 0 ? (
        <div className="contacts">
          <p>Created by Wyctpukkk</p>
          <a href="https://github.com/Wyctpukkk">
            <button className="btn-contacts">
              <AiOutlineGithub />
            </button>
          </a>
          <a href="https://t.me/wyctpukkk">
            <button className="btn-contacts">
              <FaTelegramPlane />
            </button>
          </a>
        </div>
      ) : (
        ''
      )}

      {todos.filter((todoList) => todoList.isDone !== false).length < 1
        ? ''
        : `You have done ${
            todos.filter((todoList) => todoList.isDone !== false).length
          } todos`}
    </div>
  );
}

export default App;
