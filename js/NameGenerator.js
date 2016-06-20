
function NameGenerator() {
    this.xhr = new XMLHttpRequest();
};

NameGenerator.prototype.next = function (callback, params) {
    var self = this;
    self.xhr.open(self.httpMethod(), self.url(params), true);
    self.xhr.onreadystatechange = function () {
        if (self.xhr.readyState == 4) {
            var json = JSON.parse(self.xhr.responseText);
            callback(self.convert(json));
        }
    }
    self.xhr.send();
};

NameGenerator.prototype.httpMethod = function () {
    return 'GET';
};

NameGenerator.prototype.url = function (params) {
    return '';
};

NameGenerator.prototype.convert = function (json) {
    return json;
};

NameGenerator.prototype.getCode = function () {
    return undefined;
};

NameGenerator.prototype.getInfo = function () {
    return undefined;
};
