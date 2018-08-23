import { PubSub } from 'apollo-server';

/* Can be replaced by */
export const pubsub = new PubSub();

export function onConnect(connectionParams, webSocket) {
    // ex: Can check auth token validity
};

export function onDisconnect(connectionParams, webSocket) {

};