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

// AdSense 廣告偵測 - 廣告載入後隱藏佔位符
window.addEventListener('load', function() {
    setTimeout(function() {
        const adWrapper = document.querySelector('#ad-wrapper ins.adsbygoogle');
        const adPlaceholder = document.querySelector('#ad-placeholder');

        // 檢查廣告是否載入成功（height > 0 或有 iframe）
        if (adWrapper && adPlaceholder) {
            const adHeight = adWrapper.offsetHeight;
            const hasIframe = adWrapper.querySelector('iframe');

            // 如果廣告載入成功，隱藏佔位符；否則保留佔位符
            if (adHeight > 0 || hasIframe || adWrapper.innerHTML.trim() !== '') {
                adPlaceholder.style.display = 'none';
                console.log('AdSense 廣告載入成功！');
            } else {
                console.log('AdSense 廣告未載入（本地環境正常現象）');
            }
        }
    }, 2000); // 延遲 2 秒偵測，給廣告時間載入
});
