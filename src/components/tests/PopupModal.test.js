import { render, screen } from '@testing-library/react';
import PopupModal from '../PopupModal';
import userEvent from '@testing-library/user-event';

test('renders popup modal', () => {
      render(<PopupModal
        header='Popup Modal Header'
        content={<div className="popup-modal"><p>text</p></div>}
        darkMode={true}
      />);
      
      const linkElement = screen.getByText("Open Popup Modal");
      expect(linkElement).toBeInTheDocument();
      const classNamee = "button-link-class";
      expect(linkElement.classList.contains(classNamee));
      userEvent.click(linkElement);
      const modalElement = screen.getByText("Popup Modal Header");
      expect(modalElement).toBeVisible();
      const closeElement = screen.getByTestId("close-button");
      userEvent.click(closeElement);
      expect(modalElement).not.toBeVisible();
});

