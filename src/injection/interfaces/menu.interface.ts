export interface Menu {
    id: string;
    title: string;
    type: "collapse" | "item";
    icon?: string;
    children?: Array<Menu>;
}
