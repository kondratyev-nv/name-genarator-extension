
function RandomUserGenerator() {
}

RandomUserGenerator.prototype = new NameGenerator();
RandomUserGenerator.prototype.url = function () {
    return "https://randomuser.me/api/";
};

RandomUserGenerator.prototype.convert = function (json) {
    return {
        firstName: json.results[0].name.first,
        lastName: json.results[0].name.last,
        email: json.results[0].email,
        password: json.results[0].login.password
    };
};

RandomUserGenerator.prototype.getCode = function () {
    return 'RandomUserGenerator';
};
