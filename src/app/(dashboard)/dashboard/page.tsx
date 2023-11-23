import { getServerSession } from 'next-auth';

import Test from '@/components/Test';
import { authOptions } from '@/lib/auth';

const page = async ({}) => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div>
      <Test />
    </div>
  );
};

export default page;
