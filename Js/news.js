/* ============================================================
   БЛОК НОВОСТЕЙ С АВТОПРОКРУТКОЙ
   Работает ТОЛЬКО с элементами новостей.
   Логику лидерборда (Js/index.js) не трогает.
   ============================================================ */
(function initNewsTicker() {
    const AUTOPLAY_MS = 7000;

    const NEWS = [
        {
            title: "ПРЕДСТАРТОВЫЙ ЭТАП ТАЙМ АТТАК В КАЗАНИ",
            text:
                "Всем стритерам, любителям автоспорта и просто водителям привет! " +
                "Команда «РАСХОД» совместно с «ERT» решила провести первый «предстартовый» этап тайм аттак в г. Казань. " +
                "В это время тяжело найти территорию, место или трек, где без особых проблем можно провести какую-либо гонку — " +
                "будь то джимхана, тайм аттак, батлы и т.д. Мы много работали и дошли до того, чтобы организовать для всех " +
                "автолюбителей Татарстана и не только гонку, которая соединит несколько авто-культур и большое количество автолюбителей.",
            date: "04.10.2026",
            image: "img/news/photoStart.png"
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
        trackEl.style.transform = `translateX(-${current * 100}%)`;
        dots.forEach((dot, i) => dot.classList.toggle('active', i === current));
    }

    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }

    // ---- Автопрокрутка ----
    function startAutoplay() {
        stopAutoplay();
        if (NEWS.length < 2) return;
        autoplayTimer = setInterval(next, AUTOPLAY_MS);
    }

    function stopAutoplay() {
        if (autoplayTimer) {
            clearInterval(autoplayTimer);
            autoplayTimer = null;
        }
    }

    function restartAutoplay() { stopAutoplay(); startAutoplay(); }

    // ---- Обработчики ----
    prevBtn.addEventListener('click', () => { prev(); restartAutoplay(); });
    nextBtn.addEventListener('click', () => { next(); restartAutoplay(); });

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            goTo(parseInt(dot.dataset.index, 10));
            restartAutoplay();
        });
    });

    const tickerEl = document.querySelector('.news-ticker');
    if (tickerEl) {
        tickerEl.addEventListener('mouseenter', stopAutoplay);
        tickerEl.addEventListener('mouseleave', startAutoplay);
    }

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) stopAutoplay();
        else startAutoplay();
    });

    // ---- Свайпы на мобильных ----
    let touchStartX = 0;
    trackEl.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
        stopAutoplay();
    }, { passive: true });

    trackEl.addEventListener('touchend', e => {
        const diff = touchStartX - e.changedTouches[0].screenX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) next(); else prev();
        }
        startAutoplay();
    }, { passive: true });

    // ---- Старт ----
    goTo(0);
    startAutoplay();
})();
