import { editTodo } from "../actions";

const editTodoText = (todoId, todoText) => {
    return async (dispatch) => {
        const response = await fetch(`https://think-in-redux-way-server.herokuapp.com/todos/${todoId}`, {
            method: "PATCH",
            body: JSON.stringify({
                text: todoText,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
        const todo = await response.json();

        dispatch(editTodo(todo.id, todo.text));
    };
};

export default editTodoText;
