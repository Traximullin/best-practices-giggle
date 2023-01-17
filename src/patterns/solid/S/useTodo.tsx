import { useEffect, useState } from 'react';
import { TodoI } from './todoI';

/*

    Хук занимается только одним — получением данных из API.
    Это также сделало наш основной компонент более читабельным не только потому,
    что он стал короче, но и потому, что мы заменили структурные хуки, необходимые 
    для расшифровки назначения, на доменный хук, назначение которого сразу видно из названия.

*/

const useTodo = () => {
    
    const [ todos, setTodos ] = useState<Array<TodoI>>([])

    useEffect(() => {
        const loadTodos = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos")
            const data = await response.json()

            setTodos(data)
        }

        loadTodos()
    }, [])

    return { todos }
}

export default useTodo