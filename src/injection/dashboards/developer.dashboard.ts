import { Component } from "@nestjs/common";
import { Dashboard } from "../decorators/dashboard.decorator";

@Component()
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
