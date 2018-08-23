import express from 'express';
import {createServer} from 'http';
import {ApolloServer} from 'apollo-server-express';
import compression from 'compression';

import schema from './schema';
import playground from './config/playground';
import authMiddleware from './auth';
import {pubsub, onConnect, onDisconnect} from './subscriptions';

const app = express();
app.use(compression());

const server = new ApolloServer({
    schema,
    subscriptions: {
        onConnect,
        onDisconnect
    },
    context: ({req, connection}) => {
        let context = { pubsub };
        /* connection exist on subscriptions */
        if (!connection) {
            // add the user to the context
            context.user = authMiddleware({req});
        }
        return context;
    },
    introspection: process.env.NODE_ENV === 'development',
    playground: process.env.NODE_ENV === 'development' ? playground : false,
    tracing: process.env.NODE_ENV === 'development',
    // caching: true,
    // mocks: true,
});

server.applyMiddleware({
    app,
    path: process.env.GRAPHQL_PATH || '/'
});

const httpServer = createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen({port: 4000}, () => {
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
    console.log(`🚀 Subscriptions ready at http://localhost:4000${server.subscriptionsPath}`);
});