function validate()
{
    var fname=document.getElementById("fname").value;
    var lname=document.getElementById("lname").value;
    var email=document.getElementById("mailid").value;
    var pwd=document.getElementById("pswd").value;
    var cwd=document.getElementById("cpswd").value;

if(fname=="" || lname=="" ||mailid=="")
{
    alert("Enter the value for first name and last name");
}
else if (pwd=="" || cwd=="")
{
    alert("Password should not be empty");
}
else if(pwd != cwd)
{
    alert("Password and confrim password must be same");
}
else if (document.getElementById("terms").checked==false)
{
    alert(" You must agree the terms and condition");

}
else{
    alert("Successfully registered");
    location.reload();
}
}
function newpage()
{
    window.location.href="project.html"
}

