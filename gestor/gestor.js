/**
 * FATTO - Al Forno -
 * Gestor Independiente de Variedades del Menú
 * Control de stock y visibilidad con persistencia en LocalStorage
 */

const STORAGE_KEY = 'fatto_hidden_items';

// Normalization helper for accent-immune searching
function removeAccents(str) {
  if (!str) return '';
  return str
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

// LocalStorage helpers
function loadHiddenIds() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch (e) {
    console.error('Error cargando estado de variedades:', e);
    return new Set();
  }
}

function saveHiddenIds(hiddenSet) {
  try {
    const arr = Array.from(hiddenSet);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
    
    // Dispatch an event so any open tab on the same page can react immediately
    window.dispatchEvent(new StorageEvent('storage', {
      key: STORAGE_KEY,
      newValue: JSON.stringify(arr)
    }));
  } catch (e) {
    console.error('Error guardando estado de variedades:', e);
  }
}

// State
let hiddenIds = loadHiddenIds();
let activeCategory = 'todas';
let searchQuery = '';
let statusFilter = 'todos';

// Toast Notifications
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span>${type === 'success' ? '✓' : type === 'warn' ? '⚠️' : 'ℹ️'}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 2800);
}

// Render Functions
function updateKPIs() {
  const allItems = window.MENU_ITEMS || [];
  const total = allItems.length;
  const hiddenCount = allItems.filter(item => hiddenIds.has(item.id)).length;
  const visibleCount = total - hiddenCount;

  const kpiTotal = document.getElementById('kpi-total');
  const kpiVisible = document.getElementById('kpi-visible');
  const kpiHidden = document.getElementById('kpi-hidden');

  if (kpiTotal) kpiTotal.textContent = total;
  if (kpiVisible) kpiVisible.textContent = visibleCount;
  if (kpiHidden) kpiHidden.textContent = hiddenCount;

  // Category Tab Counts
  const counts = {
    todas: total,
    empanadas: allItems.filter(i => i.category === 'empanadas').length,
    pizzas: allItems.filter(i => i.category === 'pizzas').length,
    tartas: allItems.filter(i => i.category === 'tartas').length,
    salsas: allItems.filter(i => i.category === 'salsas').length
  };

  for (const [cat, count] of Object.entries(counts)) {
    const el = document.getElementById(`tab-count-${cat}`);
    if (el) el.textContent = count;
  }
}

