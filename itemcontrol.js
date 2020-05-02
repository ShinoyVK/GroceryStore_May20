var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
	if(this.readyState==4&&this.status==200){
		const queryStding = window.location.search;
		const urlParams = new URLSearchParams(queryStding);
		const product = urlParams.get('getID');
		document.getElementById("name").innerHTML = product;
		console.log("test"+product);
		var output = "<table class=\"table\"><tr><td><b>Serial Number</td><td><b>Name</td><td><b>Quantity</td><td><b>unit Price</td><td><b>Department</td><td><b>Notes</td></tr>";

		var response = JSON.parse(this.responseText);
		var fullList = response.items;

		if(product=="AllItems")
		{
			for(var i=0; i<fullList.length; i++)
		{
				output += "<tr><td>"+fullList[i].SerialNumber+"</td><td>"+fullList[i].Name+"</td><td>"+fullList[i].Quantity+"</td><td>"+fullList[i].Unit+"</td><td>"+fullList[i].Department+"</td><td>"+fullList[i].Notes+"</td></tr>";

		}
		}

		for(var i=0; i<fullList.length; i++)
		{
			if(fullList[i].Department == product)
			{
				output += "<tr><td>"+fullList[i].SerialNumber+"</td><td>"+fullList[i].Name+"</td><td>"+fullList[i].Quantity+"</td><td>"+fullList[i].Unit+"</td><td>"+fullList[i].Department+"</td><td>"+fullList[i].Notes+"</td></tr>";
			}

		}
		document.getElementById("list").innerHTML = output;
		console.log(output);

	}
}
xhttp.open("GET","itemlist.json",true);
xhttp.send();