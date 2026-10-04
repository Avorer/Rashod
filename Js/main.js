/* ============================================================
   Интерфейс: меню, карточки гонщиков, фильтр, появление блоков.
   Данные гонщиков берутся из driversData (Js/index.js).
   Победы и статус — здесь, в driverExtra (как в прежнем HTML).
   ============================================================ */
(function () {
    document.documentElement.classList.add('js');

    // Победы и статус по имени гонщика
    const driverExtra = {
        "КАПЧЁС ЖОПЕЛЬ": { wins: 0, on: false },
        "РУЛСАН ГРАНТОВИЧ": { wins: 4, on: true },
        "ГЛЕБОБ 13 69": { wins: 0, on: false },
        "АТУР СОЛЯРА": { wins: 0, on: true },
        "ЛЕПЁША": { wins: 0, on: false },
        "ЭДИКЕ ОТЕЦ": { wins: 0, on: true },
        "МАСРЕЛЬ ДИКАЛЮШЕН": { wins: 0, on: true },
        "АЛЕКС 9914": { wins: 0, on: false },
        "ЯГЕРЬ ЧОПИРКУС": { wins: 0, on: true },
        "АДАР 10": { wins: 0, on: false },
        "БУЛАТ ЛАЧЕТТИ": { wins: 1, on: true },
        "АЛМАЗ СОЛЯРИС": { wins: 2, on: false },
        "МАРАТ 13": { wins: 0, on: false },
        "РУСЛАН 14": { wins: 1, on: true },
        "АЛСАНДР 10КА": { wins: 0, on: true },
        "РУСЛАН ТАТМЕФ": { wins: 0, on: true },
        "ЖОРИК СУПЕР": { wins: 0, on: false }
    };

    const t = v => v || '—:—';

    // ---- Карточки гонщиков ----
    const grid = document.getElementById('drivers-grid');
    const list = (typeof driversData !== 'undefined') ? driversData : [];
    grid.innerHTML = list.map(d => {
        const x = driverExtra[d.name] || { wins: 0, on: !!d.active };
        return `
        <article class="card racer reveal" data-state="${x.on ? 'on' : 'off'}">
            <div class="racer-top">
                <h3>${d.name}</h3>
                <span class="status ${x.on ? 'on' : 'off'}">${x.on ? 'Активен' : 'Не активен'}</span>
            </div>
            <div class="racer-car">${d.car}</div>
            <p class="racer-spec">${x.on ? 'Боевая единица в строю. Подробности — в профиле.' : 'Боевая единица временно выведена из строя. Детали — в профиле.'}</p>
            <div class="racer-foot">
                <span>🏆 ${x.wins} · ${t(d.time_ivanovskoe_forward)} – ${t(d.time_ivanovskoe_reverse)}</span>
                <a href="${d.profile}">Профиль</a>
            </div>
        </article>`;
    }).join('');

    // ---- Счётчики на первом экране ----
    const activeCount = list.filter(d => (driverExtra[d.name] || {}).on).length;
    document.getElementById('stat-drivers').textContent = list.length;
    document.getElementById('stat-active').textContent = activeCount;

    // ---- Фильтр гонщиков ----
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const f = btn.dataset.filter;
            grid.querySelectorAll('.racer').forEach(c => {
                c.hidden = f !== 'all' && c.dataset.state !== f;
            });
        });
    });

    // ---- Меню (бургер) ----
    const burger = document.getElementById('burger');
    const menu = document.getElementById('menu');
    const setMenu = open => {
        menu.classList.toggle('open', open);
        burger.setAttribute('aria-expanded', open);
        document.body.style.overflow = open ? 'hidden' : '';
    };
    burger.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

    // ---- Тень шапки при прокрутке ----
    const header = document.querySelector('.site-header');
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // ---- Подсветка текущего раздела в меню ----
    const links = [...menu.querySelectorAll('a[href^="#"]')];
    const spy = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                links.forEach(l => l.classList.toggle('current', l.getAttribute('href') === '#' + e.target.id));
            }
        });
    }, { rootMargin: '-45% 0px -50% 0px' });
    links.forEach(l => {
        const s = document.querySelector(l.getAttribute('href'));
        if (s) spy.observe(s);
    });

    // ---- Появление карточек при прокрутке ----
    const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
        });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
})();
