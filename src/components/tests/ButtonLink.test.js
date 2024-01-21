import { render, screen } from '@testing-library/react';
import ButtonLink from '../ButtonLink';
import { BrowserRouter } from 'react-router-dom';

test('renders button link', () => {
      render(<BrowserRouter><ButtonLink 
        label="Button Link"
        class="button-link-class"
        link="https://youtube.com"
      /></BrowserRouter>);
      
      const linkElement = screen.getByText("Button Link");
      expect(linkElement).toBeInTheDocument();
      const classNamee = "button-link-class";
      expect(linkElement.classList.contains(classNamee));
});