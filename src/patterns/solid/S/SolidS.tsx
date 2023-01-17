import { FC } from "react"
import TodoItem from "./TodoItem"
import useActiveTodo from './useActiveTodo';

const SolidS: FC = () => {
    const { activeTodos } = useActiveTodo()    
    
    return (
        <ul>
            {
                activeTodos.map(todo => (
                    <TodoItem 
                        key={todo?.id}
                        todo={todo}
                    />
                ))
            }
        </ul>
    )

}

export default SolidS