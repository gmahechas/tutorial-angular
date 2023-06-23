import { IMessage } from './messages.interface';

export interface MessagesState {
	messages: IMessage[];
	currentMessage: IMessage | null;
};

export const messagesInitialState: MessagesState = {
	messages: [],
	currentMessage: null,
}