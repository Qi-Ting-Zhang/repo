let body = $response.body;
let headers = $response.headers;

if (body) {
  try {
    let obj = JSON.parse(body);

    if (obj && obj.data) {
      // 组合数据库
      const themeData = {
        红包: {
          song_name: "恭喜发财,大吉大利！",
          song_singer: "领取红包",
          cover: "http://fmc-75014.picgzc.qpic.cn/consult_viewer_pic__934190a1-8b9f-4eea-b8ee-04fd82211d31_1741878745602.jpg"
        },
        转账: {
          song_name: "¥100000000000.00",
          song_singer: "请收款",
          cover: "http://fmc-75014.picgzc.qpic.cn/consult_viewer_pic__fa355cc3-8c5c-4384-98e6-3d6ed3c30b2b_1741915061774.jpg"
        },
        祁厅: {
          song_name: "贾队长",
          song_singer: "有疑问或建议加我开小灶",
          cover: "http://fmc-75014.picgzc.qpic.cn/consult_viewer_pic__e848962b-295f-4b44-a1da-c2cdd7b7f0b5_1742942017584.jpg"
        }
      };

      const getSmartRandom = () => {
        const history = JSON.parse($persistentStore.read("comboHistory") || "[]");
        const candidates = Object.keys(themeData).filter(k => !history.includes(k));
        
        // 当所有组合都使用过后重置历史
        return candidates.length > 0 
          ? candidates[Math.floor(Math.random() * candidates.length)]
          : (() => {
              $persistentStore.write("[]", "comboHistory");
              return '红包';
            })();
      };


      let selected = $argument.combo;
      
      if(selected === '随机') {
        selected = getSmartRandom();
        console.log(`[智能选择] 本次随机结果：${selected}`);
        $persistentStore.write(
          JSON.stringify([...JSON.parse($persistentStore.read("comboHistory") || "[]"), selected].slice(-2)),
          "comboHistory"
        );
      }

      // 仅当有效选择时修改数据
      if(selected && selected !== '默认' && themeData[selected]) {

        obj.data.songname = themeData[selected].song_name;  
        obj.data.name = themeData[selected].song_singer;    
        obj.data.cover = themeData[selected].cover;         
        
        console.log(`已应用组合：${selected}`);
      } else {
        console.log("保持原始数据不变");
        // 记录原始数据用于调试
        $persistentStore.write(JSON.stringify(obj.data), "originalData");
      }

      $done({ body: JSON.stringify(obj), headers: headers });
    } else {
      $done({ body: body, headers: headers });
    }
  } catch (e) {
    console.log("贾队长温馨提示错误:", e);
    $notification.post("脚本故障", `错误详情：${e.message}`, "");
    $done({ body: body, headers: headers });
  }
} else {
  $done({});
}
