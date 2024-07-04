// humberger menuu
// document.addEventListener('DOMContentLoaded', function() {
//     const toggleSidebarBtn = document.getElementById('toggleSidebar');
//     const sidebar = document.getElementById('sidebar');


//     toggleSidebarBtn.addEventListener('click', function() {
//         sidebar.classList.toggle('active');
//     });

//     const logoutBtn = document.getElementById('logout');
//     logoutBtn.addEventListener('click', function() {
//         // Add your logout logic here
//         alert('Logout clicked');
//     });
// });

// pop up logout
document.addEventListener('DOMContentLoaded', (event) => {
    const logoutButton = document.getElementById('logoutButton');
    const popup = document.getElementById('popuplogout');
    const close = document.querySelector('.close');
    const confirmLogout = document.getElementById('confirmLogout');
    const cancelLogout = document.getElementById('cancelLogout');

    // Tampilkan popup saat tombol logout diklik
    logoutButton.addEventListener('click', () => {
        popup.style.display = 'flex';
    });

    // Tutup popup saat tombol 'x' atau 'Tidak' diklik
    close.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    cancelLogout.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // Tambahkan logika logout saat tombol 'Ya' diklik
    confirmLogout.addEventListener('click', () => {
        // Misalnya, redirect ke halaman logout atau panggil API logout
        alert('Anda telah logout.');
        // Redirect ke halaman lain (contoh)
        window.location.href = '/login.html';
    });
});


// popup tambah siswa
// const btnTambahSiswa = document.getElementById('btnTambahSiswa');
// const popupFormTambahSiswa = document.getElementById('popupFormTambahSiswa');
// const closeBtn = document.querySelector('.close');

// btnTambahSiswa.addEventListener('click', () => {
//     popupFormTambahSiswa.style.display = 'block';
// });

// closeBtn.addEventListener('click', () => {
//     popupFormTambahSiswa.style.display = 'none';
// });

// window.onclick = function(event) {
//     if (event.target == popupFormTambahSiswa) {
//         popupFormTambahSiswa.style.display = 'none';
//     }
// }



// dropdown menu
// var dropdown = document.getElementsByClassName("dropdown-btn");
// for (i = 0; i < dropdown.length; i++) {
//   dropdown[i].addEventListener("click", function() {
//     // this.classList.toggle("active");
//     var dropdownContent = this.nextElementSibling;
//     if (dropdownContent.style.display === "block") {
//       dropdownContent.style.display = "none";
//     } else {
//       dropdownContent.style.display = "block";
//     }
//   });
// }
console.log(dropdownContent);
