import { Router } from 'express';
import ScreenshotController from '../controllers/ScreenshotController';

const screenshotRouter = Router();
const screenshotController = new ScreenshotController();

screenshotRouter.get('/', screenshotController.index.bind(screenshotController));

export default screenshotRouter;
