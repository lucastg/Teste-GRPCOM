import { RouterAttributes, routerBuilder } from "./indexRouter";
import { methods } from "../library/enum";
import { webhook } from "../controller/index"

const routes: RouterAttributes[] = [
  {
    method: methods.POST,
    path: "/webhook",
    action: webhook
  },
  {
    method: methods.GET,
    path: "/webhook",
    action: async () => {
      return `API ESTÁ DE PÉ 🔪 NA 💀🤘`;
    }
  }
];
export default routerBuilder(routes);
