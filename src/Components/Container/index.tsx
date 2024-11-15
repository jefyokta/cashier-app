import { ReactElement } from "react"
import { SafeAreaView } from "react-native"
import LinearGradient from "react-native-linear-gradient"

type ContainerProps = {
    children: ReactElement,
    className?: string | undefined
}
export const Container = ({ children, className }: ContainerProps) => {

    return (
        <SafeAreaView className={`flex-1 ${className}`}>
            {children}
        </SafeAreaView>
    )
}


export const GradientContainer = ({ children, className }: ContainerProps) => {
    return (
        <LinearGradient colors={['#020617', '#334155']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1.8 }} className='h-full w-full flex items-center justify-between flex-col'>
            <Container className={className}>
                {children}
            </Container>
        </LinearGradient>
    )
}