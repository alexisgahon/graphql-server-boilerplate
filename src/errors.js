import { ApolloError } from 'apollo-server';

const EXEMPLE_CUSTOM_ERROR = new ApolloError(
    'Message of my custom error',
    'EXEMPLE_CUSTOM_ERROR'
);

export {
    EXEMPLE_CUSTOM_ERROR
};