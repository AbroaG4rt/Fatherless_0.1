// ==========================================
// DATA & STATE MANAGEMENT
// ==========================================

// NOTE UNTUK ADMIN:
// Silakan paste pertanyaan Anda ke dalam array ini.
// Tambahkan tanda '(-)' di akhir teks untuk menandai pertanyaan yang membutuhkan "REVERSE SCORING" (Skor Terbalik).
// Contoh: "Saya merasa diabaikan (-)" -> akan membalikkan skor (5 jadi 1, 4 jadi 2, dst).
const QUESTIONS = {
  "AF": [ 
    "Saya merasa ayah saya memahami saya sebagai individu",
    "Saya dapat berbicara jujur dengan ayah saya",
    "Ayah saya mendengarkan saya dengan penuh perhatian",
    "Saya merasa dekat secara emosional dengan ayah saya",
    "Saya merasa diabaikan oleh ayah saya (-)",
    "Saya menyimpan kekecewaan terhadap ayah saya (-)"
  ],
  "FCC": [ 
    "Ayah saya menunjukkan kasih sayang kepada saya",
    "Ayah saya peduli terhadap kesejahteraan saya",
    "Ayah saya terlalu mengontrol hidup saya (-)",
    "Ayah saya memberi kebebasan dalam mengambil keputusan",
    "Ayah saya sering mengkritik saya secara berlebihan (-)"
  ],
  "FP": [ 
    "Saya merasa memiliki figur ayah dalam hidup saya",
    "Ayah saya mempengaruhi nilai hidup saya",
    "Saya merasa kehilangan figur ayah (-)",
    "Saya sering memikirkan hubungan saya dengan ayah",
    "Ayah saya menjadi role model bagi saya"
  ],
  "FI": [ 
    "Ayah saya meluangkan waktu bersama saya",
    "Ayah saya membantu saya saat menghadapi masalah",
    "Ayah saya terlibat dalam pendidikan saya",
    "Ayah saya hadir dalam momen penting hidup saya",
    "Ayah saya mengetahui aktivitas sehari-hari saya"
  ],
  "PI": [ 
    "Saya sering merasa tidak cukup baik (-)",
    "Saya sulit mempercayai orang lain (-)",
    "Saya merasa harus mandiri sejak kecil",
    "Saya kesulitan mengekspresikan emosi (-)",
    "Saya merasa kesepian meskipun bersama orang lain (-)"
  ],
  "RP": [ 
    "Saya takut ditinggalkan oleh orang yang saya sayangi (-)",
    "Saya membutuhkan validasi dari orang lain (-)",
    "Saya merasa tidak nyaman dengan kedekatan emosional (-)",
    "Saya cenderung menghindari keterikatan (-)",
    "Saya merasa hubungan saya tidak stabil (-)"
  ],
  "ES": [ 
    "Saya sering merasa cemas tanpa alasan jelas (-)",
    "Saya sulit merasa tenang dalam hidup (-)",
    "Saya sering overthinking hal kecil (-)",
    "Saya merasa dunia tidak aman (-)",
    "Saya mudah khawatir tentang masa depan (-)",
    "Saya sulit mengendalikan kecemasan (-)",
    "Saya merasa sendirian saat menghadapi masalah (-)",
    "Saya merasa tidak memiliki tempat aman secara emosional (-)",
    "Saya sulit merasa aman dengan diri sendiri (-)",
    "Saya mudah panik saat situasi tidak terkendali (-)",
    "Saya merasa harus selalu waspada (-)",
    "Saya sulit percaya bahwa semuanya akan baik-baik saja (-)",
    "Saya merasa emosional saya tidak stabil (-)",
    "Saya mudah stres dibanding orang lain (-)",
    "Saya sulit merasakan ketenangan dalam waktu lama (-)"
  ],
  "AS": [ 
    "Saya takut ditinggalkan oleh orang terdekat (-)",
    "Saya sering membutuhkan kepastian dalam hubungan (-)",
    "Saya merasa cemas jika tidak mendapat respon (-)",
    "Saya merasa terlalu bergantung secara emosional (-)",
    "Saya sulit percaya sepenuhnya kepada orang lain (-)",
    "Saya menjaga jarak dalam hubungan (-)",
    "Saya tidak nyaman dengan kedekatan emosional (-)",
    "Saya menghindari hubungan yang terlalu dalam (-)",
    "Saya merasa hubungan itu berisiko (-)",
    "Saya lebih nyaman mandiri daripada bergantung",
    "Saya sering merasa hubungan tidak stabil (-)",
    "Saya mudah cemburu (-)",
    "Saya sering overthinking dalam hubungan (-)",
    "Saya sulit membuka diri sepenuhnya (-)",
    "Saya menarik diri saat konflik (-)"
  ],
  "SW": [ 
    "Saya merasa tidak cukup baik (-)",
    "Saya merasa harus membuktikan diri (-)",
    "Saya bergantung pada pengakuan orang lain (-)",
    "Saya sering membandingkan diri (-)",
    "Saya merasa minder dibanding orang lain (-)",
    "Saya sulit menghargai diri sendiri (-)",
    "Saya merasa tidak pantas mendapatkan hal baik (-)",
    "Saya kurang percaya diri (-)",
    "Saya takut gagal (-)",
    "Saya takut dinilai orang lain (-)",
    "Saya merasa identitas diri tidak jelas (-)",
    "Saya sering meragukan diri sendiri (-)",
    "Saya sulit bangga pada diri sendiri (-)",
    "Saya merasa harus sempurna (-)",
    "Saya sulit menerima diri sendiri (-)"
  ],
  "AP": [ 
    "Saya sulit mempercayai figur otoritas (-)",
    "Saya merasa otoritas tidak bisa diandalkan (-)",
    "Saya tidak nyaman diarahkan (-)",
    "Saya merasa otoritas sering mengecewakan (-)",
    "Saya sulit menerima aturan (-)",
    "Saya merasa aturan membatasi kebebasan (-)",
    "Saya lebih memilih mengandalkan diri sendiri",
    "Saya merasa sistem tidak adil (-)",
    "Saya sulit menghormati pemimpin (-)",
    "Saya sering skeptis terhadap keputusan orang lain (-)",
    "Saya tidak suka bergantung pada orang lain",
    "Saya merasa harus mandiri sepenuhnya"
  ],
  "EE": [ 
    "Saya sulit mengekspresikan perasaan (-)",
    "Saya sering memendam emosi (-)",
    "Saya tidak nyaman menunjukkan kesedihan (-)",
    "Saya merasa tidak aman untuk terbuka (-)",
    "Saya merasa harus terlihat kuat",
    "Saya menyembunyikan emosi dari orang lain (-)",
    "Saya merasa orang lain tidak akan memahami saya (-)",
    "Saya merasa emosi adalah kelemahan (-)",
    "Saya sulit mengungkapkan perasaan secara jujur (-)",
    "Saya takut dinilai saat terbuka (-)",
    "Saya tidak terbiasa membicarakan emosi (-)",
    "Saya lebih memilih diam daripada terbuka (-)",
    "Saya tidak tahu cara mengekspresikan emosi (-)",
    "Saya merasa emosi saya terlalu rumit (-)",
    "Saya merasa lebih aman menyimpan perasaan sendiri (-)"
  ]
};

