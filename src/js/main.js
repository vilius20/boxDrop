$(document).ready(function () {
  var jsonURL = "js/fotoFailai.json";
  $.getJSON(jsonURL, function (json) {
    var nuotraukuSarasas = "";

    $.each(json.foto, function () {
      nuotraukuSarasas += '<li><img src= "' + this.vieta + '"></li>';
    });

    $("#foto").append(nuotraukuSarasas);
  });
});
