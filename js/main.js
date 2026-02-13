// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handling
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;

    if (name && email && message) {
        alert('謝謝您的訊息！我們會盡快回覆您。');
        this.reset();
    } else {
        alert('請填寫所有欄位');
    }
});

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .portfolio-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

console.log('Kan Studio loaded successfully!');

// Start Create Button Function
function startCreate() {
    alert('🚀 開始創造功能即將推出！\n\n感謝您的興趣，我們正在努力開發中...');

    // 這裡可以添加更多功能，例如：
    // - 開啟創造頁面
    // - 顯示創造選單
    // - 開啟創造模式等
}

// AdSense 廣告偵測 - 更準確的偵測邏輯
window.addEventListener('load', function() {
    setTimeout(function() {
        const adWrapper = document.querySelector('#ad-wrapper ins.adsbygoogle');
        const adPlaceholder = document.querySelector('#ad-placeholder');

        // 檢查是否有真正的 AdSense iframe (來自 googleads.g.doubleclick.net)
        if (adWrapper && adPlaceholder) {
            const adIframe = adWrapper.querySelector('iframe');

            // 只有當 iframe 來自 Google Ads 時才隱藏佔位符
            const hasRealAd = adIframe && (
                adIframe.src.includes('googleads.g.doubleclick.net') ||
                adIframe.src.includes('pagead2.googlesyndication.com')
            );

            if (hasRealAd) {
                adPlaceholder.style.display = 'none';
                console.log('✅ AdSense 廣告載入成功！');
            } else {
                console.log('⏳ AdSense 廣告未載入（正常現象：GitHub Pages 或未審核）');
                console.log('💡 佔位符會繼續顯示，直到 AdSense 審核通過');
            }
        }
    }, 2000); // 延遲 2 秒偵測，給廣告時間載入
});
