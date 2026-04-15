var container = document.getElementById('container');
var errorCount = 0; // 新增：連續打錯計數器

window.onload = function() {
    // 初始化產生字串
    add_new_chars(2); 
    container.focus();
};

window.addEventListener("keyup", function(e) {
    var str = container.textContent;
    
    // 檢查是否有字串且第一個字是否正確
    if (str.length > 0 && e.key === str[0]) {
        // 打對了：消除第一個字元，重置錯誤計數
        container.textContent = str.substring(1);
        errorCount = 0; 
        add_new_chars(Math.floor(Math.random() * 3) + 1); // 正常增加 1-3 個字
    } 
    else if (str.length > 0 && e.key !== "Shift" && e.key !== "Control" && e.key !== "Alt") {
        // 打錯了：增加錯誤計數
        errorCount++;
        console.log("連續打錯次數: " + errorCount);

        // 檢查是否連續打錯三次
        if (errorCount >= 3) {
            console.log("連續打錯三次！懲罰開始！");
            // 除了原本要增加的亂數，再額外增加 3 個亂數產生的字串
            add_new_chars(3); 
            errorCount = 0; // 觸發懲罰後重置計數
        }
    }
});

// 修改後的產生字串函式，可帶入要產生的字數
function add_new_chars(num) {
    var newStr = "";
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < num; i++) {
        newStr += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }
    container.textContent += newStr;
}