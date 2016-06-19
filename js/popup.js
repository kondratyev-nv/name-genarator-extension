
document.addEventListener('DOMContentLoaded', function () {

    var nameGenerator = new NameGeneratorExtension(document, [
        new NameFakeGenerator(),
        new RandomUserGenerator()
    ]);

    document.getElementById("refreshbtn").onclick = function () {
        nameGenerator.refresh();
    };

    document.getElementById("savebtn").onclick = function () {
        var alias = document.getElementById("alias").value || "Default";
        nameGenerator.save(alias);
    };

    document.getElementById("savednames").onchange = function () {
        nameGenerator.load();
    };

    document.getElementById("generatortype").onchange = function () {
        nameGenerator.refresh();
    };

}, false);
