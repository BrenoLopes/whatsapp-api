import {createConnection, getCustomRepository} from 'typeorm';

export const initializeDatabase = async () => {
    const connection = await createConnection()
    console.log('Connection established!')
    return connection
}


