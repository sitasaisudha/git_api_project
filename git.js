let user;
let imgg;
let re;
let tab2;
let rows;
let h;
function getdata(){
   
    user = document.getElementById("uname").value; 
    fetch_data(user);  
}
function fetch_data(user){
    fetch('https://api.github.com/users/'+user)
  .then(response => response.json())
  .then(data =>handeldata(data) );

}
function handeldata(data){
  let l = document.getElementById("lbl").style.visibility ="hidden";
  

  
  uname.style.visibility="hidden";
  let bt = document.getElementById("btn1").style.visibility="hidden";
  let t = document.getElementById('tab').style.visibility = "visible";
  let display1 = document.getElementById("v1data");
   display1.innerHTML =  data["login"];
  let display2 = document.getElementById("v2data");
  display2.innerHTML =   data["followers"];
  let display3 = document.getElementById("v3data");
  display3.innerHTML =   data["following"];
  let display4 = document.getElementById("v4data");
  p = data["public_repos"]
  display4.innerHTML =  p;
  imgg = document.getElementById('img')

  imgg.src = data.avatar_url

  fetch(data.repos_url)
  .then(responses => responses.json())
  // .then(datum => console.log(datum) );
  .then(datum => operatedata(datum) );
  tab2 = document.getElementById("repo");
 
   
  }

  function operatedata(datum){
    h = document.getElementById("r-t-h").style.visibility = "visible";

    tab2.style.visibility="visible";

    for(let i =0; i <p; i++){
   const d = new Date(datum[i].pushed_at);
   const u = new Date(datum[i].pushed_at);
   let dif = d.getTime() - u.getTime()
   dif = dif /1000*60*60*24
   
  //fetching no of files
  let rname = datum[i].name; 
  fetch('https://api.github.com/repos/'+ user+'/'+rname+'/contents')
 .then(response1 => response1.json())
 .then(data1 => handeldata1(data1) )
 function handeldata1(data1){
  fil = data1['length']
  console.log(fil);
  rows =  `<tr>
        <td>${datum[i].name} </td>
        <td>${datum[i].forks}</td>
        <td>${d.getDate()+'/'+d.getMonth() +'/'+ d.getFullYear()}</td>
        <td>${u.getDate()+'/'+u.getMonth() +'/'+ u.getFullYear()}</td>
        <td>${dif}</td>
        <td>${fil}</td>
 
        </tr>`
      tab2.innerHTML += rows

 }
 }

  }
  

  
  

