import { MessageInput } from '../input/message-input';
import { MessageHeaderProfile } from '../profiles/message-header-profile';
import { MessageContent } from './message-content';

export function MessageView() {
  return (
    <div className='w-full h-full pb-[19px] '>
      <MessageHeaderProfile />

      <MessageContent />

      <MessageInput />
    </div>
  );
}
