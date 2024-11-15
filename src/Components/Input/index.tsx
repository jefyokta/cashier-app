import { TextInput, TextInputProps } from "react-native";

type MyInputProps = TextInputProps & {
    className?: string,
    style?: string


}
export const Input = ({ className, style, ...props }: MyInputProps) => {

    return (<TextInput className={`rounded-lg  px-3 py-2 text-sm border bg-transparent border-cyan-700 text-slate-300 text-center shadow-sm ${className}`} style={style}  {...props} />)


}