/* ============================================================
   Заставка при первом заходе на главную за сессию (вкладку).
   Класс .preloading на <html> ставит маленький скрипт в <head>,
   а флаг rashod_loaded в sessionStorage не даёт показать заставку
   повторно, когда человек возвращается с профиля на главную.
   ============================================================ */
(function () {
    const root = document.documentElement;
    const el = document.getElementById('preloader');
    if (!el || !root.classList.contains('preloading')) return;

    const fill = document.getElementById('pl-fill');
    const pct = document.getElementById('pl-pct');
    const MIN_MS = 1500;   // заставка показывается не короче, чтобы анимация успела отыграть
    const MAX_MS = 8000;   // и не дольше, даже если что-то грузится слишком долго

    try { sessionStorage.setItem('rashod_loaded', '1'); } catch (e) {}

    let loaded = document.readyState === 'complete';
    window.addEventListener('load', () => { loaded = true; }, { once: true });

    const start = performance.now();
    let shown = 0;
    let finished = false;

    function finish() {
        if (finished) return;
        finished = true;
        el.classList.add('done');
        setTimeout(() => {
            root.classList.remove('preloading');
            el.remove();
        }, 900);
    }

    function frame(now) {
        const t = now - start;
        let target = (loaded && t >= MIN_MS) ? 100 : Math.min(90, 90 * (1 - Math.exp(-t / 1200)));
        if (t >= MAX_MS) target = 100;
        shown += (target - shown) * 0.12;
        if (target === 100 && shown > 99.5) shown = 100;
        fill.style.transform = 'scaleX(' + shown / 100 + ')';
        pct.textContent = Math.round(shown) + '%';
        if (shown >= 100) finish(); else requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
    setTimeout(finish, MAX_MS + 1500); // запасной выход, если вкладка в фоне и кадры не рисуются
})();
