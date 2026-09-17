import { toggleTheme } from '../../utils/theme.js';

function Header() {
  return (
    <header>
      <h1>React + Vite Custom Boilerplate</h1>
      <nav aria-label="Main navigation">
        <ul>
          <li><a href="/" aria-current="page">Home</a></li>
          <li><a href="#section-1">Section 1</a></li>
          <li><a href="#section-2">Section 2</a></li>
          <li><a href="#section-3">Section 3</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <button type="button" aria-label="Toggle color theme" onClick={toggleTheme}>Change theme</button>

      <p>
        This is the text content of header. It contains information about various topics and provides insights into
        different subjects. The article is well-structured and easy to read, making it accessible to a wide audience.
      </p>
    </header>
  );
} 

export default Header;