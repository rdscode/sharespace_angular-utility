/**
 * Created by simonwilliams on 25/11/15.
 * Helper service to resolve promises
 */

angular.module('tgwcAngularUtility')
    .service("Resolver", function(DrupalNodeByPath, $route, $q, $location, BrandService) {

        var page = function () {
            var deferred = $q.defer();
            DrupalNodeByPath.get(
                $route.current.params.page,
                '',
                BrandService.getBrand()
            ).success(function (response) {
                    // console.log('success');
                    // console.log(response);
                    if (response[0] == 'E') {
                        $location.path('page-not-found');
                    }
                    deferred.resolve(response);
                }).error (function (response) {
                $location.path('404.html');
                // console.log('error');
                console.log(response);
            });
            return deferred.promise;
        };

        return {
            page: page
        }

    });
