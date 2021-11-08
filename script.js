function giftGenerator() {
    var gift = document.getElementById("gifts").value;
    document.getElementById("box").style.display = "none";
    gift = Number(gift);
    var textnode=0;
    var i;
    for (i = 1; i <= gift; i++) {
        var img = new Image(40, 40);
        img.src = "gift.jpg";
        var node = document.createElement("p");
         textnode = document.createTextNode(i);
        node.appendChild(textnode);
        document.getElementById("box").style.display = "flex";
        document.getElementById("box").appendChild(node);
        document.getElementById("box").appendChild(img);
    }

}