const CATEGORIES = Object.keys(QUESTIONS);
let flattenedQuestions = []; // Akan diisi oleh pengacakan per dimensi
let currentCategoryIndex = 0; // Karena kita merender 1 kategori per page (11 pages)

const state = {
    userInfo: {
        nama: 'Anonim',
        umur: '-',
        kota: '-',
        email: ''
    },
    answers: {}, // format: "AF_0": 5
    percentages: {},
    archetypeTitle: ''
};

const DIMENSION_LABELS = {
    "AF": "Attachment (AF)",
    "FCC": "Care vs Control (FCC)",
    "FP": "Psychological Presence (FP)",
    "FI": "Father Involvement (FI)",
    "PI": "Personal Independence (PI)",
    "RP": "Relationship Pattern (RP)",
    "ES": "Emotional Security (ES)",
    "AS": "Attachment Style (AS)",
    "SW": "Self-Worth (SW)",
    "AP": "Authority Perception (AP)",
    "EE": "Emotional Expression (EE)"
};

const ARCHETYPES = [
    { title: "The Independent Survivor", desc: "Anda sangat mandiri dan resilient, namun cenderung menyembunyikan sisi rapuh Anda di depan orang lain." },
    { title: "The Silent Fighter", desc: "Anda berjuang dalam diam, menanggung beban emosional sendiri, dan merasa kekuatan sejati datang dari kesunyian." },
    { title: "The Over-Responsible Child", desc: "Anda sering mengambil alih tanggung jawab berlebih demi menutupi kekosongan. Sangat dapat diandalkan namun mudah kelelahan secara emosional." },
    { title: "The Approval Seeker", desc: "Anda termotivasi oleh penerimaan orang lain, sensitif terhadap penolakan, namun memiliki empati yang luar biasa tinggi." },
    { title: "The Love Chaser", desc: "Mencari kehangatan dan kepastian kasih sayang, Anda sangat loyal namun rentan merasa cemas jika tidak divalidasi." },
    { title: "The Attention Performer", desc: "Anda mengekspresikan diri dengan kuat, ekstrovert secara emosional, mencari perhatian positif sebagai kompensasi dari absensi afeksi." },
    { title: "The Guarded Heart", desc: "Menjaga jarak emosional untuk melindungi diri dari kekecewaan, sangat analitis dalam hubungan dan perlahan dalam memupuk kepercayaan." },
    { title: "The Emotional Avoider", desc: "Mengalihkan emosi ke dalam logika atau kesibukan. Seringkali terlihat tenang di luar namun memendam kompleksitas di dalam." },
    { title: "The Distrustful Mind", desc: "Skeptis terhadap figur otoritas dan janji. Anda memvalidasi segalanya dengan bukti sebelum bisa benar-benar rileks atau percaya." },
    { title: "The Self-Healer", desc: "Memiliki kesadaran diri (self-awareness) yang tinggi, Anda aktif mencari cara untuk memutus rantai trauma dan secara bertahap memulihkan diri." },
    { title: "The Balanced Builder", desc: "Anda telah beradaptasi dengan baik. Mampu menyeimbangkan batasan emosional dan secara sehat membangun relasi yang bermakna." },
    { title: "The Cycle Breaker", desc: "Berkomitmen kuat untuk tidak mengulangi pola negatif masa lalu. Anda menjadi sandaran empati bagi generasi penerus Anda." }
];


