import React from 'react';
import db from '@/utils/db';
export default async function About() {
  const profile = await db.testProfile.create({
    data: {
      name: 'test',
      id: '1',
    },
  });
  const user = await db.testProfile.findMany();
  return <div className="min-h-screen flex-1">About page</div>;
}
