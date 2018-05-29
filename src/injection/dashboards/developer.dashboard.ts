import { Injectable } from "@nestjs/common";

import { Dashboard } from "../decorators/dashboard.decorator";

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
