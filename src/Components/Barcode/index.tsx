import React, { useState, useEffect } from "react";
import { View, Image, Text, Dimensions } from "react-native";
import { RenderOptions, toDataURL } from "@bwip-js/react-native";


interface BarcodeProps {
    options: RenderOptions;
}

export const Barcode: React.FC<BarcodeProps> = ({ options }) => {
    const [barcodeUri, setBarcodeUri] = useState<string | null>(null);
    const device = Dimensions.get('screen').width
    useEffect(() => {
        const generateBarcode = async () => {
            try {
                const { uri } = await toDataURL(options);
                setBarcodeUri(uri);
            } catch (e) {
                console.error("Error generating barcode:", e);
            }
        };
        console.log(device)
        generateBarcode();
    }, [options]);

    if (!barcodeUri) {
        return <View><Text>Loading...</Text></View>;
    }

    return (
        <View className="w-full h-24 text-slate-100">
            <Image source={{ uri: barcodeUri }} style={{ width: device - 20, height: device / 4 }} />
        </View>
    );
};
