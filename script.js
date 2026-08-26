const players = [
  {
    name:"absol",
    team:"ZETA DIVISION",
    country:"Japan",
    role:"Duelist",
    dpi:800,
    sens:0.22,
    mouse:"Logicool G PRO X SUPERLIGHT 2",
    mouseLink:"https://link.amazon/B06kH5b1r",
    mousepad:"Nachoneko × ふもコレ"
  },

  {
    name:"Meiy",
    team:"DetonatioN FocusMe",
    country:"Japan",
    role:"Duelist",
    dpi:800,
    sens:0.173,
    mouse:"Razer Viper V3 Pro",
    mouseLink:"https://link.amazon/B02B5we6v",
    mousepad:"meiy glasspad"
  },

  {
    name:"SSeeS",
    team:"DetonatioN FocusMe",
    country:"Japan",
    role:"Controller",
    dpi:800,
    sens:0.211,
    mouse:"WLMOUSE Beast X Max",
    mouseLink:"https://link.amazon/B0h4S0qSv",
    mousepad:"ARTISAN Hien Otsu V2"
  }
];


function getEDPI(player){
  return player.dpi * player.sens;
}



function renderPlayers(list){

 const box=document.getElementById("playerList");

 if(!box)return;

 box.innerHTML="";

 document.getElementById("resultCount").textContent =
 `${list.length}人`;


 list.forEach(player=>{

  const card=document.createElement("div");

  card.className="player-card";

  card.onclick=()=>{
    showPlayerDetail(player.name);
  };


  card.innerHTML=`

  <div class="player-name">
  ${player.name}
  </div>

  <div>
  ${player.team}
  </div>

  <p>
  eDPI ${getEDPI(player).toFixed(1)}
  </p>

  `;


  box.appendChild(card);

 });

}




function showPlayerDetail(name){

 const player =
 players.find(p=>p.name===name);


 const list=document.getElementById("playerList");
 const detail=document.getElementById("playerDetail");


 list.style.display="none";

 detail.classList.remove("hidden");


 let mouseHTML=player.mouse;


 if(player.mouseLink){

 mouseHTML+=`

 <br>

 <a class="amazon-button"
 href="${player.mouseLink}"
 target="_blank">

 Amazonで見る ↗

 </a>

 `;

 }


 detail.innerHTML=`

 <h2>${player.name}</h2>

 <p>${player.team}</p>


 <hr>


 <p>
 ROLE : ${player.role}
 </p>


 <p>
 DPI : ${player.dpi}
 </p>


 <p>
 SENS : ${player.sens}
 </p>


 <p>
 eDPI : ${getEDPI(player).toFixed(1)}
 </p>



 <p>
 MOUSE
 </p>

 <p>
 ${mouseHTML}
 </p>



 <p>
 MOUSE PAD
 </p>

 <p>
 ${player.mousepad}
 </p>



 <button onclick="closePlayerDetail()">

 ← プロ一覧に戻る

 </button>


 `;

}




function closePlayerDetail(){

 document.getElementById("playerDetail")
 .classList.add("hidden");


 document.getElementById("playerList")
 .style.display="grid";

}




document.addEventListener(
"DOMContentLoaded",
()=>{

 renderPlayers(players);

});
