'use client';

import { FC } from 'react';
import { useSession } from 'next-auth/react';

interface ITestProps {}

const Test: FC<ITestProps> = ({}) => {
  const session = useSession();

  // console.log(session);
  return <div>Test</div>;
};

export default Test;
