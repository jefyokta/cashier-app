import { ReactElement } from "react";
import { Container } from "../Container";
import LinearGradient from "react-native-linear-gradient";

type TemplateProps = {
    children: ReactElement;
    className?: string
}

export const Template = ({children, className}: TemplateProps): ReactElement => {
    return (<Container>
        <LinearGradient colors={['#0f172a', '#334155']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} className={`h-full w-full flex flex-col justify-center items-center ${className}`}>
            {children}
        </LinearGradient>
    </Container>)
}