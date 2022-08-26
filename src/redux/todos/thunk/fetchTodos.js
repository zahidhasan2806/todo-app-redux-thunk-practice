import { loaded } from "../actions";

const fetchTodos = async (dispatch) => {
    const response = await fetch("https://think-in-redux-way-server.herokuapp.com/todos");
    const todos = await response.json();

    dispatch(loaded(todos));
};

export default fetchTodos;
