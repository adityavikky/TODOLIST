import React, { useState } from "react";
// import {Judul} from "./components/Judul"
import { ToDoForm } from "./ToDoForm";

export function ToDoMain(props) {
    const [todo, setTodo] = useState([])

    function buatTask(task) {
        const todoBaru = [...todo, {task}];

        setTodo(todoBaru);

        console.log(todoBaru)
    }

    function hapusTask(index) {
        const todoBaru = [...todo]
        todoBaru.splice(index, 1)
        setTodo(todoBaru)
    }

    return <>
        {/* <Judul/> */}
        <ToDoForm
            props={props}
            todo={[...todo]}
            buatTask={buatTask}
            hapusTask={hapusTask}
        />
    </>
}