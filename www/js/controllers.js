angular.module('starter.controllers', [])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout, $auth, $ionicPopup, $ionicLoading) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
        $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function () {
        $scope.modal.show();
    };

    $scope.fbLogin = function () {
        alert("inside");
    };

    $scope.$on("authentication-failed", function() {
        $auth.logout();
        $scope.login();

    });

    $scope.$on("loader_show", function() {
        $ionicLoading.show({
            template: "loading..."
        });
    });

    $scope.$on("loader_hide", function() {
        $ionicLoading.hide();
    });

    //


    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
        console.log('Doing login', $scope.loginData);

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function () {
            $scope.closeLogin();
        }, 1000);
    };

    $scope.authenticate = function (provider) {
        $auth.authenticate(provider).then(function () {
            $ionicPopup.alert({
                title: 'Success',
                content: 'You Have Successfully Logged In'
            })
            .catch(function(response){
                $ionicPopup.alert({
                    title: 'Error',
                    content: response.data ? response.data ||
                             response.data.message : response
                })
            });
        });



        $timeout(function () {
            $scope.closeLogin();
        }, 1000);
    };
    
    $scope.isAuthenticated = function (){
        return $auth.isAuthenticated();
    }
    $scope.logout = function(){
        return $auth.logout();
    }
})

.controller('PlaylistsCtrl', function ($scope) {
    $scope.playlists = [
        {
            title: 'Reggae',
            id: 1
        },
        {
            title: 'Chill',
            id: 2
        },
        {
            title: 'Dubstep',
            id: 3
        },
        {
            title: 'Indie',
            id: 4
        },
        {
            title: 'Rap',
            id: 5
        },
        {
            title: 'Cowbell',
            id: 6
        }
  ];
})

.controller('PlaylistCtrl', function ($scope, $stateParams) {

})

.controller("meCtrl", function($scope, aboutMe) {
    $scope.me = aboutMe;
})

.controller("friendCtrl", function($scope, friends) {
    $scope.me = user_friends;
});
