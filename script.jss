<script>

// Menampilkan pesan ketika halaman dibuka
alert("Selamat datang di website perkenalan Dario!");

// Membuat tombol 
let tombol = document.createElement("button");
tombol.innerHTML = "👋 Sapa Saya";

// Mengatur tampilan tombol 
tombol.style.padding = "12px 20px";
tombol.style.fontSize = "16px"; 
tombol.style.cursor = "pointer";
tombol.style.margin = "20px";

// Menambahkan tombol ke halaman
document.body.appenchild(tombol);

// Ketika tombol diklik
tombol.addEventListener("click", function() {
    alert("Halo! Senang bertemu dengan kamu 😊");

});
</script>