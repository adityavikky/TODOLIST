import React from "react";

export function ToDoTask({ index, todo, value, hapusTask }) {
    return (
        <div className="mt-5">
            <div class="rounded overflow-hidden shadow-lg">
                <div class="py-6 flex px-6 justify-between items-center">
                    <div class="font-bold text-xl">{todo.task}</div>
                    <button class="bg-transparent hover:bg-teal-500 text-teal-700 font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded" onClick={() => hapusTask(index)}>
                        Selesai
                    </button>
                </div>
            </div>
        </div>
    );
}
