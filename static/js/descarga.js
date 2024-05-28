document.getElementById("downloadButton").addEventListener("click", function() {
    var downloadLink = document.createElement("a");
    downloadLink.href = "https://github.com/johansitoweb/css/archivo.zip"; // Reemplaza "ruta/al/archivo.zip" con la URL de tu archivo ZIP
    downloadLink.download = "archivo.zip";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  });