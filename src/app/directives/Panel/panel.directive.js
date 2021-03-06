(function() {
    'use strict';

    angular.module('app.directive')
    .directive('panel', panelDirective);

    panelDirective.$inject = [ '$document', '$timeout' ];

    function panelDirective($document, $timeout) {
      var directive = {
          restrict: 'A',
          link: link
      };
      return directive;
    }

    function link(scope, $element, attr) {


      _layout();

      function _layout(){

        angular.element('.peopleIn').on('click', function() {
          if($(this).hasClass('active')){
            $(this).removeClass('active');
            $('.panel1Container').removeClass('col-md-6');
            $('.panel1Container').addClass('col-md-9');
            $('.panel3Container').hide(400);
          }else{
            $('.peopleIn').removeClass('active');
            $('.videoIn').removeClass('active');
            $(this).addClass('active');
            $('.panel1Container').removeClass('col-md-9');
            $('.panel1Container').addClass('col-md-6');
            $('.panel3Container').show(400);
          }
        });

        angular.element('.videoIn').on('click', function() {
          if($(this).hasClass('active')){
            $(this).removeClass('active');
          }else{
            $('.videoIn').removeClass('active');
            $(this).addClass('active');
          }
        });

      }



  }
})();
