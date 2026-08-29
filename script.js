// ========================================
// NIKOPROSETTEI - VALORANT PRO SETTINGS
// ========================================

const players = [
  {
    name: "absol",
    team: "ZETA DIVISION",
    region: "Pacific",
    country: "🇯🇵",
    role: "Duelist",
    dpi: 800,
    sens: 0.22,
    mouse: "Logicool G PRO X SUPERLIGHT 2",
    mouseLink: "https://link.amazon/B06kH5b1r",
    mousepad: "Nachoneko × ふもコレ"
  },

  {
    name: "eko",
    team: "ZETA DIVISION",
    region: "Pacific",
    country: "🇰🇷",
    role: "Flex",
    dpi: 800,
    sens: 0.27,
    mouse: "Razer Viper V3 Pro",
    mouseLink: "https://link.amazon/B02B5we6v",
    mousepad: "ARTISAN NINJA FX Zero"
  },

  {
    name: "Laz",
    team: "ZETA DIVISION",
    region: "Pacific",
    country: "🇯🇵",
    role: "未登録",
    dpi: 1600,
    sens: 0.136,
    mouse: "未登録",
    mousepad: "未登録"
  },

  {
    name: "SyouTa",
    team: "ZETA DIVISION",
    region: "Pacific",
    country: "🇯🇵",
    role: "Flex",
    dpi: 800,
    sens: 0.4,
    mouse: "Logicool G PRO X SUPERSTRIKE",
    mouseLink: "https://link.amazon/B02xPOHmz",
    mousepad: "Pulsar eS PD170"
  },

  {
    name: "SugarZ3ro",
    team: "ZETA DIVISION",
    region: "Pacific",
    country: "🇯🇵",
    role: "Controller",
    dpi: 800,
    sens: 0.225,
    mouse: "Logicool G PRO X SUPERLIGHT 2",
    mouseLink: "https://link.amazon/B02Oz92yt",
    mousepad: "G-SR-SE ROUGE II",
    mousepadLink: "https://link.amazon/B082gKoWa"
  },

  {
    name: "xdll",
    team: "ZETA DIVISION",
    region: "Pacific",
    country: "🇯🇵",
    role: "Initiator",
    dpi: 800,
    sens: 0.175,
    mouse: "Razer Viper V4 Pro",
    mouseLink: "https://link.amazon/B0gImS1eE",
    mousepad: "Pulsar eS Saturn Pro"
  },

  {
    name: "t3xture",
    team: "Gen.G",
    region: "Pacific",
    country: "🇰🇷",
    role: "Duelist",
    dpi: 800,
    sens: 0.45,
    mouse: "Logicool G PRO X SUPERLIGHT 2",
    mousepad: "SteelSeries QCK heavy",
    mousepadLink: "https://link.amazon/B0iJb2tMd"
  },

  {
    name: "something",
    team: "Paper Rex",
    region: "Pacific",
    country: "🇷🇺",
    role: "Duelist",
    dpi: 800,
    sens: 0.58,
    mouse: "Logicool G PRO X SUPERSTRIKE",
    mouseLink: "https://link.amazon/B02xPOHmz",
    mousepad: "eS Saturn Pro Gaming Mousepad"
  },

  {
    name: "TenZ",
    team: "Sentinels",
    region: "Americas",
    country: "🇨🇦",
    role: "Flex",
    dpi: 1600,
    sens: 0.196,
    mouse: "Pulsar TenZ Signature Edition",
    mousepad: "NINJA FX ZERO TENZ RED"
  },

  {
    name: "Akame",
    team: "DetonatioN FocusMe",
    region: "Pacific",
    country: "🇰🇷",
    role: "Initiator",
    dpi: 800,
    sens: 0.185,
    mouse: "LAMZU Maya X Light Pink",
    mouseLink: "https://link.amazon/B0ctMUcku",
    mousepad: "ARTISAN NINJA FX 99式 SOFT"
  },

  {
    name: "Caedye",
    team: "DetonatioN FocusMe",
    region: "Pacific",
    country: "🇯🇵",
    role: "Sentinel",
    dpi: 400,
    sens: 0.35,
    mouse: "Razer Viper V4 Pro",
    mouseLink: "https://link.amazon/B0gImS1eE",
    mousepad: "ARTISAN NINJA FX Zero"
  },

  {
    name: "Meiy",
    team: "DetonatioN FocusMe",
    region: "Pacific",
    country: "🇯🇵",
    role: "Duelist",
    dpi: 800,
    sens: 0.173,
    mouse: "Razer Viper V3 Pro",
    mouseLink: "https://link.amazon/B02B5we6v",
    mousepad: "meiy glasspad"
  },

  {
    name: "SSeeS",
    team: "DetonatioN FocusMe",
    region: "Pacific",
    country: "🇯🇵",
    role: "Controller",
    dpi: 800,
    sens: 0.211,
    mouse: "WLMOUSE Beast X Max",
    mouseLink: "https://link.amazon/B0bpdmtk7",
    mousepad: "ARTISAN NINJA FX Hayate Otsu V2"
  },

  {
    name: "Yatsuka",
    team: "DetonatioN FocusMe",
    region: "Pacific",
    country: "🇯🇵",
    role: "Duelist",
    dpi: 1600,
    sens: 0.08,
    mouse: "Finalmouse UltralightX",
    mousepad: "WALLHACK SP-004 Hatsune Miku"
  },

  {
    name: "gyen",
    team: "RIDDLE ORDER",
    region: "Pacific",
    country: "🇯🇵",
    role: "Sentinel",
    dpi: 1000,
    sens: 0.33,
    mouse: "Logicool G PRO X SUPERLIGHT 2",
    mouseLink: "https://link.amazon/B06kH5b1r",
    mousepad: "G-SR-SE ROUGE"
  },

  {
    name: "joxjo",
    team: "RIDDLE ORDER",
    region: "Pacific",
    country: "🇰🇷",
    role: "Initiator",
    dpi: 800,
    sens: 0.355,
    mouse: "Logicool G PRO X SUPERLIGHT 2",
    mouseLink: "https://link.amazon/B06kH5b1r",
    mousepad: "ARTISAN NINJA FX 99式"
  },

  {
    name: "luca",
    team: "RIDDLE ORDER",
    region: "Pacific",
    country: "🇯🇵",
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
    country: "🇯🇵",
    role: "Controller",
    dpi: 1600,
    sens: 0.13,
    mouse: "G PRO X SUPERLIGHT 2",
    mouseLink: "https://link.amazon/B06kH5b1r",
    mousepad: "ARTISAN 零 NINJA FX SOFT",
    scopedSens: 1.09
  },

  {
    name: "Seoldam",
    team: "RIDDLE ORDER",
    region: "Pacific",
    country: "🇰🇷",
    role: "Duelist",
    dpi: 1600,
    sens: 0.14,
    mouse: "Logicool G PRO X2 SUPERSTRIKE",
    mouseLink: "https://link.amazon/B08qSNgo5",
    mousepad: "Pulsar Saturn Pro Red Soft"
  },

  {
    name: "Airy",
    team: "Delight",
    region: "Pacific",
    country: "🇯🇵",
    role: "未登録",
    dpi: 1600,
    sens: 0.1,
    mouse: "Razer Viper V3 Pro",
    mouseLink: "https://link.amazon/B02B5we6v",
    mousepad: "未登録"
  },

  {
    name: "daydus",
    team: "Delight",
    region: "Pacific",
    country: "🇯🇵",
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
    country: "🇯🇵",
    role: "未登録",
    dpi: 0,
    sens: 0,
    mouse: "未登録",
    mousepad: "未登録"
  },

  {
    name: "Hands",
    team: "Delight",
    region: "Pacific",
    country: "🇯🇵",
    role: "未登録",
    dpi: 0,
    sens: 0,
    mouse: "未登録",
    mousepad: "未登録"
  },

  {
    name: "Mametu",
    team: "Delight",
    region: "Pacific",
    country: "🇯🇵",
    role: "未登録",
    dpi: 800,
    sens: 0.2,
    mouse: "Logicool G PRO X SUPERLIGHT 2",
    mouseLink: "https://link.amazon/B06kH5b1r",
    mousepad: "ARTISAN 零 FX SOFT 橙XL"
  },

  {
    name: "winnable",
    team: "ex Delight AC",
    region: "Pacific",
    country: "🇯🇵",
    role: "未登録",
    dpi: 800,
    sens: 0.58,
    mouse: "未登録",
    mousepad: "未登録"
  }
];


