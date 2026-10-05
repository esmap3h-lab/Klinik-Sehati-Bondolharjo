// ===== GREETING DENGAN WAKTU & SAPAAN BERDASARKAN WAKTU =====

function getTimeGreeting() {
  const hour = new Date().getHours();

  if (hour >= 4 && hour < 11) return "Selamat Pagi";
  if (hour >= 11 && hour < 15) return "Selamat Siang";
  if (hour >= 15 && hour < 18) return "Selamat Sore";

  return "Selamat Malam";
}

function updateDatetime() {
  const now = new Date();

  const days = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu"
  ];

  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember"
  ];

  const dayName = days[now.getDay()];
  const date = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();

  const hours = String(now.getHours()).padStart(2, "0");
  const mins = String(now.getMinutes()).padStart(2, "0");
  const secs = String(now.getSeconds()).padStart(2, "0");

  const el = document.getElementById("datetime-display");

  if (el) {
    el.textContent =
      `${getTimeGreeting()} | ${dayName}, ${date} ${month} ${year} | ${hours}:${mins}:${secs}`;
  }
}

updateDatetime();
setInterval(updateDatetime, 1000);

// ===== GREETING MESIN KETIK =====

const greetingText =
  "Layanan Pendampingan Produk Halal area Jawa Tengah";

const greetingElement =
  document.getElementById("greeting");

let index = 0;

function typeWriter() {

  if (!greetingElement) return;

  if (index < greetingText.length) {

    greetingElement.textContent +=
      greetingText.charAt(index);

    index++;

    setTimeout(typeWriter, 80);
  }
}

typeWriter();

// ===== CEK STATUS DOKUMEN =====

const form =
  document.getElementById("status-form");

const registrationInput =
  document.getElementById("registration-number");

const cekBtn =
  document.getElementById("cek-btn");

const resultDiv =
  document.getElementById("result");

if (cekBtn) {
  cekBtn.disabled = false;
}

if (form) {

  form.addEventListener("submit", function (e) {

    e.preventDefault();

    const registrationNumber =
      registrationInput.value.trim();

    if (registrationNumber.length >= 5) {

      resultDiv.innerHTML = `
        <div class="result-container">

          <p class="result-label">
            NIB: Sudah Terbit ✅
            documents/nib.pdf

              Lihat Dokumen

            </a>
          </p>

          <p class="result-label">
            Sertifikat Halal: Sudah Jadi ✅
            documents/sertifikat.pdf

              Lihat Dokumen

            </a>
          </p>

          <p class="result-label">
            Logo Halal: Sudah Tersedia ✅

            documents/logo-halal.png

              Lihat Dokumen

            </a>

            documents/logo-halal.png

              ⬇ Download Logo

            </a>

          </p>

        </div>
      `;

      const logoButton =
        document.getElementById("btn-logo-halal");

      const downloadButton =
        document.getElementById("btn-dl-logo");

      if (logoButton && downloadButton) {

        logoButton.addEventListener("click", function () {

          downloadButton.style.display =
            "inline-block";

        });

      }

    } else {

      resultDiv.innerHTML = `
        <p style="color:red;">
          ❌ Nomor Registrasi tidak valid.
        </p>
      `;

    }

  });

}

// ===== DARK MODE =====

const darkBtn =
  document.getElementById("dark-mode-toggle");

let isDark =
  localStorage.getItem("darkMode") === "true";

function applyDark(val) {

  document.body.classList.toggle(
    "dark-mode",
    val
  );

  if (darkBtn) {
    darkBtn.textContent =
      val ? "☀️" : "🌙";
  }
}

applyDark(isDark);

if (darkBtn) {

  darkBtn.addEventListener("click", () => {

    isDark = !isDark;

    localStorage.setItem(
      "darkMode",
      isDark
    );

    applyDark(isDark);

  });

}

// ===== EFEK SALJU =====

(function () {

  const canvas =
    document.createElement("canvas");

  canvas.id = "snow-canvas";

  document.body.appendChild(canvas);

  const ctx =
    canvas.getContext("2d");

  function resize() {
    canvas.width = window.innerWidth;
 
