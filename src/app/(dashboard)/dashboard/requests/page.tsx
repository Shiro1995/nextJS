import { notFound } from 'next/navigation';
import { getServerSession } from 'next-auth';

import { User } from '@/types/db';
import FriendRequests from '@/components/FriendRequests';
import { authOptions } from '@/lib/auth';
import { fetchRedis } from '@/helpers/redis';

const page = async ({}) => {
  const session = await getServerSession(authOptions);

  if (!session) notFound();

  const incommingSenderIds = (await fetchRedis(
    'smembers',
    `user:${session.user.id}:incoming_friend_request`
  )) as string[];

  const incommingFriendRequests = await Promise.all(
    incommingSenderIds.map(id => {
      return fetchRedis('get', `user:${id}`) as Promise<string>;
    })
  );

  const incommingFriendRequestsParse = incommingFriendRequests.map(
    item => JSON.parse(item) as User
  );

  console.log('render');

  return (
    <main className="pt-8">
      <h1 className="mb-8 text-5xl font-bold">Add a friend</h1>
      <div className="flex flex-col gap-4">
        <FriendRequests
          incommingFriendRequests={incommingFriendRequestsParse}
          sessionId={session.user.id}
        />
      </div>
    </main>
  );
};

export default page;
