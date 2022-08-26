import { useState } from "react";
import { useDispatch } from "react-redux";
import cancelImage from "../assets/images/cancel.png";
import addImage from '../assets/images/plus.png';
import editImage from '../assets/images/edit.png';
import deleteTodo from "../redux/todos/thunk/deleteTodo";
import editTodoText from "../redux/todos/thunk/editTodoText";
import updateColor from "../redux/todos/thunk/updateColor";
import updateStatus from "../redux/todos/thunk/updateStatus";

export default function Todo({ todo }) {
    const dispatch = useDispatch();

    const { text, id, completed, color } = todo;
    const [editInputShow, setEditInputShow] = useState(false);
    const [input, setInput] = useState(text);

    const handleStatusChange = (todoId) => {
        dispatch(updateStatus(todoId, completed));
    };

    const handleColorChange = (todoId, color) => {
        dispatch(updateColor(todoId, color));
    };

    const handleDelete = (todoId) => {
        dispatch(deleteTodo(todoId));
    };

    const handleInputVChange = (e) => {
        setInput(e.target.value);
    };
    const showInputHandler = () => {
        setEditInputShow(true);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(editTodoText(id, input));
        setEditInputShow(false)
    };

    return (
        <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
            <div
                className={`relative rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${completed &&
                    "border-green-500 focus-within:border-green-500"
                    }`}
            >
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => handleStatusChange(id)}
                    className="opacity-0 absolute rounded-full"
                />
                {completed && (
                    <svg
                        className="fill-current w-3 h-3 text-green-500 pointer-events-none"
                        viewBox="0 0 20 20"
                    >
                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                    </svg>
                )}
            </div>

            <div
                className={`flex-1`}
            >
                {
                    editInputShow ? <form
                        className="flex items-center bg-gray-100 rounded-md relative"
                        onSubmit={submitHandler}
                    >
                        <input
                            className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={input}
                            onChange={handleInputVChange}
                        />

                        <button
                            type="submit"
                            className={`appearance-none w-5 h-5 px-4 bg-[url('${addImage}')] bg-no-repeat bg-contain absolute right-0`}
                        ></button>
                    </form>
                        : text
                }
            </div>

            <div className="flex-shrink-0 h-4 w-4 ml-2 cursor-pointer">
                <img src={editImage} alt="" onClick={showInputHandler} />
            </div>

            <div
                className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-green-500 border-green-500 ${color === "green" && "bg-green-500"
                    }`}
                onClick={() => handleColorChange(id, "green")}
            ></div>

            <div
                className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-yellow-500 border-yellow-500 ${color === "yellow" && "bg-yellow-500"
                    }`}
                onClick={() => handleColorChange(id, "yellow")}
            ></div>

            <div
                className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-red-500 border-red-500 ${color === "red" && "bg-red-500"
                    }`}
                onClick={() => handleColorChange(id, "red")}
            ></div>

            <img
                src={cancelImage}
                className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
                alt="Cancel"
                onClick={() => handleDelete(id)}
            />
        </div>
    );
}
