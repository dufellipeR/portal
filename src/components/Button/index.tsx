import { FC } from 'react';
import { ButtonProps } from 'antd';

import { ButtonCustom } from './styles';

export const Button: FC<ButtonProps> = ({ ...rest }) => {
  return (
    <ButtonCustom {...rest} />
  )
}