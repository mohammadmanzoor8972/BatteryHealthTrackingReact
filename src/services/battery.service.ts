import { Academy } from '../models/academy';
import { batteries } from './battery.data';
import groupBy from '../utilities/groupBy';


export interface IBatteryService {
    getAcademy(): Promise<Academy[]>
}

export const batteryService: IBatteryService = {
    getAcademy(): Promise<Academy[]>{
        return new Promise((resolve) => {
            let data : Academy[] = [];
            let academyList:any = groupBy(batteries, 'academyId');
            Object.keys(academyList).forEach(keys => {
                data.push({
                    academyId : parseInt(keys),
                    devices: groupBy(academyList[keys], 'serialNumber')
                })
            });
          return resolve(data);
        });
    },
}