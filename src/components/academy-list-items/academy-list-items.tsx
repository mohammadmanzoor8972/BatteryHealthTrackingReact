import * as React from 'react';
import * as styles from './academy-list-items.scss';
import classnames from 'classnames';
import { Academy } from '../../models/academy';

interface academyListItemProps {
  academy:Academy,
  isSelected:boolean,
  selectAcademy(id:number):void
}

export const AcademyListItem = ({academy, isSelected, selectAcademy}: academyListItemProps) => (
  <div
    className={classnames({
      [styles.container]: true,
      [styles.selected]: isSelected
    })}
    onClick={() => selectAcademy(academy.academyId)}
  >
   <span> {academy.academyId}</span> &nbsp;&nbsp;<span>({Object.keys(academy.devices).length})</span>
  </div>
)
