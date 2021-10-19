var array =["istockphoto-1249041775-170667a.jpg","download.jfif","download (1).jfif","picture-beautiful-view-birds-260nw-1836263689.jpg","images.jfif","https://media.istockphoto.com/photos/boy-draws-with-a-brush-a-big-light-bulb-concept-of-innovation-and-picture-id1133176165?k=20&m=1133176165&s=612x612&w=0&h=j7J93Lkm7npuBWfww93Gkg9z4rko2FXJ4ThFGGrVzDE="];
var index=Math.floor(Math.random()*array.length);

function Getindex(array){
    var index=Math.floor(Math.random()*array.length);
    return index;
}
var btn=document.getElementById('butt');
var pic=document.getElementById('pic');
var picc=document.getElementById('picc');


//btn.addEventListener('click',()=>{
   // pic.src=array[Getindex(array)];
    //console.log(Getindex(array));
//});
let i = 0 ;
btn.addEventListener('click', ()=>{
   picc.innerHTML="picture "+(i+1);
    pic.src=array[i];
    i++;
    if (i === 6){
     i = 0 ;
    }

});
/*let i = 0 ;
function next() {
   picc.innerHTML="picture "+(i+1);
   pic.src=array[i];
   i++;
   if (i === 6){
    i = 0 ;
    
   }
}*/