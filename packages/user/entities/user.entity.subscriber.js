"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
let UserSubscriber = class UserSubscriber {
    beforeInsert(event) {
        event.entity.password = crypto_1.createHmac('sha256', user.password).digest('hex');
    }
    listenTo() {
        return user_entity_1.User;
    }
};
UserSubscriber = __decorate([
    typeorm_1.EventSubscriber()
], UserSubscriber);
exports.UserSubscriber = UserSubscriber;
