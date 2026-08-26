// =========================
// eDPI計算
// =========================

function getEDPI(player) {

  const dpi = Number(player.dpi);
  const sens = Number(player.sens);

  if (
    !Number.isFinite(dpi) ||
    !Number.isFinite(sens) ||
    dpi <= 0 ||
    sens <= 0
  ) {
    return null;
  }

  return dpi * sens;
}


// =========================
// 文字列を安全に比較
// =========================

function normalize(value) {

  if (value === null || value === undefined) {
    return "";
  }

  return String(value)
    .trim()
    .toLowerCase();

}


// =========================
// 選手一覧表示
// =========================

function renderPlayers(list) {

  const container =
    document.getElementById("playerList");

  if (!container) {
    console.error("playerList が見つかりません");
    return;
  }

  container.innerHTML = "";

  const resultCount =
    document.getElementById("resultCount");

  if (resultCount) {
    resultCount.textContent =
      `${list.length}人`;
  }


  // 0人の場合
  if (list.length === 0) {

    container.innerHTML = `
      <div class="no-results">
        <p>該当する選手が見つかりません</p>
        <button
          type="button"
          onclick="resetFilters()"
        >
          絞り込みをリセット
        </button>
      </div>
    `;

    return;
  }


  list.forEach(player => {

    const edpi =
      getEDPI(player);


    const card =
      document.createElement("div");

    card.className =
      "player-card";


    card.addEventListener(
      "click",
      () => {
        showPlayerDetail(player.name);
      }
    );


    const dpiText =
      player.dpi === null ||
      player.dpi === undefined
        ? "未登録"
        : Number(player.dpi).toLocaleString();


    const sensText =
      player.sens === null ||
      player.sens === undefined
        ? "未登録"
        : player.sens;


    const edpiText =
      edpi === null
        ? "未登録"
        : edpi.toFixed(1);


    card.innerHTML = `

      <div class="player-name">
        ${player.name}
      </div>

      <div class="player-team">
        ${player.team}
      </div>

      <div class="player-info">

        <div class="stat">
          <span class="stat-label">
            ROLE
          </span>

          <span class="stat-value">
            ${player.role || "未登録"}
          </span>
        </div>


        <div class="stat">
          <span class="stat-label">
            DPI
          </span>

          <span class="stat-value">
            ${dpiText}
          </span>
        </div>


        <div class="stat">
          <span class="stat-label">
            SENS
          </span>

          <span class="stat-value">
            ${sensText}
          </span>
        </div>


        <div class="stat">
          <span class="stat-label">
            eDPI
          </span>

          <span class="stat-value">
            ${edpiText}
          </span>
        </div>

      </div>

    `;


    container.appendChild(card);

  });

}


// =========================
// 絞り込み
// =========================

