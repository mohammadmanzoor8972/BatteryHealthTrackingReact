import * as React from 'react'
import * as classnames from 'classnames'
import * as styles from './academy-devices.scss'
import { AcademyDeviceList } from '../academy-device-list'
import { Academy } from '../../models/academy'
import { Battery } from '../../models/battery';

export interface AcademyDeviceProps {
  academys: Academy
  battries: Battery[]
}




export class AcademyDevice extends React.Component<AcademyDeviceProps> {


public render(){
  const {academys, battries } = this.props;


  if (!academys) {
    return (
      <div className={classnames(styles.container, styles.containerEmpty)}>
          <span>Select a academy from the academy list...</span>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        Device List
      </div>
      <AcademyDeviceList
        academys={academys}
        batteries={battries}
      />
    </div>
  );
}
} 
