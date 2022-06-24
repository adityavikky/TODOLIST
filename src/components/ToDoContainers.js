import React from "react";
import { ToDoTask } from "./ToDoTask";

export function ToDoContainers({todos, hapusTask}) {
    return (
        <div>
            {
                todos.map((todo, index) => {
                    return (
                        <ToDoTask
                            key={index}
                            index={index}
                            todo={todo}
                            hapusTask={hapusTask}
                        />
                    )
                })
            }
        </div>
    )
}
