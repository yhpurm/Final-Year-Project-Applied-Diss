"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Profile = /** @class */ (function () {
    function Profile(username, aboutMe, avater, statusCount, friendCount, isOnline, bitcoinAddress, email, lat, long) {
        this.username = username;
        this.aboutMe = aboutMe;
        this.avater = avater;
        this.statusCount = statusCount;
        this.friendCount = friendCount;
        this.isOnline = isOnline;
        this.bitcoinAddress = bitcoinAddress;
        this.email = email;
        this.lat = lat;
        this.long = long;
    }
    return Profile;
}());
exports.Profile = Profile;
//# sourceMappingURL=profile.model.js.map