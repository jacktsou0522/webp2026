async function fetchData() {
    var openUrl = "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6";
    var tableBody = document.getElementById('table-body');

    try {
        // 發送 Request (請求)
        const response = await fetch(openUrl);
        if (!response.ok) throw new Error("API 連線失敗");
        
        const data = await response.json();
        renderTable(data);

    } catch (error) {
        console.warn("無法取得 API 資料，改用模擬資料顯示...", error);
        // 如果 API 失敗，顯示一組測試資料，確認你的 Table (表格) 運作正常
        const mockData = [
            { title: "測試展覽 A", showInfo: [{ location: "台中科博館", price: "100元" }] },
            { title: "測試展覽 B", showInfo: [{ location: "台北美術館", price: "免費" }] }
        ];
        renderTable(mockData);
    }
}

function renderTable(data) {
    var tableBody = document.getElementById('table-body');
    tableBody.innerHTML = ""; // Clear (清空)

    data.slice(0, 10).forEach(item => {
        var info = (item.showInfo && item.showInfo.length > 0) ? item.showInfo[0] : {};
        var row = `
            <tr>
                <td>${item.title}</td>
                <td>${info.location || "尚無資訊"}</td>
                <td>${info.price || "請洽官網"}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

fetchData();
