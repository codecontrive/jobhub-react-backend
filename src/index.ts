import { Server } from './Server';

const server: Server = new Server();
const PORT: number = 5000;

server.app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