// ========================================
// eDPI計算
// ========================================

function getEDPI(player) {
  if (!player.dpi || !player.sens) {
    return 0;
  }

  return player.dpi * player.sens;
}


// ========================================
// 専用ページ設定
// ========================================

const playerPages = {
  absol: "absol.html",
  eko: "eko.html",
  Laz: "laz.html",
  SyouTa: "syouta.html",
  SugarZ3ro: "sugarz3ro.html",
  xdll: "xdll.html",
  t3xture: "t3xture.html",
  something: "something.html",
  TenZ: "tenz.html",
  Akame: "akame.html",
  Caedye: "caedye.html",
  Meiy: "meiy.html",
  SSeeS: "ssees.html",
  Yatsuka: "yatsuka.html",
  gyen: "gyen.html",
  joxjo: "joxjo.html",
  luca: "luca.html",
  minty: "minty.html",
  Seoldam: "seoldam.html",
  Airy: "airy.html",
  daydus: "daydus.html",
  fukukeN: "fukuken.html",
  Hands: "hands.html",
  Mametu: "mametu.html",
  winnable: "winnable.html"
};


// ========================================
// 選手一覧表示
// ========================================

function renderPlayers(list) {
  const container = document.getElementById("playerList");

  if (!container) return;

  container.innerHTML = "";

  const resultCount = document.getElementById("resultCount");

  if (resultCount) {
    resultCount.textContent = `${list.length}人`;
  }

  if (list.length === 0) {
    container.innerHTML = `
      <div class="no-results">
        <h3>選手が見つかりません</h3>
        <p>検索条件を変更してみてください。</p>
      </div>
    `;
    return;
  }

  list.forEach(player => {
    const edpi = getEDPI(player);

    const card = document.createElement("div");
    card.className = "player-card";

    if (playerPages[player.name]) {
      card.style.cursor = "pointer";

      card.addEventListener("click", () => {
        window.location.href =
          `/valorant-pro-settings/players/${playerPages[player.name]}`;
      });
    }

    card.innerHTML = `
      <div class="player-name">
        ${player.country} ${player.name}
      </div>

      <div class="player-team">
        ${player.team}
      </div>

      <div class="player-info">

        <div class="stat">
          <span class="stat-label">ROLE</span>
          <span class="stat-value">
            ${player.role}
          </span>
        </div>

        <div class="stat">
          <span class="stat-label">DPI</span>
          <span class="stat-value">
            ${player.dpi ? player.dpi.toLocaleString() : "未登録"}
          </span>
        </div>

        <div class="stat">
          <span class="stat-label">SENS</span>
          <span class="stat-value">
            ${player.sens || "未登録"}
          </span>
        </div>

        <div class="stat">
          <span class="stat-label">eDPI</span>
          <span class="stat-value">
            ${edpi ? edpi.toFixed(1) : "未登録"}
          </span>
        </div>

      </div>
    `;

    container.appendChild(card);
  });
}


