
function NameGenerator() {
    this.xhr = new XMLHttpRequest();
};

NameGenerator.prototype.next = function (requestConfiguration) {
    var self = this;
    self.xhr.open(self.httpMethod(), self.url(requestConfiguration.params), true);
    self.xhr.onreadystatechange = function () {
        if (self.xhr.readyState == self.xhr.DONE) {
            try {
                var json = JSON.parse(self.xhr.responseText);
                requestConfiguration.onCompleted(self.convert(json));
            } catch (ex) {
                requestConfiguration.onError(ex);
            }
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
