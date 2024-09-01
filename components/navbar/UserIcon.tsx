import React from 'react';
import { currentUser, auth } from '@clerk/nextjs/server';
import { LuUser2 } from 'react-icons/lu';
import Image from 'next/image';
async function UserIcon() {
  const user = await currentUser();
  const { userId } = auth();
  const profileImage = user?.imageUrl;
  if (profileImage) {
    return (
      <Image
        src={profileImage}
        alt="user image"
        width={24}
        height={24}
        className="w-6 h-6 rounded-full object-cover object-center"
      />
    );
  }
  return <LuUser2 className="w-6 h-6 bg-primary rounded-full text-white" />;
}

export default UserIcon;
