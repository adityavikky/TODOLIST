import React, { useState } from "react";
import { ToDoContainers } from "./ToDoContainers";

export function ToDoForm({ props, todo, buatTask, hapusTask }) {
    const [value, setValue] = useState("");

    function handleClick(e) {
        e.preventDefault();
        if (!value) {
            return;
        }
        buatTask(value);
        setValue("");
    }

    return (
        <form onSubmit={handleClick}>
            <input
                class="shadow appearance-none border rounded w-full mb-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="To Do.."
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <input
                class="bg-teal-500 hover:bg-teal-700 text-white font-bold w-full py-2 px-4 border border-teal-700 rounded"
                value="Tambah"
                type="submit"
            />
            <ToDoContainers props={props} todos={todo} hapusTask={hapusTask} />
        </form>
    );
}
