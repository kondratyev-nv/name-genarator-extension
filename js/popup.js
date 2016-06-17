
function NameGenerator() {
    this.xhr = new XMLHttpRequest();
};

NameGenerator.prototype.next = function(callback) {
    var self = this;
    self.xhr.open(self.httpMethod(), self.url(), true);
    self.xhr.onreadystatechange = function() {
        if (self.xhr.readyState == 4) {
            var json = JSON.parse(self.xhr.responseText);
            callback(self.convert(json));
        }
    }
    self.xhr.send();
};

NameGenerator.prototype.httpMethod = function() {
    return "GET";
};

NameGenerator.prototype.url = function() {
    return "";
};

NameGenerator.prototype.convert = function(json) {
    return json;
};

function NameFakeGenerator(location, sex) {
    this.location = location;
    this.sex = sex;
}

NameFakeGenerator.prototype = new NameGenerator();
NameFakeGenerator.prototype.url = function() {
    return "http://api.namefake.com/" + this.location + "/" + this.sex + "/";
};

NameFakeGenerator.prototype.convert = function(json) {
    return {
        firstName: json.name,
        lastName: json.name
    };
};

function updateFormValues(json) {
    document.getElementById("firstname").value = json.firstName;
    document.getElementById("lastname").value = json.lastName;
};

function updateName(generator) {
    generator.next(function(json) {
        updateFormValues(json);
        save(json);
    });
}

function save(json) {
    chrome.storage.local.set({'savedNames': json}, function() {
    });
};

document.addEventListener('DOMContentLoaded', function() {

    var generator = new NameFakeGenerator("english-united-states", "female");   
    chrome.storage.local.get("savedNames", function(object) {
        if(object.savedNames == null) {
            generator.next(function(json) {
                updateFormValues(json);
                save(json);
            });
        } else {
            updateFormValues(object.savedNames);
        }
    });
    
    document.getElementById("refreshbtn").onclick = function() {
        updateName(generator);
    };
    
}, false);