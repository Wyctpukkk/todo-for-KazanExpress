import { useState } from 'react';
import './App.css';
import FormChangeName from './components/FormChangeName';
import ModalChangeNameList from './components/ModalChangeNameList';
import { AiOutlineEdit } from 'react-icons/ai';

function App() {
  const [nameOfMain, setNameOfMain] = useState('Todo KazanExpress');
  const [inputName, setInputName] = useState('');
  const [show, setShow] = useState(false);

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
    </div>
  );
}

export default App;
