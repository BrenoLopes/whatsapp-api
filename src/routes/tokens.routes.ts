import { Router } from 'express';
import TokensController from '../controllers/TokensController';

const tokensRouter = Router();
const tokenController = new TokensController();

tokensRouter.post('/', tokenController.create.bind(tokenController));

tokensRouter.get('/', tokenController.index.bind(tokenController));

tokensRouter.delete('/:phone', tokenController.delete.bind(tokenController));

export default tokensRouter;
