import * as React from 'react'
import * as classnames from 'classnames'
import * as styles from './academy-list.scss'
import { AcademyListItem } from '../academy-list-items';
import { Academy } from '../../models/academy';

export const AcademyList = ({
  academy,
  selectedAcademyId,
  selectAcademy,
}: any) => {
  if (academy.length==0) {
    return (
      <div className={classnames(styles.container, styles.containerLoading)}>
        <span>loading academy...</span>
      </div>
    )
  }
  return (
    <div className={styles.container}>
      {
        academy.map((academy: Academy) => 
          <AcademyListItem
            key={`${academy.academyId}`}
            academy={academy}
            isSelected={academy.academyId === selectedAcademyId}
            selectAcademy={selectAcademy}
          />
        )
      }
    </div>
  )
}
