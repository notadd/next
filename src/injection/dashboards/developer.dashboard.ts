import { Dashboard } from "../decorators";
import { Injectable } from "@nestjs/common";

@Injectable()
export class DeveloperDashboard {
    @Dashboard("developers")
    public getDashboard() {
        return [
            {
                a: "sdsfsfsf",
                b: "sdsdfsffds",
            },
        ];
    }
}