// ==========================================
// UTILS & HELPERS
// ==========================================
const DOM = {
    themeToggle: document.getElementById('theme-toggle'),
    themeIcon: document.getElementById('theme-icon'),
    screens: document.querySelectorAll('.screen'),
    
    // Buttons
    btnStart: document.getElementById('btn-start'),
    btnBackLanding: document.getElementById('btn-back-landing'),
    btnToTest: document.getElementById('btn-to-test'),
    btnNextTest: document.getElementById('btn-next-test'),
    btnPrevTest: document.getElementById('btn-prev-test'),
    
    // Forms & Inputs
    userForm: document.getElementById('user-form'),
    inputNama: document.getElementById('input-nama'),
    inputUmur: document.getElementById('input-umur'),
    inputKota: document.getElementById('input-kota'),
    inputEmail: document.getElementById('input-email'),

    // Test Elements
    questionContainer: document.getElementById('question-container'),
    progressBarFill: document.getElementById('progress-bar-fill'),
    progressPercentage: document.getElementById('progress-percentage'),

    // Results
    radarChart: document.getElementById('radarChart'),
    resUserName: document.getElementById('res-user-name'),
    resArchetypeTitle: document.getElementById('res-archetype-title'),
    resArchetypeDesc: document.getElementById('res-archetype-desc'),
    resCore: document.getElementById('res-core'),
    resStrengths: document.getElementById('res-strengths'),
    resChallenges: document.getElementById('res-challenges'),
    resRelations: document.getElementById('res-relations'),
    resIdentity: document.getElementById('res-identity'),
    resAuthority: document.getElementById('res-authority'),
    resHealingPath: document.getElementById('res-healing-path'),

    // Actions
    btnDownloadPdf: document.getElementById('btn-download-pdf'),
    btnEmailResult: document.getElementById('btn-email-result'),
    btnShowQr: document.getElementById('btn-show-qr'),
    qrModal: document.getElementById('qr-modal'),
    closeQr: document.getElementById('close-qr'),
    qrContainer: document.getElementById('qrcode-container'),
    btnDownloadQr: document.getElementById('btn-download-qr')
};

