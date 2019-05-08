import * as React from 'react';
import * as styles from '../style.css';
import classNames from 'classnames';

import { IFieldProps } from './BaseField';

import { IErrors } from '..';
import IconClock from '../../../helpers/IconClock';

export type RadioButton = {
  id: string;
  label: string;
};

export type RadioButtonList<Type> = {
  [key: number]: Type;
  map(param: (params: { id: string; label: string }) => any): React.ReactNode;
};

interface IRadio extends IFieldProps {
  isChecked: boolean;
  selectIcon?(id: string, isActive: boolean): any;
}

export const BlockRadio: React.SFC<IRadio> = ({
  id,
  label,
  value,
  onChange,
  onBlur,
  fieldStyle,
  isChecked,
  selectIcon
}) => {
  return (
    <label
      className={classNames(
        styles.notificationRadioContainer,
        { [`${styles.checked}`]: isChecked },
        fieldStyle
      )}
    >
      <input
        id={id}
        type="radio"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        checked={isChecked}
      />

      {selectIcon && selectIcon(id, isChecked)}

      {label && <span>{label}</span>}
      {/* TODO - display validation error */}
    </label>
  );
};
