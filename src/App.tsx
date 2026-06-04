const downloadHref =
  "https://github.com/Akbarco/LangganinAJa/releases/download/v1.0.1/Langganinaja-v1.0.1.apk";

const features = [
  {
    title: "Dashboard pengeluaran",
    tag: "Pantau total",
    body: "Lihat total bulanan, estimasi tahunan, langganan aktif, dan status budget dari satu layar.",
  },
  {
    title: "Catat langganan",
    tag: "Tambah cepat",
    body: "Simpan nama layanan, harga, siklus bayar, kategori, tanggal mulai, dan jatuh tempo berikutnya.",
  },
  {
    title: "Kalender tagihan",
    tag: "Ingat tanggal",
    body: "Pantau jadwal pembayaran lokal per bulan supaya tanggal bayar tidak lewat begitu saja.",
  },
  {
    title: "Budget warning",
    tag: "Cegah bocor",
    body: "Atur batas pengeluaran bulanan dan lihat sinyal saat budget mendekati atau melewati batas.",
  },
  {
    title: "Riwayat pembayaran",
    tag: "Histori rapi",
    body: "Tandai sudah dibayar, simpan histori, lalu tanggal bayar berikutnya bergeser otomatis.",
  },
  {
    title: "Bukti dan export",
    tag: "Backup aman",
    body: "Lampirkan bukti pembayaran, export daftar ke PDF, dan simpan database lokal sebagai backup.",
  },
];

const painPoints = [
  {
    label: "Lupa bayar",
    body: "Tanggal tagihan lewat karena tersebar di banyak aplikasi.",
  },
  {
    label: "Total tidak kelihatan",
    body: "Biaya kecil terasa aman, sampai akhir bulan baru sadar membengkak.",
  },
  {
    label: "Layanan aktif menumpuk",
    body: "Sulit bedakan mana yang masih dipakai dan mana yang harus dihentikan.",
  },
];

const insights = [
  {
    title: "Lihat per Kategori",
    body: "Cek pengeluaran untuk streaming, edukasi, atau game.",
    value: "5 Kategori",
  },
  {
    title: "Langganan Termahal",
    body: "Cari tahu layanan apa yang paling bikin dompet tipis.",
    value: "Rp310K",
  },
  {
    title: "Jadwal Jatuh Tempo",
    body: "Intip jadwal bayar-bayar buat beberapa bulan ke depan.",
    value: "6 Bulan",
  },
  {
    title: "Status Budget",
    body: "Pantau pengeluaranmu masih aman atau udah peringatan.",
    value: "82%",
  },
];

const offlinePoints = [
  { icon: "📱", title: "Tersimpan di HP", desc: "Semua catatan kamu cuma ada di HP ini, nggak kemana-mana." },
  {
    icon: "🔒",
    title: "Akun per HP",
    desc: "Akun kamu disimpan langsung di perangkat, bukan di server manapun.",
  },
  { icon: "🌐", title: "Bisa Kapan Aja", desc: "Nggak ada sinyal pun, aplikasi tetap jalan lancar." },
  { icon: "📤", title: "Cadangkan Data", desc: "Simpan datamu ke file lain biar nggak gampang hilang." },
  { icon: "🔐", title: "Kunci Aplikasi", desc: "Pasang PIN biar nggak sembarang orang bisa intip." },
  { icon: "🛡️", title: "Privasi Terjaga", desc: "Kami nggak mengumpulkan atau mengintip datamu sama sekali." },
];

const steps = [
  {
    title: "Download Aplikasi",
    body: "Install Langganinaja langsung di HP Android kamu.",
  },
  {
    title: "Langsung Pakai",
    body: "Nggak usah ribet bikin akun atau pusingin internet.",
  },
  {
    title: "Mulai Mencatat",
    body: "Masukin daftar langgananmu, dan pantau pengeluarannya setiap bulan.",
  },
];

