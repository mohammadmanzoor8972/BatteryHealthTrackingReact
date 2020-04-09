import * as React from 'react'
import * as styles from './user-hobbies-list.scss'
import { Academy } from '../../models/academy'
import { Battery } from '../../models/battery';
import calculateBattery from '../../utilities/batteryLevel';

export interface AcademyDeviceListProps {
  academys: Academy
  batteries: Battery[]
}

interface NoBattriesPlaceholderProps {
  academys: Academy
}

const NoBattriesPlaceholder = ({academys}: NoBattriesPlaceholderProps) =>
  <span>{`Press add button to add hobby!`}</span>



export const AcademyDeviceList = ({academys, batteries}: AcademyDeviceListProps) => {
  


  return (<div className={styles.container}>
    {
      batteries && Object.keys(batteries).map(batery => (
        <div key={`${batery}`} className={styles.item}>
          {batery} 
          <span> {calculateBattery(batery, batteries)}%</span>
          {calculateBattery(batery, batteries) >30 ? <span style={{color:'red'}}>Change</span> : null}
     
        </div>
      ))
    }
  </div>)
}


