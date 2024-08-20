import React from 'react';
import Container from '../global/Container';
import Logo from './Logo';
import Navsearch from './Navsearch';
import Cartbutton from './Cartbutton';

import LinksDropdown from './LinksDropdown';
import ModeToggle from './Darkmode';

function Navbar() {
  return (
    <nav className="border-b">
      <Container className="flex flex-col sm:flex-row sm:justify-between py-8">
        <Logo />
        <Navsearch />
        <div className="flex gap-4 items-center">
          <Cartbutton/>
          <ModeToggle />
          <LinksDropdown />
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
