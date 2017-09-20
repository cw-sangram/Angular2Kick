"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FooterComponent = (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    core_1.Component({
        selector: 'my-footer',
        template: "<footer class=\"footer\">\n            <div class=\"container-fluid\">\n                <nav class=\"pull-left\">\n                    <ul>\n\n                        <li>\n                            <a href=\"http://www.creative-tim.com\">\n                                Creative Tim\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"http://blog.creative-tim.com\">\n                               Blog\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"http://www.creative-tim.com/license\">\n                                Licenses\n                            </a>\n                        </li>\n                    </ul>\n                </nav>\n\t\t\t\t<div class=\"copyright pull-right\">\n                    \u00A9 <script>document.write(new Date().getFullYear())</script>2017, made with <i class=\"fa fa-heart heart\"></i> by <a href=\"http://www.creative-tim.com\">Creative Tim</a>\n                </div>\n            </div>\n        </footer>"
    })
], FooterComponent);
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=footer.component.js.map