import jwt from 'jsonwebtoken';

/* TODO: !!! Use your own key !!! */
const JWT_SECRET = '36P6~1geKDvgX9aTMr_oTvLuvkYzvTExJDNp';

export const getAuthToken = (authorizationHeader = '') => {
    if (!authorizationHeader || authorizationHeader.split(' ')[0] !== 'Bearer') {
        throw new Error('Invalid Authorization Header');
    }
    return authorizationHeader.split(' ')[1];
};

export const verifyAuthToken = (token = null) => {
    const { payload } = jwt.verify(token, JWT_SECRET);
    return payload;
};

export const createAuthToken = (payload = {}) => {
    return jwt.sign({ payload }, JWT_SECRET);
};

export default ({ req }) => {
    /* simulate req.headers.authorization*/
    const tokenMock = createAuthToken({
        user: {
            email: 'agahon@plussimple.com',
            roles: ['ADMIN']
        }
    });

    const token = getAuthToken(/* req.headers.authorization*/ `Bearer ${tokenMock}`);
    const tokenContent = verifyAuthToken(token);

    // try to retrieve a user with the token content (from bdd ...)
    return tokenContent.user;
};