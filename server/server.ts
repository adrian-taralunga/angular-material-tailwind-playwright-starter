const jsonServer = require('json-server');
const middleware = jsonServer.defaults();
const server = jsonServer.create();

server.use(middleware);
server.use(jsonServer.bodyParser);

const userData = require('../server/data/users');

server.get('/api/users', (req: any, res: {
  status: (arg0: number) => { (): any; new(): any; send: { (arg0: any): void; new(): any; }; };
}, next: any) => {
  res.status(200).send(userData.getUsers);
});

server.listen(4201, () => {
  console.log('JSON server listening on port 4201');
});
