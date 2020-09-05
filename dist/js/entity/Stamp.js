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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stamp = void 0;
var typeorm_1 = require("typeorm");
var StudyLog_1 = require("./StudyLog");
var Stamp = /** @class */ (function () {
    function Stamp() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Stamp.prototype, "id", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Stamp.prototype, "createdDate", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Stamp.prototype, "updatedDate", void 0);
    __decorate([
        typeorm_1.OneToOne(function (type) { return StudyLog_1.StudyLog; }, function (study_log) { return study_log.stamp; }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", StudyLog_1.StudyLog)
    ], Stamp.prototype, "study_log", void 0);
    Stamp = __decorate([
        typeorm_1.Entity()
    ], Stamp);
    return Stamp;
}());
exports.Stamp = Stamp;
