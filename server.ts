const port = process.env.PORT || 3000;

console.log(
  `Launching Bun HTTP server on port: ${port}, url: http://0.0.0.0:${port} 🚀`
);

import { Server } from "@hocuspocus/server";

// Configure the server …
const server = new Server({
  port: port,
});

// … and run it!
server.listen();

