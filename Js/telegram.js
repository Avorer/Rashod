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
        time_ivanovskoe_forward: "3:48.0", time_ivanovskoe_reverse: "3:45.0",
        time_glubokoe_forward: null, time_glubokoe_reverse: null,
        time_raifa_forward: null, time_raifa_reverse: null,
        active: true, 
        profile: "drivers/leposha.html" 
    },
    { 
        name: "ЭДИКЕ ОТЕЦ", 
        car: "ВАЗ-2112", 
        time_ivanovskoe_forward: null, time_ivanovskoe_reverse: "5:22.0",
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
        time_ivanovskoe_forward: "4:04.0", time_ivanovskoe_reverse: "4:12.0",
        time_glubokoe_forward: null, time_glubokoe_reverse: null,
        time_raifa_forward: null, time_raifa_reverse: null,
        active: true, 
        profile: "drivers/bulat.html" 
    },
    { 
        name: "АЛМАЗ СОЛЯРИС", 
        car: "Hyundai Solaris", 
        time_ivanovskoe_forward: null, time_ivanovskoe_reverse: "4:03.0",
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
    },
    { 
        name: "АЛСАНДР 10КА", 
        car: "ВАЗ-2110", 
        time_ivanovskoe_forward: null, time_ivanovskoe_reverse: null,
        time_glubokoe_forward: null, time_glubokoe_reverse: null,
        time_raifa_forward: null, time_raifa_reverse: null,
        active: true, 
        profile: "drivers/alexanr_10ka.html" 
    },
    { 
        name: "МАКС КОРСА", 
        car: "Opel Corsa", 
        time_ivanovskoe_forward: null, time_ivanovskoe_reverse: "4:19.0",
        time_glubokoe_forward: null, time_glubokoe_reverse: null,
        time_raifa_forward: null, time_raifa_reverse: null,
        active: true, 
        profile: "drivers/Max_CorsaOP.html" 
    }
];

const trackInfo = {
    ivanovskoe: { length: "6 км", turns: "16", name: "ИВАНОВСКОЕ" },
    glubokoe: { length: "1.61 км", turns: "5", name: "ГЛУБОКОЕ ОЗЕРО" },
    raifa: { length: "3.6 км", turns: "8", name: "РАИФСКИЙ ДЕНДРАРИЙ" }
};

let currentTrack = 'ivanovskoe';
let currentDirection = 'forward';

function timeToSeconds(timeStr) {
    if (!timeStr || timeStr === "—:—") return Infinity;
    const [minutes, seconds] = timeStr.split(':').map(Number);
    return minutes * 60 + seconds;
}

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
    results.sort((a, b) => a.timeSeconds - b.timeSeconds);
    return results;
}

function updateTable() {
    const tbody = document.getElementById('table-body');
    const data = getTrackData();
    tbody.innerHTML = '';

    data.forEach((driver, index) => {
        const row = document.createElement('tr');
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
                <span class="driver-link" onclick="openProfile('${driver.profile}')">
                    ${driver.name}
                </span>
            </td>
            <td class="${driver.time === '—:—' ? 'no-time' : ''}" style="color: ${driver.time === '—:—' ? '#555' : 'var(--neon-pink)'};">
                ${driver.time}
            </td>
        `;
        tbody.appendChild(row);
    });

    document.getElementById('track-length').textContent = trackInfo[currentTrack].length;
    document.getElementById('track-turns').textContent = trackInfo[currentTrack].turns;

    const validTimes = data.filter(d => d.time !== "—:—");
    if (validTimes.length > 0) {
        document.getElementById('track-record').textContent = `${validTimes[0].time} (${validTimes[0].name})`;
    } else {
        document.getElementById('track-record').textContent = "—:—";
    }

    const withTime = data.filter(d => d.time !== "—:—").length;
    document.getElementById('total-drivers').textContent = `${withTime}/${data.length}`;
    document.getElementById('current-direction-text').textContent = currentDirection === 'forward' ? 'ВПЕРЕД' : 'РЕВЕРС';
}

function openProfile(profileUrl) {
    window.open(profileUrl, '_blank');
}

document.querySelectorAll('.track-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.track-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentTrack = this.dataset.track;
        updateTable();
    });
});

document.querySelectorAll('.direction-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.direction-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentDirection = this.dataset.direction;
        updateTable();
    });
});

updateTable();