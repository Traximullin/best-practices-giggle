# Принцип единой ответственности (SRP)

> В исходном определении говорится, что «каждый класс должен иметь только одну обязанность», т. е. делать ровно одну вещь. Мы можем просто экстраполировать определение на «каждая функция/модуль/компонент должны делать ровно одну вещь», но чтобы понять, что означает «одна вещь», нам нужно исследовать наши компоненты с двух разных точек зрения — внутренней (имеется в виду, что компонент делает внутри) и снаружи (как этот компонент используется другими компонентами).

Начнем с осмотра изнутри. Чтобы наши компоненты выполняли одну внутреннюю функцию, мы можем:
* разбить большие компоненты, которые делают слишком много, на более мелкие компоненты
* выделять код, не связанный с функциональностью основного компонента, в отдельные служебные функции
* инкапсулировать подключенную функциональность в настраиваемые хуки

Было:
```javascript
const SolidS: FC = () => {
    const [ todos, setTodos ] = useState<Array<{
        title: string
        id?: number
        completed?: boolean
    }>>([])

    useEffect(() => {
        const loadTodos = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos")
            const data = await response.json()

            setTodos(data)
        }

        loadTodos()
    }, [])

    return (
        <ul>
            {
                todos.filter(todo => todo?.completed === true).map(todo => (
                    <li key={todo?.id}>
                        <p>{todo?.title}</p>
                    </li>
                ))
            }
        </ul>
    )

}

```
Стало: 
```javascript
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
```