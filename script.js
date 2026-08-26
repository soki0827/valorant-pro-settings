const players = [

  {
    name: "absol",
    team: "ZETA DIVISION",
    country: "JP",
    region: "Pacific",
    role: "Duelist",
    dpi: 800,
    sens: 0.22,
    mouse: "Logicool G PRO X SUPERLIGHT 2",
    mousepad: "Nachoneko × ふもコレ",
  },

  {
    name: "eko",
    team: "ZETA DIVISION",
    country: "KR",
    region: "Pacific",
    role: "Flex",
    dpi: 800,
    sens: 0.27,
    mouse: "Razer Viper V3 Pro",
    mousepad: "ARTISAN NINJA FX Zero",
  },

  {
    name: "Laz",
    team: "ZETA DIVISION",
    country: "JP",
    region: "Pacific",
    role: "未登録",
    dpi: 1600,
    sens: 0.136,
    mouse: "未登録",
    mousepad: "未登録",
  },

  {
    name: "SyouTa",
    team: "ZETA DIVISION",
    country: "JP",
    region: "Pacific",
    role: "Flex",
    dpi: 800,
    sens: 0.4,
    mouse: "未登録",
    mousepad: "未登録",
  },

  {
    name: "SugarZ3ro",
    team: "ZETA DIVISION",
    country: "JP",
    region: "Pacific",
    role: "Controller",
    dpi: 800,
    sens: 0.225,
    mouse: "未登録",
    mousepad: "未登録",
  },

  {
    name: "xdll",
    team: "ZETA DIVISION",
    country: "JP",
    region: "Pacific",
    role: "Initiator",
    dpi: 800,
    sens: 0.175,
    mouse: "Razer Viper V4 Pro",
    mousepad: "Pulsar eS Saturn Pro",
  },

  {
    name: "t3xture",
    team: "Gen.G",
    country: "KR",
    region: "Pacific",
    role: "Duelist",
    dpi: 800,
    sens: 0.45,
    mouse: "未登録",
    mousepad: "未登録",
  },

  {
    name: "something",
    team: "Paper Rex",
    country: "RU",
    region: "Pacific",
    role: "Duelist",
    dpi: 800,
    sens: 0.58,
    mouse: "未登録",
    mousepad: "未登録",
  },

  {
    name: "TenZ",
    team: "Sentinels",
    country: "CA",
    region: "Americas",
    role: "Flex",
    dpi: 800,
    sens: 0.22,
    mouse: "未登録",
    mousepad: "未登録",
  },

  {
    name: "Akame",
    team: "DetonatioN FocusMe",
    country: "JP",
    region: "Pacific",
    role: "Initiator",
    dpi: 800,
    sens: 0.185,
    mouse: "LAMZU Maya X Light Pink",
    mousepad: "ARTISAN NINJA FX 99式 SOFT",
  },

  {
    name: "Caedye",
    team: "DetonatioN FocusMe",
    country: "JP",
    region: "Pacific",
    role: "Sentinel",
    dpi: 400,
    sens: 0.35,
    mouse: "Razer Viper V4 Pro",
    mousepad: "ARTISAN NINJA FX Zero",
  },

  {
    name: "Meiy",
    team: "DetonatioN FocusMe",
    country: "JP",
    region: "Pacific",
    role: "Duelist",
    dpi: 800,
    sens: 0.173,
    mouse: "Razer Viper V3 Pro",
    mousepad: "meiy glasspad",
  },

  {
    name: "SSeeS",
    team: "DetonatioN FocusMe",
    country: "JP",
    region: "Pacific",
    role: "Controller",
    dpi: 800,
    sens: 0.211,
    mouse: "WLMOUSE Beast X Max",
    mousepad: "ARTISAN NINJA FX Hayate Otsu V2",
  },

  {
    name: "Yatsuka",
    team: "DetonatioN FocusMe",
    country: "JP",
    region: "Pacific",
    role: "Duelist",
    dpi: 1600,
    sens: 0.08,
    mouse: "Finalmouse UltralightX",
    mousepad: "WALLHACK SP-004 Hatsune Miku",
  }

];


// ==============================
// 基本機能
// ==============================

