import { createServer } from 'node:http';
import { buildApp } from './http.js';
import { attachSocket } from './socket.js';

const PORT = Number.parseInt(process.env.PORT ?? '4000', 10);

const app = buildApp();
const httpServer = createServer(app);
attachSocket(httpServer);

httpServer.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`[server] Mission Control API listening on http://localhost:${PORT}`);
});
