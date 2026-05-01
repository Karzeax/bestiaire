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

// ── URLs des fiches d'aide Kigard ────────────────────────────
// Mapping nom → id pour les magies (les magies utilisent des id numériques
// côté Kigard, contrairement aux techniques et aux dons qui utilisent le nom).
const MAGIE_IDS = {
  "Armure":                  138,
  "Boule de feu":             11,
  "Choc mental":             195,
  "Congélation":              26,
  "Discipline":              135,
  "Drain de vie":             72,
  "Dévotion":                 75,
  "Egide":                   137,
  "Electrocution":           190,
  "Entrave":                  38,
  "Envoûtement":             119,
  "Exaltation":              118,
  "Foudre":                   25,
  "Guérison":                 31,
  "Incendie":                149,
  "Incinération":            102,
  "Instinct":                104,
  "Invisibilité":            178,
  "Invocation de la forêt":   51,
  "Invocation de la roche":  185,
  "Invocation du cristal":   187,
  "Invocation du givre":     186,
  "Jugement":                 73,
  "Lance de cristal":        127,
  "Maléfice de nécrose":     182,
  "Maléfice de poison":       74,
  "Maléfice de saignement":  181,
  "Mur de cristal":          128,
  "Mur de ronces":           109,
  "Permutation":             176,
  "Piqûre":                  105,
  "Purification":             76,
  "Rafale de givre":         100,
  "Réflexes":                136,
  "Régénération":            134,
  "Réveil des chairs":       183,
  "Réveil des ossements":     77,
  "Réveil des âmes":         184,
  "Subversion":              129,
  "Télékinésie":              49,
  "Téléportation":            50,
  "Vol de magie":             71,
};

// Préfixes de noms de compétences "passives" qui n'ont pas de vraie fiche
// d'aide (Kigard renvoie une page vide). On les rend non-cliquables.
const PASSIVE_PREFIXES = ['Inflige', 'Vulnérabilité', 'Résistance'];

function isPassiveCompetence(nom) {
  return PASSIVE_PREFIXES.some(p => nom.startsWith(p));
}

// Retire les tokens "_icone" qui sont des placeholders pour des icônes inline
// (ex: "Catalyste saignement_icone" → "Catalyste"). Sert pour la lookup canonique.
function canonicalizeName(nom) {
  return nom.replace(/\s*\S*_icone\b\S*/g, ' ').replace(/\s+/g, ' ').trim();
}

// Index inversé nom → id pour les abilities (techniques, magies, talents),
// construit une fois à partir de COMPETENCES.
const NAME_TO_ID = {};
if (typeof COMPETENCES === 'object' && COMPETENCES) {
  for (const [id, fiche] of Object.entries(COMPETENCES)) {
    if (fiche && fiche.name) {
      NAME_TO_ID[fiche.name.toLowerCase()] = id;
    }
  }
}

