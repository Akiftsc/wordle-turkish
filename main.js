const kelimeler = ["adres", "akrep", "avize", "babac", "balık", "bavul", "bedel", "bebek", "bekçi", "belge", "biber", "bisik", "bulut", "bunak", "büvet", "caddi", "cephe", "cilal", "cüppe", "çarık", "çayır", "çekme", "çelik", "çerçe", "çiçek", "davet", "dikme", "dinle", "duvak", "dümen", "düşük", "emzik", "etkin", "fakat", "felse", "filiz", "fırça", "göğüs", "güneş", "gözük", "haber", "harek", "havlu", "hazır", "ilgin", "insan", "istik", "işlek", "kalem", "kayık", "kazık", "kepçe", "kilit", "kıvam", "kütük", "laçka", "lamba", "lazım", "limon", "lüzum", "makin", "masal", "mecra", "mevzu", "mürek", "mısır", "müşer", "niyet", "nazik", "nüfus", "nüsha", "öğren", "özgür", "özlem", "paket", "pazar", "pilav", "plaka", "porsu", "radyo", "ramak", "resto", "ruhlu", "sakız", "salon", "sandı", "sapık", "sebze", "sıcak", "sifon", "silgi", "sıçra", "sokak", "sorun", "soyut", "sütun", "şakak", "şeker", "şikay", "şöhre", "şüphe", "takas", "takım", "telci", "temel", "temiz", "tezga", "tüken", "uğrun", "unvan", "uslan", "uygun", "uyruk", "ücret", "üstün", "üzgün", "üzeri", "vapur", "vefat", "vurgu", "vuruş", "yaban", "yakın", "yamuk", "yardı", "yavru", "yazık", "yedek", "yenik", "yerel", "yeten", "yosma", "yozla", "yufka", "yulaf", "yunus", "yürek", "yüzme", "zabıt", "zaman", "zarar", "zatür", "zebra", "zemin", "zorun", "züppe", "çakıl", "çalım", "çanak", "çavuş", "çekim", "çevir", "çiftç", "çilek", "çimen", "çinko", "özdeş", "şapel", "şapka", "şarap", "şemsi", "şoför", "şömiz", "şöval", "şımar", "takat", "taksi", "taraf", "tavır", "teker", "temas", "tenis", "tesis", "tetik", "tırtı", "turiz", "turta", "tutum", "tuzak", "tutku", "uzağa", "ümmet", "ürkek", "üşüme", "vurum", "yağlı", "yaman", "yarar", "yargı", "yatak", "yayık", "yazar", "yemek", "yemen", "yenek", "yerin", "yılan", "yıldı", "yumuş", "yutma", "zahit", "zaten", "zehir", "zeval", "zevki", "zorla", "zulüm", "çalan", "çapak", "çarşa", "çatma", "çelen", "çelme", "çıkma", "çıtak", "çırak", "çirke", "özene", "şahsi", "şarkı", "bahar", "cıvık", "dövme", "elmas", "fırat", "gövde", "hırka", "tünel", "zirve", "abone", "bakır", "ceket", "dudak", "fizik", "göbek", "hafız", "namlu", "rakam", "türbe", "vagon", "acemi", "balta", "dolap", "eşarp", "fırın", "ırmak", "meyve", "nisan", "pasta", "sıkma", "takoz", "vites", "yakut", "afyon", "baskı", "duman", "gitar", "havuz", "mezar", "nokta", "pamuk", "talaş", "ünlem", "yanık", "zamir", "başka", "dalga", "hatun", "ıslak", "japon", "noter", "sabah", "tartı"];
const rows = document.querySelectorAll('.row');
let WORD = generateWord().toLowerCase();
console.log("🚀 ~ WORD:", WORD)


let WIN = false;

let currentRowIndex = 0;
let currentCellIndex = 0;

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzüğşçıÜĞŞÇIÖö'.split('');



document.addEventListener("keydown", function (event) {
  if (WIN !== false) return;
  if (!ALPHABET.includes(event.key)) return;
  if (currentCellIndex > 5 || currentRowIndex > 5) {
    alert("KAYBETTİN. KELİME: " + WORD)
    window.location.reload();
  }

  const currentRow = rows[currentRowIndex];
  const currentCel = currentRow.querySelector(`.cell:nth-child(${currentCellIndex + 1})`);

  currentCel.classList.add("animated");
  currentCel.classList.add("animatedFadeInUp");
  currentCel.classList.add("fadeInUp");
  setTimeout(() => {
    currentCel.classList.remove("animated");
    currentCel.classList.remove("animatedFadeInUp");
    currentCel.classList.remove("fadeInUp");
  }, 1000);
  currentCel.textContent = event.key;

  if (currentCellIndex === 4) {
    checkWord();
    currentCellIndex = 0;
    currentRowIndex++;
  } else {
    currentCellIndex++;
  }
});



const checkWord = () => {
  const currentRow = rows[currentRowIndex];
  const currentCels = currentRow.querySelectorAll('.cell');
  let inWord = '';
  for (let i = 0; i < currentCels.length; i++) {
    inWord += currentCels[i].innerText;
  }
  inWord = inWord.trim().toLowerCase();
  if (inWord === WORD) {
    alert('You win!');
    WIN = true;
    currentRow.classList.add("win")
  }
  else {
    for (let i = 0; i < WORD.length; i++) {
      WORD[i] === inWord[i] ? currentCels[i].classList.add("rightPlace") : (WORD.includes(inWord[i]) ? currentCels[i].classList.add("rightLetter") : null);
    }
  }

}


const clearGrid = () => {
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    row.classList.remove("win");
    const cells = row.querySelectorAll('.cell');
    for (let j = 0; j < cells.length; j++) {
      cells[j].textContent = '';
      cells[j].classList.remove("rightPlace");
      cells[j].classList.remove("rightLetter");
    }
  }
  currentRowIndex = 0;
  currentCellIndex = 0;

  WORD = generateWord();
}



document.getElementById('reset').addEventListener('click', () => {
  clearGrid();
  WIN = false;
  window.location.reload();
})

function generateWord() {
  let wrdIndex = Math.floor(Math.random() * kelimeler.length);
  return kelimeler[wrdIndex];
}

