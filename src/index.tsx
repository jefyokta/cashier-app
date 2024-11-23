import React, { ReactElement, useEffect } from "react"
import { View, Text } from "react-native"
import { Container } from "./Components/Container";
import LinearGradient from "react-native-linear-gradient";
import { Barcode } from "./Components/Barcode";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NavigationProp } from "../App";


export const Splash: React.FC = (): ReactElement => {

    const navigation = useNavigation<NavigationProp<"welcome">>();
    useEffect(() => {
        const timer =
            setTimeout(() => {
                navigation.navigate("welcome")
            }, 200)


        return () => clearTimeout(timer)
    }, [navigation])

    return (
        <Container className="flex justify center">
            <LinearGradient colors={['#0f172a', '#334155']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} className="h-full w-full flex flex-col justify-center items-center">
                <Text className="text-4xl font-semibold">EvCashier</Text>
                <Text className="italic text-xs font-cursive">a cashier app from oktaax</Text>
            </LinearGradient>
        </Container>
    )

}

export default Splash