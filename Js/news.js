/* ============================================================
   БЛОК НОВОСТЕЙ С АВТОПРОКРУТКОЙ
   Работает ТОЛЬКО с элементами новостей.
   Логику лидерборда (Js/index.js) не трогает.
   ============================================================ */
(function initNewsTicker() {
    const IDLE_MS = 7000;        // столько секунд никто не трогает экран, и только потом лента листается сама
    const MIN_READ_MS = 10000;   // минимум времени на одну новость
    const MAX_READ_MS = 45000;   // максимум времени на одну новость
    const WORDS_PER_SEC = 3;     // скорость чтения, около 180 слов в минуту

    const NEWS = [
        {
            title: "ПРЕДСТАРТОВЫЙ ЭТАП ТАЙМ АТТАК В КАЗАНИ",
            text:
                "Всем стритерам, любителям автоспорта и просто водителям привет! " +
                "Команда «РАСХОД» совместно с «ERT» решила провести первый «предстартовый» этап тайм аттак в г. Казань. " +
                "В это время тяжело найти территорию, место или трек, где без особых проблем можно провести какую-либо гонку — " +
                "будь то джимхана, тайм аттак, батлы и т.д. Мы много работали и дошли до того, чтобы организовать для всех " +
                "автолюбителей Татарстана и не только гонку, которая соединит несколько авто-культур и большое количество автолюбителей.",
            date: "29.09.2026",
            image: "img/news/photoStart.png"
        },
        {
            title: "ВЫХОД В ЛЮДИ",
            text:
                  "Всем стритерам, любителям автоспорта и просто водителям привет! " +
                  "Мы решили полностью изменить концепцию нашей команды. Мы хотим продолжить развиваться, но уже вместе с вами. " +
                  "Мы думаем, что каждый хочет кататься без всяких траблов. Поэтому мы переходим из шайки агалов в закрытое комьюнити с бюджетом и ресурсами. " +
                  "Мы предоставляем поддержку во всех вопросах. " +
                  "Даем вам локации, а так же туториал по проезду. " +
                  "Вы получаете наш мерч, включая наклейки и все остальное. " +
                  "Мы контролируем чтобы материал с вашим автомобилем не оказался в ненужных руках, а вы на оренбургском. " +
                  "Предоставляем вам участие в различных мероприятиях данной тематики от нашего имени. " +
                  "А так же многое другое. " +
                  "Для вступления в наше сообщество вам требуется написать в личку тгк, после чего мы назначаем контрольный проезд с нами.",
            date: "24.09.2026",
            image: "img/news/OpenSoursCom1.png"
        }
    ];

    const trackEl = document.getElementById('news-track');
    const dotsEl  = document.getElementById('news-dots');
    const prevBtn = document.getElementById('news-prev');
    const nextBtn = document.getElementById('news-next');

    // Если блока новостей нет — тихо выходим
    if (!trackEl || !dotsEl || !prevBtn || !nextBtn) return;

    let current = 0;
    let autoplayTimer = null;

    // ---- Рендер слайдов ----
    trackEl.innerHTML = NEWS.map(item => `
        <div class="news-slide">
            <div class="news-image">
                <img src="${item.image}" alt="${item.title}" loading="lazy">
            </div>
            <div class="news-body">
                <div class="news-title">${item.title}</div>
                <div class="news-text">${item.text}</div>
                <div class="news-date">${item.date}</div>
            </div>
        </div>
    `).join('');

    // ---- Точки-индикаторы ----
    if (NEWS.length > 1) {
        dotsEl.innerHTML = NEWS.map((_, i) =>
            `<button class="news-dot${i === 0 ? ' active' : ''}" data-index="${i}" aria-label="Новость ${i + 1}"></button>`
        ).join('');
    } else {
        dotsEl.innerHTML = '';
    }

    const dots = Array.from(dotsEl.querySelectorAll('.news-dot'));

    // ---- Переключение слайдов ----
    function goTo(index) {
        const total = NEWS.length;
        if (total === 0) return;
        current = (index + total) % total;
        shownAt = Date.now();
        trackEl.style.transform = `translateX(-${current * 100}%)`;
        dots.forEach((dot, i) => dot.classList.toggle('active', i === current));
    }

    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }

    // ---- Умная автопрокрутка ----
    // Новость листается сама, только если выполняется всё сразу:
    //  1) блок новостей виден на экране и вкладка открыта;
    //  2) с показа этой новости прошло достаточно времени, чтобы её прочитать
    //     (считается по длине текста, но не меньше MIN_READ_MS и не больше MAX_READ_MS);
    //  3) последние IDLE_MS никто не касался экрана, не кликал, не листал и не нажимал клавиши;
    //  4) курсор мыши не стоит над блоком и в нём нет клавиатурного фокуса.
    const tickerEl = document.querySelector('.news-ticker');
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const readTimes = NEWS.map(n => {
        const words = (n.title + ' ' + n.text).trim().split(/\s+/).length;
        return Math.min(MAX_READ_MS, Math.max(MIN_READ_MS, (words / WORDS_PER_SEC) * 1000));
    });

    let shownAt = Date.now();       // когда показана текущая новость
    let lastActivity = Date.now();  // когда пользователь в последний раз что-то делал
    let inView = false;
    let hovered = false;
    let focused = false;

    const markActivity = () => { lastActivity = Date.now(); };
    const resetReading = () => { shownAt = Date.now(); };

    function tick() {
        if (!inView || document.hidden || hovered || focused) return;
        const now = Date.now();
        if (now - shownAt >= readTimes[current] && now - lastActivity >= IDLE_MS) next();
    }

    // ---- Обработчики ----
    prevBtn.addEventListener('click', prev);
    nextBtn.addEventListener('click', next);
    dots.forEach(dot => {
        dot.addEventListener('click', () => goTo(parseInt(dot.dataset.index, 10)));
    });

    // любое действие пользователя откладывает автопрокрутку ещё на IDLE_MS
    ['pointerdown', 'keydown', 'touchstart', 'wheel'].forEach(ev =>
        document.addEventListener(ev, markActivity, { passive: true })
    );
    window.addEventListener('scroll', markActivity, { passive: true });
    if (tickerEl) {
        // прокрутка длинного текста внутри самой новости
        tickerEl.addEventListener('scroll', markActivity, true);

        // курсор мыши над блоком — не листаем (на сенсорных экранах это не учитывается)
        tickerEl.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') hovered = true; });
        tickerEl.addEventListener('pointerleave', () => { hovered = false; markActivity(); });

        // клавиатурный фокус внутри блока — не листаем (клик мышью по стрелке не считается)
        tickerEl.addEventListener('focusin', e => {
            focused = !!(e.target.matches && e.target.matches(':focus-visible'));
        });
        tickerEl.addEventListener('focusout', () => { focused = false; markActivity(); });
    }

    // время на чтение идёт только пока новости видны на экране
    if (tickerEl && 'IntersectionObserver' in window) {
        new IntersectionObserver(entries => {
            inView = entries[0].isIntersecting;
            if (inView) resetReading();
        }, { threshold: 0.4 }).observe(tickerEl);
    } else {
        inView = true;
    }

    document.addEventListener('visibilitychange', () => {
        if (!document.hidden) resetReading();
    });

    // ---- Свайпы на мобильных ----
    let touchStartX = 0;
    trackEl.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    trackEl.addEventListener('touchend', e => {
        const diff = touchStartX - e.changedTouches[0].screenX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) next(); else prev();
        }
    }, { passive: true });

    // ---- Старт ----
    goTo(0);
    // при «уменьшении движения» в системе автопрокрутку не включаем, листать можно вручную
    if (NEWS.length > 1 && !prefersReduced) setInterval(tick, 500);
})();
