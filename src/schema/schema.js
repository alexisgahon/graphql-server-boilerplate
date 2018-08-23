import {gql} from 'apollo-server';

const typeDefs = gql`
    type Query {
        """Placeholder, allow to extend the Query type"""
        _empty: Boolean
    }
    
    type Mutation {
        """Placeholder, allow to extend the Mutation type"""
        _empty: Boolean
    }

    type Subscription {
        """Placeholder, allow to extend the Subscription type"""
        _empty: Boolean
    }
`;

const resolvers = {
    Query: {
        _empty: () => true
    },
    Mutation: {
        _empty: () => true
    },
    Subscription: {
        _empty: (root, obj, ctx) => {
            return ctx.pubsub.asyncIterator([])
        }
    }
};

export {
    typeDefs,
    resolvers
};