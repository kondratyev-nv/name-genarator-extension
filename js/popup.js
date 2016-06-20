
$(document).ready(function () {

    var nameGenerator = new NameGeneratorExtension(document, [
        new NameFakeGenerator(),
        new RandomUserGenerator()
    ]);

    $('#refreshbtn').click(function () {
        nameGenerator.refresh();
    });

    $('#savebtn').click(function () {
        nameGenerator.save();
    });

    $('#loadbtn').click(function () {
        nameGenerator.load();
    });

    $('#generatortype').change(function () {
        nameGenerator.changeGenerator();
    });

    $('body').on('click', 'a', function () {
        if ($(this).attr('data-toggle') != 'tab') {
            chrome.tabs.create({ url: $(this).attr('href') });
        }
    });

});