function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;
    let newArray = [...array];
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [newArray[currentIndex], newArray[randomIndex]] = [newArray[randomIndex], newArray[currentIndex]];
    }
    return newArray;
}

function parseQuestions() {
    // Scaffold UI structure logic per category
    let builtStructure = [];
    CATEGORIES.forEach(cat => {
        let qs = QUESTIONS[cat];
        // randomize questions inside the category
        let randomized = shuffleArray(qs);
        
        let mapped = randomized.map((qText, index) => {
            let isReverse = qText.includes("(-)");
            let cleanText = qText.replace("(-)", "").trim();
            // unique id like: AF_0, AF_1
            return {
                id: `${cat}_${index}`,
                category: cat,
                text: cleanText,
                reverse: isReverse
            };
        });

        builtStructure.push({
            category: cat,
            questions: mapped
        });
    });
    return builtStructure;
}

function showScreen(screenId) {
    DOM.screens.forEach(s => {
        s.classList.remove('view-active');
        setTimeout(() => s.classList.add('hidden'), 300); // Wait for transition
    });
    
    setTimeout(() => {
        const target = document.getElementById(screenId);
        target.classList.remove('hidden');
        setTimeout(() => target.classList.add('view-active'), 50);
    }, 300);
}

// ==========================================
// THEME (DARK / LIGHT MODE)
// ==========================================
DOM.themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        DOM.themeIcon.classList.replace('ri-moon-line', 'ri-sun-line');
        localStorage.setItem('theme', 'dark');
        updateChartTheme();
    } else {
        DOM.themeIcon.classList.replace('ri-sun-line', 'ri-moon-line');
        localStorage.setItem('theme', 'light');
        updateChartTheme();
    }
});

function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        DOM.themeIcon.classList.replace('ri-moon-line', 'ri-sun-line');
    }
}
initTheme();

// ==========================================
// TEST NAVIGATION LOGIC
// ==========================================
let allCategoriesData = [];
let myChart = null; // Chart instance

DOM.btnStart.addEventListener('click', () => {
    showScreen('user-info-screen');
});

DOM.btnBackLanding.addEventListener('click', () => {
    showScreen('landing-screen');
});

DOM.userForm.addEventListener('submit', (e) => {
    e.preventDefault();
    state.userInfo.nama = DOM.inputNama.value || 'Anonim';
    state.userInfo.umur = DOM.inputUmur.value || '-';
    state.userInfo.kota = DOM.inputKota.value || '-';
    state.userInfo.email = DOM.inputEmail.value || '';
    
    startTest();
});

function startTest() {
    allCategoriesData = parseQuestions();
    state.answers = {};
    currentCategoryIndex = 0;
    
    showScreen('test-screen');
    renderCurrentCategory();
}

