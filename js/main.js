document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    const loadMoreBtn = document.getElementById('load-more');
    const articleList = document.getElementById('article-list');

    // スムーズスクロール
    nav.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            e.preventDefault();
            const targetId = e.target.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({ 
                behavior: 'smooth' 
            });
        }
    });

    // 「もっと見る」ボタンの機能
    let articleCount = 4;
    loadMoreBtn.addEventListener('click', () => {
        const newArticles = [
            'Reactフックの深堀り：useEffectとuseCallback',
            'WebAssemblyとJavaScriptの連携方法',
            'JavaScriptのパフォーマンス最適化テクニック'
        ];

        newArticles.forEach(article => {
            if (articleCount < 7) {
                const li = document.createElement('li');
                li.textContent = article;
                articleList.appendChild(li);
                articleCount++;
            }
        });

        if (articleCount >= 7) {
            loadMoreBtn.style.display = 'none';
        }
    });
});