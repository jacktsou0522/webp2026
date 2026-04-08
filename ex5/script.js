var count = 1; // 初始化計數器 [cite: 1403]

function addfunction() {
    // 1. 創建按鈕元素 [cite: 1328, 1405]
    var btn = document.createElement("BUTTON");
    
    // 2. 設定內容與 ID [cite: 1406, 1407]
    btn.innerHTML = `CLICK ME (${count})`;
    btn.setAttribute("id", "btn_" + count++);
    
    // 3. 加入 Bootstrap 樣式 [cite: 1408]
    btn.setAttribute("class", "btn btn-outline-danger m-1");
    
    // 4. 加入點擊事件 (addEventListener) [cite: 1629]
    btn.addEventListener("click", function(e) {
        e.target.innerHTML = e.target.id + " CLICKED!";
        console.log("onclick1");
    });
    
    // 5. 渲染到畫面上 [cite: 1410]
    document.body.appendChild(btn);
}

function delfunction() {
    // 找到最後一個生成的按鈕並刪除 [cite: 1387, 1391]
    var btn_list = document.getElementsByTagName("BUTTON");
    if (btn_list.length > 2) { // 避開前兩個功能按鈕
        var btn = btn_list.item(btn_list.length - 1);
        document.body.removeChild(btn);
        count--; // 計數器退回
    }
}
