// =========================
// 詳細表示
// =========================

function showPlayerDetail(name){

  const player =
    players.find(
      p => p.name === name
    );

  if(!player) return;


  const list =
    document.getElementById("playerList");

  const detail =
    document.getElementById("playerDetail");


  list.style.display = "none";

  detail.classList.remove("hidden");


  // Amazonリンク
  let mouseHTML = `
    ${player.mouse}
  `;


  if(player.mouseLink){

    mouseHTML += `

      <br>

      <a
        href="${player.mouseLink}"
        target="_blank"
        rel="noopener noreferrer"
        class="amazon-button"
        onclick="event.stopPropagation()"
      >
        Amazonで見る ↗
      </a>

    `;

  }


  detail.innerHTML = `


  <div class="detail-header">

    <div class="detail-name">
      ${player.name}
    </div>

    <div class="detail-team">
      ${player.team}
    </div>

  </div>



  <div class="detail-section">

    <h3>🎯 感度設定</h3>


    <div class="detail-grid">


      <div class="stat">
        <span class="stat-label">
          ROLE
        </span>

        <span class="stat-value">
          ${player.role}
        </span>
      </div>



      <div class="stat">
        <span class="stat-label">
          DPI
        </span>

        <span class="stat-value">
          ${player.dpi}
        </span>
      </div>



      <div class="stat">
        <span class="stat-label">
          SENSITIVITY
        </span>

        <span class="stat-value">
          ${player.sens}
        </span>
      </div>



      <div class="stat">
        <span class="stat-label">
          eDPI
        </span>

        <span class="stat-value">
          ${getEDPI(player).toFixed(1)}
        </span>
      </div>


    </div>

  </div>




  <div class="detail-section">

    <h3>🖱️ デバイス</h3>


    <div class="detail-grid">


      <div class="stat">

        <span class="stat-label">
          MOUSE
        </span>


        <span class="stat-value">
          ${mouseHTML}
        </span>

      </div>



      <div class="stat">

        <span class="stat-label">
          MOUSE PAD
        </span>


        <span class="stat-value">
          ${player.mousepad}
        </span>

      </div>


    </div>


  </div>




  <button
    class="back-button"
    onclick="closePlayerDetail()"
  >
    ← プロ一覧に戻る
  </button>



  `;


}
