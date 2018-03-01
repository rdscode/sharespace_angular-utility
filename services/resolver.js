/**
 * Created by simonwilliams on 25/11/15.
 * Helper service to resolve promises
 */

angular.module('tgwcAngularUtility')
    .service("Resolver", function(DrupalNodeByPath, $q, PageNotFoundRedirect) {

        var page = function (path, options) {
            var deferred = $q.defer();
            var savePath = path;
            DrupalNodeByPath.get(path, options)
                .then(function (response) {
                    if (response.error) {
                      PageNotFoundRedirect.redirect(savePath);
                    }
                    deferred.resolve(response.data);
                }, function(error) {
                  PageNotFoundRedirect.redirect(savePath);
                });
            return deferred.promise;
        };

        return {
            page: page
        }

    });