function renderCurrentCategory() {
    const currentCatObj = allCategoriesData[currentCategoryIndex];
    DOM.questionContainer.innerHTML = '';
    
    // Intro title for category (opsional, untuk memperjelas progres bagi user)
    // const title = document.createElement('h3');
    // title.style.textAlign = 'center';
    // title.textContent = `Bagian ${currentCategoryIndex + 1} / 11`;
    // DOM.questionContainer.appendChild(title);

    currentCatObj.questions.forEach((qObj) => {
        const qDiv = document.createElement('div');
        qDiv.className = 'question-item';

        const qText = document.createElement('div');
        qText.className = 'question-text';
        qText.textContent = qObj.text;
        
        const scaleDiv = document.createElement('div');
        scaleDiv.className = 'likert-scale';

        // 16personalities format labels
        const labelsHTML = `
            <div class="likert-label left">Sangat<br>Setuju<span class="likert-text-label" style="display:none">Sangat Setuju</span></div>
            <input type="radio" name="${qObj.id}" value="5" class="agree-side" data-reverse="${qObj.reverse}" data-cat="${qObj.category}">
            <input type="radio" name="${qObj.id}" value="4" class="agree-side" data-reverse="${qObj.reverse}" data-cat="${qObj.category}">
            <input type="radio" name="${qObj.id}" value="3" data-reverse="${qObj.reverse}" data-cat="${qObj.category}">
            <input type="radio" name="${qObj.id}" value="2" class="disagree-side" data-reverse="${qObj.reverse}" data-cat="${qObj.category}">
            <input type="radio" name="${qObj.id}" value="1" class="disagree-side" data-reverse="${qObj.reverse}" data-cat="${qObj.category}">
            <div class="likert-label right">Sangat<br>Tidak Setuju<span class="likert-text-label" style="display:none">Sangat Tidak Setuju</span></div>
        `;
        scaleDiv.innerHTML = labelsHTML;

        // Restore active answer
        if(state.answers[qObj.id]) {
            const rads = scaleDiv.querySelectorAll('input');
            rads.forEach(r => {
                if(parseInt(r.value) === state.answers[qObj.id]) {
                    r.checked = true;
                }
            });
        }
        
        scaleDiv.addEventListener('change', checkCategoryCompletion);

        qDiv.appendChild(qText);
        qDiv.appendChild(scaleDiv);
        DOM.questionContainer.appendChild(qDiv);
    });

    // Update Progress Bar
    const percent = Math.round((currentCategoryIndex / CATEGORIES.length) * 100);
    DOM.progressBarFill.style.width = percent + '%';
    DOM.progressPercentage.textContent = percent + '%';
    
    // Update Nav Buttons
    DOM.btnPrevTest.style.display = currentCategoryIndex === 0 ? 'none' : 'inline-flex';
    DOM.btnNextTest.innerHTML = currentCategoryIndex === CATEGORIES.length - 1 ? 'Selesai <i class="ri-check-line"></i>' : 'Selanjutnya <i class="ri-arrow-right-line"></i>';
    
    checkCategoryCompletion(); // Check if all are answered to enable NEXT
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function checkCategoryCompletion() {
    const currentCatObj = allCategoriesData[currentCategoryIndex];
    let allAnswered = true;

    currentCatObj.questions.forEach(q => {
        const radios = document.getElementsByName(q.id);
        let answered = false;
        radios.forEach(r => {
            if(r.checked) {
                answered = true;
                // Save answer to state immediately
                state.answers[q.id] = parseInt(r.value);
            }
        });
        if(!answered) allAnswered = false;
    });

    if (allAnswered) {
        DOM.btnNextTest.classList.remove('btn-disabled');
        DOM.btnNextTest.disabled = false;
    } else {
        DOM.btnNextTest.classList.add('btn-disabled');
        DOM.btnNextTest.disabled = true;
    }
}

DOM.btnPrevTest.addEventListener('click', () => {
    if (currentCategoryIndex > 0) {
        currentCategoryIndex--;
        renderCurrentCategory();
    }
});

DOM.btnNextTest.addEventListener('click', () => {
    if (currentCategoryIndex < CATEGORIES.length - 1) {
        currentCategoryIndex++;
        renderCurrentCategory();
    } else {
        // SELESAI MENGISI! Pindah ke Loading Screen & Hitung
        finalizeTest();
    }
});

// ==========================================
// SCORING & INSIGHT ENGINE
// ==========================================

function finalizeTest() {
    DOM.progressBarFill.style.width = '100%';
    DOM.progressPercentage.textContent = '100%';
    
    showScreen('loading-screen');

    // Simulate analysis delay
    setTimeout(() => {
        calculateScores();
        showScreen('result-screen');
    }, 2500);
}

function calculateScores() {
    const results = {}; // Score sum per cat
    const maxScores = {}; // Max possible per cat
    const percentages = {};

    CATEGORIES.forEach(cat => {
        results[cat] = 0;
        maxScores[cat] = 0;
    });

    // Calculate sum and handle reverse scoring
    allCategoriesData.forEach(catObj => {
        catObj.questions.forEach(q => {
            const rawValue = state.answers[q.id];
            // Reverse score: If original 5 -> 1, 4 -> 2, 3 -> 3, 2 -> 4, 1 -> 5. 
            // Rumus reverse (skala 1-5): 6 - value
            const finalValue = q.reverse ? (6 - rawValue) : rawValue;
            
            results[catObj.category] += finalValue;
            maxScores[catObj.category] += 5; // max point is 5 per question
        });
    });

    // Convert to percentages
    CATEGORIES.forEach(cat => {
        percentages[cat] = Math.round((results[cat] / maxScores[cat]) * 100);
    });

    state.percentages = percentages;

    generateDynamicInsights(percentages);
    renderRadarChart(percentages);
}

function generateDynamicInsights(scores) {
    // 1. Profile Identity (Random Archetype)
    // "Randomly assign from 12 archetypes" -> Sesuai request, assign random.
    const chosenArchetype = ARCHETYPES[Math.floor(Math.random() * ARCHETYPES.length)];
    state.archetypeTitle = chosenArchetype.title;
    DOM.resUserName.textContent = `Nama: ${state.userInfo.nama} | Umur: ${state.userInfo.umur} | Kota: ${state.userInfo.kota}`;
    DOM.resArchetypeTitle.textContent = chosenArchetype.title;
    DOM.resArchetypeDesc.textContent = chosenArchetype.desc;

    // 2. Core Summary
    DOM.resCore.innerHTML = `Skor rata-rata Anda menunjukkan tingkat kemandirian emosional di sekitar batas <b>${scores.PI}%</b>, mengindikasikan bahwa pengaruh ketiadaan figur ayah membentuk Anda menjadi individu yang harus mandiri lebih cepat dari masanya.`;

    // 3. Strengths
    DOM.resStrengths.innerHTML = `Berdasarkan pola resiliensi Anda, kekuatan utama Anda meliputi adaptabilitas yang cepat, kemampuan menganalisis rIsiko emosional sebelum bertindak, serta empati proaktif terhadap kesulitan orang lain.`;

    // 4. Emotional Challenges
    DOM.resChallenges.innerHTML = `Tantangan terbesar yang muncul meliputi pengolahan rasa cemas (Anxiety Level: <b>${scores.ES}%</b>) dan overthinking dalam menimbang keputusan, sebuah turunan logis dari kebutuhan terhadap validasi masa lalu.`;

    // 5. Relationship Pattern
    // RP dan AS (Attachment pattern)
    const relTrend = scores.AS >= 50 ? "lebih menghindari kedekatan demi rasa aman (Avoidant Pattern)" : "membutuhkan kepastian tinggi dalam pertalian emosional (Anxious Pattern)";
    DOM.resRelations.innerHTML = `Dalam relasi interpersonal, Anda cenderung <b>${relTrend}</b>. Gaya ikatan ini menjadi perisai psikologis yang aktif setiap kali hubungan mengarah ke kerentanan yang lebih mendalam.`;

    // 6. Self & Identity
    DOM.resIdentity.innerHTML = `Nilai diri Anda diiringi dengan tingkat kecemasan sebesar <b>${scores.SW}%</b>. Semakin rendah skor ini, semakin Anda merasa harus terus "membuktikan diri" di dunia eksternal.`;

    // 7. Authority & Social Behavior
    DOM.resAuthority.innerHTML = `Terkait figur otoritas (Skor AP: <b>${scores.AP}%</b>), persepsi Anda terhadap atasan, sistem, atau entitas hukum sangat dipengaruhi figur ayah. Kecenderungan saat ini adalah bersikap waspada dan mandiri.`;

    // 9. Healing & Growth Path (Dynamic)
    let healingActs = '';
    // Rules from prompt: IF SW low → self-validation exercises. IF ES high anxiety → grounding techniques. IF AS avoidant → trust-building exercises.
    if (scores.SW <= 50) {
        healingActs += `<p><strong>Latihan Self-Validation (SW Rendah):</strong> Mulailah mencatat 3 pencapaian kecil setiap malam untuk memvalidasi keberhasilan diri secara rutin tanpa menunggu pujian eksternal.</p>`;
    }
    if (scores.ES >= 60) {
        healingActs += `<p><strong>Grounding Techniques (Kecemasan Tinggi/ES):</strong> Gunakan teknik 5-4-3-2-1 ketika panik, dengan meletakkan fokus fisik mendalam ke benda di sekitar Anda untuk hadir di "saat ini".</p>`;
    }
    if (scores.AS >= 50) { // Anggap tinggi menghindari = tinggi AS/Avoidant
        healingActs += `<p><strong>Trust-Building (Avoidant Pattern/AS):</strong> Berlatih membagi satu beban pemikiran rasional kecil Anda ke orang kepercayaan terdekat bulan ini. Pelan-pelan turunkan tembok Anda.</p>`;
    }
    
    // Fallback jika semua skor di "tengah/aman"
    if (healingActs === '') {
        healingActs = `<p><strong>Maintaining Balance:</strong> Pertahankan resiliensi Anda dan mulailah aktivitas journaling ringan untuk mendokumentasikan rasa syukur mingguan Anda.</p>`;
    }
    
    DOM.resHealingPath.innerHTML = healingActs;
}

// ==========================================
// CHART.JS VISUALIZATION
// ==========================================

function updateChartTheme() {
    if (!myChart) return;
    const isDark = document.body.classList.contains('dark-mode');
    
    myChart.options.scales.r.grid.color = isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)";
    myChart.options.scales.r.angleLines.color = isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)";
    myChart.options.scales.r.pointLabels.color = isDark ? "#cbd5e1" : "#64748b";
    
    myChart.update();
}

