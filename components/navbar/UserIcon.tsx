import React from 'react';
import { currentUser, auth } from '@clerk/nextjs/server';
import { LuUser2 } from 'react-icons/lu';
async function UserIcon() {
  const user = await currentUser();
  const { userId } = auth();
  const profileImage = user?.imageUrl;
  if (profileImage) {
    return (
      <img
        src={profileImage}
        alt=""
        className="w-6 h-6 rounded-full object-cover object-center"
      />
    );
  }
  return <LuUser2 className="w-6 h-6 bg-primary rounded-full text-white" />;
}

export default UserIcon;
