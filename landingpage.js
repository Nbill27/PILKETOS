// Ambil elemen-elemen yang diperlukan untuk masing-masing paslon
var openPopupBtn1 = document.getElementById("paslon1");
var popup1 = document.getElementById("popup1");
var closePopupBtn1 = document.getElementById("closePopupBtn1");

var openPopupBtn2 = document.getElementById("paslon2");
var popup2 = document.getElementById("popup2");
var closePopupBtn2 = document.getElementById("closePopupBtn2");

var openPopupBtn3 = document.getElementById("paslon3");
var popup3 = document.getElementById("popup3");
var closePopupBtn3 = document.getElementById("closePopupBtn3");

// Fungsi untuk membuka pop-up Paslon 1
openPopupBtn1.onclick = function() {
    popup1.style.display = "block";
}

// Fungsi untuk menutup pop-up Paslon 1 saat tombol 'x' diklik
closePopupBtn1.onclick = function() {
    popup1.style.display = "none";
}

// Fungsi untuk membuka pop-up Paslon 2
openPopupBtn2.onclick = function() {
    popup2.style.display = "block";
}

// Fungsi untuk menutup pop-up Paslon 2 saat tombol 'x' diklik
closePopupBtn2.onclick = function() {
    popup2.style.display = "none";
}

// Fungsi untuk membuka pop-up Paslon 3
openPopupBtn3.onclick = function() {
    popup3.style.display = "block";
}

// Fungsi untuk menutup pop-up Paslon 3 saat tombol 'x' diklik
closePopupBtn3.onclick = function() {
    popup3.style.display = "none";
}

// Fungsi untuk menutup pop-up saat pengguna mengklik di luar konten pop-up
window.onclick = function(event) {
    if (event.target == popup1) {
        popup1.style.display = "none";
    }
    if (event.target == popup2) {
        popup2.style.display = "none";
    }
    if (event.target == popup3) {
        popup3.style.display = "none";
    }
}
