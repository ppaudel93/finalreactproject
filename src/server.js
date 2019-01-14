import Hapi from "hapi";
//const Hapi = require("hapi");

const server = Hapi.server({
  host: "localhost",
  port: 3002
});

server.route({
  method: "GET",
  path: "/",
  handler: (request, reply) => "hello world"
});

// const start = new Promise((resolve, reject) => server.start())
//   .then(() => console.log(`Server is running at: ${server.info.uri}`))
//   .catch(err => {
//     console.log(err);
//     process.exit(1);
//   });
const start = async () => {
  try {
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

start();
