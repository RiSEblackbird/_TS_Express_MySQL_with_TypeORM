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
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeywordController = void 0;
var routing_controllers_1 = require("routing-controllers");
var KeywordController = /** @class */ (function () {
    function KeywordController() {
    }
    KeywordController.prototype.getAll = function () {
        return "This action returns all keywords";
    };
    KeywordController.prototype.getOne = function (id) {
        return "This action returns keyword #" + id;
    };
    KeywordController.prototype.post = function (keyword) {
        return "Saving keyword...";
    };
    KeywordController.prototype.put = function (id, keyword) {
        return "Updating a keyword...";
    };
    KeywordController.prototype.remove = function (id) {
        return "Removing keyword...";
    };
    __decorate([
        routing_controllers_1.Get("/keywords"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], KeywordController.prototype, "getAll", null);
    __decorate([
        routing_controllers_1.Get("/keywords/:id"),
        __param(0, routing_controllers_1.Param("id")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], KeywordController.prototype, "getOne", null);
    __decorate([
        routing_controllers_1.Post("/keywords"),
        __param(0, routing_controllers_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], KeywordController.prototype, "post", null);
    __decorate([
        routing_controllers_1.Put("/keywords/:id"),
        __param(0, routing_controllers_1.Param("id")), __param(1, routing_controllers_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Object]),
        __metadata("design:returntype", void 0)
    ], KeywordController.prototype, "put", null);
    __decorate([
        routing_controllers_1.Delete("/keywords/:id"),
        __param(0, routing_controllers_1.Param("id")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], KeywordController.prototype, "remove", null);
    KeywordController = __decorate([
        routing_controllers_1.Controller()
    ], KeywordController);
    return KeywordController;
}());
exports.KeywordController = KeywordController;