function App() {
  return (
    <div className="site-shell">
      <header className="top-nav" aria-label="Navigasi utama">
        <a className="brand" href="#top" aria-label="Langganinaja home">
          <img src="/icon.png" alt="" />
          <span>Langganinaja</span>
        </a>
        <nav className="nav-links" aria-label="Section landing page">
          <a href="#features">Fitur</a>
          <a href="#offline">Offline</a>
          <a href="#download">Download</a>
        </nav>
        <a
          className="button button-small button-primary"
          href={downloadHref}
          download
        >
          Download Aplikasi
        </a>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy">
            <h1>Kelola semua langganan dari satu aplikasi offline.</h1>
            <p className="lead">
              Langganinaja bantu kamu mencatat biaya langganan, melihat total
              pengeluaran bulanan, memantau tanggal bayar, dan menyimpan riwayat
              pembayaran langsung di HP-mu.
            </p>
            <div className="hero-actions" aria-label="Aksi utama">
              <a className="button button-primary" href={downloadHref} download>
                Download Aplikasi
              </a>
              <a className="button button-secondary" href="#features">
                Lihat fitur
              </a>
            </div>
          </div>

          <div
            className="hero-visual"
            aria-label="Mockup dashboard Langganinaja"
          >
            <PhoneMockup />
          </div>
        </section>

        <section className="problem-block color-block block-cream">
          <div className="problem-copy">
            <p className="eyebrow">Masalah yang sering kejadian</p>
            <h2>Biaya kecil, kalau dibiarkan jadi bocor bulanan.</h2>
            <p className="block-copy">
              Tanpa catatan rapi, kamu gampang lupa tanggal bayar, lupa layanan
              yang masih aktif, atau telat sadar budget sudah lewat.
            </p>
          </div>
          <div className="pain-grid">
            {painPoints.map((item) => (
              <div className="pain-item" key={item.label}>
                <span />
                <div>
                  <strong>{item.label}</strong>
                  <p>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="features section-pad" id="features">
          <div className="section-heading">
            <p className="eyebrow">Fitur inti</p>
            <h2>
              Satu tempat untuk catat, pantau, ingat, dan kontrol langganan.
            </h2>
          </div>
          <div className="feature-grid">
            {features.map((feature, index) => (
              <article className="feature-card" key={feature.title}>
                <div className="feature-topline">
                  <span className="feature-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="feature-tag">{feature.tag}</span>
                </div>
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="offline-block color-block block-cream" id="offline">
          <div className="offline-container-new">
            <div className="offline-header-new">
              <p className="eyebrow">Offline dan privat</p>
              <h2>Data tetap di perangkat kamu</h2>
              <p className="offline-lead-new">
                Nggak butuh internet, nggak butuh akun, nggak ada data yang keluar dari HP kamu.
              </p>
            </div>

            <div className="offline-cards-new">
              {offlinePoints.map((point) => (
                <div className="offline-card-new" key={point.title}>
                  <strong>{point.title}</strong>
                  <p>{point.desc}</p>
                </div>
              ))}
            </div>

            <p className="offline-footnote-new">
              Semua catatanmu cuma ada di HP ini. Kalau mau ganti HP, jangan lupa simpan datanya dulu ya.
            </p>
          </div>
        </section>

        <section className="analytics section-pad">
          <div className="section-heading compact">
            <p className="eyebrow">Analytics preview</p>
            <h2>
              Bukan cuma mencatat. Lihat pola pengeluaran sebelum budget bocor.
            </h2>
            <p>
              Langganinaja bantu kamu memutuskan layanan mana yang masih perlu
              dipakai dan mana yang bisa dihentikan.
            </p>
          </div>
          <div className="analytics-layout">
            <div className="chart-panel">
              <div className="chart-label">Budget bulan ini</div>
              <div className="chart-donut-wrap" aria-hidden="true">
                <svg className="chart-donut" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="48" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="12" />
                  <circle cx="60" cy="60" r="48" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="12"
                    strokeDasharray="246.6" strokeDashoffset="44.4"
                    strokeLinecap="round"
                    style={{transform: "rotate(-90deg)", transformOrigin: "60px 60px"}} />
                  <text x="60" y="56" textAnchor="middle" dominantBaseline="middle" className="donut-pct">82%</text>
                  <text x="60" y="72" textAnchor="middle" dominantBaseline="middle" className="donut-sub">terpakai</text>
                </svg>
              </div>
              <div className="chart-breakdown" aria-hidden="true">
                <div className="breakdown-item">
                  <span className="dot dot-a" /><span>Streaming</span>
                </div>
                <div className="breakdown-item">
                  <span className="dot dot-b" /><span>Tools</span>
                </div>
                <div className="breakdown-item">
                  <span className="dot dot-c" /><span>Utilitas</span>
                </div>
              </div>
            </div>
            <div className="insight-list">
              {insights.map((insight) => (
                <div className="insight-item" key={insight.title}>
                  <span />
                  <div>
                    <strong>{insight.value}</strong>
                    <h3>{insight.title}</h3>
                    <p>{insight.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="how-it-works color-block block-lilac">
          <div className="section-heading compact">
            <p className="eyebrow">Cara mulai</p>
            <h2>Tiga langkah, langsung rapi dari HP Android.</h2>
          </div>
          <div className="steps-grid">
            {steps.map((step, index) => (
              <article className="step-card" key={step.title}>
                <span>{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="download-section color-block block-lime"
          id="download"
        >
          <div>
            <p className="eyebrow">Download</p>
            <h2>Siap rapikan pengeluaran langganan kamu?</h2>
            <p>
              Download APK Langganinaja dan mulai catat langganan langsung dari
              HP Android.
            </p>
          </div>
          <div className="download-action">
            <a className="button button-primary" href={downloadHref} download>
              Download Aplikasi
            </a>
            <div className="download-meta">
              <span>Versi 1.0.0</span>
              <span>Aplikasi Android</span>
              <span>Download langsung gratis</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <a
            className="brand footer-brand"
            href="#top"
            aria-label="Langganinaja home"
          >
            <img src="/icon.png" alt="" />
            <span>Langganinaja</span>
          </a>
          <p>Aplikasi pencatat langganan offline untuk Android.</p>
        </div>
        <nav aria-label="Footer navigation">
          <a href="#features">Fitur</a>
          <a href="#offline">Offline</a>
          <a href="#download">Download</a>
        </nav>
        <span className="version">v1.0.0</span>
      </footer>
    </div>
  );
}

function PhoneMockup() {
  const calendarDays = ["03", "08", "12", "17", "21", "28"];

  return (
    <div className="phone-frame">
      <div className="phone-screen">
        <div className="app-top">
          <div>
            <span>Mei 2026</span>
            <strong>Dashboard</strong>
          </div>
          <img src="/icon.png" alt="" />
        </div>
        <div className="balance-card">
          <span>Total bulan ini</span>
          <strong>Rp1.250.000</strong>
          <div className="progress-track">
            <span />
          </div>
          <small>Budget aman, 82% terpakai</small>
        </div>
        <div className="mini-stats">
          <div>
            <span>Aktif</span>
            <strong>14</strong>
          </div>
          <div>
            <span>Next</span>
            <strong>08 Mei</strong>
          </div>
        </div>
        <div className="subscription-list">
          <div>
            <span className="service-dot blue" />
            <p>
              Netflix
              <small>Bulanan</small>
            </p>
            <strong>Rp54K</strong>
          </div>
          <div>
            <span className="service-dot gold" />
            <p>
              ChatGPT Plus
              <small>Bulanan</small>
            </p>
            <strong>Rp310K</strong>
          </div>
        </div>
        <div className="calendar-mini">
          {calendarDays.map((day) => (
            <span
              className={day === "08" || day === "21" ? "due" : ""}
              key={day}
            >
              {day}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
