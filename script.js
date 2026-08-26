// ============================================================
// VALORANT PRO SETTINGS
// script.js 完全版
// ============================================================


// ============================================================
// 選手データ
// ============================================================

const players = [

  // =========================
  // DETONATION FOCUSME
  // =========================

  {
    name: "Akame",
    team: "DetonatioN FocusMe",
    region: "Pacific",
    country: "Japan",
    role: "Initiator",
    dpi: 800,
    sens: 0.185,
    mouse: "LAMZU Maya X Light Pink",
    mousepad: "ARTISAN NINJA FX 99式 SOFT"
  },

  {
    name: "Caedye",
    team: "DetonatioN FocusMe",
    region: "Pacific",
    country: "Japan",
    role: "Sentinel",
    dpi: 400,
    sens: 0.35,
    mouse: "Razer Viper V4 Pro",
    mousepad: "ARTISAN NINJA FX Zero"
  },

  {
    name: "Meiy",
    team: "DetonatioN FocusMe",
    region: "Pacific",
    country: "Japan",
    role: "Duelist",
    dpi: 800,
    sens: 0.173,
    mouse: "Razer Viper V3 Pro",
    mousepad: "meiy glasspad"
  },

  {
    name: "SSeeS",
    team: "DetonatioN FocusMe",
    region: "Pacific",
    country: "Japan",
    role: "Controller",
    dpi: 800,
    sens: 0.211,
    mouse: "WLMOUSE Beast X Max",
    mousepad: "ARTISAN NINJA FX Hayate Otsu V2"
  },

  {
    name: "Yatsuka",
    team: "DetonatioN FocusMe",
    region: "Pacific",
    country: "Japan",
    role: "Duelist",
    dpi: 1600,
    sens: 0.08,
    mouse: "Finalmouse UltralightX",
    mousepad: "WALLHACK SP-004 Hatsune Miku"
  },


  // =========================
  // DELIGHT
  // =========================

  {
    name: "Airy",
    team: "Delight",
    region: "Pacific",
    country: "Japan",
    role: "未登録",
    dpi: 1600,
    sens: 0.1,
    mouse: "Razer Viper V3 Pro",
    mousepad: "未登録"
  },

  {
    name: "daydus",
    team: "Delight",
    region: "Pacific",
    country: "Japan",
    role: "未登録",
    dpi: 1600,
    sens: 0.1,
    mouse: "未登録",
    mousepad: "未登録"
  },

  {
    name: "fukukeN",
    team: "Delight",
    region: "Pacific",
    country: "Japan",
    role: "未登録",
    dpi: null,
    sens: null,
    mouse: "未登録",
    mousepad: "未登録"
  },

  {
    name: "Hands",
    team: "Delight",
    region: "Pacific",
    country: "Japan",
    role: "未登録",
    dpi: null,
    sens: null,
    mouse: "未登録",
    mousepad: "未登録"
  },

  {
    name: "Mametu",
    team: "Delight",
    region: "Pacific",
    country: "Japan",
    role: "未登録",
    dpi: 800,
    sens: 0.2,
    mouse: "Logicool G PRO X SUPERLIGHT 2",
    mousepad: "ARTISAN 零 FX SOFT 橙XL"
  },


  // =========================
  // EX DELIGHT AC
  // =========================

  {
    name: "winnable",
    team: "ex Delight AC",
    region: "Pacific",
    country: "Japan",
    role: "未登録",
    dpi: 800,
    sens: 0.58,
    mouse: "未登録",
    mousepad: "未登録"
  },


  // =========================
  // GEN.G
  // =========================

  {
    name: "t3xture",
    team: "Gen.G",
    region: "Pacific",
    country: "South Korea",
    role: "Duelist",
    dpi: 800,
    sens: 0.45,
    mouse: "未登録",
    mousepad: "未登録"
  },


  // =========================
  // PAPER REX
  // =========================

  {
    name: "something",
    team: "Paper Rex",
    region: "Pacific",
    country: "Russia",
    role: "Duelist",
    dpi: 800,
    sens: 0.58,
    mouse: "未登録",
    mousepad: "未登録"
  },


  // =========================
  // RIDDLE ORDER
  // =========================

  {
    name: "gyen",
    team: "RIDDLE ORDER",
    region: "Pacific",
    country: "Japan",
    role: "Sentinel",
    dpi: 1000,
    sens: 0.33,
    mouse: "G PRO X2",
    mousepad: "G-SR-SE ROUGE"
  },

  {
    name: "joxjo",
    team: "RIDDLE ORDER",
    region: "Pacific",
    country: "Japan",
    role: "Initiator",
    dpi: 800,
    sens: 0.355,
    mouse: "G PRO X2",
    mousepad: "ARTISAN Hien FX XL"
  },

  {
    name: "luca",
    team: "RIDDLE ORDER",
    region: "Pacific",
    country: "Japan",
    role: "Sentinel",
    dpi: 1600,
    sens: 0.08,
    mouse: "未登録",
    mousepad: "未登録"
  },

  {
    name: "minty",
    team: "RIDDLE ORDER",
    region: "Pacific",
    country: "Japan",
    role: "Controller",
    dpi: 1600,
    sens: 0.13,
    mouse: "G PRO X SUPERLIGHT 2",
    mousepad: "ARTISAN 零 NINJA FX SOFT",
    scopedSens: 1.09
  },

  {
    name: "Seoldam",
    team: "RIDDLE ORDER",
    region: "Pacific",
    country: "South Korea",
    role: "Duelist",
    dpi: 1600,
    sens: 0.14,
    mouse: "G PRO X SUPERLIGHT",
    mousepad: "Pulsar Saturn Pro Red Soft"
  },


  // =========================
  // SENTINELS
  // =========================

  {
    name: "TenZ",
    team: "Sentinels",
    region: "Americas",
    country: "Canada",
    role: "Flex",
    dpi: 800,
    sens: 0.22,
    mouse: "未登録",
    mousepad: "未登録"
  },


  // =========================
  // ZETA DIVISION
  // =========================

  {
    name: "absol",
    team: "ZETA DIVISION",
    region: "Pacific",
    country: "Japan",
    role: "Duelist",
    dpi: 800,
    sens: 0.22,
    mouse: "Logicool G PRO X SUPERLIGHT 2",
    mousepad: "Nachoneko × ふもコレ"
  },

  {
    name: "eko",
    team: "ZETA DIVISION",
    region: "Pacific",
    country: "Japan",
    role: "Flex",
    dpi: 800,
    sens: 0.27,
    mouse: "Razer Viper V3 Pro",
    mousepad: "ARTISAN NINJA FX Zero"
  },

  {
    name: "Laz",
    team: "ZETA DIVISION",
    region: "Pacific",
    country: "Japan",
    role: "未登録",
    dpi: 1600,
    sens: 0.136,
    mouse: "未登録",
    mousepad: "未登録"
  },

  {
    name: "SugarZ3ro",
    team: "ZETA DIVISION",
    region: "Pacific",
    country: "Japan",
    role: "Controller",
    dpi: 800,
    sens: 0.225,
    mouse: "未登録",
    mousepad: "未登録"
  },

  {
    name: "SyouTa",
    team: "ZETA DIVISION",
    region: "Pacific",
    country: "Japan",
    role: "Flex",
    dpi: 800,
    sens: 0.4,
    mouse: "未登録",
    mousepad: "未登録"
  },

  {
    name: "xdll",
    team: "ZETA DIVISION",
    region: "Pacific",
    country: "Japan",
    role: "Initiator",
    dpi: 800,
    sens: 0.175,
    mouse: "Razer Viper V4 Pro",
    mousepad: "Pulsar eS Saturn Pro"
  }

];


