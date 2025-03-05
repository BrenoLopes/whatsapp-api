import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';

import { initializeDatabase } from './database';
import AppError from './errors/AppError';

const initializeAppServer = async () => {
    await initializeDatabase()

    const app = express();
    const { default: appRoutes } = await import('./routes')

    app.use(cors());
    app.use(express.json({ limit: '15mb' }));
    app.use(appRoutes);

    app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
        if (err instanceof AppError) {
            return res.status(err.statusCode).json({
                status: 'error',
                message: err.message,
            });
        }

        // eslint-disable-next-line
        console.error(err);

        return res.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    });

    return app
}

export default initializeAppServer;
