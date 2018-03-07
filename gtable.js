var resourceSpreadsheet = '15_xFyNCeTMRxSbdJuqhezhw1Ahb69NplZG8iNjs9AII';

function init() {
  Tabletop.init({
    key: resourceSpreadsheet,
    callback: resourceData,
    simpleSheet: true
  });
}

function resourceData(data, tabletop) {
  console.log(data);
  for (var i = 0; i < data.length; i++) {
    $(".post").append('< div class = ”article” >' + '< div class = ”text” >' + '< h1 >' + data[i].Resource + data[i].Type + data[i].Description + data[i].Link + '</h1>' + '</div>' + '</div>');
  }
}

window.addEventListener('DOMContentLoaded', init);