// Данные гонщиков с основной машиной (первая в списке)
const driversData = [
    { 
        name: "КАПЧЁС ЖОПЕЛЬ", 
        car: "Opel Astra H GTC", 
        time_ivanovskoe_forward: null, time_ivanovskoe_reverse: null,
        time_glubokoe_forward: null, time_glubokoe_reverse: null,
        time_raifa_forward: null, time_raifa_reverse: null,
        active: false, 
        profile: "drivers/driver_Kapches.html" 
    },
    { 
        name: "РУЛСАН ГРАНТОВИЧ", 
        car: "ВАЗ-2190 FL", 
        time_ivanovskoe_forward: "3:33.0", time_ivanovskoe_reverse: "3:37.0",
        time_glubokoe_forward: null, time_glubokoe_reverse: null,
        time_raifa_forward: null, time_raifa_reverse: null,
        active: true, 
        profile: "drivers/driver_rusGranta.html" 
    },
    { 
        name: "ГЛЕБОБ 13 69", 
        car: "ВАЗ-2113", 
        time_ivanovskoe_forward: "4:33.0", time_ivanovskoe_reverse: null,
        time_glubokoe_forward: null, time_glubokoe_reverse: null,
        time_raifa_forward: null, time_raifa_reverse: null,
        active: true, 
        profile: "drivers/glebob.html" 
    },
    { 
        name: "АТУР СОЛЯРА", 
        car: "Hyundai Solaris", 
        time_ivanovskoe_forward: "3:41.0", time_ivanovskoe_reverse: null,
        time_glubokoe_forward: null, time_glubokoe_reverse: null,
        time_raifa_forward: null, time_raifa_reverse: null,
        active: false, 
        profile: "drivers/atur_Solyara.html" 
    },
    { 
        name: "ЛЕПЁША", 
        car: "ВАЗ-2190", 
        time_ivanovskoe_forward: "3:45.0", time_ivanovskoe_reverse: "3:45.0",
        time_glubokoe_forward: null, time_glubokoe_reverse: null,
        time_raifa_forward: null, time_raifa_reverse: null,
        active: true, 
        profile: "drivers/leposha.html" 
    },
    { 
        name: "ЭДИКЕ ОТЕЦ", 
        car: "ВАЗ-2112", 
        time_ivanovskoe_forward: null, time_ivanovskoe_reverse: null,
        time_glubokoe_forward: null, time_glubokoe_reverse: null,
        time_raifa_forward: null, time_raifa_reverse: null,
        active: true, 
        profile: "drivers/edike.html" 
    },
    { 
        name: "МАСРЕЛЬ ДИКАЛЮШЕН", 
        car: "Mitsubishi Lancer IX", 
        time_ivanovskoe_forward: null, time_ivanovskoe_reverse: null,
        time_glubokoe_forward: null, time_glubokoe_reverse: null,
        time_raifa_forward: null, time_raifa_reverse: null,
        active: true, 
        profile: "drivers/masrel.html" 
    },
    { 
        name: "АЛЕКС 9914", 
        car: "ВАЗ-21099", 
        time_ivanovskoe_forward: "4:24.0", time_ivanovskoe_reverse: null,
        time_glubokoe_forward: null, time_glubokoe_reverse: null,
        time_raifa_forward: null, time_raifa_reverse: null,
        active: true, 
        profile: "drivers/alex.html" 
    },
    { 
        name: "ЯГЕРЬ ЧОПИРКУС", 
        car: "ВАЗ-2114", 
        time_ivanovskoe_forward: null, time_ivanovskoe_reverse: null,
        time_glubokoe_forward: null, time_glubokoe_reverse: null,
        time_raifa_forward: null, time_raifa_reverse: null,
        active: true, 
        profile: "drivers/yager.html" 
    },
    { 
        name: "АДАР 10", 
        car: "ВАЗ-2110 Богдан", 
        time_ivanovskoe_forward: null, time_ivanovskoe_reverse: null,
        time_glubokoe_forward: null, time_glubokoe_reverse: null,
        time_raifa_forward: null, time_raifa_reverse: null,
        active: true, 
        profile: "drivers/adar.html" 
    },
    { 
        name: "БУЛАТ ЛАЧЕТТИ", 
        car: "Chevrolet Lacetti", 
        time_ivanovskoe_forward: "4:04.0", time_ivanovskoe_reverse: null,
        time_glubokoe_forward: null, time_glubokoe_reverse: null,
        time_raifa_forward: null, time_raifa_reverse: null,
        active: true, 
        profile: "drivers/bulat.html" 
    },
    { 
        name: "АЛМАЗ СОЛЯРИС", 
        car: "Hyundai Solaris", 
        time_ivanovskoe_forward: null, time_ivanovskoe_reverse: null,
        time_glubokoe_forward: null, time_glubokoe_reverse: null,
        time_raifa_forward: null, time_raifa_reverse: null,
        active: true, 
        profile: "drivers/almaz.html" 
    },
    { 
        name: "МАРАТ 13", 
        car: "ВАЗ-2113", 
        time_ivanovskoe_forward: null, time_ivanovskoe_reverse: null,
        time_glubokoe_forward: null, time_glubokoe_reverse: null,
        time_raifa_forward: null, time_raifa_reverse: null,
        active: true, 
        profile: "drivers/marat.html" 
    },
    { 
        name: "РУСЛАН 14", 
        car: "ВАЗ-2114", 
        time_ivanovskoe_forward: "3:45.0", time_ivanovskoe_reverse: "3:32.0",
        time_glubokoe_forward: null, time_glubokoe_reverse: null,
        time_raifa_forward: null, time_raifa_reverse: null,
        active: true, 
        profile: "drivers/rus_2114.html" 
    }
];

