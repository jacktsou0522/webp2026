var container = document.getElementById('container');

// 頁面載入時，亂數產生 0-2 個字元 [cite: 1478, 1816]
window.onload = function() {
    var initialChars = "";
    var count = Math.floor(Math.random() * 3); // 0, 1, 2
    for (var i = 0; i < count; i++) {
        initialChars += String.fromCharCode(Math.floor(Math.random() * 26) + 97); // a-z
    }
    container.textContent = initialChars;
    container.focus(); // 自動聚焦
};

// 監聽鍵盤彈起事件 [cite: 1784, 1840]
window.addEventListener("keyup", function(e) {
    var str = container.textContent;
    
    // 檢查輸入是否與第一個字元相同 [cite: 1843]
    if (str.length > 0 && e.key === str[0]) {
        // 一樣的話，消除第一個字元 [cite: 1848]
        container.textContent = str.substring(1);
        
        // 每次成功消除後，亂數增加 1-3 個字元 [cite: 1823, 1855]
        add_new_chars();
    }
    
    // 額外功能：按 Escape 清空 [cite: 1786]
    if (e.key == 'Escape') {
        container.textContent = "";
    }
});

function add_new_chars() {
    var newChars = "";
    var count = Math.floor(Math.random() * 3) + 1; // 1, 2, 3 [cite: 1823]
    for (var i = 0; i < count; i++) {
        newChars += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }
    container.textContent += newChars;
}
