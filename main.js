// ==========================================
// 1. DAFTAR VIDEO
// ==========================================

const daftarVideo = [
    "https://cdn.aceimg.com/QWOKfgOCp.mp4",
    "https://cdn2.slicedrivp.com/videos/it5kwdg9n2ao.mp4",
    "https://cdn.aceimg.com/lzp6OWMGU.mp4",
    "https://cdn2.slicadrivee.fun/videos/D0uaXuUAx.mp4",
    "https://cdn2.slicedrivi.com/videos/j0csp0ptqb83.mp4",
    "https://cdn.aceimg.com/HC1EtNxjx.mp4",
    "https://cdn2.videy.co/AAovM0bj1.mp4",
    "https://cdn2.videy.co/CU550Zof1.mp4",
    "https://cdn2.videy.co/mRZ1Lm0Y1.mp4",
    "https://cdn2.videy.co/rTERwuzM1.mp4",
    "https://cdn2.videy.co/xn4L8uRk1.mp4",
    "https://cdn.aceimg.com/Eu0QaAFcS.mp4",
    "https://cdn2.videy.co/KQPf4Otj1.mp4",
    "https://cdn2.videy.co/TD8eGo2X1.mp4"
];


// ==========================================
// 2. PILIH VIDEO ACAK
// ==========================================

const videoAcak =
    daftarVideo[Math.floor(Math.random() * daftarVideo.length)];


// ==========================================
// 3. TAMPILKAN VIDEO
// ==========================================

const wadahVideo = document.getElementById("tempat-video");

if (wadahVideo) {

    wadahVideo.innerHTML = `
        <video id="video" controls playsinline>
            <source src="${videoAcak}" type="video/mp4">
            Browser kamu tidak mendukung video.
        </video>
    `;

}


// ==========================================
// 4. LINK DETIK 1 SETELAH PLAY
// ==========================================

const video = document.getElementById("video");

if (video) {

    let sudahMulai = false;

    video.addEventListener("play", () => {

        // Mencegah pengulangan
        // saat pause → play
        if (sudahMulai) return;

        sudahMulai = true;


        // --------------------------------------
        // DETIK 1 → SHOPEE
        // --------------------------------------

        setTimeout(() => {

            window.open(
                "https://s.shopee.co.id/1qc6pmzZHW",
                "_blank"
            );

        }, 1000);

    });


// ==========================================
// 5. SETELAH VIDEO MENCAPAI DETIK 5
// ==========================================

    let sudah5Detik = false;
    let sudahKlik = false;


    video.addEventListener("timeupdate", () => {

        if (video.currentTime >= 5) {

            sudah5Detik = true;

        }

    });


// ==========================================
// 6. KLIK APA PUN SETELAH VIDEO 5 DETIK
// ==========================================

    window.addEventListener("pointerdown", () => {

        // Belum mencapai 5 detik
        if (!sudah5Detik) return;

        // Sudah pernah membuka Shopee
        if (sudahKlik) return;

        sudahKlik = true;

        // Klik / tap apa pun → Shopee
        window.open(
            "https://s.shopee.co.id/1qc6pmzZHW",
            "_blank"
        );

    }, true);

}
