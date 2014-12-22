'use strict';

app.factory('characters', function() {

    var data = [],
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
    },
    save = function() {
        localStorage.characters = angular.toJson(data);
    },
    retrieve = function() {
        var stored = angular.fromJson(localStorage.characters);
        if (stored) {
            data = stored;
        }
    };

    // on create, retrieve what is stored
    retrieve();

    return {
        getAll : getAll,
        addNew : addNew,
        remove : remove,
        getByIndex : getByIndex,
        save : save
    }
});