document.getElementById("openFile").addEventListener('change', function(){
	//create file reader object
	var fr = new FileReader();
	
	//read the file and save it to array
	fr.onload = function(){
		//save to string
		var str = this.result;
		
		//string to array
		var res = str.split(",");
		
		//print the array to console 
		console.log(res);
		
		//print number of elements in the array
		console.log("# elements in array: " + res.length);
		
		//print the file contents to web page
		document.getElementById("fileContent").textContent = this.result;
	}
	
	fr.readAsText(this.files[0]);
})