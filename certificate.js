/*---------------NAVBAR-----------------*/
function menu_show(){
    document.getElementById("menu_on").style.display="none";
    document.getElementById("menu_off").style.display="block";
    document.getElementById("nav_links_id").style.display="block";
}
function menu_hide(){
    document.getElementById("menu_on").style.display="block";
    document.getElementById("menu_off").style.display="none";
    document.getElementById("nav_links_id").style.display="none";
}
/****************************************/



function makeCertificate()
{
    
    console.log("Making..")
    let recp_name = document.getElementById("std_name").value;
    let authby = document.getElementById("auth").value;
    let theclass = document.getElementById("class_dept").value;
    let theachiev = document.getElementById("achiev").value;
    let theauthdate = document.getElementById("auth_date").value;

    if (recp_name=="" || authby=="" || theclass=="" || theachiev=="" || theauthdate=="") {
        alert("Enter all the fields");
    } 
    else {
        var new_name = document.getElementById("css_name")
    new_name.innerText=recp_name
    
    var new_auth = document.getElementById("css_authority")
    new_auth.innerText=authby

    var new_class = document.getElementById("css_class")
    new_class.innerText=theclass

    var new_achiev = document.getElementById("css_achiev")
    new_achiev.innerText=theachiev

    var new_authdate = document.getElementById("css_date")
    new_authdate.innerText=theauthdate

    document.getElementById("re_generated_cert").style.display="block";
    document.getElementById("form_for_cert").style.display="none";
    }

    
}

function makeagain()
{
    document.getElementById("re_generated_cert").style.display="none";
    document.getElementById("form_for_cert").style.display="block";

}

function printcert()
{
    var thebody = document.getElementById("body").innerHTML;
    var thedata = document.getElementById("new_certi_data").innerHTML;
    document.getElementById("body").innerHTML=thedata;
    window.print();
    document.getElementById("body").innerHTML=thebody;
}