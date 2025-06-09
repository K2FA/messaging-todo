import type { ConversationType } from '@/types/chatlist-item';

export async function fetchConversation(): Promise<{ [key: number]: ConversationType }> {
  return {
    1: {
      id: 1,
      title: '109220-Naturalization',
      participants: ['You', 'Cameron Phillips'],
      messages: [
        {
          id: 1,
          sender: 'Cameron Phillips',
          message: 'Hello, I need your help with the naturalization application.',
          timestamp: new Date('2021-06-09T19:32:00Z'),
        },
        {
          id: 2,
          sender: 'You',
          message: 'Sure, let me know how I can assist.',
          timestamp: new Date('2021-06-09T19:35:00Z'),
        },
      ],
    },
    2: {
      id: 2,
      title: 'Jeannette Moraima Guaman Chamba (Hutto I-589) [ Hutto Follow Up - Brief Service ]',
      participants: ['You', 'Ellen', 'John', 'Sarah'],
      messages: [
        {
          id: 1,
          sender: 'Ellen',
          message: 'Hey, please read.',
          timestamp: new Date('2021-06-09T19:32:00Z'),
        },
        {
          id: 2,
          sender: 'John',
          message: 'Got it, thanks!',
          timestamp: new Date('2021-06-09T19:34:00Z'),
        },
      ],
    },
    3: {
      id: 3,
      title: '8405-Diana SALAZAR MUNGUA',
      participants: ['You', 'Cameron Phillips'],
      messages: [
        {
          id: 1,
          sender: 'Cameron Phillips',
          message: "I understand your initial concerns and that's very valid, Elizabeth.",
          timestamp: new Date('2021-06-09T19:32:00Z'),
        },
        {
          id: 2,
          sender: 'You',
          message: 'Thank you for clarifying.',
          timestamp: new Date('2021-06-09T19:35:00Z'),
        },
      ],
    },
    4: {
      id: 4,
      title: 'FastVisa Support',
      participants: ['You', 'FastVisa Support'],
      messages: [
        {
          id: 1,
          sender: 'FastVisa Support',
          message: 'Hey there! Welcome to your inbox.',
          timestamp: new Date('2021-06-09T19:32:00Z'),
        },
        {
          id: 2,
          sender: 'You',
          message: 'Thanks!',
          timestamp: new Date('2021-06-09T19:35:00Z'),
        },
      ],
    },
  };
}
