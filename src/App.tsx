const downloadHref = "/download/Langganinaja.apk";

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
    title: "Breakdown kategori",
    body: "Streaming, tools, utilitas, edukasi, game.",
    value: "5 kategori",
  },
  {
    title: "Top langganan termahal",
    body: "Urutkan layanan yang paling besar menguras budget.",
    value: "Rp310K",
  },
  {
    title: "Tren jatuh tempo",
    body: "Lihat pola pembayaran beberapa bulan ke depan.",
    value: "6 bulan",
  },
  {
    title: "Status budget",
    body: "Aman, warning, atau sudah melewati batas bulanan.",
    value: "82%",
  },
];

const offlinePoints = [
  { icon: "📱", title: "Data di HP", desc: "SQLite lokal, tidak ada cloud" },
  {
    icon: "🔒",
    title: "Akun lokal",
    desc: "Per perangkat, tanpa login server",
  },
  { icon: "🌐", title: "100% Offline", desc: "Fitur inti tanpa internet" },
  { icon: "📤", title: "Export", desc: "Backup database kapan saja" },
  { icon: "🔐", title: "PIN Lock", desc: "Akses aman 4 digit" },
  { icon: "🛡️", title: "Privasi", desc: "Data tidak dikirim ke mana pun" },
];

const steps = [
  {
    title: "Download APK",
    body: "Install Langganinaja langsung di perangkat Android.",
  },
  {
    title: "Buat akun lokal",
    body: "Register di HP yang sama tanpa server dan tanpa akun cloud.",
  },
  {
    title: "Catat langganan",
    body: "Tambahkan layanan, cek dashboard, lalu tandai pembayaran saat sudah dibayar.",
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
          Download APK
        </a>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy">
            <p className="eyebrow">Full Offline Android App</p>
            <h1>Kelola semua langganan dari satu aplikasi offline.</h1>
            <p className="lead">
              Langganinaja bantu kamu mencatat biaya langganan, melihat total
              pengeluaran bulanan, memantau tanggal bayar, dan menyimpan riwayat
              pembayaran tanpa server.
            </p>
            <div className="hero-actions" aria-label="Aksi utama">
              <a className="button button-primary" href={downloadHref} download>
                Download APK
              </a>
              <a className="button button-secondary" href="#features">
                Lihat fitur
              </a>
            </div>
            <div className="trust-notes" aria-label="Ringkasan kepercayaan">
              <span>Data tersimpan lokal</span>
              <span>Tidak perlu backend</span>
              <span>Android APK</span>
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

        <section className="offline-block color-block block-navy" id="offline">
          <div className="offline-container">
            <div className="offline-header">
              <p className="eyebrow">Offline dan privat</p>
              <h2>Data tetap di perangkat kamu</h2>
              <p className="offline-lead">
                Tanpa koneksi internet, tanpa akun cloud, tanpa dashboard web.
              </p>
            </div>

            <div className="offline-cards">
              {offlinePoints.map((point) => (
                <div className="offline-card" key={point.title}>
                  <span className="offline-icon">{point.icon}</span>
                  <div className="offline-card-content">
                    <strong>{point.title}</strong>
                    <p>{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="offline-footnote">
              Semua data tersimpan di SQLite lokal. Ingat untuk export/backup
              sebelum pindah HP.
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
              <div className="chart-header">
                <span>Budget bulan ini</span>
                <strong>82%</strong>
              </div>
              <div className="bar-stack" aria-hidden="true">
                <span className="bar streaming" />
                <span className="bar tools" />
                <span className="bar utilities" />
              </div>
              <div className="legend">
                <span>Streaming</span>
                <span>Tools</span>
                <span>Utilitas</span>
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
              Download APK
            </a>
            <div className="download-meta">
              <span>Versi 1.0.0</span>
              <span>Android APK</span>
              <span>Frontend download tanpa login</span>
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