function renderRadarChart(scoresObj) {
    const isDark = document.body.classList.contains('dark-mode');
    
    const labels = [];
    const dataObj = [];

    CATEGORIES.forEach(cat => {
        labels.push(DIMENSION_LABELS[cat]);
        dataObj.push(scoresObj[cat]);
    });

    const ctx = DOM.radarChart.getContext('2d');
    
    // Destroy previous instance to prevent overlapping bugs
    if(myChart) {
        myChart.destroy();
    }

    myChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Profil Anda (%)',
                data: dataObj,
                backgroundColor: isDark ? 'rgba(96, 165, 250, 0.3)' : 'rgba(37, 99, 235, 0.2)',
                borderColor: isDark ? '#60a5fa' : '#2563eb',
                pointBackgroundColor: isDark ? '#60a5fa' : '#2563eb',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: isDark ? '#60a5fa' : '#2563eb',
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                r: {
                    angleLines: {
                        color: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
                    },
                    grid: {
                        color: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
                    },
                    pointLabels: {
                        color: isDark ? "#cbd5e1" : "#64748b",
                        font: {
                            size: 11,
                            family: "'Inter', sans-serif"
                        }
                    },
                    ticks: {
                        display: false, // hide the numbers on the spider chart axes to make it cleaner
                        min: 0,
                        max: 100,
                        stepSize: 20
                    }
                }
            },
            plugins: {
                legend: {
                    display: false // looks cleaner without legend if there's only 1 dataset
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.raw + '%';
                        }
                    }
                }
            },
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

