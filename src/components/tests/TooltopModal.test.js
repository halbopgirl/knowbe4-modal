import { render, screen } from '@testing-library/react';
import ToolTipModal from '../ToolTipModal';
import userEvent from '@testing-library/user-event';

test('renders tooltip modal', () => {
      const tooltip = render(<ToolTipModal
        header='Tooltip Modal Header'
        content={<div className="tooltip-modal"><p>text</p></div>}
        darkMode={false}
      />);
      
      const linkElement = screen.getByText("Tooltip Modal");
      expect(linkElement).toBeInTheDocument();
      userEvent.hover(linkElement);
      const modalElement = screen.getByText("Tooltip Modal Header");
      expect(modalElement).toBeVisible();
      userEvent.unhover(linkElement);
      expect(modalElement).not.toBeVisible();
});