// ============================================================
// Amazonリンク
// ============================================================

const mouseLinks = {

  "Logicool G PRO X SUPERLIGHT 2":
    "https://link.amazon/B06kH5b1r",

  "Razer Viper V3 Pro":
    "https://link.amazon/B02B5we6v",

  "Razer Viper V4 Pro":
    "https://link.amazon/B0gImS1eE",

  "LAMZU Maya X Light Pink":
    "https://link.amazon/B0ctMUcku",

  "WLMOUSE Beast X Max":
    "https://link.amazon/B0bpdmtk7",

  "G PRO X SUPERLIGHT 2":
    "https://link.amazon/B06kH5b1r",

  "G PRO X SUPERLIGHT":
    "https://link.amazon/B06kH5b1r"

};


// ============================================================
// Amazonリンク取得
// ============================================================

function getMouseLink(player) {

  if (
    !player ||
    !player.mouse ||
    player.mouse === "未登録"
  ) {
    return null;
  }

  return mouseLinks[player.mouse] || null;

}


// ============================================================
// eDPI計算
// ============================================================

function getEDPI(player) {

  if (!player) {
    return null;
  }

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


// ============================================================
// 安全な文字列変換
// ============================================================

function normalize(value) {

  if (
    value === null ||
    value === undefined
  ) {
    return "";
  }

  return String(value)
    .trim()
    .toLowerCase();

}


// ============================================================
// 選手一覧表示
// ============================================================

function renderPlayers(list) {

  const container =
    document.getElementById("playerList");

  if (!container) {

    console.error(
      "ERROR: #playerList が見つかりません。"
    );

    return;
  }


  container.innerHTML = "";


  const resultCount =
    document.getElementById("resultCount");


  if (resultCount) {

    resultCount.textContent =
      `${list.length}人`;

  }


  // =========================
  // 0人の場合
  // =========================

  if (list.length === 0) {

    container.innerHTML = `

      <div class="no-results">

        <p>
          該当する選手が見つかりません
        </p>

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


  // =========================
  // カード生成
  // =========================

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


// ============================================================
// 絞り込み
// ============================================================

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

      const name =
        normalize(player.name);

      const team =
        normalize(player.team);


      const searchMatch =
        search === "" ||
        name.includes(search) ||
        team.includes(search);


      // =========================
      // 地域
      // =========================

      const playerRegion =
        normalize(player.region);


      const regionMatch =
        region === "" ||
        region === "all" ||
        region === "すべて" ||
        playerRegion === region;


      // =========================
      // 国籍
      // =========================

      const playerCountry =
        normalize(player.country);


      const countryMatch =
        country === "" ||
        country === "all" ||
        country === "すべて" ||
        playerCountry === country;


      // =========================
      // ROLE
      // =========================

      const playerRole =
        normalize(player.role);


      const roleMatch =
        role === "" ||
        role === "all" ||
        role === "すべて" ||
        playerRole === role;


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

        } else if (
          edpiValue === "low"
        ) {

          edpiMatch =
            edpi >= 100 &&
            edpi < 200;

        } else if (
          edpiValue === "mid"
        ) {

          edpiMatch =
            edpi >= 200 &&
            edpi < 300;

        } else if (
          edpiValue === "high"
        ) {

          edpiMatch =
            edpi >= 300 &&
            edpi < 400;

        } else if (
          edpiValue === "veryhigh"
        ) {

          edpiMatch =
            edpi >= 400;

        }

      }


      // =========================
      // 感度
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

        } else if (
          sensValue === "low"
        ) {

          sensMatch =
            sens >= 0.10 &&
            sens < 0.20;

        } else if (
          sensValue === "mid"
        ) {

          sensMatch =
            sens >= 0.20 &&
            sens < 0.30;

        } else if (
          sensValue === "high"
        ) {

          sensMatch =
            sens >= 0.30 &&
            sens < 0.40;

        } else if (
          sensValue === "veryhigh"
        ) {

          sensMatch =
            sens >= 0.40;

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
    `検索結果: ${filtered.length}人 / 全${players.length}人`
  );


  renderPlayers(filtered);

}


// ============================================================
// 検索
// ============================================================

function searchPlayers() {

  filterPlayers();

}


// ============================================================
// フィルターリセット
// ============================================================

function resetFilters() {

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


  if (searchInput) {
    searchInput.value = "";
  }


  if (regionFilter) {
    regionFilter.value = "all";
  }


  if (countryFilter) {
    countryFilter.value = "all";
  }


  if (roleFilter) {
    roleFilter.value = "all";
  }


  if (edpiFilter) {
    edpiFilter.value = "all";
  }


  if (sensFilter) {
    sensFilter.value = "all";
  }


  renderPlayers(players);

}


// ============================================================
// eDPI計算機
// ============================================================

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
    sens < 0
  ) {

    result.textContent =
      "0.0";

    return;
  }


  const edpi =
    dpi * sens;


  result.textContent =
    edpi.toFixed(1);

}


// ============================================================
// 選手詳細ページ
// ============================================================

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


  if (
    !list ||
    !detail
  ) {

    console.error(
      "playerList または playerDetail が見つかりません"
    );

    return;
  }


  list.style.display =
    "none";


  detail.classList.remove(
    "hidden"
  );


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

      <h3>
        🎯 感度設定
      </h3>


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

      <h3>
        🖱️ デバイス
      </h3>


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


// ============================================================
// 選手詳細を閉じる
// ============================================================

function closePlayerDetail() {

  const list =
    document.getElementById("playerList");

  const detail =
    document.getElementById("playerDetail");


  if (
    !list ||
    !detail
  ) {
    return;
  }


  detail.classList.add(
    "hidden"
  );


  list.style.display =
    "grid";

}


// ============================================================
// ページ読み込み完了
// ============================================================

document.addEventListener(
  "DOMContentLoaded",
  () => {

    console.log(
      "================================="
    );

    console.log(
      "VALORANT PRO SETTINGS"
    );

    console.log(
      `選手データ: ${players.length}人`
    );

    console.log(
      "================================="
    );


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
    // 地域
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
    // 国籍
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
    // ROLE
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
    // 感度
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


  }
);
