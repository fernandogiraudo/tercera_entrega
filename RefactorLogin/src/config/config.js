import dotenv from 'dotenv';

export const getVariables = (options) => {
    const enviroment = options.opts().mode;
    dotenv.config({
        path: enviroment === 'production' ? './.env.production' : './.env.development'
    });
    return {
        port: process.env.PORT,
        mongoUrl: process.env.MONGO_URL,
        tokenSecret: process.env.TOKENSECRET,
        userAdmin: process.env.USERADMIN,
        passAdmin : process.env.PASSADMIN
    }
}