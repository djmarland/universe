'use strict';

app.controller('CharactersController', function($scope, characters) {
    $scope.characters = characters.getAll();

    $scope.addNew = function() {
        characters.addNew();
    }

    $scope.remove = function(index) {
        var item = characters.getByIndex(index);
        item.statusClass = 'deleting';
        if (window.confirm('Are you sure you want to remove ' +
                            (item.name || 'this item') +
                            '? Data cannot be restored once deleted')) {
            characters.remove(index);
        } else {
            item.statusClass = '';
        }
    }

});
