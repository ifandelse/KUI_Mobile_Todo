require.config({
    paths: {
        "text": "../lib/requirejs-text/text"
    }
});

var showAlert = function(message, title, callback) {
    navigator.notification.alert(message, callback || function () {
    }, title, 'OK');
};
var showError = function(message) {
    showAlert(message, 'Error occurred');
};
window.addEventListener('error', function (e) {
    e.preventDefault();
    var message = e.message + "' from " + e.filename + ":" + e.lineno;
    showAlert(message, 'Error occurred');
    return true;
});

define(['app'], function (app) {

    window.APP = window.APP || app;

    document.addEventListener('deviceready', function () {
        app.init();
        navigator.splashscreen.hide();
    }, false);

});