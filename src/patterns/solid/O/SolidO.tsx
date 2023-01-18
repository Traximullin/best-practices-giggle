import { FC, ReactNode } from "react"
import { useLocation, Route } from "react-router-dom"

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
