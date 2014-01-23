'use strict';

angular.module('cartistsTimelineDemoApp')
  .controller('MainCtrl', ['$scope', function ($scope) {

    $scope.timelineEntries = [
      { name: 'aatrox', startDate: new Date(), endDate: new Date() },
      { name: 'amumu', startDate: new Date(), endDate: new Date() },
      { name: 'annie', startDate: new Date(), endDate: new Date() },
    ];

    console.log(_.values($scope.timelineEntries[0]));

    var container = document.getElementById('timeline');

    var chart = new google.visualization.Timeline(container);

  	var dataTable = new google.visualization.DataTable();

  	dataTable.addColumn({ type: 'string', id: 'President' });
  	dataTable.addColumn({ type: 'date', id: 'Start' });
  	dataTable.addColumn({ type: 'date', id: 'End' });

  	dataTable.addRows([
  	[ 'Washington', new Date(1789, 3, 29), new Date(1797, 2, 3) ],
  	[ 'Adams',      new Date(1797, 2, 3),  new Date(1801, 2, 3) ],
  	[ 'Jefferson',  new Date(1801, 2, 3),  new Date(1809, 2, 3) ]]);

  	chart.draw(dataTable);

  }]);
