let body = $response.body;
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
        const validKeys = Object.keys(themeData);
        return validKeys[Math.floor(Math.random() * validKeys.length)];
      };

      let selected = $argument.combo || '默认';
      
      if(selected === '随机') {
        selected = getSmartRandom();
        console.log(`[系统] 随机选择结果：${selected}`);
      }

      // 仅当非默认选择时修改数据
      if(selected !== '默认' && themeData[selected]) {
        obj.data.song_name = themeData[selected].song_name;    
        obj.data.song_singer = themeData[selected].song_singer;
        obj.data.cover = themeData[selected].cover;
        console.log(`已应用组合：${selected}`);
      } else {
        console.log("保持原始数据不变");
      }
    }
    $done({ body: JSON.stringify(obj) });
  } catch (e) {
    console.log("解析失败by胜天半子:", e);
    $done({ body });
  }
} else {
  $done({});
}
