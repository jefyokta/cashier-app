import LinearGradient from "react-native-linear-gradient";
import { GradientContainer } from "../../../Components/Container";
import { TextInput, View } from "react-native";
import { Input } from "../../../Components/Input";
import { useNavigation } from "@react-navigation/native";

type starterProps = {
    merchant: string
};

export const Starter = ({ merchant }: starterProps) => {

    const route = useNavigation();
    if (!merchant) route.goBack()

    return (
        <GradientContainer>
            <View>
                <Input placeholder="Enter Your Name" />
            </View>
        </GradientContainer>
    )




}