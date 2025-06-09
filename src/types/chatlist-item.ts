interface LastMessage {
  sender: string;
  message: string;
}

export type ChatListItemsType = {
  id: number;
  type: 'personal' | 'group' | 'support';
  participants: string[];
  profileIcon: 'user' | 'group' | 'support';
  subject?: string;
  groupName?: string;
  timestamp: Date;
  snippet: string;
  unread: boolean;
  lastMessage: LastMessage;
};

export type ChatListType = {
  inbox: ChatListItemsType[];
};

export type ChatListItemsProps = {
  chatListItems?: ChatListItemsType[];
};

export interface MessageType {
  id: number;
  sender: string;
  message: string;
  timestamp: Date;
}

export type ConversationType = {
  id: number;
  title: string;
  participants: string[];
  messages: MessageType[];
};
