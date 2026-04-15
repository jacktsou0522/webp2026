// 定義資料來源的 URL (可能是政府的 Open Data API)
const apiUrl = 'https://api.example.com/exhibitions'; 

async function fetchData() {
    try {
        // 使用 fetch 發送 Request (請求)
        const response = await fetch(apiUrl);
        
        // 將回傳的 Response (回應) 轉換為 JSON 格式
        const data = await response.json();
        
        // 呼叫渲染函數
        renderTable(data);
    } catch (error) {
        console.error("資料抓取失敗 (Fetch Error):", error);
    }
}

function renderTable(items) {
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = ''; // 清空舊資料

    items.forEach(item => {
        // 建立新的 Table Row (表格列)
        const row = `
            <tr>
                <td>${item.title}</td>
                <td>${item.location}</td>
                <td>${item.price || '免費'}</td>
            </tr>
        `;
        // 插入到 DOM (Document Object Model) 中
        tableBody.innerHTML += row;
    });
}

// 執行函數
fetchData();
