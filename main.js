// monsters.js doit être chargé avant ce fichier

// ── Table des icônes inline ───────────────────────────────────
// Remplis les URLs toi-même. La clé est le mot exact à détecter (insensible à la casse).
// L'icône remplace le mot dans le texte de la compétence.
const INLINE_ICONS = {
  'Saignement':  'https://www.kigard.fr/images/modificateur/17.gif?v=2.15.06',
  'Faille':      'https://www.kigard.fr/images/modificateur/3.gif?v=2.15.06',
  'Terreur':     'https://www.kigard.fr/images/modificateur/20.gif?v=2.15.06',
  'Nécrose':     'https://www.kigard.fr/images/modificateur/9.gif?v=2.15.06',
  'Lumière':     'https://www.kigard.fr/images/elements/4.gif?v=2.15.06',
  'Ombre':       'https://www.kigard.fr/images/elements/5.gif?v=2.15.06',
};

// Remplace chaque mot-clé de INLINE_ICONS par une icône inline dans le texte
function parseCompetenceText(nom) {
  let result = nom;
  for (const [mot, url] of Object.entries(INLINE_ICONS)) {
    const regex = new RegExp(`\\b${mot}\\b`, 'gi');
    result = result.replace(regex, `<img src="${url}" alt="${mot}" title="${mot}" class="inline-icon">`);
  }
  return result;
}

function getStars(rang) {
  return '⭐'.repeat(rang);
}

function tagClass(type) {
  return 'tag tag-' + type;
}

// ── Rendu carte ──────────────────────────────────────────────
function createCard(m, index) {
  const card = document.createElement('div');
  card.className = 'monster-card';
  card.style.animationDelay = (index * 60) + 'ms';

  // compétences (max 4 affichées sur la carte)
  const compsHTML = m.competences.slice(0, 4).map(c => `
    <div class="competence">
      <span><img src="https://www.kigard.fr/images/interface/${c.type}.gif?v=2.15.06" alt="${c.type}"></span>
      <span>${parseCompetenceText(c.nom)}</span>
    </div>
  `).join('') + (m.competences.length > 4
    ? `<div class="competence" style="color:var(--muted);font-style:italic;font-size:.78rem">+ ${m.competences.length - 4} autres…</div>`
    : '');

  // items
  const itemsHTML = m.items.map(it => `
    <div class="item">
      <span><img src="https://www.kigard.fr/images/items/${it.id}.gif" alt="${it.nom}"></span>
      <span>${it.nom}</span>
      <span class="item-emp">${it.emplacement}</span>
    </div>
  `).join('');

  // drops
  const dropsHTML = m.drops.map(d => {
    const imgUrl = d.id === 0
      ? 'https://www.kigard.fr/images/interface/session_po.gif'
      : `https://www.kigard.fr/images/items/${d.id}.gif`;
    return `<span class="drop-item"><img src="${imgUrl}" alt="${d.nom}" title="${d.nom}"> ${parseCompetenceText(d.nom)}</span>`;
  }).join('');

  card.innerHTML = `
    <div class="card-img">
      <img src="https://www.kigard.fr/images/vue/monstre/${m.id}.gif" alt="${m.name}">
    </div>
    <div class="card-body">
      <h2>${m.name}</h2>
      <div class="zone">📍 ${m.zone}</div>
      <div class="stars">${getStars(m.rang)}</div>
      <div class="stats">
        <div class="stat"><span class="stat-label">HP</span>  <span class="stat-val c-hp">${m.hp}</span></div>
        <div class="stat"><span class="stat-label">ESQ</span> <span class="stat-val c-esq">${m.esq}%</span></div>
        <div class="stat"><span class="stat-label">DM</span>  <span class="stat-val c-dm">${m.dm}%</span></div>
        <div class="stat"><span class="stat-label">ARM</span> <span class="stat-val c-arm">${m.arm}</span></div>
        <div class="stat"><span class="stat-label">RES</span> <span class="stat-val c-res">${m.res}</span></div>
      </div>
      <div class="section-title">Compétences</div>
      <div class="competences">${compsHTML}</div>
      <div class="section-title">Items</div>
      <div class="items">${itemsHTML}</div>
      <div class="section-title">Drops</div>
      <div class="drops">${dropsHTML}</div>
    </div>
  `;

  card.addEventListener('click', () => openModal(m));
  return card;
}

