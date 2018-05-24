import { Menu } from "./menu.interface";
export interface Navigation {
    identification: string;
    menus: Array<Menu>;
    text: string;
    tooltip?: string;
}
