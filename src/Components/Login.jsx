import React from "react";
import ReactDOM from "react-dom";
import "./Login.css";

export default function Login({ show, closeModal }) {
  if (!show) return null;
  return ReactDOM.createPortal(
    <div className="my-modal">
      <div className="overlay" onClick={closeModal}></div>
      <div className="content">
        <div>
          <label htmlFor="userName">username</label>
          <input type="text" name="userName" id="userName" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <div>
          <button>register</button>
          <button>Login</button>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
