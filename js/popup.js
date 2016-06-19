
$(document).ready(function () {

    var nameGenerator = new NameGeneratorExtension(document, [
        new NameFakeGenerator(),
        new RandomUserGenerator()
    ]);

    $('#refreshbtn').click(function () {
        nameGenerator.refresh();
    });

    $('#savebtn').click(function () {
        var alias = document.getElementById('alias').value || 'Default';
        nameGenerator.save(alias);
    });

    $('#savednames').change(function () {
        nameGenerator.load();
    });

    $('#generatortype').change(function () {
        nameGenerator.changeGenerator();
    });

    $('body').on('click', 'a', function () {
        chrome.tabs.create({ url: $(this).attr('href') });
        return false;
    });

});
