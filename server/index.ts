import { createServer } from "http";
import next from "next";

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    if (!dev) {
      if (req.headers["X-Forwarded-Proto"][0] === "http") {
        res.writeHead(301, "https://" + req.headers.host + req.url);
        return;
      }
    }

    const fileExtensionExist = req.url.split(".").length > 1;
    if (fileExtensionExist) {
      handle(req, res);
      return;
    }

    const trailingSlashExist = req.url.substr(-1) === "/";
    if (trailingSlashExist) {
      if (req.url !== "/") {
        req.url = req.url.replace(/\/$/, "");
      }
      handle(req, res);
    } else {
      res.writeHead(301, {
        Location: req.url + "/"
      });
      res.end();
    }
  }).listen(port);

  // tslint:disable-next-line:no-console
  console.log(
    `> Server listening at http://localhost:${port} as ${
      dev ? "development" : process.env.NODE_ENV
    }`
  );
});
