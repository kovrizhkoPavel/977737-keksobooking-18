'use strict';
(function () {
  var URL = 'https://js.dump.academy/keksobooking';

  window.upload = function (data, onSuccess) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', onSuccess);

    xhr.open('POST', URL);
    xhr.send(data);
  };
})();
