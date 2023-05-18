import React from "react";

export const Modal = (props) => {
  function cancelHandler() {
    props.onCancel();
  }
  function confirmHandler() {
    props.onConfirm();
  }
  return (
    <div className="modal">
      <p>are you sure?</p>
      <button className="btn btn--alt" onClick={cancelHandler}>
        취소
      </button>
      <button className="btn" onClick={confirmHandler}>
        확인
      </button>
    </div>
  );
};
