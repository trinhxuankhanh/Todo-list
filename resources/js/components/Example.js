import React, { useState } from "react";
import ReactDOM from "react-dom";
import Login from "./Login";
import TodoList from "./todoList";

function Example() {
    const [auth, setAuth] = useState({});
    return (
        <div className="container">
            <div className="row justify-content-center">
                {Object.getOwnPropertyNames(auth).length === 0 ? (
                    <Login auth={setAuth} />
                ) : (
                    <TodoList auth={auth} />
                )}
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById("example")) {
    ReactDOM.render(<Example />, document.getElementById("example"));
}
