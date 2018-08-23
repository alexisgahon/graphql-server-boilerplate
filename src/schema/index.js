import {merge} from 'lodash';
import {makeExecutableSchema} from 'graphql-tools';

import * as baseSchema from './schema';
/* Import other schema def */

const resolvers = merge(
    baseSchema.resolvers,
    /* Add other schema resolver */
);

const typeDefs = [
    baseSchema.typeDefs,
    /* Add other schema typeDefs */
];

const schemaDirectives = {};

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
    schemaDirectives
});

export default schema;