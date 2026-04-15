// 使用 Fetch API 獲取資料
const url = "https://opendata.cgu.edu.tw/api/get/chart/login/log";

fetch(url)
    .then(response => {
        // 確認回應是否成功
        if (!response.ok) throw new Error("網路連線錯誤");
        return response.json(); // 解析 JSON 資料
    })
    .then(data => {
        // 抓取 HTML 裡的 tbody 容器
        const dataList = document.getElementById('data-list');
        
        // 遍歷資料並動態生成表格列
        // 假設 API 格式為陣列，每個物件包含學年度、性別、次數等
        data.forEach(item => {
            const row = document.createElement('tr');
            
            // 根據 API 回傳的欄位名稱調整 (例如: item.year, item.gender, item.count)
            row.innerHTML = `
                <td>${item.year}</td>
                <td>${item.gender}</td>
                <td>${item.count.toLocaleString()}</td>
            `;
            
            dataList.appendChild(row); // 將列加入表格
        });
    })
    .catch(error => {
        console.error("抓取資料失敗:", error);
        document.getElementById('data-list').innerHTML = `<tr><td colspan="3" class="text-center text-danger">無法載入資料</td></tr>`;
    });