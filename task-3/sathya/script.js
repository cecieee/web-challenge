function sub(){
	var name = document.getElementById("name").value;
	var gender = document.getElementsByName("gender");
	var cb1 = document.getElementById("cb1");
	var cb2 = document.getElementById("cb2");
	var cb3 = document.getElementById("cb3");
	var cb4 = document.getElementById("cb4");
	var adr = document.getElementById("Address").value;
	var pin = document.getElementById("Pincode").value;
	var lst = document.getElementById("list").value;
	var a = [];
	var b = [];
	if(name == '' || adr==''|| pin=='')
	{
		alert("Please fill all the blank boxes");
		return;

	}
	for(i=0;i<gender.length;i++)
	{
		if(gender[i].checked)
		{
			b.push(gender[i].value);
		}
	}
	if(cb1.checked==true)
				{
					a.push(cb1.value);
				}
				if(cb2.checked==true)
				{
					a.push(cb2.value);
				}
				if(cb3.checked==true)
				{
					a.push(cb3.value);
				}
				if(cb4.checked==true)
				{
					a.push(cb4.value);
				}
				var sym = a.toString();
			if(confirm("Are you sure ?"))
			{
				

					
				   alert("Name : " +name+ "\nGender : " +b.toString()+ "\nAddress : "+adr+ "\nPincode : " +pin+ "\nDistrict : " +lst+"\nSymptoms : "+sym);
				   window.location.replace("responce.html");
				
				   			  
			} 
			   
			
			else{
				return;
			}  
		}
