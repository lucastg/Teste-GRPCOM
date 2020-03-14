import express from "express";
import { getSla } from "../controller/index"

export const routes = [
  {
    name: "DateTime",
    action: (req: express.Request) =>
      getSla(req)
  },
];
