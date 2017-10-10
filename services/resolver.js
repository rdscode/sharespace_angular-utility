/**
 * Created by simonwilliams on 25/11/15.
 * Helper service to resolve promises
 */

angular.module('tgwcAngularUtility')
    .service("Resolver", function(DrupalNodeByPath, $q, $location) {

        var page = function (path, options) {
            var deferred = $q.defer();
            DrupalNodeByPath.get(path, options)
                .then(function (response) {
                    if (response.error) {
                        window.location.href = 'page-not-found';
                    }
                    deferred.resolve(response.data);
                }, function(error) {
                  window.location.href = 'page-not-found';
                });
            return deferred.promise;
        };

        return {
            page: page
        }

    });