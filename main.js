// monsters.js doit être chargé avant ce fichier

// ── Table des icônes inline ───────────────────────────────────
// Remplis les URLs toi-même. La clé est le mot exact à détecter (insensible à la casse).
// L'icône remplace le mot dans le texte de la compétence.
const INLINE_ICONS = {
  'saignement_icone':    'https://www.kigard.fr/images/modificateur/17.gif?v=2.15.06',
  'faille_icone':        'https://www.kigard.fr/images/modificateur/3.gif?v=2.15.06',
  'terreur_icone':       'https://www.kigard.fr/images/modificateur/20.gif?v=2.15.06',
  'nécrose_icone':       'https://www.kigard.fr/images/modificateur/9.gif?v=2.15.06',
  'lenteur_icone':       'https://www.kigard.fr/images/modificateur/2.gif?v=2.15.06',
  'assomé_icone':        'https://www.kigard.fr/images/modificateur/1.gif?v=2.15.06',
  'poison_icone':        'https://www.kigard.fr/images/modificateur/4.gif?v=2.15.06',
  'poison_rapide_icone': 'https://www.kigard.fr/images/modificateur/46.gif?v=2.15.06',
  'brulure_icone':       'https://www.kigard.fr/images/modificateur/16.gif?v=2.15.06',
  'exposé_icone':        'https://www.kigard.fr/images/modificateur/32.gif?v=2.15.06',
  'gel_icone':           'https://www.kigard.fr/images/modificateur/39.gif?v=2.15.06',
  'lumière_icone':       'https://www.kigard.fr/images/elements/4.gif?v=2.15.06',
  'ombre_icone':         'https://www.kigard.fr/images/elements/5.gif?v=2.15.06',
  'feu_icone':           'https://www.kigard.fr/images/elements/1.gif?v=2.15.06',
  'foudre_icone':        'https://www.kigard.fr/images/elements/3.gif?v=2.15.06',
  'glace_icone':         'https://www.kigard.fr/images/elements/2.gif?v=2.15.06',
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

// ── Helpers items / variantes ─────────────────────────────────
function isWeaponSlot(emp) {
  return emp === 'Une main' || emp === 'Deux mains';
}

// Rendu d'une ligne d'item (utilisée sur carte et dans la modal via classes)
function renderItemLine(it, containerClass, empClass) {
  return `
    <div class="${containerClass}">
      <span><img src="https://www.kigard.fr/images/items/${it.id}.gif" alt="${it.nom}"></span>
      <span>${it.nom}</span>
      <span class="${empClass}">${it.emplacement}</span>
    </div>
  `;
}

// Rendu d'une variante (set d'armement alternatif : 1 ou N items sur une même ligne)
function renderVarianteLine(variante, containerClass) {
  const partsHTML = variante.map(it => `
    <span class="variante-part">
      <img src="https://www.kigard.fr/images/items/${it.id}.gif" alt="${it.nom}">
      <span class="variante-name">${it.nom}</span>
      <span class="variante-emp">${it.emplacement}</span>
    </span>
  `).join('');

  return `
    <div class="${containerClass}">
      <span class="variante-label">Variante :</span>
      ${partsHTML}
    </div>
  `;
}

// Assemble items + variantes : variantes insérées juste après la dernière arme
// du set principal (emplacement "Une main" ou "Deux mains"). Si pas d'arme dans
// le set principal, variantes ajoutées à la fin.
function buildItemsHTML(items, variantes, itemClass, empClass, varianteClass) {
  const hasVariantes = Array.isArray(variantes) && variantes.length > 0;
  const lastWeaponIdx = items.reduce(
    (last, it, i) => isWeaponSlot(it.emplacement) ? i : last,
    -1
  );

  let html = '';
  items.forEach((it, i) => {
    html += renderItemLine(it, itemClass, empClass);
    if (i === lastWeaponIdx && hasVariantes) {
      html += variantes.map(v => renderVarianteLine(v, varianteClass)).join('');
    }
  });

  if (lastWeaponIdx === -1 && hasVariantes) {
    html += variantes.map(v => renderVarianteLine(v, varianteClass)).join('');
  }

  return html;
}

// Rendu d'un drop (emplacement optionnel : certains drops sont des items
// d'équipement, d'autres sont des matériaux comme "Fibre violette" ou "Encre").
function renderDropLine(d) {
  const imgUrl = d.id === 0
    ? 'https://www.kigard.fr/images/interface/session_po.gif'
    : `https://www.kigard.fr/images/items/${d.id}.gif`;
  const empHTML = d.emplacement
    ? `<span class="drop-emp">${d.emplacement}</span>`
    : '';
  return `
    <span class="drop-item">
      <img src="${imgUrl}" alt="${d.nom}" title="${d.nom}">
      <span class="drop-name">${parseCompetenceText(d.nom)}</span>
      ${empHTML}
    </span>
  `;
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

  // items + variantes
  const itemsHTML = buildItemsHTML(m.items, m.variantes, 'item', 'item-emp', 'variante-item');

  // drops
  const dropsHTML = m.drops.map(renderDropLine).join('');

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

  const itemsHTML = buildItemsHTML(m.items, m.variantes, 'modal-item', 'emp', 'modal-variante-item');
  const dropsHTML = m.drops.map(renderDropLine).join('');

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

// ── Recherche multi-modes ─────────────────────────────────────
let searchMode = 'name';

const SEARCH_PLACEHOLDERS = {
  name:        'Rechercher un monstre…',
  competences: 'Rechercher une compétence…',
  items:       'Rechercher un item…',
  drops:       'Rechercher un drop…',
};

function filterMonsters(query) {
  const q = query.toLowerCase().trim();
  if (!q) return MONSTERS;

  switch (searchMode) {
    case 'name':
      return MONSTERS.filter(m => m.name.toLowerCase().includes(q));

    case 'competences':
      return MONSTERS.filter(m =>
        Array.isArray(m.competences) &&
        m.competences.some(c => c.nom.toLowerCase().includes(q))
      );

    case 'items':
      return MONSTERS.filter(m => {
        const inItems = Array.isArray(m.items) &&
          m.items.some(it => it.nom.toLowerCase().includes(q));
        if (inItems) return true;
        if (Array.isArray(m.variantes)) {
          return m.variantes.some(v =>
            v.some(it => it.nom.toLowerCase().includes(q))
          );
        }
        return false;
      });

    case 'drops':
      // On exclut les drops d'or (id === 0) qui ne portent pas de vrai nom
      return MONSTERS.filter(m =>
        Array.isArray(m.drops) &&
        m.drops.some(d => d.id !== 0 && d.nom.toLowerCase().includes(q))
      );

    default:
      return MONSTERS;
  }
}

// ── Init ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderCards(MONSTERS);

  const searchInput = document.getElementById('search');

  searchInput.addEventListener('input', e => {
    renderCards(filterMonsters(e.target.value));
  });

  // Pills : changement de mode de recherche
  document.querySelectorAll('.search-mode').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('active')) return;

      document.querySelectorAll('.search-mode').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      searchMode = btn.dataset.mode;
      searchInput.placeholder = SEARCH_PLACEHOLDERS[searchMode] || '';

      // On garde la requête en cours et on relance la recherche dans le nouveau mode
      renderCards(filterMonsters(searchInput.value));
    });
  });

  document.getElementById('modal-overlay').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  // ── Scroll : bouton retour en haut + barre de recherche sticky ──
  const backToTop = document.getElementById('back-to-top');
  const searchWrap = document.querySelector('.search-wrap');
  const headerEl = document.querySelector('header');

  const handleScroll = () => {
    const y = window.scrollY;

    if (backToTop) {
      backToTop.classList.toggle('visible', y > 400);
    }

    if (searchWrap && headerEl) {
      // On colle la barre dès qu'on a dépassé le header
      searchWrap.classList.toggle('is-stuck', y > headerEl.offsetHeight - 1);
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});