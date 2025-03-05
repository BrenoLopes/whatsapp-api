import { Router } from 'express';
import ContactsController from '../controllers/ContactsController';

const contactsRouter = Router();
const contactController = new ContactsController();

contactsRouter.get('/:phoneNumber', contactController.index.bind(contactController));

export default contactsRouter;
