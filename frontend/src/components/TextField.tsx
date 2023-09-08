import { ReactNode, MouseEvent } from "react";

type TextFieldPropsType = {
    click?: (event: MouseEvent<HTMLDivElement>) => void,
    children: ReactNode
}

const TextField = ({ click, children }: TextFieldPropsType) => {
    return (
        <div 
            className={`p-4 border-solid border-2 border-customGrey rounded ${click ? "cursor-pointer" : ""}`}
            onClick={click}
        >
            {children}
        </div>
    )
}

export default TextField;
