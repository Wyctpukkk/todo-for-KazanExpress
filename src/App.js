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
        <button onClick={addNewTodo}>Add</button>
      </div>
      <div>
        {todos.length < 1 ? (
          <div>For create todo push Add </div>
        ) : (
          todos.map((todoList, index) => (
            <div key={todoList.id}>
              <div
                className={todoList.isDone ? 'todoList active' : 'todoList'}
              >{`${index + 1}. ${todoList.newTodo} `}</div>
              <div className="icons">
                <AiOutlineCheck onClick={() => checked(todoList)} />
                <AiOutlineEdit />
                <AiFillDelete onClick={() => deleteTodo(todoList)} />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
