import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-center text-light py-3 mt-5">
      <p className="mb-0">© {new Date().getFullYear()} DadBod Studios. Built with caffeine and controller calluses.</p>
            <a 
        href="https://www.instagram.com/dadbod_studios" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="btn btn-primary btn-lg mt-4"
      >
        Follow Our Journey
      </a>
    </footer>
  );
}

export default Footer;
