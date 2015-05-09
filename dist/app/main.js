requirejs.config({
    "baseUrl": "/app",
    "urlArgs": "v=1.0",
    "paths": {
        'jquery': '../vendor/jquery/dist/jquery.min',
        'angular': '../vendor/angular/angular',
        'angular-sanitize': '../vendor/angular-sanitize/angular-sanitize',
        'angular-resource': '../vendor/angular-resource/angular-resource',
        'angular-route': '../vendor/angular-route/angular-route',
        'angular-css': '../vendor/angular-css/angular-css',
        'bootstrap': '../vendor/bootstrap/dist/js/bootstrap.min'
    },
    "shim": {
        'angular': {
            exports: "angular",
            deps: ["jquery"]
        },
        'angular-route': {
            exports: "angular-route",
            deps: ["angular"]
        },
        'bootstrap':
        {
            deps: ["jquery"]
        }
    },
    deps: ["app"]
});