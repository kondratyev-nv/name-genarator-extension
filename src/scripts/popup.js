
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free-webfonts/css/fontawesome.css';
import '@fortawesome/fontawesome-free-webfonts/css/fa-regular.css';
import '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css';
import '@fortawesome/fontawesome-free-webfonts/css/fa-brands.css';
import "../styles/popup.css";

import $ from "jquery";
import 'bootstrap';
import Clipboard from 'clipboard';
var NameGeneratorExtension = require('./NameGeneratorExtension.js');
var RandomUserGenerator = require('./generators/RandomUserGenerator.js');
var UiNamesGenerator = require('./generators/UiNamesGenerator.js');
var RandomProfileGenerator = require('./generators/RandomProfileGenerator.js');

$(document).ready(function () {
    var nameGenerator = new NameGeneratorExtension(document, [
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
        .on('error', function (e) {
            $('#error-message').show();
        });
});
