(function () {

    // Style - 1 
    // angular.module('app').
    //     controller('firstcontroller', function ($scope) {
    //         $scope.title = "Synechron pvt Ltd";
    //         $scope.subTitle = "Core Development Centre";

    //     });

    // Style - 2
    // angular.module('app').
    //     controller('firstcontroller', firstcontroller);

    // function firstcontroller($scope) {
    //     $scope.title = "Synechron pvt Ltd";
    //     $scope.subTitle = "Core Development Centre";

    // }


    // Style - 3 - Most appropriate style 
    angular.module('app').
        controller('firstcontroller', firstcontroller);

    firstcontroller.$inject = ['$scope']

    function firstcontroller(syn) {

        syn.title = "Synechron Pvt. Ltd.";
        syn.subTitle = "Core Development Centre";

    }


})();