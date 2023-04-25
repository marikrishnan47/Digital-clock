function display () {
    
let dateTime= new Date ();
let hrs=dateTime.getHours();
let min=dateTime.getMinutes();
let sec=dateTime.getSeconds();
let am=document.getElementById('AM')
let pm=document.getElementById('PM')

if (hrs>=12){
    am.style.background="red"
}
else{
    pm.style.background="red"
}
hrs=hrs<10 ?"0"+hrs : hrs;
min=min<10 ?"0"+min : min;
sec=sec<10 ?"0"+sec : sec;
document.getElementById('hours').innerHTML=hrs;
document.getElementById('min').innerHTML=min;
document.getElementById('sec').innerHTML=sec;

}
setInterval(display,10)

function display1() {
    
    let dateTime1= new Date ();
     let days= dateTime1.getMonth()+1;
     let mon=dateTime1.getDate();
     let year=dateTime1.getFullYear();


     days=days<10 ?"0"+days :days;
     mon=mon<10 ?"0"+mon :mon;
document.getElementById('dayss').innerHTML=days;
document.getElementById('months').innerHTML=mon;
document.getElementById('Fyear').innerHTML=year;

}
  setInterval(display1,10)

  let sun=document.getElementById('sunday')
  let mon=document.getElementById('monday')
  let tues=document.getElementById('Tuesday')
  let wed=document.getElementById('Wednesday')
  let thu=document.getElementById('Thursday')
  let fri=document.getElementById('friday')
  let sat=document.getElementById('Saturday')


  let dateTime1= new Date ();
  switch(dateTime1.getDay()){
    case 0:
    sun.style.background='red'
    break;
    case 1:
    mon.style.background='red'
    break;
    case 2:
    tues.style.background='red'
     break;
     case 3:
    wed.style.background='red'
    break;
      case 4:
    thu.style.background='red'
    break;
      case 5:
    fri.style.background='red'
    break;
      case 6:
    sat.style.background='red'
    break;
    default:
     break;   
    
  }
 