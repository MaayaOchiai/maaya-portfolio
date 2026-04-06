/* ================================
   設定エリア - ここを編集してください
   ================================ */

// YouTube動画ID（URLの ?v= 以降の部分）
const YOUTUBE_VIDEO_ID = 'rMu2Ism2OiU';

// ポートフォリオデータ
// category は 'pr' / 'btob' / 'interview' / 'media' / 'book' のいずれか
// url は記事リンク。なければ '#' のまま
const portfolioItems = [
    // 採用広報・社員インタビュー
    { title: "代表メッセージ、社員インタビュー", client: "ルーツ・スポーツ・ジャパン", category: "pr", url: "https://roots-sports.jp/journal/4107/", image: "https://roots-sports.jp/wordpress/wp-content/uploads/2025/09/Journal_nakashima_top-800x465.jpg" },
    { title: "中途採用サイト、公式note", client: "Sansan", category: "pr", url: "https://note.com/sansanjapan/n/nd9ecee4f3329", image: "https://assets.st-note.com/production/uploads/images/224453048/rectangle_large_type_2_d64e96399a981357005a0a83b3772c7f.jpeg?fit=bounds&quality=85&width=1280" },
    { title: "中途採用サイト", client: "（非公開）ウェルネスアパレル企業", category: "pr", url: "#" },
    { title: "新卒採用サイト", client: "（非公開）エネルギー系企業", category: "pr", url: "#" },

    // 企業オウンドメディア・コーポレート
    { title: "コーポレートサイト特集記事", client: "読売広告社", category: "btob", url: "https://www.yomiko.co.jp/special/6587/", image: "https://www.yomiko.co.jp/wp-content/uploads/2025/04/main_yomiko0313_086-scaled.jpg" },
    { title: "イベントレポート", client: "ファーストライトキャピタル", category: "btob", url: "https://firstlight-cap.com/insights/for-founders/hennge/", image: "https://firstlight-cap.com/wp-content/uploads/2025/10/3a62bc956fa6a8abcb44c6fb0803ef37.png" },
    { title: "公式note", client: "アルムナス", category: "btob", url: "https://note.com/alumnas/n/n72be8d32d734", image: "https://assets.st-note.com/production/uploads/images/183083007/rectangle_large_type_2_1cb7954e48af468fcfda2b1fb9f43c3a.png?fit=bounds&quality=85&width=1280" },
    { title: "サービス導入事例", client: "caroa", category: "btob", url: "https://caroa.jp/design/voice/pksha", image: "https://storage.googleapis.com/studio-cms-assets/projects/v7qGR2XrOL/s-1800x945_v-frms_webp_df51ed3e-4d95-4a0a-a3c2-8a4a29c54535.png" },
    { title: "サービス導入事例", client: "（非公開）SaaS企業", category: "btob", url: "#" },
    { title: "コーポレートサイト記事", client: "（非公開）プロフェッショナル人材紹介企業", category: "btob", url: "#" },
    { title: "顧客向けニュースレター", client: "（非公開）SIer", category: "btob", url: "#" },
    { title: "社内報メディア", client: "（非公開）通信系企業", category: "btob", url: "#" },

    // ビジネス系メディア
    { title: "取材記事、イベントレポート", client: "FastGrow", category: "media", url: "https://www.fastgrow.jp/articles/tokium-kurosaki-safie-sadoshima", image: "https://s3.ap-northeast-1.amazonaws.com/prod-fastgrow/uploads/articles/ogp/2443/ef8a23a2-bec9-4eab-a6bf-7c82766c3665.png" },
    { title: "取材記事、イベントレポート", client: "MarkeZine（翔泳社）", category: "media", url: "https://markezine.jp/article/detail/50324", image: "https://markezine.jp/static/images/article/50324/50324_ogp.jpg" },
    { title: "取材記事", client: "Web担当者Forum（インプレス）", category: "media", url: "https://webtan.impress.co.jp/e/2022/04/13/42560", image: "https://webtan.impress.co.jp/sites/default/files/styles/1200x630/public/images/article2016/faber_contents/2022/faber_contents28_suzuki_ogp.jpg?itok=5su-Oa6_" },
    { title: "取材記事、イベントレポート", client: "（非公開）事業共創メディア", category: "media", url: "#" },
    { title: "書籍紹介", client: "（非公開）企業変革メディア", category: "media", url: "#" },

    // 学校案内
    { title: "取材記事", client: "（非公開）首都圏の大学・高校", category: "school", url: "#" },

    // 書籍
    { title: "366日 アスリートの名言", client: "書籍", category: "book", url: "https://www.amazon.co.jp/dp/4866732628", image: "https://m.media-amazon.com/images/I/81vAV+0yZAS._SL1450_.jpg" },
    { title: "会社成長のカギは外国人材の活躍だ！ すぐに役立つ3つの基本と実例10", client: "書籍", category: "book", url: "https://www.amazon.co.jp/dp/4575314684", image: "https://m.media-amazon.com/images/I/819yOKRuJeL._SL1500_.jpg" },
    { title: "世界のお金図鑑 アジア・オセアニア編", client: "書籍", category: "book", url: "https://www.amazon.co.jp/dp/4811331621", image: "https://m.media-amazon.com/images/I/81O0rp0pkpL._SL1500_.jpg" },
];