function filterPlayers() {

  const searchInput =
    document.getElementById("searchInput");

  const regionFilter =
    document.getElementById("regionFilter");

  const countryFilter =
    document.getElementById("countryFilter");

  const roleFilter =
    document.getElementById("roleFilter");

  const edpiFilter =
    document.getElementById("edpiFilter");

  const sensFilter =
    document.getElementById("sensFilter");


  const search =
    normalize(
      searchInput
        ? searchInput.value
        : ""
    );


  const region =
    normalize(
      regionFilter
        ? regionFilter.value
        : "all"
    );


  const country =
    normalize(
      countryFilter
        ? countryFilter.value
        : "all"
    );


  const role =
    normalize(
      roleFilter
        ? roleFilter.value
        : "all"
    );


  const edpiValue =
    normalize(
      edpiFilter
        ? edpiFilter.value
        : "all"
    );


  const sensValue =
    normalize(
      sensFilter
        ? sensFilter.value
        : "all"
    );


  const filtered =
    players.filter(player => {


      // =========================
      // 検索
      // =========================

      const playerName =
        normalize(player.name);

      const playerTeam =
        normalize(player.team);

      const searchMatch =
        search === "" ||
        playerName.includes(search) ||
        playerTeam.includes(search);


      // =========================
      // Region
      // =========================

      const playerRegion =
        normalize(player.region);


      const regionMatch =
        region === "" ||
        region === "all" ||
        region === "すべて" ||
        playerRegion === region ||
        playerRegion.includes(region) ||
        region.includes(playerRegion);


      // =========================
      // Country
      // =========================

      const playerCountry =
        normalize(player.country);


      const countryMatch =
        country === "" ||
        country === "all" ||
        country === "すべて" ||
        playerCountry === country ||
        playerCountry.includes(country) ||
        country.includes(playerCountry);


      // =========================
      // Role
      // =========================

      const playerRole =
        normalize(player.role);


      const roleMatch =
        role === "" ||
        role === "all" ||
        role === "すべて" ||
        playerRole === role ||
        playerRole.includes(role) ||
        role.includes(playerRole);


      // =========================
      // eDPI
      // =========================

      const edpi =
        getEDPI(player);


      let edpiMatch = true;


      if (
        edpiValue !== "" &&
        edpiValue !== "all" &&
        edpiValue !== "すべて"
      ) {

        if (edpi === null) {

          edpiMatch = false;

        } else {

          switch (edpiValue) {

            case "low":
            case "低":
            case "100-200":

              edpiMatch =
                edpi >= 100 &&
                edpi < 200;

              break;


            case "mid":
            case "medium":
            case "中":
            case "200-300":

              edpiMatch =
                edpi >= 200 &&
                edpi < 300;

              break;


            case "high":
            case "高":
            case "300-400":

              edpiMatch =
                edpi >= 300 &&
                edpi < 400;

              break;


            case "veryhigh":
            case "very-high":
            case "400+":
            case "400以上":

              edpiMatch =
                edpi >= 400;

              break;

            default:

              // HTML側のvalueが違っていても
              // いきなり全員0人にしない
              edpiMatch = true;

              break;
          }

        }

      }


      // =========================
      // Sensitivity
      // =========================

      const sens =
        Number(player.sens);


      let sensMatch = true;


      if (
        sensValue !== "" &&
        sensValue !== "all" &&
        sensValue !== "すべて"
      ) {

        if (!Number.isFinite(sens)) {

          sensMatch = false;

        } else {

          switch (sensValue) {

            case "low":
            case "低":
            case "0.10-0.20":

              sensMatch =
                sens >= 0.10 &&
                sens < 0.20;

              break;


            case "mid":
            case "medium":
            case "中":
            case "0.20-0.30":

              sensMatch =
                sens >= 0.20 &&
                sens < 0.30;

              break;


            case "high":
            case "高":
            case "0.30-0.40":

              sensMatch =
                sens >= 0.30 &&
                sens < 0.40;

              break;


            case "veryhigh":
            case "very-high":
            case "0.40+":
            case "0.40以上":

              sensMatch =
                sens >= 0.40;

              break;


            default:

              // valueが想定外なら
              // 全員を消さない
              sensMatch = true;

              break;

          }

        }

      }


      return (
        searchMatch &&
        regionMatch &&
        countryMatch &&
        roleMatch &&
        edpiMatch &&
        sensMatch
      );

    });


  console.log(
    "全選手:",
    players.length,
    "検索結果:",
    filtered.length
  );


  renderPlayers(filtered);

}


// =========================
// 検索
// =========================

function searchPlayers() {

  filterPlayers();

}


// =========================
// フィルターリセット
// =========================

function resetFilters() {

  const ids = [
    "searchInput",
    "regionFilter",
    "countryFilter",
    "roleFilter",
    "edpiFilter",
    "sensFilter"
  ];


  ids.forEach(id => {

    const element =
      document.getElementById(id);

    if (!element) return;


    if (
      element.tagName === "INPUT"
    ) {

      element.value = "";

    } else {

      element.value = "all";

    }

  });


  renderPlayers(players);

}


// =========================
// eDPI計算機
// =========================

function calculateEDPI() {

  const dpiInput =
    document.getElementById("dpiInput");

  const sensInput =
    document.getElementById("sensInput");

  const result =
    document.getElementById("edpiResult");


  if (
    !dpiInput ||
    !sensInput ||
    !result
  ) {
    return;
  }


  const dpi =
    Number(dpiInput.value);

  const sens =
    Number(sensInput.value);


  if (
    !Number.isFinite(dpi) ||
    !Number.isFinite(sens) ||
    dpi <= 0 ||
    sens <= 0
  ) {

    result.textContent = "0.0";

    return;
  }


  const edpi =
    dpi * sens;


  result.textContent =
    edpi.toFixed(1);

}


