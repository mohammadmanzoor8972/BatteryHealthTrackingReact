import * as React from 'react'
import * as styles from './academy.scss'
import { AcademyList } from '../academy-list';
import { Academy } from '../../models/academy';

export interface AcademysProps {
  academys: Academy[]
  selectedAcademyId: string
  loadAcademys(): void
  selectAcademy(id: string): void
}

export const Academys = ({
  academys,
  loadAcademys,
  selectAcademy,
  selectedAcademyId,
}: AcademysProps) => {

  React.useEffect(() => {
    loadAcademys()
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        Academy List
      </div>
      <AcademyList
        academy={academys}
        selectedAcademyId={selectedAcademyId}
        selectAcademy={selectAcademy}
      />
    </div>
  )
}