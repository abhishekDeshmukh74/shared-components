import { render } from '@testing-library/react';
import Button, { ButtonType } from './Button.component';

test('components/Button', () => {
  render(<Button type={ButtonType.primary} label='Primary'/>);
});
