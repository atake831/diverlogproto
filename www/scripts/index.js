(function () {
    "use strict";

    var app = angular.module('app', ['onsen']);

    app.controller('AppController', function ($scope) {
        ons.ready(function(){
            appNavigator.replacePage('views/tabbar.html', { animation: 'none'});
        });
    });
    app.controller('TabController', function ($scope) {
        $scope.doSomething = function () {
            ons.notification.alert({ message: 'tapped' });
        };
    });
    app.controller('HomeController', function ($scope) {
        $scope.viewDetail = function (id) {
            homeNavigator.pushPage('views/detail.html');
        };
        $scope.addContents = function () {
            ons.notification.alert({ message: 'addContents tapped' });
        };
    });
    app.controller('LoggingController', function ($scope) {
        $scope.submit = function (id) {
            alert('submit !!');
        };
    });

    // document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );
    //
    // function onDeviceReady() {
    //     // Handle the Cordova pause and resume events
    //     document.addEventListener( 'pause', onPause.bind( this ), false );
    //     document.addEventListener( 'resume', onResume.bind( this ), false );
    //
    //     // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
    // };
    //
    // function onPause() {
    //     // TODO: This application has been suspended. Save application state here.
    // };
    //
    // function onResume() {
    //     // TODO: This application has been reactivated. Restore application state here.
    // };
} )();
