/**
 * Created by Simon on 13/11/14.
 */
'use strict';

var drupalServices = angular.module('drupalServices', ['ngResource']);

drupalServices.headers = {};
drupalServices.format = 'json';

drupalServices.factory('DrupalNodes', function ($resource, CONFIG) {
    return CONFIG.baseResource;
});

drupalServices.factory('DrupalNodeByNid', function ($http, CONFIG) {
    return {

        get: function (nid, langcode, brand) {
            if (langcode == '') {
                return $http.get(CONFIG.baseResource+"/backend/node/" + nid + "?_format=json&brand=" + brand, {headers: drupalServices.headers});
            } else {
                return $http.get(CONFIG.baseResource+"/backend/" + langcode + "/node/" + nid + "?_format=json&brand=" + brand, {headers: drupalServices.headers});
            }
        }
    }
});

drupalServices.factory('DrupalNodeByPath', function ($http, CONFIG) {
    return {

        get: function (path, langcode, brand) {
            if (langcode == '') {
                return $http.get(CONFIG.baseResource+"/backend/" + path + "?_format=json&brand=" + brand, {headers: drupalServices.headers});
            } else {
                return $http.get(CONFIG.baseResource+"/backend/" + langcode + "/" + path + "?_format=json&brand=" + brand, {headers: drupalServices.headers});
            }
        }
    }
});
