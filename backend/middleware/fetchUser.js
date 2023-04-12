const jwt = require('jsonwebtoken');

const JWT_SECRET = "webTokenSignature";

const fetchUser = (request, response, next) => {
    //get the user from the jwt token
    try {
        const token = request.header('auth-token');
        if (!token) {
            response.status(401).send({error: "Please authenticate with a valid token!"})
        }
        const data = jwt.verify(token, JWT_SECRET);
        request.user = data.user;
        next();
    } catch (error) {
        console.log(error.message);
        response.status(500).send({error: "Something unexpected happened!"});
    }
}

module.exports = fetchUser;
