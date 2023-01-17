
import { useMemo } from 'react';
import { TodoI } from './todoI';
import useTodo from './useTodo';

const getOnlyActive = (todos: Array<TodoI>): TodoI[]  => {
    return todos.filter(todo => todo?.completed === true)
}

const useActiveTodo = () => {

    const { todos } = useTodo()

    const activeTodos = useMemo(() => {
        return getOnlyActive(todos)
    }, [todos])

    return {
        activeTodos
    }
}

export default useActiveTodo