deepCopy = true;

if (document) {
    var csvContent = document.content;
    var lines = csvContent.split("\n");
    
    for (var i = 1; i < lines.length; i++) {
        var cols = lines[i].split(";");
        if (cols.length >= 3) {
            var folderName = cols[1].trim() + "_" + cols[0].trim();
            var folder = space.createFolder(folderName);
            folder.properties["cm:description"] = cols[2].trim();
            folder.save();

        }
    }
} else {
    logger.log("Erro! CSV Não fornecido.");
}
