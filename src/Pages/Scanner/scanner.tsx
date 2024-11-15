import { ReactElement, useEffect, useState } from "react"
import { Linking, View } from "react-native";
import { Camera, CameraDevice, CodeScanner, getCameraDevice, useCameraDevice, useCodeScanner } from "react-native-vision-camera";
import BarcodeMask from "react-native-barcode-mask";



export const QrcodeScanner = (): ReactElement => {
    const [res, setres] = useState();
    const onsuccess = (e: any) => setres(e.data)
    return (<View>

    </View>)
}


export const BarcodeScanner = (): ReactElement => {
    const devices = Camera.getAvailableCameraDevices()
    const device = getCameraDevice(devices, 'back')
    const [barcodes, setBarcodes] = useState<any[]>([])
    const onsuccess = (e: any) => setBarcodes([...barcodes, e.data])

    if (device == null) return (<View></View>)

    const scanner = useCodeScanner({ codeTypes: ['ean-13'], onCodeScanned: onsuccess })
    return (

        <Camera codeScanner={scanner} device={device} isActive>
            <BarcodeMask />
        </Camera>
    )

}