function getEDPI(player) {
  return player.dpi * player.sens;
}


function getCountryName(country) {

  const countries = {
    JP: "🇯🇵 日本",
    KR: "🇰🇷 韓国",
    CA: "🇨🇦 カナダ",
    RU: "🇷🇺 ロシア",
    US: "🇺🇸 アメリカ",
    CN: "🇨🇳 中国"
  };

  return countries[country] || country;
}


// ==============================
// 選手一覧表示
// ==============================

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


  list.forEach(player => {

    const edpi =
      getEDPI(player);

    const card =
      document.createElement("div");

    card.className =
      "player-card";


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
            国籍
          </span>

          <span class="stat-value">
            ${getCountryName(player.country)}
          </span>
        </div>


        <div class="stat">
          <span class="stat-label">
            地域
          </span>

          <span class="stat-value">
            ${player.region}
          </span>
        </div>


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
            eDPI
          </span>

          <span class="stat-value">
            ${edpi.toFixed(1)}
          </span>
        </div>

      </div>

    `;


    // ==========================
    // 選手カードクリック
    // ==========================

    card.addEventListener(
      "click",
      function () {

        console.log(
          "クリック:",
          player.name
        );

        showPlayerDetail(
          player.name
        );

      }
    );


    container.appendChild(card);

  });

}


// ==============================
// 絞り込み
// ==============================

function filterPlayers() {

  const searchInput =
    document.getElementById("searchInput");

  const countryFilter =
    document.getElementById("countryFilter");

  const regionFilter =
    document.getElementById("regionFilter");

  const roleFilter =
    document.getElementById("roleFilter");

  const edpiFilter =
    document.getElementById("edpiFilter");

  const sensFilter =
    document.getElementById("sensFilter");


  const search =
    searchInput
      ? searchInput.value.toLowerCase()
      : "";


  const country =
    countryFilter
      ? countryFilter.value
      : "all";


  const region =
    regionFilter
      ? regionFilter.value
      : "all";


  const role =
    roleFilter
      ? roleFilter.value
      : "all";


  const edpiValue =
    edpiFilter
      ? edpiFilter.value
      : "all";


  const sensValue =
    sensFilter
      ? sensFilter.value
      : "all";


  const filtered =
    players.filter(player => {

      const edpi =
        getEDPI(player);


      const searchMatch =
        player.name
          .toLowerCase()
          .includes(search) ||

        player.team
          .toLowerCase()
          .includes(search);


      const countryMatch =
        country === "all" ||
        player.country === country;


      const regionMatch =
        region === "all" ||
        player.region === region;


      const roleMatch =
        role === "all" ||
        player.role === role;


      // --------------------------
      // eDPI
      // --------------------------

      let edpiMatch = true;


      if (edpiValue === "low") {

        edpiMatch =
          edpi >= 100 &&
          edpi < 200;

      }


      if (edpiValue === "mid") {

        edpiMatch =
          edpi >= 200 &&
          edpi < 300;

      }


      if (edpiValue === "high") {

        edpiMatch =
          edpi >= 300 &&
          edpi < 400;

      }


      if (edpiValue === "veryhigh") {

        edpiMatch =
          edpi >= 400;

      }


      // --------------------------
      // 感度
      // --------------------------

      let sensMatch = true;


      if (sensValue === "low") {

        sensMatch =
          player.sens >= 0.10 &&
          player.sens < 0.20;

      }


      if (sensValue === "mid") {

        sensMatch =
          player.sens >= 0.20 &&
          player.sens < 0.30;

      }


      if (sensValue === "high") {

        sensMatch =
          player.sens >= 0.30 &&
          player.sens < 0.40;

      }


      if (sensValue === "veryhigh") {

        sensMatch =
          player.sens >= 0.40;

      }


      return (

        searchMatch &&

        countryMatch &&

        regionMatch &&

        roleMatch &&

        edpiMatch &&

        sensMatch

      );

    });


  renderPlayers(filtered);

}


// ==============================
// 検索
// ==============================

function searchPlayers() {
  filterPlayers();
}


// ==============================
// eDPI計算
// ==============================

function calculateEDPI() {

  const dpiInput =
    document.getElementById(
      "dpiInput"
    );

  const sensInput =
    document.getElementById(
      "sensInput"
    );

  const result =
    document.getElementById(
      "edpiResult"
    );


  if (!dpiInput || !sensInput || !result) {
    return;
  }


  const dpi =
    Number(dpiInput.value);

  const sens =
    Number(sensInput.value);


  const edpi =
    dpi * sens;


  result.textContent =
    edpi.toFixed(1);

}


// ==============================
// 選手詳細ページ
// ==============================

function showPlayerDetail(playerName) {

  const player =
    players.find(
      p => p.name === playerName
    );


  if (!player) {

    console.error(
      "選手が見つかりません:",
      playerName
    );

    return;

  }


  const list =
    document.getElementById(
      "playerList"
    );

  const detail =
    document.getElementById(
      "playerDetail"
    );


  if (!list || !detail) {

    console.error(
      "playerList または playerDetail がありません"
    );

    return;

  }


  const edpi =
    getEDPI(player);


  // 一覧を隠す
  list.classList.add("hidden");


  // 詳細を表示
  detail.classList.remove("hidden");


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

      <h3>
        🎯 感度設定
      </h3>


      <div class="detail-grid">


        <div class="stat">

          <span class="stat-label">
            国籍
          </span>

          <span class="stat-value">
            ${getCountryName(player.country)}
          </span>

        </div>


        <div class="stat">

          <span class="stat-label">
            地域
          </span>

          <span class="stat-value">
            ${player.region}
          </span>

        </div>


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
            ${player.dpi.toLocaleString()}
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
            ${edpi.toFixed(1)}
          </span>

        </div>


      </div>

    </div>


    <div class="detail-section">

      <h3>
        🖱️ デバイス
      </h3>


      <div class="detail-grid">


        <div class="stat">

          <span class="stat-label">
            MOUSE
          </span>

          <span class="stat-value">
            ${player.mouse}
          </span>

        </div>


        <div class="stat">

          <span class="stat-label">
            MOUSEPAD
          </span>

          <span class="stat-value">
            ${player.mousepad}
          </span>

        </div>


      </div>

    </div>


    <button
      type="button"
      class="back-button"
      id="backToPlayersButton"
    >
      ← プロ一覧に戻る
    </button>

  `;


  // 戻るボタン
  const backButton =
    document.getElementById(
      "backToPlayersButton"
    );


  if (backButton) {

    backButton.addEventListener(
      "click",
      closePlayerDetail
    );

  }

}


// ==============================
// 一覧に戻る
// ==============================

function closePlayerDetail() {

  const list =
    document.getElementById(
      "playerList"
    );

  const detail =
    document.getElementById(
      "playerDetail"
    );


  if (!list || !detail) {
    return;
  }


  // 詳細を隠す
  detail.classList.add("hidden");


  // 一覧を表示
  list.classList.remove("hidden");

}


// ==============================
// ページ読み込み後
// ==============================

document.addEventListener(
  "DOMContentLoaded",
  function () {


    const searchInput =
      document.getElementById(
        "searchInput"
      );


    const countryFilter =
      document.getElementById(
        "countryFilter"
      );


    const regionFilter =
      document.getElementById(
        "regionFilter"
      );


    const roleFilter =
      document.getElementById(
        "roleFilter"
      );


    const edpiFilter =
      document.getElementById(
        "edpiFilter"
      );


    const sensFilter =
      document.getElementById(
        "sensFilter"
      );


    if (searchInput) {

      searchInput.addEventListener(
        "input",
        filterPlayers
      );

    }


    if (countryFilter) {

      countryFilter.addEventListener(
        "change",
        filterPlayers
      );

    }


    if (regionFilter) {

      regionFilter.addEventListener(
        "change",
        filterPlayers
      );

    }


    if (roleFilter) {

      roleFilter.addEventListener(
        "change",
        filterPlayers
      );

    }


    if (edpiFilter) {

      edpiFilter.addEventListener(
        "change",
        filterPlayers
      );

    }


    if (sensFilter) {

      sensFilter.addEventListener(
        "change",
        filterPlayers
      );

    }


    // 最初に全選手表示
    renderPlayers(players);

  }
);