function validate()
{
    var name=document.getElementById("uname").value;
    var password=document.getElementById("password").value;
    if(name==""||password=="")
    {
        alert("Please enter the both value");
    }
    else
    {
        alert("The is success fully submit");
    }
}