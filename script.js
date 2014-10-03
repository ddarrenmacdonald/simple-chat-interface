function sendMessage(event){
    var msg = document.getElementById("usrMsg").value;
    var text = "";
    var para = document.createElement("P");
	var txtnode = document.createTextNode(msg);
	para.appendChild(txtnode);
	document.getElementById("chatBox").appendChild(para);
	document.getElementById("usrMsg").value="";
};
