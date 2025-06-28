const port = process.env.PORT || 3000;

console.log(
  `Launching Bun HTTP server on port: ${port}, url: http://0.0.0.0:${port} 🚀`
);

import express from "express";
import expressWebsockets from "express-ws";
import { Hocuspocus } from "@hocuspocus/server";

import { Server } from "@hocuspocus/server";

// Configure the server …
// const server = new Server({
//   port: port,
// });

// // … and run it!
// server.listen();

// https://tiptap.dev/docs/hocuspocus/server/examples#express

// Configure hocuspocus
const hocuspocus = new Hocuspocus({
  name: "hocuspocus-fra1-01",
})
// Setup your express instance using the express-ws extension
const { app } = expressWebsockets(express());

// A basic http route
app.get("/", (request, response) => {
  response.send("Hello World!");
});

// Add a websocket route for Hocuspocus
// You can set any contextual data like in the onConnect hook
// and pass it to the handleConnection method.
app.ws("/collaboration", (websocket, request) => {
  const context = {
    user: {
      id: 1234,
      name: "Jane",
    },
  };

  hocuspocus.handleConnection(websocket, request, context);
});

// Start the server
app.listen(port, () => console.log(`Listening on http://127.0.0.1:${port}`));
