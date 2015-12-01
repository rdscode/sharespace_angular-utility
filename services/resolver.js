/**
 * Created by simonwilliams on 25/11/15.
 * Helper service to resolve promises
 */

angular.module('tgwcAngularUtility')
    .service("Resolver", function(DrupalNodeByPath, $q, $location) {

        var page = function (path, options) {
            var deferred = $q.defer();
            DrupalNodeByPath.get(path, options)
                .success(function (response) {
                    // console.log('success');
                    // console.log(response);
                    if (response.error) {
                        window.location.href = '404.html';
                    }
                    deferred.resolve(response);
                }).error (function (response) {
                //bwindow.location.href = '404.html';
                // console.log('error');
                console.log(response);
            });
            return deferred.promise;
        };

        return {
            page: page
        }

    });