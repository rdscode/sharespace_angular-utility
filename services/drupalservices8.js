/**
 * Created by Simon on 13/11/14.
 */
'use strict';

var drupalServices = angular.module('drupalServices', ['ngResource']);

drupalServices.headers = {};
drupalServices.format = 'json';

drupalServices.factory('DrupalNodes', function ($resource, BACKEND_CONFIG) {
    return BACKEND_CONFIG.baseResource;
});

drupalServices.factory('DrupalNodeByNid', function ($http, BACKEND_CONFIG) {
    return {
        get: function (nid, langcode, options) {
            return $http.get(
                BACKEND_CONFIG.baseResource + "/" + langcode + "/node/" + nid +
                '?_format=' + drupalServices.format + '&' +
                jQuery.param(options), {headers: drupalServices.headers}
            );
        }
    }
});

drupalServices.factory('DrupalNodeByPath', function ($http, BACKEND_CONFIG) {
    return {
        get: function (path, options) {
            return $http.get(
                BACKEND_CONFIG.baseResource + "/" + path +
                '?_format=' + drupalServices.format + '&' +
                jQuery.param(options), {headers: drupalServices.headers}
            );
        }
    }
});
