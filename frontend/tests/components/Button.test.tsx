import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Button from '@/components/Button';

describe('Component: Button', () => {
  it('should render button with given text', () => {
    const buttonText = 'Click me';
    render(<Button text={buttonText} />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent(buttonText);
  });

  it('should pass additional props to the button element', () => {
    const buttonText = 'Submit';
    const onClickHandler = jest.fn();
    render(<Button text={buttonText} onClick={onClickHandler} />);
    const buttonElement = screen.getByRole('button');
    buttonElement.click();

    expect(onClickHandler).toHaveBeenCalledTimes(1);
  });
});
