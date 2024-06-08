const monthel=document.getElementById("month-name");
const dayel=document.getElementById("day-name");
const dayNumel=document.getElementById("day-number");
const yrel=document.getElementById("year");
const date=new Date();
const month=date.getMonth()
monthel.innerText=date.toLocaleDateString("en",{
  month:"long"
})
dayel.innerText=date.toLocaleDateString("en",{
  weekday:"long"
})
dayNumel.innerText = date.getDate()

yrel.innerText = date.getFullYear()