function renderItems() {
  const grid = document.getElementById('items-grid');
  const noResults = document.getElementById('no-results');
  const headerTitle = document.getElementById('items-header-title');
  if (!grid) return;

  const allItems = window.MENU_ITEMS || [];
  const normQuery = removeAccents(searchQuery);
  const terms = normQuery.split(/\s+/).filter(Boolean);

  const filtered = allItems.filter(item => {
    // Category match
    const matchesCat = activeCategory === 'todas' || item.category === activeCategory;
    if (!matchesCat) return false;

    // Status filter match
    const isHidden = hiddenIds.has(item.id);
    if (statusFilter === 'visibles' && isHidden) return false;
    if (statusFilter === 'ocultos' && !isHidden) return false;

    // Search query match
    if (terms.length > 0) {
      const searchTarget = removeAccents(
        `${item.name} ${item.desc} ${item.category} ${item.categoryName || ''} ${(item.badges || []).join(' ')}`
      );
      if (!terms.every(t => searchTarget.includes(t))) return false;
    }

    return true;
  });

  if (headerTitle) {
    headerTitle.textContent = `Listado de Variedades (${filtered.length})`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = '';
    if (noResults) noResults.style.display = 'block';
    return;
  }

  if (noResults) noResults.style.display = 'none';

  grid.innerHTML = filtered.map(item => {
    const isHidden = hiddenIds.has(item.id);
    const isChecked = !isHidden;

    const badgesHtml = (item.badges || []).map(b => {
      let label = b.toUpperCase();
      let cls = 'badge-' + b;
      if (b === 'gourmet') label = '★ Gourmet';
      if (b === 'favorito') label = '🔥 Favorito';
      if (b === 'veggie') label = '🌱 Veggie';
      if (b === 'picante') label = '🌶️ Picante';
      if (b === 'dulce') label = '🍯 Dulce';
      if (b === 'integral') label = '🌾 Integral';
      return `<span class="badge ${cls}">${label}</span>`;
    }).join('');

    return `
      <div class="item-card ${isHidden ? 'is-hidden' : ''}" data-id="${item.id}">
        <div class="item-card-top">
          <div class="item-icon-circle">${item.icon || '🍽️'}</div>
          <div class="item-info">
            <div class="item-name-row">
              <span class="item-name">${item.name}</span>
              <span class="item-category-tag">${item.categoryName || item.category}</span>
            </div>
            <p class="item-desc">${item.desc}</p>
            <div class="item-badges">${badgesHtml}</div>
          </div>
        </div>

        <div class="item-card-bottom">
          <div class="status-pill ${isChecked ? 'status-online' : 'status-offline'}">
            <span class="status-dot"></span>
            <span class="status-text">${isChecked ? 'Visible en Menú' : 'Oculto (Sin Stock)'}</span>
          </div>

          <div class="toggle-wrap">
            <label class="toggle-switch" title="${isChecked ? 'Click para ocultar del menú' : 'Click para mostrar en el menú'}">
              <input type="checkbox" data-id="${item.id}" ${isChecked ? 'checked' : ''}>
              <span class="toggle-slider"></span>
            </label>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Attach change events to checkboxes
  grid.querySelectorAll('input[type="checkbox"]').forEach(chk => {
    chk.addEventListener('change', (e) => {
      const id = e.target.getAttribute('data-id');
      const makeVisible = e.target.checked;
      toggleItem(id, makeVisible);
    });
  });
}

function toggleItem(id, makeVisible) {
  const item = (window.MENU_ITEMS || []).find(i => i.id === id);
  const itemName = item ? item.name : id;

  if (makeVisible) {
    hiddenIds.delete(id);
    showToast(`"${itemName}" ahora es VISIBLE en el menú`, 'success');
  } else {
    hiddenIds.add(id);
    showToast(`"${itemName}" se OCULTÓ del menú`, 'warn');
  }

  saveHiddenIds(hiddenIds);
  updateKPIs();
  renderItems();
}

function setCategoryVisibility(cat, shouldBeVisible) {
  const allItems = window.MENU_ITEMS || [];
  const targetItems = allItems.filter(item => {
    if (cat === 'todas') return true;
    return item.category === cat;
  });

  if (targetItems.length === 0) return;

  targetItems.forEach(item => {
    if (shouldBeVisible) {
      hiddenIds.delete(item.id);
    } else {
      hiddenIds.add(item.id);
    }
  });

  saveHiddenIds(hiddenIds);
  updateKPIs();
  renderItems();

  const catName = cat === 'todas' ? 'todas las variedades' : `las ${cat}`;
  if (shouldBeVisible) {
    showToast(`Todas ${catName} ahora son VISIBLES`, 'success');
  } else {
    showToast(`Todas ${catName} han sido OCULTADAS`, 'warn');
  }
}

function resetAll() {
  if (!confirm('¿Restablecer todo el menú? Todas las 68 variedades volverán a estar visibles en la página web.')) {
    return;
  }

  hiddenIds.clear();
  saveHiddenIds(hiddenIds);
  updateKPIs();
  renderItems();
  showToast('Se restablecieron todas las variedades a VISIBLE', 'success');
}

// Controls & Event Listeners
function initEvents() {
  // Category tabs
  document.querySelectorAll('.cat-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeCategory = tab.getAttribute('data-cat');
      renderItems();
    });
  });

  // Search input
  const searchInput = document.getElementById('search-input');
  const clearBtn = document.getElementById('clear-search-btn');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      if (clearBtn) {
        clearBtn.style.display = searchQuery ? 'flex' : 'none';
      }
      renderItems();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
        searchQuery = '';
        clearBtn.style.display = 'none';
        searchInput.focus();
        renderItems();
      }
    });
  }

  // Status select filter
  const statusFilterEl = document.getElementById('status-filter');
  if (statusFilterEl) {
    statusFilterEl.addEventListener('change', (e) => {
      statusFilter = e.target.value;
      renderItems();
    });
  }

  // Bulk actions
  const btnShowAll = document.getElementById('btn-show-all-cat');
  if (btnShowAll) {
    btnShowAll.addEventListener('click', () => {
      setCategoryVisibility(activeCategory, true);
    });
  }

  const btnHideAll = document.getElementById('btn-hide-all-cat');
  if (btnHideAll) {
    btnHideAll.addEventListener('click', () => {
      setCategoryVisibility(activeCategory, false);
    });
  }

  const btnReset = document.getElementById('btn-reset-all');
  if (btnReset) {
    btnReset.addEventListener('click', resetAll);
  }

  // Storage listener if changed in another window/tab
  window.addEventListener('storage', (e) => {
    if (e.key === STORAGE_KEY) {
      hiddenIds = loadHiddenIds();
      updateKPIs();
      renderItems();
    }
  });
}

// Initial Boot
document.addEventListener('DOMContentLoaded', () => {
  updateKPIs();
  renderItems();
  initEvents();
});
