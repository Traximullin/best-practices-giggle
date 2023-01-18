import { FC } from "react"
import styled from "styled-components"

const Button = () => {
    return (
        <Button />
    )
}

const StyledButton = styled(Button)`
    border: 1px solid black;
    border-radius: 5px;
`

const SolidL: FC = () => <StyledButton />

export default SolidL