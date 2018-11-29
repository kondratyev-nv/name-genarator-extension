
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/popup.css';

import $ from 'jquery';
import Clipboard from 'clipboard';

import { NameGeneratorExtension } from './NameGeneratorExtension';
import { FakerGenerator } from './generators/FakerGenerator';
import { RandomUserGenerator } from './generators/RandomUserGenerator';
import { UiNamesGenerator } from './generators/UiNamesGenerator';
import { RandomProfileGenerator } from './generators/RandomProfileGenerator';

$(document).ready(function () {
    var nameGenerator = new NameGeneratorExtension(document, [
        new FakerGenerator(),
        new RandomUserGenerator(),
        new UiNamesGenerator(),
        new RandomProfileGenerator()
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
        nameGenerator.changeGenerator(true);
    });

    $('#error-message .close').click(function () {
        $('#error-message').hide();
    });

    $('body').on('click', 'a', function () {
        if ($(this).attr('action-in') != 'popup') {
            chrome.tabs.create({ url: $(this).attr('href') });
        }
    });
    new Clipboard('.copy-button')
        .on('error', function () {
            $('#error-message').show();
        });
});