// ========================================
// 絞り込み
// ========================================

function filterPlayers() {
  const searchInput = document.getElementById("searchInput");
  const regionFilter = document.getElementById("regionFilter");
  const countryFilter = document.getElementById("countryFilter");
  const roleFilter = document.getElementById("roleFilter");
  const edpiFilter = document.getElementById("edpiFilter");
  const sensFilter = document.getElementById("sensFilter");

  const search = searchInput
    ? searchInput.value.trim().toLowerCase()
    : "";

  const region = regionFilter
    ? regionFilter.value
    : "all";

  const country = countryFilter
    ? countryFilter.value
    : "all";

  const role = roleFilter
    ? roleFilter.value
    : "all";

  const edpiValue = edpiFilter
    ? edpiFilter.value
    : "all";

  const sensValue = sensFilter
    ? sensFilter.value
    : "all";


  const filtered = players.filter(player => {
    const edpi = getEDPI(player);

    const searchMatch =
      !search ||
      player.name.toLowerCase().includes(search) ||
      player.team.toLowerCase().includes(search);

    const regionMatch =
      region === "all" ||
      player.region === region;

    const countryMatch =
      country === "all" ||
      player.country === country;

    const roleMatch =
      role === "all" ||
      player.role === role;


    let edpiMatch = true;

    if (edpiValue === "low") {
      edpiMatch = edpi >= 100 && edpi < 200;
    }

    if (edpiValue === "mid") {
      edpiMatch = edpi >= 200 && edpi < 300;
    }

    if (edpiValue === "high") {
      edpiMatch = edpi >= 300 && edpi < 400;
    }

    if (edpiValue === "veryhigh") {
      edpiMatch = edpi >= 400;
    }


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
      regionMatch &&
      countryMatch &&
      roleMatch &&
      edpiMatch &&
      sensMatch
    );
  });

  renderPlayers(filtered);
}


// ========================================
// eDPI計算機
// ========================================

function calculateEDPI() {
  const dpiInput = document.getElementById("dpiInput");
  const sensInput = document.getElementById("sensInput");
  const result = document.getElementById("edpiResult");

  if (!dpiInput || !sensInput || !result) {
    return;
  }

  const dpi = Number(dpiInput.value);
  const sens = Number(sensInput.value);

  if (!dpi || !sens) {
    result.textContent = "0.0";
    return;
  }

  const edpi = dpi * sens;

  result.textContent = edpi.toFixed(1);
}


// ========================================
// 初期化
// ========================================

document.addEventListener("DOMContentLoaded", () => {

  const searchInput = document.getElementById("searchInput");
  const regionFilter = document.getElementById("regionFilter");
  const countryFilter = document.getElementById("countryFilter");
  const roleFilter = document.getElementById("roleFilter");
  const edpiFilter = document.getElementById("edpiFilter");
  const sensFilter = document.getElementById("sensFilter");

  if (searchInput) {
    searchInput.addEventListener("input", filterPlayers);
  }

  if (regionFilter) {
    regionFilter.addEventListener("change", filterPlayers);
  }

  if (countryFilter) {
    countryFilter.addEventListener("change", filterPlayers);
  }

  if (roleFilter) {
    roleFilter.addEventListener("change", filterPlayers);
  }

  if (edpiFilter) {
    edpiFilter.addEventListener("change", filterPlayers);
  }

  if (sensFilter) {
    sensFilter.addEventListener("change", filterPlayers);
  }

  renderPlayers(players);
});
