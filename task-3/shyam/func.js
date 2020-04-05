function func()
{
    var name=document.getElementById('textfield').value;
    document.getElementById('p1').innerHTML="Name:"+name;

    var gender=document.querySelector('input[name=Gender]:checked').value;
    document.getElementById('p2').innerHTML="Gender:"+gender;

    var symptoms=document.querySelector('input[name=check]:checked').value;
    var str="symptoms:"+symptoms;
    document.getElementById('p3').innerHTML=str;

    var address=document.getElementById('textarea').value;
    document.getElementById('p4').innerHTML="Address:"+address;

    var district=document.getElementById('district').value;
    document.getElementById('p5').innerHTML="District:"+district;
}