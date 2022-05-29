import { FC } from 'react';
import { ButtonProps } from 'antd';

import { ButtonCustom } from './styles';

export const Button: FC<ButtonProps> = ({ children, ...rest  }) => {
  return (
    <ButtonCustom {...rest}>
      {children}
    </ButtonCustom>
  )
}
