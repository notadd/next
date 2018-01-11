"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../entities/user.entity");
const typeorm_1 = require("typeorm");
let UserService = class UserService {
    constructor(repository) {
        this.repository = repository;
    }
    createUser(obj) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = new user_entity_1.User();
            user.username = obj.username;
            user.email = obj.email;
            user.password = obj.password;
            return yield this.repository.save(user);
        });
    }
    deleteUser(obj) {
        return __awaiter(this, void 0, void 0, function* () {
            if (obj.id) {
                return yield this.deleteUserById(obj.id);
            }
            else if (obj.username) {
                return yield this.deleteUserByUsername(obj.username);
            }
            else if (obj.email) {
                return yield this.deleteUserByEmail(obj.email);
            }
            return false;
        });
    }
    deleteUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository
                .createQueryBuilder()
                .delete()
                .where('email = :email', {
                email: email,
            })
                .execute();
        });
    }
    deleteUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository
                .createQueryBuilder()
                .delete()
                .where('id = :id', {
                id: id,
            })
                .execute();
        });
    }
    deleteUserByUsername(username) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository
                .createQueryBuilder()
                .delete()
                .where('username = :username', {
                username: username,
            })
                .execute();
        });
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.find();
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository
                .createQueryBuilder()
                .where('email = :email', {
                email: email,
            }).getOne();
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.findOneById(id);
        });
    }
    getUserByUsername(username) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository
                .createQueryBuilder()
                .where('username = :username')
                .setParameter('username', username)
                .getOne();
        });
    }
    updateUser(obj) {
        return __awaiter(this, void 0, void 0, function* () {
            if (obj.id) {
                yield this.updateUserById(obj.id, obj);
            }
            else if (obj.username) {
                yield this.updateUserByUsername(obj.username, obj);
            }
            else if (obj.email) {
                yield this.updateUserByEmail(obj.email, obj);
            }
            return false;
        });
    }
    updateUserByEmail(email, obj) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository
                .createQueryBuilder()
                .update(obj)
                .where('email = :email', {
                email: email,
            })
                .execute();
        });
    }
    updateUserById(id, obj) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository
                .createQueryBuilder()
                .update(obj)
                .where('id = :id')
                .setParameter('id', id)
                .execute();
        });
    }
    updateUserByUsername(username, obj) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository
                .createQueryBuilder()
                .update(obj)
                .where('username = :username')
                .setParameter('username', username)
                .execute();
        });
    }
};
UserService = __decorate([
    common_1.Component(),
    __param(0, common_1.Inject('UserRepositoryToken')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UserService);
exports.UserService = UserService;
