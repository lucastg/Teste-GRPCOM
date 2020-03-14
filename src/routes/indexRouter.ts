import express from "express";
import { methods } from "../library/enum";

export interface RouterAttributes {
  method: methods;
  path: string;
  action: Function;
  middleware?: Function;
}

interface ResponseInterface {
  httpCode?: number;
  message: string;
}

export function routerBuilder(routes: RouterAttributes[]) {
  const router: express.Router = express.Router();

  for (const r of routes) {
    router[r.method](
      r.path,
      (req: express.Request, _2, next: Function) => {
        if (!!r.middleware) {
          r.middleware(req);
        }
        next();
      },
      (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
      ) => {
        r.action(req, res, next)
          .then((response: ResponseInterface) => {
            console.log("response: ", response);
            res.status(200).send(response);
          })
          .catch((err: ResponseInterface) => {
            if (err.httpCode) {
              res.status(err.httpCode).send(err);
            } else {
              res.status(500).send(err);
            }
          });
      }
    );
  }
  return router;
}
