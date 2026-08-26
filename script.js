* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}


body {

  font-family:
    Arial,
    "Noto Sans JP",
    sans-serif;

  background:
    #0b0d12;

  color:
    #ffffff;

  min-height:100vh;

}



header {

  text-align:center;

  padding:40px 20px;

  border-bottom:
  1px solid #222;

}



header h1 {

  font-size:32px;

  margin-bottom:10px;

}



header p {

  color:#aaa;

}




main {

  width:90%;

  max-width:1200px;

  margin:30px auto;

}




.search-area {

  display:flex;

  flex-wrap:wrap;

  gap:12px;

  margin-bottom:20px;

}




input,
select,
button {


  background:#151922;

  color:white;

  border:

  1px solid #333;

  border-radius:8px;

  padding:12px;

  font-size:14px;


}




input {

  flex:1;

  min-width:220px;

}



button {

  cursor:pointer;

}



button:hover {

  opacity:.8;

}




.count {

  margin-bottom:15px;

  color:#aaa;

}



#resultCount {

  color:white;

  font-weight:bold;

}




.player-list {

  display:grid;

  grid-template-columns:

  repeat(auto-fit,minmax(260px,1fr));

  gap:20px;

}




.player-card {


  background:#151922;


  border:

  1px solid #252b38;


  border-radius:14px;


  padding:20px;


  cursor:pointer;


  transition:.2s;


}



.player-card:hover {

  transform:translateY(-5px);

  border-color:#ff4655;

}




.player-name {

  font-size:24px;

  font-weight:bold;

}



.player-team {

  color:#aaa;

  margin:8px 0 20px;

}




.player-info {


  display:grid;

  gap:10px;


}




.stat {


  display:flex;

  justify-content:space-between;


  background:#0f1219;


  padding:10px;


  border-radius:8px;


}



.stat-label {

  color:#888;

}



.stat-value {

  font-weight:bold;

}





.hidden {

  display:none;

}




.detail-header {

  text-align:center;

  margin-bottom:30px;

}



.detail-name {

  font-size:36px;

  font-weight:bold;

}



.detail-team {

  color:#aaa;

}



.detail-section {


  margin-bottom:25px;


}



.detail-section h3 {


  margin-bottom:15px;


}




.detail-grid {


  display:grid;


  grid-template-columns:

  repeat(auto-fit,minmax(200px,1fr));


  gap:15px;


}




.amazon-button {


  display:inline-block;


  margin-top:8px;


  padding:8px 14px;


  background:#ff9900;


  color:#000;


  border-radius:6px;


  text-decoration:none;


  font-weight:bold;


}




.back-button {


  margin-top:20px;


  width:100%;


  background:#ff4655;


}




.edpi-calculator {


  margin-top:50px;


  padding:25px;


  background:#151922;


  border-radius:14px;


}



.edpi-calculator h2 {


  margin-bottom:20px;


}





footer {


  text-align:center;


  padding:30px;


  color:#777;


}



footer a {


  color:#aaa;


  margin:0 10px;


}





@media(max-width:600px){


header h1{

font-size:24px;

}



.detail-name{

font-size:28px;

}


}
