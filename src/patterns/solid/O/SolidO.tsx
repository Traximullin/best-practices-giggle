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
        <Route path="/dashboard" element={<div>Go to dashboard</div>} />
        <p>Home page</p>
    </>
)

const DashboardPage = () => (
    <>
        <Route path="/events/new" element={<div>Create event</div>} />
        <p>Dashboard page</p>
    </>
)

// const SolidO: FC = () => {
//     const { pathname } = useLocation()

//     return (
//         <header>
//             <Logo/>
//             <Actions>
//              {pathname === "/dashboard" && <Route path="/events/new" element={<div>Create event</div>}/>}
//              {pathname === "/" && <Route path="/dashboard" element={<div>Go to dashboard</div>}/>}
//             </Actions>
//         </header>
//     )
// }

// const HomePage = () => (
//     <>
//         <SolidO />
//         <p>Home page</p>
//     </>
// )

// const DashboardPage = () => (
//     <>
//         <SolidO />
//         <p>Dashboard page</p>
//     </>
// )

export default SolidO