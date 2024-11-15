import React, { ReactElement } from "react";
import { TouchableOpacity, Text } from "react-native";
import { styled } from "nativewind";

type Mybtn = {
    onPress?: () => void,
    text: string,
    btnColor?: 'primary' | 'success' | 'dark',
    className?: string | undefined
};

const Button = styled(TouchableOpacity);
const ButtonText = styled(Text);

export const CustomButton = (props: Mybtn): ReactElement => {
    const { onPress, text, btnColor, className } = props;

    let colorClass;
    let textColor: string;
    switch (btnColor) {
        case 'primary':
            colorClass = 'bg-cyan-500';
            textColor = 'text-white'

            break;
        case 'success':
            colorClass = 'bg-green-500';
            textColor = 'text-white'

            break;
        case 'dark':
            colorClass = 'bg-slate-800';
            textColor = 'text-white'
            break;
        default:
            colorClass = 'bg-slate-100';
            textColor = 'text-white'

            break;
    }

    return (
        <Button onPress={onPress} className={`px-3 py-1 rounded-lg ${colorClass} ${className}`}>
            <Text className={`${textColor}`}>{text}</Text>
        </Button>
    );
};
