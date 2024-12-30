const string="";
const select=document.getElementById("selector");
const arrow=document.getElementById("arrows");
const list=document.getElementById("list");
const options=document.getElementsByClassName("options");




 select.addEventListener("click",()=>{
    console.log(list.classList);
    list.classList.toggle("hide");//list contain only one class that is hide
    arrow.classList.toggle("rotate");
    
   
 });
for(option of options)
{
    option.addEventListener("click",function(e){
        select.innerText=e.target.textContent;//u can use this.textcontent instead of e.target
        list.classList.toggle("hide");
        arrow.classList.toggle("rotate");
       
    })
}
