
function RandomUserGenerator() {
}

RandomUserGenerator.prototype = new NameGenerator();
RandomUserGenerator.prototype.url = function () {
    return 'https://randomuser.me/api/';
};

RandomUserGenerator.prototype.convert = function (json) {
    return {
        firstName: json.results[0].name.first.capitalizeFirstLetter(),
        lastName: json.results[0].name.last.capitalizeFirstLetter(),
        email: json.results[0].email,
        password: json.results[0].login.password
    };
};

RandomUserGenerator.prototype.getCode = function () {
    return 'RandomUserGenerator';
};

RandomUserGenerator.prototype.getInfo = function () {
    return {
        text: 'Random User Generator',
        url: 'https://randomuser.me/'
    };
};
