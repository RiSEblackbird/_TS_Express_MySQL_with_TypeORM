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
exports.StudyLog = void 0;
var typeorm_1 = require("typeorm");
var Stamp_1 = require("./Stamp");
var StudyLog = /** @class */ (function () {
    function StudyLog() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], StudyLog.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 500 }),
        __metadata("design:type", String)
    ], StudyLog.prototype, "body", void 0);
    __decorate([
        typeorm_1.OneToOne(function (type) { return Stamp_1.Stamp; }, function (stamp) { return stamp.study_log; }),
        __metadata("design:type", Stamp_1.Stamp)
    ], StudyLog.prototype, "stamp", void 0);
    StudyLog = __decorate([
        typeorm_1.Entity()
    ], StudyLog);
    return StudyLog;
}());
exports.StudyLog = StudyLog;
