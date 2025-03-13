let body = $response.body;
if (body) {
  try {
    let obj = JSON.parse(body);
    if (obj && obj.data) {
      const songCombinations = [
        {
            song_name: "恭喜发财，大吉大利",
            song_singer: " ",
            cover: "http://fmc-75014.picgzc.qpic.cn/consult_viewer_pic__16e6b048-a625-481f-ac4f-174642e8051f_1741840724601.jpg"
          }
      ];


      obj.data.song_name = randomCombination.song_name;
      obj.data.song_singer = randomCombination.song_singer;
      obj.data.cover = randomCombination.cover;

    }
    $done({body: JSON.stringify(obj)});
  } catch (e) {
    console.log("解析失败by胜天半子:", e);
    $done({body});
  }
} else {
  $done({});
}