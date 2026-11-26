/* ============================================================
   Украшения новогодней заставки «вайб 2021».
   Подключается ПЕРЕД Js/preloader.js. Логика загрузки там же,
   здесь только оформление. Как вернуть обычную заставку:
   см. начало css/preloader_newyear.css
   ============================================================ */
(function () {
    const el = document.getElementById('preloader');
    if (!el || !document.documentElement.classList.contains('preloading')) return;
    el.classList.add('ny');

    const rnd = (a, b) => a + Math.random() * (b - a);
    const colors = ['#ff5148', '#ffc83d', '#48e08a', '#4fa8ff', '#ff7ad9'];
    const layer = (cls, html) => `<div class="ny-layer ${cls}" aria-hidden="true">${html}</div>`;
    const many = (n, style) => Array.from({ length: n }, (_, i) => `<i style="${style(i)}"></i>`).join('');

    const bokeh = many(16, i => `--x:${rnd(-5, 95)}%;--y:${rnd(8, 85)}%;--s:${rnd(40, 130)}px;--c:${i % 3 ? '#ffb347' : '#ff6a3d'};--t:${rnd(1.2, 2.6)}s;--d:-${rnd(0, 2)}s`);
    // отрицательная задержка: снег идёт уже с первого кадра
    const snow = many(70, () => `--x:${rnd(0, 100)}%;--s:${rnd(2, 6)}px;--o:${rnd(.4, .95)};--dx:${rnd(-60, 60)}px;--t:${rnd(3, 7)}s;--d:-${rnd(0, 7)}s`);

    // провод провисает дугами, лампочки висят на нём
    const ARCS = 4, BULBS = window.innerWidth < 600 ? 16 : 32;
    let path = 'M0 8';
    for (let a = 0; a < ARCS; a++) path += ` Q${a * 250 + 125} 96 ${(a + 1) * 250} 8`;
    const bulbs = many(BULBS, i => {
        const p = (i + .5) / BULBS, t = (p * ARCS) % 1;
        const y = 8 + 2 * (1 - t) * t * 88; // та же кривая, что у провода (viewBox 90)
        return `left:${p * 100}%;top:${y}px;--c:${colors[i % colors.length]};--d:-${(i % 5) * .24}s`;
    });

    el.insertAdjacentHTML('afterbegin',
        layer('ny-bokeh', bokeh) +
        `<div class="ny-garland" aria-hidden="true"><svg viewBox="0 0 1000 90" preserveAspectRatio="none"><path d="${path}"/></svg>${bulbs}</div>` +
        '<div class="ny-drift" aria-hidden="true"></div>');
    el.insertAdjacentHTML('beforeend', layer('ny-snow', snow));

    const label = el.querySelector('.pl-meta span');
    if (label) label.textContent = 'Прогреваемся';
    el.querySelector('.pl-center').insertAdjacentHTML('beforeend', '<div class="ny-wish">С наступающим 2027!</div>');
})();
