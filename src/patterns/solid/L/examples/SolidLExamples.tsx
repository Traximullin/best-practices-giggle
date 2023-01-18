import { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement>

const Input = (props: Props) => <input /> // суперкомпонент

const CharCountInput = (props: Props) => { // компонент
    return (
        <div>
            <Input {...props}/>
            {/* @ts-ignore */}
            <span>Char cound: {props.value.length}</span>
        </div>
    )
}