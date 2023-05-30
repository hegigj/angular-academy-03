const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

const isAuthorized = (req) => {
    if (req && req.headers && req.headers.authorization) {
        return req.headers.authorization = '1234';
    }

    return false;
};

server.use(middlewares)
server.use((req, res, next) => {
 if (isAuthorized(req)) {
   next();
 } else {
   res.sendStatus(401)
 }
})
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})