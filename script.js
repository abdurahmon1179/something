let vakansiyalarMaqomi = JSON.parse(localStorage.getItem('vakansiyalarMaqomi')) || [
    { id: 1, title: "Senior Frontend Developer", company: "TechCorp LLC", category: "IT", location: "Toshkent (Masofaviy)", type: "To'liq stavka", salary: "30 000 000 - 48 000 000 so'm", saved: false },
    { id: 2, title: "UI/UX Product Designer", company: "Creative Studio", category: "Dizayn", location: "Toshkent", type: "To'liq stavka", salary: "15 000 000 - 22 000 000 so'm", saved: false },
    { id: 3, title: "Digital Marketing Lead", company: "Growth Agency", category: "Marketing", location: "Samarqand", type: "Yarim stavka", salary: "11 000 000 - 16 000 000 so'm", saved: false },
    { id: 4, title: "Finansist & Analitik", company: "Finans Consult", category: "Moliya", location: "Toshkent", type: "To'liq stavka", salary: "20 000 000 - 28 000 000 so'm", saved: false },
    { id: 5, title: "React Native Dasturchi", company: "Mobile Solutions", category: "IT", location: "Masofaviy", type: "Kontrakt", salary: "24 000 000 - 35 000 000 so'm", saved: false },
    { id: 6, title: "Junior Python Developer", company: "DataLab", category: "IT", location: "Toshkent", type: "Yarim stavka", salary: "8 000 000 - 13 000 000 so'm", saved: false },
    { id: 7, title: "UI/UX Product Designer", company: "Uzum Market", category: "Dizayn", location: "Toshkent", type: "To'liq stavka", salary: "12 000 000 - 18 000 000 so'm", saved: false },
    { id: 8, title: "Senior SMM Specialist", company: "Click", category: "Marketing", location: "Toshkent", type: "To'liq stavka", salary: "9 000 000 - 14 000 000 so'm", saved: false }
];

// DOM Elementlari
const jobsContainer = document.getElementById('jobsContainer');
const paginationContainer = document.getElementById('paginationContainer');
const qidiruvInput = document.getElementById('qidiruvInput');
const hududInput = document.getElementById('hududInput');
const qidiruvTugma = document.getElementById('qidiruvTugma');
const filtrniTozalashTugma = document.getElementById('filtrniTozalashTugma');
const kategoriyaKartalar = document.querySelectorAll('.category-card');
const turFiltri = document.getElementById('turFiltri');

const arizaModal = document.getElementById('arizaModal');
const arizaYopish = document.getElementById('arizaYopish');
const modalVakansiyaNomi = document.getElementById('modalVakansiyaNomi');
const arizaForma = document.getElementById('arizaForma');

const batafsilModal = document.getElementById('batafsilModal');
const batafsilYopish = document.getElementById('batafsilYopish');
const batafsilSarlavha = document.getElementById('batafsilSarlavha');
const batafsilKompaniya = document.getElementById('batafsilKompaniya');
const batafsilKat = document.getElementById('batafsilKat');
const batafsilJoy = document.getElementById('batafsilJoy');
const batafsilTur = document.getElementById('batafsilTur');
const batafsilMaosh = document.getElementById('batafsilMaosh');
const modalArizaOchishBtn = document.getElementById('modalArizaOchishBtn');

let joriyTanlanganIshTitle = "";

const elonModal = document.getElementById('elonModal');
const elonQoshishTugma = document.getElementById('elonQoshishTugma');
const elonYopish = document.getElementById('elonYopish');
const elonForma = document.getElementById('elonForma');

const saqlanganlarHavolasi = document.getElementById('saqlanganlarHavolasi');
const saqlanganlarSoni = document.getElementById('saqlanganlarSoni');
let faqatSaqlanganlar = false;

let joriySahifa = 1;
const harSahifada = 4;

function mahalliyXotiragaSaqlash() {
    localStorage.setItem('vakansiyalarMaqomi', JSON.stringify(vakansiyalarMaqomi));
}