// Renvoie la fiche d'aide locale pour une compétence, ou null si introuvable.
//   - magie  : on passe par MAGIE_IDS (nom canonique → id), puis COMPETENCES[id]
//   - don    : on passe par DONS, indexé par nom canonique
//   - autres : tech_combat / talents → on cherche par nom dans COMPETENCES
function getCompetenceFiche(c) {
  if (isPassiveCompetence(c.nom)) return null;
  const cleaned = canonicalizeName(c.nom);

  if (c.type === 'magie') {
    const id = MAGIE_IDS[cleaned];
    if (id === undefined) return null;
    return (typeof COMPETENCES === 'object' && COMPETENCES[String(id)]) || null;
  }
  if (c.type === 'don') {
    return (typeof DONS === 'object' && DONS[cleaned]) || null;
  }
  // tech_combat (et autres) : lookup par nom dans COMPETENCES
  const id = NAME_TO_ID[cleaned.toLowerCase()];
  if (!id) return null;
  return COMPETENCES[id] || null;
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
        <div class="stat"><span class="stat-label">PV</span>  <span class="stat-val c-hp">${m.hp}</span></div>
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

// ── Affixes ───────────────────────────────────────────────────
// 3 états : aucun affixe, Farouche, Robuste.
//   - Farouche : +10 + 5 × rang en ESQ et DM
//   - Robuste  : +20 + 10 × rang en PV
// Si la stat n'est pas un nombre (ex. "?"), on la laisse telle quelle.
function addBonus(stat, bonus) {
  return typeof stat === 'number' ? stat + bonus : stat;
}

const AFFIXES = {
  none: {
    label: 'Aucun',
    name:  '',
    boosted: [],
    apply: (m) => ({ hp: m.hp, esq: m.esq, dm: m.dm, arm: m.arm, res: m.res }),
  },
  farouche: {
    label: 'Farouche',
    name:  'Farouche',
    boosted: ['esq', 'dm'],
    apply: (m) => {
      const bonus = 10 + 5 * m.rang;
      return {
        hp:  m.hp,
        esq: addBonus(m.esq, bonus),
        dm:  addBonus(m.dm, bonus),
        arm: m.arm,
        res: m.res,
      };
    },
  },
  robuste: {
    label: 'Robuste',
    name:  'Robuste',
    boosted: ['hp'],
    apply: (m) => {
      const bonus = 20 + 10 * m.rang;
      return {
        hp:  addBonus(m.hp, bonus),
        esq: m.esq,
        dm:  m.dm,
        arm: m.arm,
        res: m.res,
      };
    },
  },
};

function applyAffixToModal(m, affixKey) {
  const affix = AFFIXES[affixKey] || AFFIXES.none;
  const stats = affix.apply(m);

  // Met à jour les valeurs et la mise en évidence
  const statMap = [
    { key: 'hp',  selector: '[data-stat="hp"]',  format: v => v },
    { key: 'esq', selector: '[data-stat="esq"]', format: v => v + '%' },
    { key: 'dm',  selector: '[data-stat="dm"]',  format: v => v + '%' },
    { key: 'arm', selector: '[data-stat="arm"]', format: v => v },
    { key: 'res', selector: '[data-stat="res"]', format: v => v },
  ];

  statMap.forEach(({ key, selector, format }) => {
    const cell = document.querySelector('#modal-content ' + selector);
    if (!cell) return;
    cell.querySelector('.val').textContent = format(stats[key]);
    // On ne met en évidence que si la valeur est réellement numérique
    const isNumeric = typeof stats[key] === 'number';
    cell.classList.toggle('boosted', affix.boosted.includes(key) && isNumeric);
  });

  // Met à jour le nom de l'affixe sous le titre
  const affixNameEl = document.getElementById('modal-affix-name');
  if (affixNameEl) {
    affixNameEl.textContent = affix.name;
  }

  // Met à jour les pills actives
  document.querySelectorAll('#modal-content .affix-pill').forEach(p => {
    p.classList.toggle('active', p.dataset.affix === affixKey);
  });
}

// ── Modal ─────────────────────────────────────────────────────
function openModal(m) {
  const overlay = document.getElementById('modal-overlay');
  const content = document.getElementById('modal-content');

  const compsHTML = m.competences.map((c, i) => {
    const fiche = getCompetenceFiche(c);
    const cls = fiche ? 'modal-competence clickable' : 'modal-competence';
    // On stocke l'index de la compétence dans le monstre pour pouvoir
    // récupérer la fiche au clic (évite d'inliner du HTML dans un attribut).
    const dataAttr = fiche ? ` data-comp-index="${i}"` : '';
    return `
      <div class="${cls}"${dataAttr}>
        <span><img src="https://www.kigard.fr/images/interface/${c.type}.gif?v=2.15.06" alt="${c.type}"></span>
        <span>${parseCompetenceText(c.nom)}</span>
      </div>
    `;
  }).join('');

  const itemsHTML = buildItemsHTML(m.items, m.variantes, 'modal-item', 'emp', 'modal-variante-item');
  const dropsHTML = m.drops.map(renderDropLine).join('');

  content.innerHTML = `
    <button class="modal-close" id="modal-close-btn">✕</button>

    <div class="modal-header">
      <img src="https://www.kigard.fr/images/vue/monstre/${m.id}.gif" alt="${m.name}">
      <div>
        <h2>${m.name}</h2>
        <span class="affix-name" id="modal-affix-name"></span>
        <div style="margin-top:4px">${getStars(m.rang)}</div>
        <div style="font-size:.82rem;color:var(--muted);font-style:italic;margin-top:2px">📍 ${m.zone}</div>
      </div>
    </div>

    <div class="modal-body">
      <div class="affix-selector" role="tablist" aria-label="Affixe">
        <button type="button" class="affix-pill active" data-affix="none" role="tab" aria-selected="true">Aucun</button>
        <button type="button" class="affix-pill" data-affix="farouche" role="tab" aria-selected="false">Farouche</button>
        <button type="button" class="affix-pill" data-affix="robuste" role="tab" aria-selected="false">Robuste</button>
      </div>

      <div class="modal-stats">
        <div class="modal-stat" data-stat="hp"><span class="lbl">PV</span><span class="val c-hp">${m.hp}</span></div>
        <div class="modal-stat" data-stat="esq"><span class="lbl">ESQ</span><span class="val c-esq">${m.esq}%</span></div>
        <div class="modal-stat" data-stat="dm"><span class="lbl">DM</span><span class="val c-dm">${m.dm}%</span></div>
        <div class="modal-stat" data-stat="arm"><span class="lbl">ARM</span><span class="val c-arm">${m.arm}</span></div>
        <div class="modal-stat" data-stat="res"><span class="lbl">RES</span><span class="val c-res">${m.res}</span></div>
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

  // Pills affixes : recalcul des stats à chaque clic
  content.querySelectorAll('.affix-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const affixKey = pill.dataset.affix;
      applyAffixToModal(m, affixKey);
      content.querySelectorAll('.affix-pill').forEach(p =>
        p.setAttribute('aria-selected', p === pill ? 'true' : 'false')
      );
    });
  });

  // Clic sur une compétence cliquable → ouvre la fiche d'aide en natif
  content.querySelectorAll('.modal-competence.clickable').forEach(row => {
    row.addEventListener('click', () => {
      const idx = parseInt(row.dataset.compIndex, 10);
      if (Number.isNaN(idx)) return;
      const c = m.competences[idx];
      if (!c) return;
      const fiche = getCompetenceFiche(c);
      if (fiche) openHelpModal(fiche);
    });
  });
}

// Icônes inline pour les jets de dés (Réussite / Semi-réussite / Critique).
// Embarquées en SVG inline pour zéro requête réseau et héritage de couleur via currentColor.
const OUTCOME_ICONS = {
  reussite:      '<svg class="outcome-icon" viewBox="0 0 640 640" fill="currentColor" aria-hidden="true"><path d="M64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320z"/></svg>',
  semi_reussite: '<svg class="outcome-icon" viewBox="0 0 640 640" fill="currentColor" aria-hidden="true"><path d="M320 64C324.6 64 329.2 65 333.4 66.9L521.8 146.8C543.8 156.1 560.2 177.8 560.1 204C559.6 303.2 518.8 484.7 346.5 567.2C329.8 575.2 310.4 575.2 293.7 567.2C121.3 484.7 80.6 303.2 80.1 204C80 177.8 96.4 156.1 118.4 146.8L306.7 66.9C310.9 65 315.4 64 320 64z"/></svg>',
  critique:      '<svg class="outcome-icon" viewBox="0 0 640 640" fill="currentColor" aria-hidden="true"><path d="M101.6 68.2C92 61.7 79.2 62.9 71 71C62.8 79.1 61.7 92 68.2 101.6L180.2 264.9L80.6 297.2C70.7 300.4 64 309.6 64 320C64 330.4 70.7 339.6 80.6 342.8L183.7 376.2L130.8 476.8C125.9 486.1 127.6 497.5 135.1 504.9C142.6 512.3 153.9 514.1 163.2 509.2L263.8 456.3L297.2 559.4C300.4 569.3 309.6 576 320 576C330.4 576 339.6 569.3 342.8 559.4L376.2 456.3L476.8 509.2C486.1 514.1 497.5 512.4 504.9 504.9C512.3 497.4 514.1 486.1 509.2 476.8L456.3 376.2L559.4 342.8C569.3 339.6 576 330.4 576 320C576 309.6 569.3 300.4 559.4 297.2L452.9 262.7L478.6 192.3C481.8 183.5 479.6 173.7 473 167.1C466.4 160.5 456.6 158.3 447.8 161.5L377.4 187.2L342.9 80.7C339.6 70.7 330.4 64 320 64C309.6 64 300.4 70.7 297.2 80.6L264.9 180.2L101.6 68.2z"/></svg>',
};

// Préfixe les <b>Réussite</b> / <b>Semi-réussite</b> / <b>Critique</b> par leur icône.
// "Semi-réussite" matché avant "Réussite" pour éviter les collisions de remplacement.
function decorateOutcomes(html) {
  if (!html) return '';
  return html
    .replace(/<b>Semi-réussite<\/b>/g, OUTCOME_ICONS.semi_reussite + '<b>Semi-réussite</b>')
    .replace(/<b>Réussite<\/b>/g,      OUTCOME_ICONS.reussite      + '<b>Réussite</b>')
    .replace(/<b>Critique<\/b>/g,      OUTCOME_ICONS.critique      + '<b>Critique</b>');
}

// Convertit les <img> en <span> avec l'image en background-image.
// Différencie les types d'icônes pour appliquer un zoom adapté :
//   - items (gros sprite avec frame intégré) : crop important pour cacher le frame
//   - autres (modificateur, elements, etc.) : pas de crop, chaque pixel compte
function sanitizeKigardIcons(html) {
  if (!html) return '';
  return html.replace(
    /<img\s+[^>]*?src="([^"]+)"[^>]*?\/?>/g,
    (_, src) => {
      const safeUrl = src.replace(/'/g, '%27');
      const variant = /\/images\/items\//.test(src) ? ' kigard-icon-item' : '';
      return `<span class="kigard-icon${variant}" style="background-image:url('${safeUrl}')"></span>`;
    }
  );
}

// ── Modal d'aide (rendu natif sombre) ─────────────────────────
function openHelpModal(fiche) {
  const overlay = document.getElementById('help-modal-overlay');
  const content = document.getElementById('help-content');
  if (!overlay || !content) return;

  const parts = [];
  parts.push(`<h3 class="help-title">${fiche.name || ''}</h3>`);
  if (fiche.type) {
    parts.push(`<div class="help-subtype">${fiche.type}</div>`);
  }
  if (fiche.info_html) {
    parts.push(`<div class="help-info">${sanitizeKigardIcons(fiche.info_html)}</div>`);
  }
  if (fiche.desc_html) {
    parts.push(`<div class="help-desc">${decorateOutcomes(sanitizeKigardIcons(fiche.desc_html))}</div>`);
  }
  content.innerHTML = parts.join('');
  overlay.classList.add('open');
  // Reset scroll au cas où la modal a été scrollée auparavant
  const modal = overlay.querySelector('.help-modal');
  if (modal) modal.scrollTop = 0;
}

function closeHelpModal() {
  const overlay = document.getElementById('help-modal-overlay');
  if (!overlay) return;
  overlay.classList.remove('open');
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
}

// ── Rendu liste ───────────────────────────────────────────────
function renderCards(monsters) {
  const resultsDiv = document.getElementById('results');
  const emptyDiv   = document.getElementById('empty');
  const countEl    = document.getElementById('count');

  // Pipeline final : on applique le filtre par zone après le filtre texte
  const filtered = monsters.filter(matchesActiveRegions);

  resultsDiv.innerHTML = '';

  if (filtered.length === 0) {
    emptyDiv.style.display = 'block';
    countEl.textContent = '';
    return;
  }

  emptyDiv.style.display = 'none';
  countEl.textContent = filtered.length + ' monstre' + (filtered.length > 1 ? 's' : '') + ' trouvé' + (filtered.length > 1 ? 's' : '');

  filtered.forEach((m, i) => resultsDiv.appendChild(createCard(m, i)));
}

// ── Recherche multi-modes ─────────────────────────────────────
let searchMode = 'name';
let activeRegions = new Set(['Nandor', 'Kigard']);

const SEARCH_PLACEHOLDERS = {
  name:        'Rechercher un monstre…',
  competences: 'Rechercher une compétence…',
  items:       'Rechercher un item…',
  drops:       'Rechercher un drop…',
};

// Renvoie la liste des régions d'un monstre.
//   - Si m.regions est défini (cas des monstres de quête présents partout),
//     on utilise cette liste explicite.
//   - Sinon on parse m.zone pour y trouver "(Nandor)" ou "(Kigard)".
function getMonsterRegions(m) {
  if (Array.isArray(m.regions) && m.regions.length > 0) {
    return m.regions;
  }
  const regions = [];
  if (m.zone && /\(Nandor\)/i.test(m.zone)) regions.push('Nandor');
  if (m.zone && /\(Kigard\)/i.test(m.zone)) regions.push('Kigard');
  return regions;
}

function matchesActiveRegions(m) {
  const regs = getMonsterRegions(m);
  // Si aucune région détectée, on garde le monstre par défaut
  if (regs.length === 0) return true;
  return regs.some(r => activeRegions.has(r));
}

// Normalise une chaîne pour la recherche :
//   - minuscules
//   - apostrophes/guillemets typographiques → ASCII (fix iOS smart punctuation)
//   - suppression des accents (é → e, etc.)
function normalizeSearch(str) {
  return (str || '')
    .toLowerCase()
    .replace(/[\u2018\u2019\u201A\u201B\u2032]/g, "'")
    .replace(/[\u201C\u201D\u201E\u201F\u2033]/g, '"')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function filterMonsters(query) {
  const q = normalizeSearch(query.trim());
  if (!q) return MONSTERS;

  switch (searchMode) {
    case 'name':
      return MONSTERS.filter(m => normalizeSearch(m.name).includes(q));

    case 'competences':
      return MONSTERS.filter(m =>
        Array.isArray(m.competences) &&
        m.competences.some(c => normalizeSearch(c.nom).includes(q))
      );

    case 'items':
      return MONSTERS.filter(m => {
        const inItems = Array.isArray(m.items) &&
          m.items.some(it => normalizeSearch(it.nom).includes(q));
        if (inItems) return true;
        if (Array.isArray(m.variantes)) {
          return m.variantes.some(v =>
            v.some(it => normalizeSearch(it.nom).includes(q))
          );
        }
        return false;
      });

    case 'drops':
      // On exclut les drops d'or (id === 0) qui ne portent pas de vrai nom
      return MONSTERS.filter(m =>
        Array.isArray(m.drops) &&
        m.drops.some(d => d.id !== 0 && normalizeSearch(d.nom).includes(q))
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

  // Pills : filtre par zone (multi-sélection, au moins une zone active)
  document.querySelectorAll('.zone-filter').forEach(btn => {
    btn.addEventListener('click', () => {
      const region = btn.dataset.region;
      const isActive = btn.classList.contains('active');

      if (isActive) {
        // Garde-fou : on refuse de désactiver la dernière zone active
        if (activeRegions.size <= 1) {
          // Petite animation pour signaler le refus
          btn.animate(
            [
              { transform: 'translateX(0)' },
              { transform: 'translateX(-3px)' },
              { transform: 'translateX(3px)' },
              { transform: 'translateX(0)' },
            ],
            { duration: 220, easing: 'ease-in-out' }
          );
          return;
        }
        activeRegions.delete(region);
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      } else {
        activeRegions.add(region);
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      }

      renderCards(filterMonsters(searchInput.value));
    });
  });

  document.getElementById('modal-overlay').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal();
  });

  // Modal d'aide : clic sur l'overlay et bouton de fermeture
  const helpOverlay = document.getElementById('help-modal-overlay');
  if (helpOverlay) {
    helpOverlay.addEventListener('click', e => {
      if (e.target === e.currentTarget) closeHelpModal();
    });
  }
  const helpCloseBtn = document.getElementById('help-close-btn');
  if (helpCloseBtn) {
    helpCloseBtn.addEventListener('click', closeHelpModal);
  }

  // Escape : on ferme la modal du dessus en priorité (modal d'aide), puis la modal monstre
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (helpOverlay && helpOverlay.classList.contains('open')) {
      closeHelpModal();
    } else {
      closeModal();
    }
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