// ==========================================
// EXPORTING TO PDF (jsPDF + html2canvas)
// ==========================================

DOM.btnDownloadPdf.addEventListener('click', async () => {
    // Tombol di-disable dan diganti teks agar terasa loading
    const originText = DOM.btnDownloadPdf.innerHTML;
    DOM.btnDownloadPdf.innerHTML = `<div class="spinner" style="width: 20px; height: 20px; border-width: 2px; display:inline-block; margin-bottom:-5px; margin-right:5px"></div> Merender PDF...`;
    DOM.btnDownloadPdf.disabled = true;

    try {
        const doc = new window.jspdf.jsPDF('p', 'mm', 'a4');
        const pdfContent = document.getElementById('pdf-content-area');
        
        // Render content via html2canvas (memastikan chart dan CSS ikut ter-capture)
        const canvasObj = await html2canvas(pdfContent, { 
            scale: 2, // High resolution
            useCORS: true, 
            backgroundColor: document.body.classList.contains('dark-mode') ? '#1e293b' : '#ffffff' 
        });

        const imgData = canvasObj.toDataURL('image/png');
        
        // Calculate image proportions for A4
        const imgWidth = 210; // A4 width in mm
        const pageHeight = 297; // A4 height in mm
        const imgHeight = canvasObj.height * imgWidth / canvasObj.width;
        
        let heightLeft = imgHeight;
        let position = 0;

        doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        // Multipage capability if content overflows A4
        while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            doc.addPage();
            doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }

        doc.save(`Laporan-FIA-${state.userInfo.nama || 'User'}.pdf`);

    } catch (err) {
        console.error("Gagal export PDF", err);
        alert("Maaf, terjadi kesalahan saat menyusun PDF.");
    }

    DOM.btnDownloadPdf.innerHTML = originText;
    DOM.btnDownloadPdf.disabled = false;
});

