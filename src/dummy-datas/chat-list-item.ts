import type { ChatListType } from '@/types/chatlist-item';

export async function fetchChatList(): Promise<ChatListType> {
  return {
    inbox: [
      {
        id: 1,
        type: 'group',
        participants: ['You', 'Cameron Phillips'],
        profileIcon: 'user',
        subject: '109220-Naturalization',
        timestamp: new Date('2021-06-09T19:32:00Z'),
        snippet: 'Please check this out!',
        unread: true,
        lastMessage: {
          sender: 'Cameron Phillips',
          message: 'Please check this out!',
        },
      },
      {
        id: 2,
        type: 'group',
        groupName: 'Jeannette Moraima Guaman Chamba (Hutto I-589) [ Hutto Follow Up - Brief Service ]',
        profileIcon: 'group',
        subject: 'Jeannette Moraima Guaman Chamba (Hutto I-589) [ Hutto Follow Up - Brief Service ]',
        timestamp: new Date('2021-06-09T19:32:00Z'),
        snippet: 'Ellen:\nHey, please read.',
        unread: false,
        lastMessage: {
          sender: 'Ellen',
          message: 'Hey, please read.',
        },
        participants: ['You', 'Ellen', 'John', 'Sarah'],
      },
      {
        id: 3,
        type: 'group',
        participants: ['You', 'Cameron Phillips'],
        profileIcon: 'user',
        subject: '8405-Diana SALAZAR MUNGUA',
        timestamp: new Date('2021-06-09T19:32:00Z'),
        snippet: "I understand your initial concerns and that's very valid, Elizabeth. But you ...",
        unread: false,
        lastMessage: {
          sender: 'Cameron Phillips',
          message: "I understand your initial concerns and that's very valid, Elizabeth. But you ...",
        },
      },
      {
        id: 4,
        type: 'personal',
        participants: ['You', 'FastVisa Support'],
        profileIcon: 'support',
        subject: 'FastVisa Support',
        timestamp: new Date('2021-06-09T19:32:00Z'),
        snippet: 'Hey there! Welcome to your inbox.',
        unread: false,
        lastMessage: {
          sender: 'FastVisa Support',
          message: 'Hey there! Welcome to your inbox.',
        },
      },
    ],
  };
}
