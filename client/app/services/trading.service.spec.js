"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var trading_service_1 = require("./trading.service");
describe('AppService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [trading_service_1.AppService]
        });
    });
    it('should be created', testing_1.inject([trading_service_1.AppService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=trading.service.spec.js.map