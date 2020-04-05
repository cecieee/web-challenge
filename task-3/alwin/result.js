function show(){
    
    var x1=document.getElementById('you').value;

        
            if(document.getElementById("m").checked)
            {
                var val = document.getElementById("m").value;
                
            }
            
            else if(document.getElementById("f").checked)
            {
                var val = document.getElementById("f").value;
            
            }
    

    

    var items=document.getElementsByName('symp');
				var selectedItems="";
				for(var i=0; i<items.length; i++){
					if(items[i].type=='checkbox' && items[i].checked==true)
						selectedItems+=items[i].value+" ";
				}
            
                
    var x2=document.getElementById('add').value;
    var x3=document.getElementById('add2').value;
    var x4=document.getElementById('pin').value;
    var sel=document.getElementById('distro').value;
    var userPreference;

		if (confirm("Name : "+x1+"\nGender : "+val+"\nSymptoms : "+selectedItems+"\nStreet Address : "+x2+"\nAddress Line2 : "+x3+"\nPincode : "+x4+"\nDistrict : "+sel) == true) {
			userPreference = "Data saved successfully!";
		} else {
			return false
        }
    
    


}