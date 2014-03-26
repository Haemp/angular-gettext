angular.module('gettext', []);

/**
 * Serves for extraction and translation. 
 */
angular.module('gettext').factory('gettext', function (gettextCatalog) {
  return function(str){ return gettextCatalog.getString(str); };
});
