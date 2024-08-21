import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Container from '@/components/Container'; // Asegúrate de ajustar la ruta de importación según sea necesario

describe('Component: Container', () => {
  it('should render children content', () => {
    const testContent = <div data-testid="test-content">Test Content</div>;
    render(<Container>{testContent}</Container>);
    const contentElement = screen.getByTestId('test-content');
    expect(contentElement).toBeInTheDocument();
  });
});
