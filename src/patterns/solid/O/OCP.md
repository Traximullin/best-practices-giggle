# Принцип «открыто-закрыто» (OCP)

> OCP утверждает, что «программные объекты должны быть открыты для расширения, но закрыты для модификации». Поскольку наши компоненты и функции React являются программными сущностями, нам вообще не нужно изменять определение, и вместо этого мы можем взять его в исходной форме.
> Принцип открытости-закрытости выступает за структурирование наших компонентов таким образом, чтобы их можно было расширять без изменения исходного исходного кода. 
> Следуя принципу открытого-закрытого, мы можем уменьшить связь между компонентами и сделать их более расширяемыми и пригодными для повторного использования.

Было:
```javascript
const SolidO: FC = () => {
    const { pathname } = useLocation()

    return (
        <header>
            <Logo/>
            <Actions>
             {pathname === "/dashboard" && <Route path="/events/new" element={<div>Create event</div>}/>}
             {pathname === "/" && <Route path="/dashboard" element={<div>Go to dashboard</div>}/>}
            </Actions>
        </header>
    )
}

const HomePage = () => (
    <>
        <SolidO />
        <p>Home page</p>
    </>
)

const DashboardPage = () => (
    <>
        <SolidO />
        <p>Dashboard page</p>
    </>
)
```

Стало:
```javascript
const SolidO: FC<{
    children: ReactNode
}> = ({children}) => {
    const { pathname } = useLocation()

    return (
        <header>
            {/* <Logo/> */}
            {/* <Actions> */}
            {children}
            {/* </Actions> */}
        </header>
    )
}

const HomePage = () => (
    <>
        <SolidO>
            <Route path="/dashboard" element={<div>Go to dashboard</div>} />
        </SolidO>
        <p>Home page</p>
    </>
)

const DashboardPage = () => (
    <>
        <SolidO>
            <Route path="/events/new" element={<div>Create event</div>} />
        </SolidO>
        <p>Dashboard page</p>
    </>
)

export default SolidO

```

