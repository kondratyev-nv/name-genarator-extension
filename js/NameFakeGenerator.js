
function NameFakeGenerator(location, sex) {
    this.location = location;
    this.sex = sex;
}

NameFakeGenerator.prototype = new NameGenerator();
NameFakeGenerator.prototype.url = function () {
    var baseUrl = "http://api.namefake.com/";
    if (this.location != null) {
        baseUrl += this.location + "/";
    }
    if (this.sex != null) {
        baseUrl += this.sex + "/";
    }

    return baseUrl;
};

NameFakeGenerator.prototype.convert = function (json) {
    return {
        firstName: json.name,
        lastName: json.name,
        email: json.email_u + "@" + json.email_d,
        password: json.password
    };
};

NameFakeGenerator.prototype.getCode = function () {
    return 'NameFakeGenerator';
};
