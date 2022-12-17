import { Button as AntButton } from 'antd';
import { MouseEvent } from 'react';
import { func, oneOf, string, bool } from 'prop-types';

export interface ButtonProps {
  type: 'primary' | 'link';
  label: string;
  loading?: boolean;
  disabled?: boolean;
  onClick?: (e: MouseEvent<HTMLInputElement>) => void;
}

export enum ButtonType {
  primary = 'primary',
  link = 'link',
}

export default function Button({
  type,
  label,
  loading = false,
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <AntButton type={type} loading={loading} onClick={onClick} disabled={disabled}>
      {label}
    </AntButton>
  );
}

Button.propTypes = {
  type: oneOf<ButtonType>([ButtonType.primary, ButtonType.link]).isRequired,
  label: string.isRequired,
  loading: bool,
  onClick: func,
};
