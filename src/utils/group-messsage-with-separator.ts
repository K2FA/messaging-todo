import type { MessageType } from '@/types/chatlist-item';
import { format } from 'date-fns';

type MessageOrSeparator = { type: 'message'; data: MessageType } | { type: 'date'; date: string } | { type: 'new' };

export function groupMessagesWithSeparators(messages: MessageType[], lastReadAt?: Date): MessageOrSeparator[] {
  const grouped: MessageOrSeparator[] = [];

  let lastDate: string | null = null;
  let newMessageInserted = false;

  for (const message of messages) {
    const dateLabel = format(message.timestamp, 'MMMM dd, yyyy');

    if (dateLabel !== lastDate) {
      grouped.push({ type: 'date', date: dateLabel });
      lastDate = dateLabel;
    }

    if (lastReadAt && !newMessageInserted && message.timestamp > lastReadAt) {
      grouped.push({ type: 'new' });
      newMessageInserted = true;
    }

    grouped.push({ type: 'message', data: message });
  }

  return grouped;
}
