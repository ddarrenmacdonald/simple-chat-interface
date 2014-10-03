function sendMsg(event){
    var msg = document.getElementById("usrMsg").value;
    var pNew = document.createElement("P");
	var txtnode = document.createTextNode(msg);
	pNew.appendChild(txtnode);
	document.getElementById("chatBox").appendChild(pNew);
	document.getElementById("usrMsg").value="";
};
