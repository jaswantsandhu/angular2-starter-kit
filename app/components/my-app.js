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
var core_1 = require('@angular/core');
var content_1 = require('./content');
var MyApp = (function () {
    function MyApp() {
    }
    MyApp = __decorate([
        core_1.Component({
            template: "\n    <div class=\"header\"></div>\n        <div class=\"container\">\n            <sidebar></sidebar>\n            <content></content>\n        </div>\n    ",
            selector: 'my-app',
            directives: [content_1.Content]
        }), 
        __metadata('design:paramtypes', [])
    ], MyApp);
    return MyApp;
}());
exports.MyApp = MyApp;
//# sourceMappingURL=my-app.js.map