import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { LuAlignLeft } from 'react-icons/lu';
import Link from 'next/link';
import { Button } from '../ui/button';
// import { links } from '@/utils/links';
import UserIcon from './UserIcon';
import { SignInButton, SignedIn, SignedOut, SignUpButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import SignOutlink from './SignOutlink';
import { links } from '@/utils/links';

function LinksDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'outline'} className="flex gap-4 max-w-[100px]">
          <LuAlignLeft className="w-6 h-6" />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="start" sideOffset={2}>
        <SignedOut>
          <DropdownMenuItem>
            <SignInButton mode="modal">
              <button className="w-full text-left">Login</button>
            </SignInButton>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignUpButton mode="modal">
              <button className="w-full text-left">Register</button>
            </SignUpButton>
          </DropdownMenuItem>
        </SignedOut>

        <SignedIn>
          {links.map((link, index) => {
            return (
              <DropdownMenuItem key={index}>
                <Link
                  href={link.href}
                  className="capitalize w-full dark:text-muted-foreground"
                >
                  {link.label}
                </Link>
              </DropdownMenuItem>
            );
          })}
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignOutlink />
          </DropdownMenuItem>
        </SignedIn>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LinksDropdown;
