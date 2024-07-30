'use client';

import Link from 'next/link';
import { useToast } from '../ui/use-toast';
import { SignOutButton } from '@clerk/nextjs';

function SignOutlink() {
  const { toast } = useToast();
  const handleLogout = () => {
    toast({ description: 'Logout successfull' });
  };
  return (
    <SignOutButton>
      <Link href={'/'} className="w-full text-left" onClick={handleLogout}>
        Logout
      </Link>
    </SignOutButton>
  );
}

export default SignOutlink;
