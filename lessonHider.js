angular.module('directivePractice')
    .directive('lessonHider', function(){
      return {
        templateUrl: 'lessonHider.html',
        restrict: 'E',
        scope: {
            mylesson: '=',
        },
        link: function(scope, element, attributes){

        }
      };
    });
