import { Router } from 'express';
import UsersController from '../controllers/UsersController';

const usersRouter = Router();
const userController = new UsersController();

usersRouter.post('/', userController.create.bind(userController));

usersRouter.delete('/', userController.delete.bind(userController));

export default usersRouter;
