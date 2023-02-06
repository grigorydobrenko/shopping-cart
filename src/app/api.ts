import {collection, getDocs} from "firebase/firestore";
import {db} from "../common/firebase/config";


export const devicesAPI = {
    async getDevices(device: DevicesType) {
        const colRef = collection(db, device)

        const devices = await getDocs(colRef)
            .then((snapshot) => {
                let devices: any = []

                snapshot.docs.forEach(doc => {
                    devices.push({...doc.data()})
                })
                console.log(devices)
                return devices
            })
            .catch(err => {
                console.log(err.message)
            })
        return devices
    }
}

export type DevicesType = 'flanges' | 'valves' | 'radiators'
export type DeviceItem = {
    id: string
    manufacturer: string,
    cost: number,
    name: string
}