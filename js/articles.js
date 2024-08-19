document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('h2, h3');
    
    // ヘッダーにホバー効果を追加
    headers.forEach(header => {
        header.addEventListener('mouseover', () => {
            header.style.color = '#3498db';
        });
        header.addEventListener('mouseout', () => {
            header.style.color = '#2c3e50';
        });
    });

    // コードブロックにコピー機能を追加
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(block => {
        const copyButton = document.createElement('button');
        copyButton.textContent = 'コピー';
        copyButton.style.position = 'absolute';
        copyButton.style.right = '10px';
        copyButton.style.top = '10px';
        
        block.parentNode.style.position = 'relative';
        block.parentNode.appendChild(copyButton);

        copyButton.addEventListener('click', () => {
            navigator.clipboard.writeText(block.textContent).then(() => {
                copyButton.textContent = 'コピーしました！';
                setTimeout(() => {
                    copyButton.textContent = 'コピー';
                }, 2000);
            });
        });
    });
});