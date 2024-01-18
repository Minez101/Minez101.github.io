function Navbar()
{
  return `<nav>
  <a href="index.html">Home</a>
  <a href="Aboutus.html">About us</a>
  <a href="ourservices.html"> Our services</a>
  <a href="Patients&visitors.html">Patients & Visitors</a>
  <a href="GParea.html">GP Area</a>
  
  </nav>`;




}
function Footer1()
{
   return` <footer class="footer1">
   <div class="footer1imageswrap">
   <a href="https://www.nhs.uk/nhs-services/urgent-and-emergency-care-services/when-to-use-111/">
   <img class="Onelogo" src="Images/Call 111.png" alt="111logo">
   </a>
   
   <a href="https://www.blood.co.uk/">
       <img class="blood" src="Images/blood.png" alt="blood">
       </a>

       <a href="https://www.cqc.org.uk/">
           <img class="care" src="Images/care.png" alt="care">
           </a>

           <a href="https://www.organdonation.nhs.uk/">
               <img class="Organ" src="Images/Organ.png" alt="Organ">
               </a>

               <a href="https://www.organdonation.nhs.uk/">
                   <img class="Facebook" src="Images/Facebook.png" alt="Facebook">
                   </a>

                   <a href="https://www.organdonation.nhs.uk/">
                       <img class="Twitter" src="Images/Twitter.png" alt="Twitter">
                       </a>
   
                   </div>
 </footer>`


}
function Footer2()
{
  return`<footer class="footer2">

  <p>Terms of use</p> <p>Data Protection</p> <p>Accessibilty statement</p> <p>Site Map</p>  <p>Consultant</p>


</footer>`



}

function buildCal(m, y, cM, cH, cDW, cD, brdr){
    var mn=['January','February','March','April','May','June','July','August','September','October','November','December'];
    var dim=[31,0,31,30,31,30,31,31,30,31,30,31];
     
    var oD = new Date(y, m-1, 1); //DD replaced line to fix date bug when current day is 31st
    oD.od=oD.getDay()+1; //DD replaced line to fix date bug when current day is 31st
     
    var todaydate=new Date() //DD added
    var scanfortoday=(y==todaydate.getFullYear() && m==todaydate.getMonth()+1)? todaydate.getDate() : 0 //DD added
     
    dim[1]=(((oD.getFullYear()%100!=0)&&(oD.getFullYear()%4==0))||(oD.getFullYear()%400==0))?29:28;
    var t='<div class="'+cM+'"><table class="'+cM+'" cols="7" cellpadding="0" border="'+brdr+'" cellspacing="0"><tr align="center">';
    t+='<td colspan="7" align="center" class="'+cH+'">'+mn[m-1]+' - '+y+'</td></tr><tr align="center">';
    for(s=0;s<7;s++)t+='<td class="'+cDW+'">'+"SMTWTFS".substr(s,1)+'</td>';
    t+='</tr><tr align="center">';
    for(i=1;i<=42;i++){
    var x=((i-oD.od>=0)&&(i-oD.od<dim[m-1]))? i-oD.od+1 : '&nbsp;';
    if (x==scanfortoday) //DD added
    x='<span id="today">'+x+'</span>' //DD added
    t+='<td class="'+cD+'">'+x+'</td>';
    if(((i)%7==0)&&(i<36))t+='</tr><tr align="center">';
    }
    return t+='</tr></table></div>';
    }

    function anOffer(){
        var currdate = new Date()
        var currday = currdate.getDay()
        if (currday == 0){ document.writeln ("Sunday . <span class=open>Opening Times</span> . 10:00 AM - 4:00 PM")}
        if (currday == 1){ document.writeln("Monday . <span class=open>Opening Times</span> . 6:00 AM - 11:00 PM")}
        if (currday == 2){ document.writeln("Tuesday . <span class=open>Opening Times</span> . 6:00 AM - 11:00 PM")}
        if (currday == 3){ document.writeln("Wednesday . <span class=open>Opening Times</span> . 6:00 AM - 11:00 PM")}
        if (currday == 4){ document.writeln("Thursady . <span class=open>Opening Times</span> . 6:00 AM - 11:00 PM")}
        if (currday == 5){ document.writeln("Friday . <span class=open>Opening Times</span> . 6:00 AM - 11:00 PM")}
        if (currday == 6){ document.writeln("Saturday . <span class=open>Opening Times</span> . 6:00 AM - 8:00 PM")}
        return day
       
    }
