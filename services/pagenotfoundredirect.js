/**
 * Helper service to handle redirects on errors.
 */

angular.module('tgwcAngularUtility')
  .service("PageNotFoundRedirect", function($window) {

    var redirect = function(path) {
      $window.location.href = '/page-not-found?src=' + path;
    };

    return {
      redirect: redirect
    }

  });