function xabarKorsat(xabar) {
    const konteyner = document.getElementById('toastContainer');
    if (!konteyner) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${xabar}</span>`;
    konteyner.appendChild(toast);
    setTimeout(() => toast.remove(), 4000);
}

function kategoriyaIkonkasi(kategoriya) {
    switch(kategoriya) {
        case 'IT': return '<i class="fa-solid fa-code"></i> IT';
        case 'Dizayn': return '<i class="fa-solid fa-palette"></i> Dizayn';
        case 'Marketing': return '<i class="fa-solid fa-bullhorn"></i> Marketing';
        case 'Moliya': return '<i class="fa-solid fa-chart-pie"></i> Moliya';
        default: return `<i class="fa-solid fa-briefcase"></i> ${kategoriya}`;
    }
}

function vakansiyalarniChizish(ishlar) {
    if (!jobsContainer) return;
    jobsContainer.innerHTML = '';
    
    if (ishlar.length === 0) {
        jobsContainer.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px 0;">Hech qanday vakansiya topilmadi.</p>`;
        if (paginationContainer) paginationContainer.innerHTML = '';
        return;
    }

    const boshlanishIndex = (joriySahifa - 1) * harSahifada;
    const tugashIndex = boshlanishIndex + harSahifada;
    const bolinganIshlar = ishlar.slice(boshlanishIndex, tugashIndex);

    bolinganIshlar.forEach(ish => {
        const karta = document.createElement('div');
        karta.className = 'job-card';

        karta.innerHTML = `
            <button class="save-btn ${ish.saved ? 'saved' : ''}" onclick="saqlashniOzgartirish(${ish.id})">
                <i class="fa-${ish.saved ? 'solid' : 'regular'} fa-bookmark"></i>
            </button>
            <div class="job-header">
                <h3>${ish.title}</h3>
                <span class="company-name">${ish.company}</span>
                <div><span class="job-badge">${kategoriyaIkonkasi(ish.category)}</span></div>
            </div>
            <div class="job-details">
                <span><i class="fa-solid fa-location-dot"></i> ${ish.location}</span>
                <span><i class="fa-solid fa-briefcase"></i> ${ish.type}</span>
            </div>
            <div class="job-footer">
                <span class="salary">${ish.salary}</span>
                <div class="job-actions">
                    <button class="btn-outline batafsil-btn" data-id="${ish.id}">Batafsil</button>
                    <button class="btn-primary ariza-berish-btn" data-title="${ish.title}">Ariza</button>
                </div>
            </div>
        `;
        jobsContainer.appendChild(karta);
    });

    document.querySelectorAll('.batafsil-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.getAttribute('data-id'));
            const topilganIsh = vakansiyalarMaqomi.find(item => item.id === id);
            if (topilganIsh && batafsilModal) {
                batafsilSarlavha.textContent = topilganIsh.title;
                batafsilKompaniya.textContent = topilganIsh.company;
                batafsilKat.textContent = topilganIsh.category;
                batafsilJoy.textContent = topilganIsh.location;
                batafsilTur.textContent = topilganIsh.type;
                batafsilMaosh.textContent = topilganIsh.salary;
                joriyTanlanganIshTitle = topilganIsh.title;
                batafsilModal.style.display = 'flex';
            }
        });
    });

    document.querySelectorAll('.ariza-berish-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            modalVakansiyaNomi.textContent = e.target.getAttribute('data-title');
            arizaModal.style.display = 'flex';
        });
    });

    sahifalashniChizish(ishlar.length);
    saqlanganlarSoniYangilash();
}

