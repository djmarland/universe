'use strict';

app.factory('characters', function() {

    var data = [
        { name: 'Davei'}
    ],
    template = {
        name : null,
        statusClass : null
    },
    getAll = function() {
        return data;
    },
    addNew = function() {
        data.push(
            angular.copy(template)
        );
    },
    remove = function(index) {
        data.splice(index, 1);
    },
    getByIndex = function(index) {
        return data[index];
    };

    return {
        getAll : getAll,
        addNew : addNew,
        remove : remove,
        getByIndex : getByIndex
    }
});