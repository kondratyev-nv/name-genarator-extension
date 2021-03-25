
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

$(function () {
    var nameGenerator = new NameGeneratorExtension(document, [
        new FakerGenerator(),
        new RandomUserGenerator(),
        new RandomProfileGenerator(),
        new UiNamesGenerator(),
    ]);

    $('#refreshbtn').on('click', function () {
        nameGenerator.refresh();
    });

    $('#savebtn').on('click', function () {
        nameGenerator.save();
    });

    $('#loadbtn').on('click', function () {
        nameGenerator.load();
    });

    $('#removebtn').on('click', function () {
        nameGenerator.remove();
    });

    $('#generatortype').on('change', function () {
        nameGenerator.changeGenerator(true);
    });

    $('#error-message .close').on('click', function () {
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
