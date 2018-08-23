 module.exports = {
    apps: [{
        name: 'GRAPHQL SERVER',
        script: 'src/index.js',
        interpreter: './node_modules/.bin/babel-node',
        max_restarts: 1,
        env: {
            NODE_ENV: 'development',
            GRAPHQL_PATH: '/',
        },
        env_production: {
            NODE_ENV: 'production',
            GRAPHQL_PATH: '/',
        }
    }]
};