// =========================
// 選手詳細ページ
// =========================

function showPlayerDetail(playerName) {

  const player =
    players.find(
      p =>
        normalize(p.name) ===
        normalize(playerName)
    );


  if (!player) {
    console.error(
      "選手が見つかりません:",
      playerName
    );
    return;
  }


  const list =
    document.getElementById("playerList");

  const detail =
    document.getElementById("playerDetail");


  if (!list || !detail) {

    console.error(
      "playerList または playerDetail が見つかりません"
    );

    return;
  }


  list.style.display = "none";

  detail.classList.remove("hidden");


  const edpi =
    getEDPI(player);


  const dpiText =
    player.dpi === null ||
    player.dpi === undefined
      ? "未登録"
      : Number(player.dpi).toLocaleString();


  const sensText =
    player.sens === null ||
    player.sens === undefined
      ? "未登録"
      : player.sens;


  const edpiText =
    edpi === null
      ? "未登録"
      : edpi.toFixed(1);


  let mouseHTML =
    player.mouse || "未登録";


  const mouseLink =
    getMouseLink(player);


  if (mouseLink) {

    mouseHTML += `

      <br>

      <a
        href="${mouseLink}"
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
            ${player.role || "未登録"}
          </span>

        </div>


        <div class="stat">

          <span class="stat-label">
            DPI
          </span>

          <span class="stat-value">
            ${dpiText}
          </span>

        </div>


        <div class="stat">

          <span class="stat-label">
            SENSITIVITY
          </span>

          <span class="stat-value">
            ${sensText}
          </span>

        </div>


        <div class="stat">

          <span class="stat-label">
            eDPI
          </span>

          <span class="stat-value">
            ${edpiText}
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
            MOUSEPAD
          </span>

          <span class="stat-value">
            ${player.mousepad || "未登録"}
          </span>

        </div>

      </div>

    </div>


    <button
      class="back-button"
      type="button"
      onclick="closePlayerDetail()"
    >
      ← プロ一覧に戻る
    </button>

  `;

}


// =========================
// 選手詳細を閉じる
// =========================

function closePlayerDetail() {

  const list =
    document.getElementById("playerList");

  const detail =
    document.getElementById("playerDetail");


  if (!list || !detail) {
    return;
  }


  detail.classList.add("hidden");

  list.style.display = "grid";

}


// =========================
// イベント設定
// =========================

document.addEventListener(
  "DOMContentLoaded",
  () => {


    // =========================
    // 初期表示
    // =========================

    renderPlayers(players);


    // =========================
    // 検索
    // =========================

    const searchInput =
      document.getElementById(
        "searchInput"
      );


    if (searchInput) {

      searchInput.addEventListener(
        "input",
        filterPlayers
      );

    }


    // =========================
    // Region
    // =========================

    const regionFilter =
      document.getElementById(
        "regionFilter"
      );


    if (regionFilter) {

      regionFilter.addEventListener(
        "change",
        filterPlayers
      );

    }


    // =========================
    // Country
    // =========================

    const countryFilter =
      document.getElementById(
        "countryFilter"
      );


    if (countryFilter) {

      countryFilter.addEventListener(
        "change",
        filterPlayers
      );

    }


    // =========================
    // Role
    // =========================

    const roleFilter =
      document.getElementById(
        "roleFilter"
      );


    if (roleFilter) {

      roleFilter.addEventListener(
        "change",
        filterPlayers
      );

    }


    // =========================
    // eDPI
    // =========================

    const edpiFilter =
      document.getElementById(
        "edpiFilter"
      );


    if (edpiFilter) {

      edpiFilter.addEventListener(
        "change",
        filterPlayers
      );

    }


    // =========================
    // Sensitivity
    // =========================

    const sensFilter =
      document.getElementById(
        "sensFilter"
      );


    if (sensFilter) {

      sensFilter.addEventListener(
        "change",
        filterPlayers
      );

    }


    console.log(
      "VALORANT Sensitivity Database:",
      players.length,
      "人読み込み完了"
    );

  }
);
