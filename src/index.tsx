import React, { ReactElement } from "react"
import { View, Text } from "react-native"
import { Barcode } from "./Components/Barcode";
import { Container } from "./Components/Container";
import LinearGradient from "react-native-linear-gradient";


export const Splash: React.FC = (): ReactElement => {

    return (
        <Container className="flex justify center">
            <LinearGradient colors={['#0f172a', '#334155']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} className="h-full w-full flex flex-col justify-center items-center">
                <Text>Ini Splash</Text>
            </LinearGradient>
        </Container>
    )

}

