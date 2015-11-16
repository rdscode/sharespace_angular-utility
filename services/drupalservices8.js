/**
 * Created by Simon on 13/11/14.
 */
'use strict';

var drupalServices = angular.module('drupalServices', ['ngResource']);

drupalServices.headers = {};

// drupalServices.baseResource = 'http://fusepump-server.bitmachine.co.uk';
// drupalServices.headers = {"Authorization": "Basic ZnVzZXB1bXBzZXJ2ZXI6ZnVzM3B1bXBzM3J2M3I="}

drupalServices.factory('DrupalNodes', function ($resource, BACKEND_CONFIG) {
    return BACKEND_CONFIG.baseResource;
});

drupalServices.factory('DrupalNodeByNid', function ($http, BACKEND_CONFIG) {
    return {
        get: function (nid, langcode, brand) {
            if (langcode == '') {
                return $http.get(BACKEND_CONFIG.baseResource+"/backend/node/" + nid + "?_format=json&brand=" + brand, {headers: drupalServices.headers});
            } else {
                return $http.get(BACKEND_CONFIG.baseResource+"/backend/" + langcode + "/node/" + nid + "?_format=json&brand=" + brand, {headers: drupalServices.headers});
            }
        }
    }
});

drupalServices.factory('DrupalNodeByPath', function ($http, BACKEND_CONFIG) {
    return {
        get: function (path, langcode, brand) {
            if (langcode == '') {
                return $http.get(BACKEND_CONFIG.baseResource+"/backend/" + path + "?_format=json&brand=" + brand, {headers: drupalServices.headers});
            } else {
                return $http.get(BACKEND_CONFIG.baseResource+"/backend/" + langcode + "/" + path + "?_format=json&brand=" + brand, {headers: drupalServices.headers});
            }
        }
    }
});
