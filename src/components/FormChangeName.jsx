import React from 'react';

const FormChangeName = ({ inputName, setInputName, changeInputName }) => {
  return (
    <form>
      <input
        type="text"
        value={inputName}
        placeholder="Новое название списка"
        onChange={(e) => setInputName(e.target.value)}
      ></input>
      <button type="submit" onClick={changeInputName}>
        Заменить
      </button>
    </form>
  );
};

export default FormChangeName;
