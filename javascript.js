function gdd(){
    var dateMonth=prompt("Give Date of Birth Ex:DD/MM/YYYY");
    //get date and month name from prompt
    //alert("dateMonth");
    switch (dateMonth){
        case'24/11/2001':
        birthday="Pavan";
        break;
        case'15/02/2005':
        birthday="Gangothri";
        break;
        case'13/09/2002':
        birthday="LovaRaju";
        break;
        case'01/01/2001':
        birthday="Sarath";
        break;
        case'20/12/2002':
        birthday="Raju";
        break;
        default:
            birthday="No One Birthday To Day";
    }
    document.getElementById("chang_Color_id").innerHTML= "Today birthday is"+ birthday 
}