function sahifalashniChizish(jamiIshlar) {
    if (!paginationContainer) return;
    paginationContainer.innerHTML = '';
    const jamiSahifalar = Math.ceil(jamiIshlar / harSahifada);
    if (jamiSahifalar <= 1) return;

    for (let i = 1; i <= jamiSahifalar; i++) {
        const tugma = document.createElement('button');
        tugma.className = `page-btn ${i === joriySahifa ? 'active' : ''}`;
        tugma.textContent = i;
        tugma.addEventListener('click', () => {
            joriySahifa = i;
            vakansiyalarniFiltrleesh();
            document.getElementById('vakansiyalar').scrollIntoView({ behavior: 'smooth' });
        });
        paginationContainer.appendChild(tugma);
    }
}

function vakansiyalarniFiltrleesh() {
    const sorov = qidiruvInput ? qidiruvInput.value.toLowerCase().trim() : '';
    const hududSorov = hududInput ? hududInput.value.toLowerCase().trim() : '';
    const tanlanganTur = turFiltri ? turFiltri.value : '';

    let natijalar = vakansiyalarMaqomi.filter(ish => {
        const mosSorov = ish.title.toLowerCase().includes(sorov) || 
                         ish.company.toLowerCase().includes(sorov) ||
                         ish.category.toLowerCase().includes(sorov);
        const mosHudud = ish.location.toLowerCase().includes(hududSorov);
        const mosTur = tanlanganTur === "" || ish.type === tanlanganTur;
        const mosSaqlangan = !faqatSaqlanganlar || ish.saved;

        return mosSorov && mosHudud && mosTur && mosSaqlangan;
    });

    vakansiyalarniChizish(natijalar);
}

// Hero bannerdagi qidiruv
const heroSearchBtn = document.getElementById('heroSearchBtn');
if (heroSearchBtn) {
    heroSearchBtn.addEventListener('click', function() {
        const keywordInput = document.getElementById('searchInputKeyword');
        const locationInput = document.getElementById('searchInputLocation');

        if (qidiruvInput) qidiruvInput.value = keywordInput ? keywordInput.value.trim() : '';
        if (hududInput) hududInput.value = locationInput ? locationInput.value.trim() : '';

        joriySahifa = 1;
        vakansiyalarniFiltrleesh();

        document.getElementById('vakansiyalar').scrollIntoView({ behavior: 'smooth' });
    });
}

window.tezkorQidiruv = function(kalitSoz) {
    if (qidiruvInput) qidiruvInput.value = kalitSoz;
    joriySahifa = 1;
    vakansiyalarniFiltrleesh();
    document.getElementById('vakansiyalar').scrollIntoView({ behavior: 'smooth' });
}

if (qidiruvTugma) qidiruvTugma.addEventListener('click', () => { joriySahifa = 1; vakansiyalarniFiltrleesh(); });
if (qidiruvInput) qidiruvInput.addEventListener('keyup', (e) => { if(e.key === 'Enter') { joriySahifa = 1; vakansiyalarniFiltrleesh(); } });
if (hududInput) hududInput.addEventListener('keyup', (e) => { if(e.key === 'Enter') { joriySahifa = 1; vakansiyalarniFiltrleesh(); } });
if (turFiltri) turFiltri.addEventListener('change', () => { joriySahifa = 1; vakansiyalarniFiltrleesh(); });

kategoriyaKartalar.forEach(karta => {
    karta.addEventListener('click', () => {
        const kat = karta.getAttribute('data-category');
        faqatSaqlanganlar = false;
        if (qidiruvInput) qidiruvInput.value = '';
        if (hududInput) hududInput.value = '';
        if (turFiltri) turFiltri.value = '';
        joriySahifa = 1;
        vakansiyalarniChizish(vakansiyalarMaqomi.filter(i => i.category === kat));
        document.getElementById('vakansiyalar').scrollIntoView({ behavior: 'smooth' });
    });
});

window.saqlashniOzgartirish = function(id) {
    const ish = vakansiyalarMaqomi.find(j => j.id === id);
    if(ish) {
        ish.saved = !ish.saved;
        mahalliyXotiragaSaqlash();
        vakansiyalarniFiltrleesh();
        xabarKorsat(ish.saved ? "Saqlanganlarga qo'shildi!" : "Saqlanganlardan olib tashlandi.");
    }
}

