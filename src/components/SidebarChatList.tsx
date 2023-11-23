'use client';

import { FC, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { IMessage, User } from '@/types/db';
import SidebarChatItem from '@/components/SidebarChatItem';
import { pusherClient } from '@/lib/pusher';
import { toPusherKey } from '@/lib/utils';

interface ISidebarChatListProps {
  listData: User[];
  userId: string;
}

const SidebarChatList: FC<ISidebarChatListProps> = ({
  listData = [],
  userId,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const [unseenMessages, setUnseenMessages] = useState<IMessage[]>([]);
  const [friendsList, setFriendsList] = useState<User[]>(listData);

  useEffect(() => {
    if (pathname?.includes('chat')) {
      setUnseenMessages(prev => {
        return prev.filter(msg => !pathname.includes(msg.senderId));
      });
    }
  }, [pathname]);

  useEffect(() => {
    pusherClient.subscribe(toPusherKey(`user:${userId}:friends_list`));

    const updateFriendsListHandler = (friends: User[]) => {
      setFriendsList(friends);
      console.log(friends);
      // console.log('update list');
    };

    pusherClient.bind('get_friends_list', updateFriendsListHandler);

    return () => {
      pusherClient.unsubscribe(toPusherKey(`user:${userId}:friends_list`));
      pusherClient.unbind('get_friends_list', updateFriendsListHandler);
    };
  }, [userId]);

  return (
    <ul role="list" className="max-h-[25rem] overflow-y-auto -mx-2 space-y-1">
      {friendsList.map(item => {
        return (
          <SidebarChatItem
            friend={item}
            key={item.id}
            unseenMessages={unseenMessages}
            userId={userId}
          />
        );
      })}
    </ul>
  );
};

export default SidebarChatList;
