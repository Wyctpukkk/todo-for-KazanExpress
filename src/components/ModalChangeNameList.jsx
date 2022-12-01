import React from 'react';
import './ModalChangeNameList.css';

const ModalChangeNameList = ({ setShow, show, children }) => {
  return (
    <div
      onClick={() => setShow(false)}
      className={show ? 'modal active' : 'modal'}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={show ? 'modal__content active' : 'modal__content'}
      >
        {children}
      </div>
    </div>
  );
};

export default ModalChangeNameList;