const trackInfo = {
    ivanovskoe: { 
        length: "6 км", 
        turns: "16", 
        record_forward: "—:—",
        record_reverse: "—:—",
        name: "ИВАНОВСКОЕ" 
    },
    glubokoe: { 
        length: "1.61 км", 
        turns: "5", 
        record_forward: "—:—",
        record_reverse: "—:—",
        name: "ГЛУБОКОЕ ОЗЕРО" 
    },
    raifa: { 
        length: "3.6 км", 
        turns: "8", 
        record_forward: "—:—",
        record_reverse: "—:—",
        name: "РАИФСКИЙ ДЕНДРАРИЙ" 
    }
};

let currentTrack = 'ivanovskoe';
let currentDirection = 'forward';

// Преобразование времени в секунды для сортировки
function timeToSeconds(timeStr) {
    if (!timeStr || timeStr === "—:—") return Infinity;
    const [minutes, seconds] = timeStr.split(':').map(Number);
    return minutes * 60 + seconds;
}

// Получение данных для текущей трассы и направления
function getTrackData() {
    const timeField = `time_${currentTrack}_${currentDirection}`;
    
    let results = driversData.map(driver => ({
        name: driver.name,
        car: driver.car,
        time: driver[timeField] || "—:—",
        active: driver.active,
        profile: driver.profile,
        timeSeconds: timeToSeconds(driver[timeField])
    }));

    // Всегда сортируем по времени
    results.sort((a, b) => a.timeSeconds - b.timeSeconds);

    return results;
}

// Обновление заголовка времени
function updateTimeHeader() {
    const header = document.getElementById('time-header');
    header.textContent = 'ВРЕМЯ';
}

// Обновление индикатора направления
function updateDirectionIndicator() {
    const indicator = document.getElementById('current-direction');
    if (currentDirection === 'forward') {
        indicator.textContent = 'ВПЕРЕД';
        indicator.style.background = '#00ff00';
        indicator.style.color = '#000';
    } else {
        indicator.textContent = 'РЕВЕРС';
        indicator.style.background = 'var(--neon-red)';
        indicator.style.color = '#fff';
    }
}

// Обновление таблицы лидерборда
function updateLeaderboard() {
    const tbody = document.querySelector('#leaderboard-table tbody');
    const data = getTrackData();
    
    tbody.innerHTML = '';
    
    data.forEach((driver, index) => {
        const row = document.createElement('tr');
        
        // Номер позиции с медалями для топ-3 (только если есть время)
        let positionHtml = index + 1;
        if (index === 0 && driver.time !== "—:—") {
            positionHtml = `<span class="medal-gold">🥇 ${index + 1}</span>`;
        } else if (index === 1 && driver.time !== "—:—") {
            positionHtml = `<span class="medal-silver">🥈 ${index + 1}</span>`;
        } else if (index === 2 && driver.time !== "—:—") {
            positionHtml = `<span class="medal-bronze">🥉 ${index + 1}</span>`;
        }
        
        row.innerHTML = `
            <td>${positionHtml}</td>
            <td>
                <a href="${driver.profile}" style="color: var(--neon-yellow); text-decoration: none; border-bottom: 1px dotted var(--neon-pink);">
                    ${driver.name}
                </a>
            </td>
            <td style="color: var(--neon-blue);">${driver.car}</td>
            <td class="${driver.time === '—:—' ? 'no-time' : ''}" style="color: ${driver.time === '—:—' ? '#666' : 'var(--neon-pink)'};">
                ${driver.time}
            </td>
        `;
        
        tbody.appendChild(row);
    });

    // Обновление информации о трассе
    updateTrackInfo();
    updateTotalDrivers();
    updateTimeHeader();
    updateDirectionIndicator();
}

// Обновление информации о трассе
function updateTrackInfo() {
    const info = trackInfo[currentTrack];
    document.getElementById('track-length').textContent = info.length;
    document.getElementById('track-turns').textContent = info.turns;
    
    // Поиск рекорда для текущего направления
    const data = getTrackData();
    const validTimes = data.filter(d => d.time !== "—:—");
    
    if (validTimes.length > 0) {
        const bestTime = validTimes[0]; // уже отсортировано
        document.getElementById('track-record').textContent = `${bestTime.time} (${bestTime.name})`;
    } else {
        const recordField = `record_${currentDirection}`;
        document.getElementById('track-record').textContent = info[recordField] || "—:—";
    }
}

// Обновление количества гонщиков
function updateTotalDrivers() {
    const data = getTrackData();
    const withTime = data.filter(d => d.time !== "—:—").length;
    document.getElementById('total-drivers').textContent = `${withTime} / ${data.length}`;
}

// Обработчики кнопок выбора трассы
document.querySelectorAll('.track-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.track-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentTrack = this.dataset.track;
        updateLeaderboard();
    });
});

// Обработчики кнопок выбора направления
document.querySelectorAll('.direction-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.direction-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentDirection = this.dataset.direction;
        updateLeaderboard();
    });
});

// Инициализация
updateLeaderboard();
