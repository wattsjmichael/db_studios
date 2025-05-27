import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-center text-light py-3 mt-5">
      <p className="mb-0">© {new Date().getFullYear()} DadBod Studios. Built with caffeine and controller calluses.</p>
    </footer>
  );
}

export default Footer;
