import React from 'react';
import './FormChangeName.css';

const FormChangeName = ({ inputName, setInputName, changeInputName }) => {
  return (
    <form>
      <input
        className="input-change"
        type="text"
        value={inputName}
        placeholder="New Name List Todo"
        onChange={(e) => setInputName(e.target.value)}
      ></input>
      <button className="btn-change" type="submit" onClick={changeInputName}>
        Change
      </button>
    </form>
  );
};

export default FormChangeName;
