
document.addEventListener('DOMContentLoaded', function () {

    var nameGenerator = new NameGeneratorExtension(document, [
        new NameFakeGenerator(),
        new RandomUserGenerator()
    ]);
    nameGenerator.load();

    document.getElementById("refreshbtn").onclick = function () {
        nameGenerator.refresh();
    };

    document.getElementById("generatortype").onchange = function () {
        nameGenerator.refresh();
    };

}, false);
