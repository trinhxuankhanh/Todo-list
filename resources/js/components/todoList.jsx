import React, { useEffect, useRef, useState } from "react";
import getAllToDoById from "../api/getAllTodoByIdApi";
import postTaskApi from "../api/postTaskApi";
import deleteTaskApi from "../api/deleteTaskApi";
import putUpdateTaskApi from "../api/putUpdateTaskApi";
import "./todoList.css";

const TodoList = (props) => {
    const [list, setList] = useState([]);
    const [task, setTask] = useState("");
    const refNum = useRef(0);

    useEffect(() => {
        getAllToDoById.get(props.auth.id).then((response) => {
            setList(response);
        });
    }, [props.auth.id]);

    const handleAddTask = (e) => {
        e.preventDefault();

        postTaskApi.post({ name: task, user_id: props.auth.id });
        getAllToDoById.get(props.auth.id).then((response) => {
            setList(response);
        });

        setTask("");
    };

    const handleDeleteTask = (e) => {
        deleteTaskApi.delete(e.target.alt);
        getAllToDoById.get(props.auth.id).then((response) => {
            setList(response);
        });
    };

    const handleDoneTask = (e) => {
        refNum.current += 1;
        refNum.current % 2 == 0
            ? putUpdateTaskApi.put(e.target.children[0].alt, {
                  completed: false,
              })
            : putUpdateTaskApi.put(e.target.children[0].alt, {
                  completed: true,
              });
        getAllToDoById.get(props.auth.id).then((response) => {
            setList(response);
        });
    };

    return (
        <main role="main">
            <div className="container">
                <section className="todo mt-5 mx-auto">
                    <h1 className="text-light mb-3">Todo</h1>

                    <ul className="todos list-group text-light">
                        {list.length > 0 &&
                            list.map((item) => {
                                return (
                                    <li
                                        onClick={handleDoneTask}
                                        key={item.id}
                                        className={
                                            item.completed === 1
                                                ? "list-group-item done"
                                                : "list-group-item"
                                        }
                                    >
                                        {item.name}

                                        <img
                                            onClick={handleDeleteTask}
                                            src="https://www.flaticon.com/svg/vstatic/svg/2236/2236719.svg?token=exp=1620063564~hmac=5e6e433639a21adb005973f6924ee3dc"
                                            alt={item.id}
                                        ></img>
                                    </li>
                                );
                            })}
                    </ul>

                    <form
                        onSubmit={handleAddTask}
                        className="add mt-4"
                        autoComplete="off"
                    >
                        <div className="form-group">
                            <label htmlFor="task" className="text-light mb-3">
                                Add a task
                            </label>
                            <input
                                type="text"
                                className="form-control text-light"
                                id="task"
                                name="task"
                                value={task}
                                onChange={(e) => setTask(e.target.value)}
                            />
                            <div className="invalid-feedback">
                                Looks empty&hellip;
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </main>
    );
};

export default TodoList;
