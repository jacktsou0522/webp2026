var openUrl = "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6";

function fetchData() {
    fetch(openUrl)
        .then(response => response.json()) // 解析 JSON
        .then(data => {
            var tableBody = document.getElementById('table-body');
            tableBody.innerHTML = ""; // 先清空

            data.forEach(item => {
                // 取得第一筆場次資訊 (因為一場展覽可能有多個時間地點)
                var info = item.showInfo[0] || {}; 
                
                var row = `
                    <tr>
                        <td>${item.title}</td>
                        <td>${info.location || "暫無地點"}</td>
                        <td>${info.price || "免費/請洽官網"}</td>
                    </tr>
                `;
                tableBody.innerHTML += row;
            });
        })
        .catch(error => {
            console.error("抓取失敗：", error);
        });
}

// 執行
fetchData();