function saqlanganlarSoniYangilash() {
    if (saqlanganlarSoni) {
        saqlanganlarSoni.textContent = vakansiyalarMaqomi.filter(j => j.saved).length;
    }
}

if (saqlanganlarHavolasi) {
    saqlanganlarHavolasi.addEventListener('click', (e) => {
        e.preventDefault();
        faqatSaqlanganlar = !faqatSaqlanganlar;
        saqlanganlarHavolasi.style.color = faqatSaqlanganlar ? 'var(--primary)' : 'var(--text-muted)';
        joriySahifa = 1;
        vakansiyalarniFiltrleesh();
        document.getElementById('vakansiyalar').scrollIntoView({ behavior: 'smooth' });
    });
}

if (filtrniTozalashTugma) {
    filtrniTozalashTugma.addEventListener('click', () => {
        if (qidiruvInput) qidiruvInput.value = '';
        if (hududInput) hududInput.value = '';
        if (turFiltri) turFiltri.value = '';
        faqatSaqlanganlar = false;
        if (saqlanganlarHavolasi) saqlanganlarHavolasi.style.color = 'var(--text-muted)';
        joriySahifa = 1;
        vakansiyalarniChizish(vakansiyalarMaqomi);
    });
}

// Modallar Boshqaruvi
if (batafsilYopish) batafsilYopish.addEventListener('click', () => batafsilModal.style.display = 'none');
if (modalArizaOchishBtn) {
    modalArizaOchishBtn.addEventListener('click', () => {
        batafsilModal.style.display = 'none';
        modalVakansiyaNomi.textContent = joriyTanlanganIshTitle;
        arizaModal.style.display = 'flex';
    });
}

if (arizaYopish) arizaYopish.addEventListener('click', () => arizaModal.style.display = 'none');
if (arizaForma) {
    arizaForma.addEventListener('submit', (e) => {
        e.preventDefault();
        arizaModal.style.display = 'none';
        arizaForma.reset();
        xabarKorsat("Arizangiz muvaffaqiyatli yuborildi!");
    });
}

if (elonQoshishTugma) {
    elonQoshishTugma.addEventListener('click', () => {
        elonModal.style.display = 'flex';
    });
}

if (elonYopish) elonYopish.addEventListener('click', () => elonModal.style.display = 'none');
if (elonForma) {
    elonForma.addEventListener('submit', (e) => {
        e.preventDefault();
        const yangiIsh = {
            id: Date.now(),
            title: document.getElementById('elonSarlavha').value,
            company: document.getElementById('elonKompaniya').value,
            category: document.getElementById('elonKategoriya').value,
            location: document.getElementById('elonManzil').value,
            type: document.getElementById('elonTur').value,
            salary: document.getElementById('elonMaosh').value,
            saved: false
        };

        vakansiyalarMaqomi.unshift(yangiIsh);
        mahalliyXotiragaSaqlash();
        joriySahifa = 1;
        vakansiyalarniChizish(vakansiyalarMaqomi);
        elonModal.style.display = 'none';
        elonForma.reset();
        xabarKorsat("Yangi e'lon joylandi!");
    });
}

window.addEventListener('click', (e) => {
    if (e.target === batafsilModal) batafsilModal.style.display = 'none';
    if (e.target === arizaModal) arizaModal.style.display = 'none';
    if (e.target === elonModal) elonModal.style.display = 'none';
});

// Counter
function startCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        let count = 0;
        const speed = Math.max(1, target / 50);

        const updateCount = () => {
            count += speed;
            if (count < target) {
                counter.innerText = Math.ceil(count).toLocaleString();
                setTimeout(updateCount, 30);
            } else {
                counter.innerText = target.toLocaleString();
            }
        };
        updateCount();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    vakansiyalarniChizish(vakansiyalarMaqomi);
    startCounters();
});