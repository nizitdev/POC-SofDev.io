import "@babel/polyfill";
import "material-design-icons/iconfont/material-icons.css";
import "./styles/main.scss";
import { ClientApp } from "@nivinjoseph/n-app";
import * as Routes from "./pages/routes";
import { ServicesInstaller } from "./services/services-installer";
import { components } from "./components/components";
import { pages } from "./pages/pages";


const client = new ClientApp("#app")
    .useInstaller(new ServicesInstaller())
    .useAccentColor("#93C5FC")
    .registerComponents(...components)
    .registerPages(...pages)
    .useAsInitialRoute(Routes.adminPage)
    .useAsUnknownRoute(Routes.listContacts)
    .useHistoryModeRouting();

client.bootstrap();