/* Украшения новогодней темы: гирлянда под шапкой и лёгкий снег */
(function () {
    const rnd = (a, b) => a + Math.random() * (b - a);
    const many = (n, style) => Array.from({ length: n }, (_, i) => `<i style="${style(i)}"></i>`).join('');
    const small = window.innerWidth < 600;

    // цвет панели браузера под ночной фон темы
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = '#0c1020';

    const header = document.querySelector('.site-header, .bar');
    if (header) {
        const ARCS = small ? 3 : 7, BULBS = ARCS * (small ? 4 : 6);
        const colors = ['#ff5148', '#ffc83d', '#48e08a', '#4fa8ff', '#ff7ad9'];
        let path = 'M0 2';
        for (let a = 0; a < ARCS; a++) path += ` Q${(a + .5) * 1000 / ARCS} 32 ${(a + 1) * 1000 / ARCS} 2`;
        const bulbs = many(BULBS, i => {
            const p = (i + .5) / BULBS, t = (p * ARCS) % 1;
            return `left:${p * 100}%;top:${2 + 60 * t * (1 - t)}px;--c:${colors[i % 5]};--d:-${(i % 5) * .48}s`;
        });
        header.insertAdjacentHTML('beforeend', `<div class="nyt-garland" aria-hidden="true"><svg viewBox="0 0 1000 30" preserveAspectRatio="none"><path d="${path}"/></svg>${bulbs}</div>`);
    }

    document.body.insertAdjacentHTML('beforeend', '<div class="nyt-snow" aria-hidden="true">' +
        many(small ? 18 : 36, () => `--x:${rnd(0, 100)}%;--s:${rnd(2, 4.5)}px;--o:${rnd(.25, .65)};--dx:${rnd(-60, 60)}px;--t:${rnd(9, 18)}s;--d:-${rnd(0, 18)}s`) + '</div>');
})();
