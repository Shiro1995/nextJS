'use client';

import { FC, useEffect, useState } from 'react';
import Link from 'next/link';

import FriendRequestsSidebarOptions from '@/components/FriendRequestsSidebarOptions';
import { Icon, Icons } from '@/components/Icons';
import { pusherClient } from '@/lib/pusher';
import { toPusherKey } from '@/lib/utils';

type TSidebarOptions = {
  id: number;
  name: string;
  href: string;
  icon: Icon;
};

const sidebarOptions: TSidebarOptions[] = [
  {
    id: 1,
    name: 'Add Friend',
    href: '/dashboard/add',
    icon: 'UserPlus',
  },
];

interface ISidebarOptionsProps {
  sessionId: string;
  initialUnseenRequestCount: number;
}

const SidebarOptions: FC<ISidebarOptionsProps> = ({
  sessionId,
  initialUnseenRequestCount,
}) => {
  const [unseenRequestCount, setUnseenRequestCount] = useState(
    initialUnseenRequestCount
  );

  useEffect(() => {
    pusherClient.subscribe(
      toPusherKey(`user:${sessionId}:incoming_friend_requests`)
    );
    pusherClient.subscribe(
      toPusherKey(`user:${sessionId}:incoming_count_requests`)
    );
    pusherClient.subscribe(toPusherKey(`user:${sessionId}:friends`));

    const friendRequestHandler = (counts: number) => {
      console.log({ counts });
      setUnseenRequestCount(counts);
    };

    const addFriendHandler = () => {
      setUnseenRequestCount(prev => prev - 1);
    };

    pusherClient.bind('incoming_count_requests', friendRequestHandler);
    pusherClient.bind('friends', addFriendHandler);

    return () => {
      pusherClient.unsubscribe(
        toPusherKey(`user:${sessionId}:incoming_friend_requests`)
      );
      pusherClient.unsubscribe(toPusherKey(`user:${sessionId}:friends`));
      pusherClient.unbind('incoming_friend_requests', friendRequestHandler);
      pusherClient.unbind('friends', addFriendHandler);
    };
  }, [sessionId]);

  return (
    <ul role="list" className="mt-2 -mx-2 space-y-1">
      {sidebarOptions.map(option => {
        const Icon = Icons[option.icon];
        return (
          <li key={option.id}>
            <Link
              href={option.href}
              className="flex gap-3 p-2 text-sm font-semibold leading-6 text-gray-700 transition-all rounded-md hover:text-indigo-600 hover:bg-gray-50 group"
            >
              <span className="text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600 border flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-[0.625rem] font-medium bg-white transition-all">
                <Icon className="w-4 h-4" />
              </span>
              <span className="truncate">{option.name}</span>
            </Link>
          </li>
        );
      })}

      <li>
        <FriendRequestsSidebarOptions unseenRequestCount={unseenRequestCount} />
      </li>
    </ul>
  );
};

export default SidebarOptions;
