
function updateFormValues(json) {
    document.getElementById("firstname").value = json.firstName;
    document.getElementById("lastname").value = json.lastName;
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

function getGenerator() {
    var generatorCode = document.getElementById('generatortype').value;
    switch(generatorCode) {
    case "FakeNameGenerator": 
        return new NameFakeGenerator();
    case "RandomUserGenerator":
        return new RandomUserGenerator();
    default:
        return undefined;
    }
};

document.addEventListener('DOMContentLoaded', function() {

    chrome.storage.local.get("savedNames", function(object) {
        if(object.savedNames == null) {
            var generator = getGenerator();
            generator.next(function(json) {
                updateFormValues(json);
                save(json);
            });
        } else {
            updateFormValues(object.savedNames);
        }
    });
    
    document.getElementById("refreshbtn").onclick = function() {
        var generator = getGenerator();
        updateName(generator);
    };
    
}, false);
