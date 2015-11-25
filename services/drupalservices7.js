/**
 * Created by Simon on 13/11/14.
 */

var drupalServices = angular.module('tgwcAngularUtility', ['ngResource']);

drupalServices.baseResource = 'http://fusepump-server.bitmachine.co.uk';
drupalServices.headers = {"Authorization": "Basic ZnVzZXB1bXBzZXJ2ZXI6ZnVzM3B1bXBzM3J2M3I="}

drupalServices.factory('DrupalNodes',  function($resource){
    return $resource(drupalServices.baseResource+'/node.json',{type:"@type", limit:"@limit", sort:"created", direction:"DESC"}, {
        query: {method:'GET', headers: drupalServices.headers}
    });
});

drupalServices.factory('DrupalNode',  function($resource){
  return $resource(drupalServices.baseResource+'/node/:nid.json',{}, {
    query: {method:'GET', headers: drupalServices.headers}
  });
});

drupalServices.factory('DrupalTerms',  function($resource){
  return $resource(drupalServices.baseResource+'/taxonomy_term.json',{}, {
    query: {method:'GET', headers: drupalServices.headers}
  });
});

drupalServices.factory('DrupalNodeOrder',  function($http){
  return {get: function(tid) {
    return $http.get(drupalServices.baseResource+"/nodeorder.json?tid="+tid, {headers: drupalServices.headers});
  }}
});

drupalServices.factory('DrupalPath', function($resource){
  return $resource(drupalServices.baseResource+'/pathroute',{path: "@path", nid: "@nid"}, {
    query: {method:'GET', headers: drupalServices.headers}
  });
});

drupalServices.factory('DrupalSeoLoader', function($resource) {
  return $resource(drupalServices.baseResource+'/metatags.json',{path: "@path"}, {
    query: {method:'GET', headers: drupalServices.headers}
  });
});

drupalServices.factory('DrupalMenu', function($resource){
  return $resource(drupalServices.baseResource+'/menu.json',{menu: "@menu", action: "@action", path: "@path"}, {
    query: {method:'GET', headers: drupalServices.headers}
  });
});

drupalServices.factory('DrupalSearchAPI', function($resource){
  return $resource(drupalServices.baseResource+'/default_node_index.json',{query: "@query", limit:"@limit", page:"@page"}, {
    query: {method:'GET', headers: drupalServices.headers}
  });
});

drupalServices.factory('DrupalBlogSearchAPI', function($resource){
  return $resource(drupalServices.baseResource+'/blog_node_index.json',{query: "@query", limit:"@limit", page:"@page"}, {
    query: {method:'GET', headers: drupalServices.headers}
  });
});

drupalServices.factory('DrupalPreview', function($resource){
  return $resource(drupalServices.baseResource+'/preview.json',{token: "@token"}, {
   query: {method:'GET', headers: drupalServices.headers}
  });
});

drupalServices.factory('DrupalWebformSubmit', function($http){
  return {submit: function(submission) {
    return $http.post(drupalServices.baseResource+"/webform/75", submission, {headers: drupalServices.headers});
  }}
});

drupalServices.factory('DrupalGetGatedResource', function($resource){
  return $resource(drupalServices.baseResource+'/pardot-gated-resource/:nid/:visitor_id',{}, {
    query: {method:'GET', headers: drupalServices.headers}
  });
});

drupalServices.factory('DrupalGetStoredResource', function($resource){
  return $resource(drupalServices.baseResource+'/pardot-gated-resource-retrieve/:visitor_id',{}, {
    query: {method:'GET', headers: drupalServices.headers}
  });
});

drupalServices.factory('DrupalRememberPardotUser', function($resource){
  return $resource(drupalServices.baseResource+'/pardot-gated-resource-remember/:visitor_id',{}, {
    query: {method:'GET', headers: drupalServices.headers}
  });
});

drupalServices.factory('DrupalNextPrevious', function($http) {
  return {get: function(nid, type) {
    return $http.get(drupalServices.baseResource+"/nextprevious.json?nid="+nid+"&type="+type, {headers: drupalServices.headers});
  }};
});

drupalServices.factory('DrupalFilteredSelect', function($http) {
  return {get: function(field, type, from) {
    return $http.get(drupalServices.baseResource+"/filteredselect.json?field="+field+"&type="+type+"&from="+from, {headers: drupalServices.headers});
  }};
});
