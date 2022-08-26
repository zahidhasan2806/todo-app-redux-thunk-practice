import React from 'react';
import { useSelector } from 'react-redux';
import CompletedTodo from './CompletedTodo';

const CompletedTodos = () => {
    const todos = useSelector(state => state.todos);
    const allCompletedTodos = todos.filter(todo => todo.completed)
    return (
        <div div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {
                allCompletedTodos.map(completedTodo => <CompletedTodo completedTodo={completedTodo} key={completedTodo.id} />)
            }
        </div>
    );
};

export default CompletedTodos;