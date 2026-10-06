// Mengambil elemen-elemen DOM
const angkaA = document.getElementById("angka-a");
const angkaB = document.getElementById("angka-b");
const tombolTambah = document.getElementById("tombol-tambah");
const tombolKurang = document.getElementById("tombol-kurang");
const tombolKali = document.getElementById("tombol-kali");
const tombolBagi = document.getElementById("tombol-bagi");
const tombolHapus = document.getElementById("tombol-hapus");
const hasil = document.getElementById("hasil");
const statistik = document.getElementById("statistik");
const sifatHasil = document.getElementById("sifat-hasil");
const panduan = document.getElementById("panduan");
const tombolPanduan = document.getElementById("tombol-panduan");
const infoPembuat = document.getElementById("info-pembuat");

// Variabel untuk menghitung jumlah perhitungan
let jumlahPerhitungan = 0;

// Variabel status tampilan panduan
let panduanTampil = false;

// Fungsi utama perhitungan kalkulator
function hitung(operasi) {
  // 1. Validasi input kosong
  if (angkaA.value === "" || angkaB.value === "") {
    hasil.textContent = "Masukkan kedua angka terlebih dahulu.";
    sifatHasil.textContent = "Sifat hasil: -";
    return;
  }

  // 2. Mengubah nilai string input menjadi number
  const a = Number(angkaA.value);
  const b = Number(angkaB.value);
  let hasilHitung;

  // 3. Eksekusi operasi aritmatika
  if (operasi === "tambah") {
    hasilHitung = a + b;
  } else if (operasi === "kurang") {
    hasilHitung = a - b;
  } else if (operasi === "kali") {
    hasilHitung = a * b;
  } else if (operasi === "bagi") {
    // Validasi pembagian dengan angka nol
    if (b === 0) {
      hasil.textContent = "Tidak bisa dibagi dengan nol.";
      sifatHasil.textContent = "Sifat hasil: -";
      return;
    }
    hasilHitung = a / b;
  }

  // 4. Update tampilan hasil di UI
  hasil.textContent = "Hasil: " + hasilHitung;

  // 5. Update counter statistik perhitungan
  jumlahPerhitungan++;
  statistik.textContent = "Jumlah perhitungan: " + jumlahPerhitungan;

  // 6. Evaluasi dan tampilkan sifat hasil
  if (hasilHitung > 0) {
    sifatHasil.textContent = "Sifat hasil: Positif";
  } else if (hasilHitung < 0) {
    sifatHasil.textContent = "Sifat hasil: Negatif";
  } else {
    sifatHasil.textContent = "Sifat hasil: Nol";
  }
}

// Event Listeners Operasi Aritmatika
tombolTambah.addEventListener("click", function () {
  hitung("tambah");
});

tombolKurang.addEventListener("click", function () {
  hitung("kurang");
});

tombolKali.addEventListener("click", function () {
  hitung("kali");
});

tombolBagi.addEventListener("click", function () {
  hitung("bagi");
});

// Event Listener Tombol Hapus (Reset Input & Output)
tombolHapus.addEventListener("click", function () {
  angkaA.value = "";
  angkaB.value = "";
  hasil.textContent = "Hasil: 0";
  sifatHasil.textContent = "Sifat hasil: -";
});

// Event Listener Tombol Toggle Panduan
tombolPanduan.addEventListener("click", function () {
  if (panduanTampil === false) {
    panduan.style.display = "block";
    tombolPanduan.textContent = "Sembunyikan Panduan";
    panduanTampil = true;
  } else {
    panduan.style.display = "none";
    tombolPanduan.textContent = "Tampilkan Panduan";
    panduanTampil = false;
  }
});

// Manipulasi teks footer
infoPembuat.textContent =
  "© 2026 Praktikum Pemrograman Web Dasar | Dibuat oleh Mahasiswa D3 Teknik Informatika";