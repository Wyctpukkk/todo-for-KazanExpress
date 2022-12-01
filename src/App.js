import { useState } from 'react';
import './App.css';
import FormChangeName from './components/FormChangeName';

function App() {
  const [nameOfMain, setNameOfMain] = useState('Todo KazanExpress');
  const [inputName, setInputName] = useState('');

  function changeInputName(e) {
    e.preventDefault();
    setNameOfMain(inputName);
    setInputName('');
  }

  return (
    <div className="App">
      <header>
        {nameOfMain}
        <button>Редак</button>
      </header>
      <div>
        <FormChangeName
          inputName={inputName}
          setInputName={setInputName}
          changeInputName={changeInputName}
        />
      </div>
    </div>
  );
}

export default App;
