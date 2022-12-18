import { screen, render, getByRole, fireEvent } from '@testing-library/react';
import Button, { ButtonType } from './Button.component';

describe('render primary button', () => {
  const label = 'primary button';

  it('render button', async () => {
    render(<Button type={ButtonType.primary} label={label} />);
    const button = await screen.findByRole('button', { name: label });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('ant-btn');
    expect(button).toHaveClass('ant-btn-primary');
  });
  it('disable button', async () => {
    render(<Button type={ButtonType.primary} label={label} disabled={true} />);
    const disabledButton = await screen.findByRole('button', { name: label });
    expect(disabledButton).toBeDisabled();
  });

  it('click button', async () => {
    const onClick = jest.fn();
    render(<Button type={ButtonType.primary} label={label} onClick={onClick} />);
    const button = await screen.findByRole('button', { name: label });
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

describe('render link button', () => {
  const label = 'link button';

  it('render button', async () => {
    render(<Button type={ButtonType.link} label={label} />);
    const button = await screen.findByRole('button', { name: label });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('ant-btn');
    expect(button).toHaveClass('ant-btn-link');
  });
  it('disable button', async () => {
    render(<Button type={ButtonType.link} label={label} disabled={true} />);
    const disabledButton = await screen.findByRole('button', { name: label });
    expect(disabledButton).toBeDisabled();
  });

  it('click button', async () => {
    const onClick = jest.fn();
    render(<Button type={ButtonType.link} label={label} onClick={onClick} />);
    const button = await screen.findByRole('button', { name: label });
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
