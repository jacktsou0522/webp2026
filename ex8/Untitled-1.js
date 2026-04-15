var url = "https://opendata.cgu.edu.tw/api/get/chart/login/log";

fetch(url)
    .then(res => res.json())
    .then(data => {
        // 助教的資料結構通常在 data.list 或直接是 data
        var list = data.list || data; 
        var str = "";
        
        list.forEach(function(item) {
            // 依照助教範本格式組合成 tr 標籤
            str += `<tr>
                <td>${item.info}</td>
                <td>${item.gender}</td>
                <td>${item.value}</td>
            </tr>`;
        });
        
        // 填入 tbody
        document.getElementById("data-list").innerHTML = str;
    })
    .catch(err => console.error("抓取失敗:", err));
