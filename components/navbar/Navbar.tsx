import Container from '../global/Container';
import Logo from './Logo';
import Navsearch from './Navsearch';
import Cartbutton from './Cartbutton';

import LinksDropdown from './LinksDropdown';
import ModeToggle from './Darkmode';

// function Navbar() {
//   return (
//     <nav className="border-b">
//       <Container className="flex flex-col sm:flex-row sm:justify-between py-8">
//         <Logo />
//         <Navsearch />
//         <div className="flex gap-4 items-center">
//           <Cartbutton/>
//           <ModeToggle />
//           <LinksDropdown />
//         </div>
//       </Container>
//     </nav>
//   );
// }

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from '@nextui-org/react';

function Nav() {
  return (
    <Navbar isBordered maxWidth="2xl">
      <NavbarContent justify="start">
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="center">
        <Navsearch />
      </NavbarContent>

      <NavbarContent as="div" className=" items-center" justify="end">
        <div className="hidden lg:flex gap-x-2 items-center">
          <Cartbutton />
          <ModeToggle />
        </div>
        <LinksDropdown />
      </NavbarContent>
    </Navbar>
  );
}
export default Nav;