// ==========================================
// GOOGLE APPS SCRIPT INTEGRATION (SAVE RESULTS)
// ==========================================

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.openById("1bbhg9GuDzjO1MU5VuFHO9fk6IY2YSukyFi3t5sWtkLo")
      .getSheetByName("Fatherless Test Data");

    const data = JSON.parse(e.postData.contents);

    const row = [
      new Date(),
      data.nama || "",
      data.umur || "",
      data.kota || "",
      data.email || "",
      data.AF || 0,
      data.FCC || 0,
      data.FP || 0,
      data.FI || 0,
      data.PI || 0,
      data.RP || 0,
      data.ES || 0,
      data.AS || 0,
      data.SW || 0,
      data.AP || 0,
      data.EE || 0,
      data.type || ""
    ];

    // ✅ Simpan ke spreadsheet
    sheet.appendRow(row);

    // ===============================
    // ✅ FORMAT EMAIL (TABLE HTML)
    // ===============================
    const htmlTable = `
      <h2>Hasil Test Fatherless</h2>
      <table border="1" cellpadding="6" cellspacing="0" style="border-collapse: collapse;">
        <tr>
          <th>Timestamp</th>
          <th>Nama</th>
          <th>Umur</th>
          <th>Kota</th>
          <th>Email</th>
          <th>AF</th>
          <th>FCC</th>
          <th>FP</th>
          <th>FI</th>
          <th>PI</th>
          <th>RP</th>
          <th>ES</th>
          <th>AS</th>
          <th>SW</th>
          <th>AP</th>
          <th>EE</th>
          <th>Type</th>
        </tr>
        <tr>
          ${row.map(val => `<td>${val}</td>`).join("")}
        </tr>
      </table>
    `;

    // ===============================
    // ✅ KIRIM EMAIL
    // ===============================
    MailApp.sendEmail({
      to: "kohanathings@gmail.com",
      subject: "📊 Hasil Test Fatherless Baru",
      htmlBody: htmlTable
    });

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ==========================================
// QR CODE GENERATOR
// ==========================================

DOM.btnShowQr.addEventListener('click', () => {
    // Generate fresh QR into container
    DOM.qrContainer.innerHTML = ''; // clear old
    
    // We assume saving results to a hypothetical unique link. We will just use standard URL for now
    const dummyLink = "https://yourwebsite.com/result/?user=" + Date.now();
    
    new QRCode(DOM.qrContainer, {
        text: dummyLink,
        width: 150,
        height: 150,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });

    DOM.qrModal.classList.remove('hidden');
});

DOM.closeQr.addEventListener('click', () => {
    DOM.qrModal.classList.add('hidden');
});

DOM.btnDownloadQr.addEventListener('click', () => {
    // The library creates an img and canvas inside the container
    const qrCanvas = DOM.qrContainer.querySelector('canvas');
    if (!qrCanvas) return;
    
    const qrUrl = qrCanvas.toDataURL("image/png");
    const downloadLink = document.createElement("a");
    downloadLink.href = qrUrl;
    downloadLink.download = "FIA-QRCode.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
});
