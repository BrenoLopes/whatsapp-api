import { Router } from 'express';
import MessagesController from '../controllers/MessagesController';

const messagesRouter = Router();
const messageController = new MessagesController();

messagesRouter.get('/', messageController.index.bind(messageController));

messagesRouter.get('/:id', messageController.show.bind(messageController));

messagesRouter.delete('/:id', messageController.delete.bind(messageController));

messagesRouter.post('/', messageController.create.bind(messageController));

export default messagesRouter;
