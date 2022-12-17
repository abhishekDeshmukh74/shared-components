import { Button as AntButton } from 'antd';
import { func, oneOf, string, bool } from 'prop-types';

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  type: 'primary' | 'link';
  /**
  /**
   * Button contents
   */
  label: string;
  /**
   * 	Set the loading status of button
   */
  loading?: boolean;
  /**
   * Optional click handler to handle click event
   */
  onClick?: (event: MouseEvent) => void;
}

export enum ButtonType {
  primary = 'primary',
  link = 'link',
}

export default function Button({ type, label, loading, onClick }: ButtonProps) {
  return (
    <AntButton
      type={type}
      loading={loading}
      // onclick={onclick}
    >
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
