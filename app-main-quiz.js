//! QUIZZ Easy
const soalEasy = document.getElementById('soal-easy');
const jawabanEasy = document.getElementById('jawaban-easy');
const hasilEasy = document.getElementById('hasil-easy');

const kuisEasy = [
    {p:"Apa itu Awig awig?", j:"aturan adat"},
    {p:"Awig awig biasanya terdapat di?", j:"desa adat dan banjar adat"},
    {p:"awig awig biasanya mengatur tentang?", j:"aspek kehidupan masyarakat"},
    {p:"awig awig yang ada di banjar adat biasanya disebut?", j:"perarrem"},
    {p:"mengapa awig awig penting bagi masyarakat hindu bali?", j:"karena mengatur aspek kehidupan masyarakat"},
    {p:"yang memiliki wewenang untuk mengatur awig awig adalah", j:"bendesa adat dan kelian adat"},
    {p:"pemimpin di desa adat disebut", j:"bendesa adat"},
    {p:"aturan dalam masyarakat hindu disebut", j:"Dharma wasana"},
    {p:"pemimpin di banjar adat disebut", j:"kelian adat"},
    {p:"aturan yang diikuti oleh masyarakat adat bali disebut", j:"awig awig atau perarem"}
];

let scoreEa = 0, indexEa = 0;

function erorEa() {
    if (jawabanEasy.value.trim() === "") {
        alert('Sory something went wrong /:');
        return false;
    }
    return true;
}

function Load() {
  soalEasy.innerText = kuisEasy[indexEa].p;
}

function nextEa() {
    if (!erorEa()) return;
    if (jawabanEasy.value.toLowerCase() === kuisEasy[indexEa].j) {
        scoreEa++;
    }
    indexEa++;

    if (indexEa < kuisEasy.length) {
        Load();
        jawabanEasy.value = "";
    } else {
        hasilEasy.innerText = `Skor: ${scoreEa}/${kuisEasy.length}`;
    }
}

//! QUIZZ Hard
const soalHard = document.getElementById('soal-hard');
const jawabanHard = document.getElementById('jawaban-hard');
const hasilHard = document.getElementById('hasil-hard');

const kuisHard = [
    {p:"dharma santra merupakan", j:"hukum dalam agama hindu"},
    {p:"bagian dharma sastra yang mengatur hukum di alam disebut", j:"rta"},
    {p:"pamidanda adalah sanksi diberikan yang melanggar awig awig berupa", j:"membayar denda"},
    {p:"awig awig dalam agama disebut", j:"norma agama"},
    {p:"hukum yang bersifat umum dalam masyarakat hindu bali disebut", j:"awig awig"},
    {p:"penyitaan adalah sanksi diberikan saat melanggar awig awig disebut", j:"rerampangan"},
    {p:"fungsi awig awig dalam pelaksanaan yadnya adalah", j:"mengatur jalannya yadnya"},
    {p:"rta adalah bagian dharma sastra yang mengatur tentang tatanan", j:"tatanan alam"},
    {p:"sanksi berupa pengasingan bagi yang melanggar awig awig disebut", j:"kasekepang"},
    {p:"hukum dalam agama hindu berasal dari", j:"para rsi"}
];

let scoreHad = 0, indexHad = 0;

function eror() {
    if (jawabanHard.value.trim() === "") {
        alert('Sory something went wrong /:');
        return false;
    }
    return true;
}

function call() {
  soalHard.innerText = kuisHard[indexHad].p;
}

function nextHad() {
    if (!eror()) return;

    if (jawabanHard.value.toLowerCase() === kuisHard[indexHad].j) {
        scoreHad++;
    }
    indexHad++;

    if (indexHad < kuisHard.length) {
        call();
        jawabanHard.value = "";
    } else {
        hasilHard.innerText = `Skor: ${scoreHad}/${kuisHard.length}`;
    }
}

//! SOAL Medium
const soalMedium = document.getElementById('soal-medium');
const jawabanMedium = document.getElementById('jawaban-medium');
const hasilMedium = document.getElementById('hasil-medium');

const kuisMedium = [
    {p:"Fungsi utama awig-awig adalah?", j:"menjagaketertibanmasyarakat"},
    {p:"Perarem memiliki kedudukan sebagai?", j:"aturanyangbersifatspesifik"},
    {p:"Secara niskala awig-awig mengatur tentang?", j:"upacarakeagamaan"},
    {p:"Awig-awig adalah aturan yang bersifat?", j:"umum"},
    {p:"Secara skala awig-awig mengatur tentang?", j:"kegiatanbermasyarakat"},
    {p:"Sanksi jika melanggar awig-awig?", j:"pamidanda"},
    {p:"Tujuan sanksi dalam awig-awig?", j:"memberikanefekjera"},
    {p:"Bagaimana awig-awig menyelesaikan konflik?", j:"musyawarah"},
    {p:"Tugas bendesa adat?", j:"menyusunawigawig"},
    {p:"Peran masyarakat dalam awig-awig?", j:"pengambilankeputusan"}
];

let scoreMed = 0, indexMed = 0;

function erorMed() {
    if (jawabanMedium.value.trim() === "") {
        alert('Sory something went wrong /:');
        return false;
    }
    return true;
}

function fetch() {
    soalMedium.innerText = kuisMedium[indexMed].p;
}

function nextMed() {
    if (!erorMed()) return;
    if (jawabanMedium.value.toLowerCase() === kuisMedium[indexMed].j) {
        scoreMed++;
    }
    indexMed++;

    if (indexMed < kuisMedium.length) {
        fetch();
        jawabanMedium.value = "";
    } else {
        hasilMedium.innerText = `Skor: ${scoreMed}/${kuisMedium.length}`;
    }
}

document.addEventListener("DOMContentLoaded", function() {
  Load();
});
document.addEventListener("DOMContentLoaded", function() {
  fetch();
})
document.addEventListener("DOMContentLoaded", function() {
  call();
})