// ── Modal ─────────────────────────────────────────────────────
function openModal(m) {
  const overlay = document.getElementById('modal-overlay');
  const content = document.getElementById('modal-content');

  const compsHTML = m.competences.map(c => `
    <div class="modal-competence">
      <span><img src="https://www.kigard.fr/images/interface/${c.type}.gif?v=2.15.06" alt="${c.type}"></span>
      <span>${parseCompetenceText(c.nom)}</span>
    </div>
  `).join('');

  const itemsHTML = m.items.map(it => `
    <div class="modal-item">
      <span><img src="https://www.kigard.fr/images/items/${it.id}.gif" alt="${it.nom}"></span>
      <span>${it.nom}</span>
      <span class="emp">${it.emplacement}</span>
    </div>
  `).join('');

  const dropsHTML = m.drops.map(d => {
    const imgUrl = d.id === 0
      ? 'https://www.kigard.fr/images/interface/session_po.gif'
      : `https://www.kigard.fr/images/items/${d.id}.gif`;
    return `<span class="drop-item"><img src="${imgUrl}" alt="${d.nom}" title="${d.nom}"> ${parseCompetenceText(d.nom)}</span>`;
  }).join('');

  content.innerHTML = `
    <button class="modal-close" id="modal-close-btn">✕</button>

    <div class="modal-header">
      <img src="https://www.kigard.fr/images/vue/monstre/${m.id}.gif" alt="${m.name}">
      <div>
        <h2>${m.name}</h2>
        <div style="margin-top:4px">${getStars(m.rang)}</div>
        <div style="font-size:.82rem;color:var(--muted);font-style:italic;margin-top:2px">📍 ${m.zone}</div>
      </div>
    </div>

    <div class="modal-body">
      <div class="modal-stats">
        <div class="modal-stat"><span class="lbl">HP</span><span class="val c-hp">${m.hp}</span></div>
        <div class="modal-stat"><span class="lbl">ESQ</span><span class="val c-esq">${m.esq}%</span></div>
        <div class="modal-stat"><span class="lbl">DM</span><span class="val c-dm">${m.dm}%</span></div>
        <div class="modal-stat"><span class="lbl">ARM</span><span class="val c-arm">${m.arm}</span></div>
        <div class="modal-stat"><span class="lbl">RES</span><span class="val c-res">${m.res}</span></div>
      </div>

      <div class="modal-section">
        <h3>Compétences</h3>
        <div class="modal-competences">${compsHTML}</div>
      </div>

      <div class="modal-section">
        <h3>Items</h3>
        <div class="modal-items">${itemsHTML}</div>
      </div>

      <div class="modal-section">
        <h3>Drops</h3>
        <div class="modal-drops">${dropsHTML}</div>
      </div>

    </div>

    ${m.description ? `
    <div style="padding: 0 24px 24px">
      <div class="modal-section">
        <h3>Description</h3>
        <p class="modal-desc">${m.description}</p>
      </div>
    </div>` : ''}
  `;

  overlay.classList.add('open');
  document.getElementById('modal-close-btn').addEventListener('click', closeModal);
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
}

// ── Rendu liste ───────────────────────────────────────────────
function renderCards(monsters) {
  const resultsDiv = document.getElementById('results');
  const emptyDiv   = document.getElementById('empty');
  const countEl    = document.getElementById('count');

  resultsDiv.innerHTML = '';

  if (monsters.length === 0) {
    emptyDiv.style.display = 'block';
    countEl.textContent = '';
    return;
  }

  emptyDiv.style.display = 'none';
  countEl.textContent = monsters.length + ' monstre' + (monsters.length > 1 ? 's' : '') + ' trouvé' + (monsters.length > 1 ? 's' : '');

  monsters.forEach((m, i) => resultsDiv.appendChild(createCard(m, i)));
}

function filterMonsters(query) {
  const q = query.toLowerCase().trim();
  if (!q) return MONSTERS;
  // La recherche se fait uniquement sur le nom du monstre pour éviter
  // les faux positifs (ex: "mal" qui matchait "Maléfice de nécrose").
  return MONSTERS.filter(m => m.name.toLowerCase().includes(q));
}

// ── Init ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderCards(MONSTERS);

  document.getElementById('search').addEventListener('input', e => {
    renderCards(filterMonsters(e.target.value));
  });

  document.getElementById('modal-overlay').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
});