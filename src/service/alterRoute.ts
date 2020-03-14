import * as ROUTE from "../routes/dialogflow";

export async function route(action: string) {
  console.log("action --- ", action);
  const f = ROUTE.routes.filter(x => x.name === action)[0];
  return f;
}