export interface Message {
    id: number;
    SenderUserId: number;
    RecipientUserId: number;
    senderPhotoUrl: string;
    content: string;
    dateRead?: Date;
    messageSent: Date;
    senderDeleted: boolean,
    recipientDeleted: boolean,
}