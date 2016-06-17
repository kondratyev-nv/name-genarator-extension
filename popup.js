
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

var globalCounter = 0;

document.addEventListener('DOMContentLoaded', function() {

	globalCounter++;

	var generator = new NameFakeGenerator("english-united-states", "female");
	generator.next(function(json) {
		document.getElementById("firstname").value = json.firstName;
		document.getElementById("lastname").value = globalCounter;
	});
	
}, false);