'use client';

import { FC, useEffect, useState } from 'react';

import { User } from '@/types/db';
import FriendRequest from '@/components/FriendRequest';
import { pusherClient } from '@/lib/pusher';
import { toPusherKey } from '@/lib/utils';

interface IFriendRequestsProps {
  incommingFriendRequests: User[];
  sessionId: string;
}

const FriendRequests: FC<IFriendRequestsProps> = ({
  incommingFriendRequests,
  sessionId,
}) => {
  const [friendRequests, setFriendRequests] = useState<User[]>(
    incommingFriendRequests
  );

  useEffect(() => {
    pusherClient.subscribe(
      toPusherKey(`user:${sessionId}:incoming_friend_requests`)
    );

    const friendRequestHandler = (incomingFriendRequest: User) => {
      console.log({ incomingFriendRequest });
      setFriendRequests(prev => [...prev, incomingFriendRequest]);
    };

    pusherClient.bind('incoming_friend_requests', friendRequestHandler);

    return () => {
      pusherClient.unsubscribe(
        toPusherKey(`user:${sessionId}:incoming_friend_requests`)
      );
      pusherClient.unbind('incoming_friend_requests', friendRequestHandler);
    };
  }, [sessionId]);

  return (
    <>
      {friendRequests.length === 0 ? (
        <p className="text-sm text-zinc-500">Nothing to show here...</p>
      ) : (
        friendRequests.map(friend => {
          return (
            <FriendRequest
              key={friend.id}
              friend={friend}
              setFriendRequests={setFriendRequests}
            />
          );
        })
      )}
    </>
  );
};

export default FriendRequests;
