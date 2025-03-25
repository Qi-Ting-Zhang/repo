const themeData = {
  默认: {
    song_name: "默认歌曲名称",
    song_singer: "默认歌手", 
    cover: "https://default.com/cover.jpg"
  },
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
        },
};

const getRandomCombo = () => {
  // 排除
  const validKeys = Object.keys(themeData).filter(k => !['默认','随机'].includes(k));
  return validKeys[Math.floor(Math.random() * validKeys.length)];
};

if(typeof $response !== 'undefined') {
  try {
    let body = $response.body;
    let obj = JSON.parse(body);
    let selected = $argument.combo;
    
    if(selected === '随机') {
      selected = getRandomCombo();
      console.log(`随机选中组合: ${selected}`);
    }

    if(themeData[selected]) {
      obj.title = themeData[selected].song_name; 
      obj.singer = themeData[selected].song_singer;
      obj.cover = themeData[selected].cover;
    }
    
    $done({ body: JSON.stringify(obj) });
  } catch (e) {
    console.log(`处理异常: ${e}`);
    $done({});
  }
}
