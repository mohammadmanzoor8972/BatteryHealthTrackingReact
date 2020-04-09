import { Battery } from '../models/battery';

const calculateBattery=(battery:string, list:any)=>{

    let data:Battery[] = list[battery];
    let startPoint = data[0]
    let endPoint = data[data.length-1]
    let changes = (startPoint.batteryLevel - endPoint.batteryLevel)*100;
    return Math.abs(Math.floor(changes))
  }

  export default calculateBattery;
  