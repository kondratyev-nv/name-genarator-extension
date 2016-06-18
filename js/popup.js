
document.addEventListener('DOMContentLoaded', function () {

    var nameGenerator = new NameGeneratorExtension(document, [
        new NameFakeGenerator(),
        new RandomUserGenerator()
    ]);
    nameGenerator.load();

    document.getElementById("refreshbtn").onclick = function () {
        nameGenerator.refresh();
    };

    document.getElementById("savebtn").onclick = function () {
        nameGenerator.save();
    };

    document.getElementById("loadbtn").onclick = function () {
        nameGenerator.load();
    };

    document.getElementById("generatortype").onchange = function () {
        nameGenerator.refresh();
    };

}, false);
