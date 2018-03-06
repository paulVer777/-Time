 
 
 
function counting()
 {
 
  var today=new Date();
 
 var days=today.getDate();
 var months=today.getMonth()+1;
 var years=today.getFullYear();
 
 var hours=today.getHours();
 var minutes=today.getMinutes();
 var seconds=today.getSeconds();
 
 if(seconds<10)seconds="0"+seconds;
 if(minutes<10) minutes="0"+minutes;
 if(hours<10) hours="0"+hours;
 if(days<10) days="0"+days;
 if(months<10) months="0"+months;

  document.getElementById("timer").innerHTML=days+"."+months+"."+years+"  |  "+hours+":"+minutes+":"+seconds;
 
  setTimeout("counting()",1000);
 
 
 }
 
 
