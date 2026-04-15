const url = "https://opendata.cgu.edu.tw/api/get/chart/login/log";

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log("原始資料:", data); // 這是除錯關鍵！請在 Console 看資料長怎樣
        const dataList = document.getElementById('data-list');
        
        // 修正：有些 API 會把陣列包在 data 屬性裡
        const items = Array.isArray(data) ? data : data.data; 

        if (items) {
            dataList.innerHTML = ""; // 清空舊內容
            items.forEach(item => {
                const row = document.createElement('tr');
                // 請確認欄位名稱是否為 info (學年度), gender (性別), value (次數)
                row.innerHTML = `
                    <td>${item.info || item.year}</td>
                    <td>${item.gender}</td>
                    <td>${(item.value || item.count).toLocaleString()}</td>
                `;
                dataList.appendChild(row);
            });
        }
    })
    .catch(error => {
        console.error("抓取失敗:", error);
        document.getElementById('data-list').innerHTML = `<tr><td colspan="3" class="text-center text-danger">資料抓取失敗，請確認網路連線</td></tr>`;
    });
