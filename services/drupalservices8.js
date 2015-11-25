/**
 * Created by Simon on 13/11/14.
 */
'use strict';

var drupalServices = angular.module('drupalServices', ['ngResource']);

drupalServices.headers = {};

drupalServices.factory('DrupalNodes', function ($resource, BACKEND_CONFIG) {
    return BACKEND_CONFIG.baseResource;
});

drupalServices.factory('DrupalNodeByNid', function ($http, BACKEND_CONFIG) {
    return {
        get: function (nid, langcode, brand) {
            if (langcode == '') {
                return $http.get(BACKEND_CONFIG.baseResource + "/" + nid + "?_format=json&brand=" + brand, {headers: drupalServices.headers});
            } else {
                return $http.get(BACKEND_CONFIG.baseResource + "/" + langcode + "/node/" + nid + "?_format=json&brand=" + brand, {headers: drupalServices.headers});
            }
        }
    }
});

drupalServices.factory('DrupalNodeByPath', function ($http, BACKEND_CONFIG) {
    return {
        get: function (path, langcode, brand) {
            console.log(path);
            var rpath = BACKEND_CONFIG.baseResource+path+"?_format=json&brand="+brand;
            console.log(rpath);
            if (langcode == '') {
                return $http.get(BACKEND_CONFIG.baseResource + "/" + path + "?_format=json&brand=" + brand, {headers: drupalServices.headers});
            } else {
                return $http.get(BACKEND_CONFIG.baseResource + "/" + langcode + "/" + path + "?_format=json&brand=" + brand, {headers: drupalServices.headers});
            }
        }
    }
});
