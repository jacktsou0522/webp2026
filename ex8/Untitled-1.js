// 使用 cors-anywhere 代理伺服器 (開發測試常用)
var openUrl = "https://cors-anywhere.herokuapp.com/https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6";

// 修正重點：使用 DOMContentLoaded 確保 HTML 載入完畢
document.addEventListener('DOMContentLoaded', function() {
    fetchData(); 
});

async function fetchData() {
    var tableBody = document.getElementById('table-body');
    
    // 防錯機制：如果還是抓不到，在 Console 噴出警告，不要讓程式死掉
    if (!tableBody) {
        console.error("錯誤：找不到 id 為 'table-body' 的元素，請檢查 HTML 結構！");
        return;
    }

    try {
        const response = await fetch(openUrl);
        const data = await response.json();

        tableBody.innerHTML = ""; // 這次保證抓得到目標了！

        data.slice(0, 10).forEach(item => {
            var info = (item.showInfo && item.showInfo.length > 0) ? item.showInfo[0] : {};
            var row = `
                <tr>
                    <td>${item.title}</td>
                    <td>${info.location || "無資訊"}</td>
                    <td>${info.price || "免費"}</td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });
    } catch (error) {
        console.error("抓取失敗:", error);
        tableBody.innerHTML = "<tr><td colspan='3'>連線失敗</td></tr>";
    }
}
