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
