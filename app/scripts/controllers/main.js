'use strict';

angular.module('cartistsTimelineDemoApp')
  .controller('MainCtrl', ['$scope', function ($scope) {

    $scope.timelineEntries = [
      { name: 'aatrox', startDate: new Date(1985, 2), endDate: new Date(2014, 2) },
      { name: 'amumu', startDate: new Date(1975, 12), endDate: new Date(2014, 8) },
      { name: 'annie', startDate: new Date(1920, 5), endDate: new Date(2013, 3) },
    ];

    var container = document.getElementById('timeline');

    var chart = new google.visualization.Timeline(container);

  	var dataTable = new google.visualization.DataTable();
  	dataTable.addColumn({ type: 'string', id: 'Artist' });
  	dataTable.addColumn({ type: 'date', id: 'Start' });
  	dataTable.addColumn({ type: 'date', id: 'End' });

    var data = _.map($scope.timelineEntries, function(entry) {
      return _.values(entry);
    });

    dataTable.addRows(data);
  	chart.draw(dataTable);
  }]);