/* ================================
   カテゴリラベルの対応表
   ================================ */
const categoryLabels = {
    pr:     "採用広報",
    btob:   "オウンドメディア",
    media:  "ビジネス系メディア",
    school: "学校案内",
    book:   "書籍",
};

/* ================================
   初期化
   ================================ */
document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initHamburger();
    initYouTube();
    renderPortfolio();
    initPortfolioFilter();
    fetchNoteArticles();
    initContactForm();
    initFaq();
    initScrollReveal();
});

/* ================================
   ヘッダー スクロール制御
   ================================ */
function initHeader() {
    const header = document.getElementById('header');
    const onScroll = () => {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}

/* ================================
   ハンバーガーメニュー
   ================================ */
function initHamburger() {
    const btn = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    if (!btn || !navLinks) return;

    btn.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        btn.classList.toggle('open', isOpen);
    });

    // ナビのリンクをクリックしたら閉じる
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            btn.classList.remove('open');
        });
    });
}

/* ================================
   YouTube 自己紹介動画
   ================================ */
function initYouTube() {
    if (!YOUTUBE_VIDEO_ID || YOUTUBE_VIDEO_ID === 'YOUR_VIDEO_ID') return;

    const placeholder = document.querySelector('.video-placeholder');
    const videoWrap = document.getElementById('video-wrap');
    const iframe = document.getElementById('youtube-embed');

    if (!videoWrap || !iframe) return;

    iframe.src = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`;
    if (placeholder) placeholder.style.display = 'none';
    videoWrap.style.display = 'block';
}

/* ================================
   ポートフォリオ レンダリング
   ================================ */
function renderPortfolio(filter = 'all') {
    const grid = document.getElementById('portfolio-grid');
    if (!grid) return;

    const filtered = filter === 'all'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === filter);

    const items = [
        ...filtered.filter(item => item.image),
        ...filtered.filter(item => !item.image),
    ];

    if (items.length === 0) {
        grid.innerHTML = '<p style="text-align:center;color:var(--text-muted);grid-column:1/-1;padding:40px 0;">該当する実績がありません</p>';
        return;
    }

    grid.innerHTML = items.map(item => {
        const label = categoryLabels[item.category] || item.category;
        const linkAttr = item.url && item.url !== '#'
            ? `href="${item.url}" target="_blank" rel="noopener noreferrer"`
            : '';
        const readMore = item.url && item.url !== '#'
            ? `<a class="portfolio-card-link" href="${item.url}" target="_blank" rel="noopener noreferrer">記事を見る →</a>`
            : '';

        const thumbHtml = item.image
            ? `<img class="portfolio-card-thumb" src="${item.image}" alt="${item.title}" loading="lazy">`
            : `<div class="portfolio-card-thumb portfolio-card-thumb--empty"></div>`;

        return `
        <div class="portfolio-card" data-category="${item.category}">
            ${item.image ? thumbHtml : ''}
            <div class="portfolio-card-body">
                <span class="portfolio-card-cat">${label}</span>
                <h3 class="portfolio-card-title">${item.title}</h3>
                <p class="portfolio-card-meta">${item.client}</p>
                ${readMore}
            </div>
        </div>`;
    }).join('');
}

/* ================================
   ポートフォリオ フィルター
   ================================ */
function initPortfolioFilter() {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderPortfolio(btn.dataset.filter);
        });
    });
}

/* ================================
   note 最新記事取得（RSS）
   ================================ */
const noteArticles = [
    {
        title: "個人事業主ライターですが、お取引先の皆さまにアンケートを取ってみました📝",
        url: "https://note.com/maaya_frescobol/n/n765bea9fa35b",
        image: "https://assets.st-note.com/production/uploads/images/138000281/47b3b1bcb1231d3289dd2df4eeabd409.png",
    },
    {
        title: "ここ最近のお仕事ニーズ＆これから携わりたいこと／ビジネスコンテンツ全般やります",
        url: "https://note.com/maaya_frescobol/n/n3b0021243c1c",
        image: "https://assets.st-note.com/production/uploads/images/130098084/17270ae2dbfb3d1758f8c8e14f1f83ef.png",
    },
    {
        title: "ライターへの依頼フロー／採用・マーケ・ブランディングなどを目的としたコンテンツ制作をお考えの企業様向け",
        url: "https://note.com/maaya_frescobol/n/n680f2098a60b",
        image: "https://assets.st-note.com/production/uploads/images/128359665/98b0ae4d7384e66009ba1382aedf47d9.png",
    },
];

function fetchNoteArticles() {
    const grid = document.getElementById('note-articles');
    if (!grid) return;

    grid.innerHTML = noteArticles.map(item => `
        <div class="note-card">
            <a href="${item.url}" target="_blank" rel="noopener noreferrer">
                <img class="note-card-thumb" src="${item.image}" alt="${escapeHtml(item.title)}" loading="lazy">
            </a>
            <div class="note-card-body">
                <a class="note-card-title" href="${item.url}" target="_blank" rel="noopener noreferrer">
                    ${escapeHtml(item.title)}
                </a>
            </div>
        </div>`
    ).join('');
}

function escapeHtml(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

/* ================================
   お問い合わせフォーム
   ================================ */
function initContactForm() {
    const form = document.getElementById('contact-form');
    const successMsg = document.getElementById('form-success');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        const action = form.getAttribute('action');
        if (action.includes('YOUR_FORM_ID')) {
            // Formspree未設定の場合はデモ動作
            e.preventDefault();
            alert('フォームを送信するには、FormspreeのフォームIDを設定してください（script.jsのコメント参照）');
            return;
        }

        // Formspree が設定済みの場合は非同期送信
        e.preventDefault();
        const submitBtn = form.querySelector('[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.textContent = '送信中...';

        try {
            const formData = new FormData(form);
            const res = await fetch(action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (res.ok) {
                form.reset();
                if (successMsg) successMsg.style.display = 'block';
                submitBtn.style.display = 'none';
            } else {
                throw new Error('送信エラー');
            }
        } catch {
            alert('送信に失敗しました。時間をおいて再度お試しください。');
            submitBtn.disabled = false;
            submitBtn.textContent = '送信する';
        }
    });
}

/* ================================
   FAQ アコーディオン
   ================================ */
function initFaq() {
    document.querySelectorAll('.faq-q').forEach(btn => {
        btn.addEventListener('click', () => {
            const answer = btn.nextElementSibling;
            const isOpen = btn.classList.contains('open');
            btn.classList.toggle('open', !isOpen);
            answer.classList.toggle('open', !isOpen);
        });
    });
}

/* ================================
   スクロールアニメーション
   ================================ */
function initScrollReveal() {
    const targets = document.querySelectorAll(
        '.service-card, .portfolio-card, .note-card, .about-grid, .about-video'
    );

    if (!('IntersectionObserver' in window)) return;

    targets.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, i * 60);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    targets.forEach(el => observer.observe(el));
}
