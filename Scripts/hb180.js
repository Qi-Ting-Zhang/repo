let body = $response.body; 
let headers = $response.headers;  

if (body) {
  try {
    let obj = JSON.parse(body);

    if (obj && obj.singer) {
      const songCombinations = [
        {
          song_name: "恭喜发财，大吉大利",
          song_singer: " ",
          cover: "http://fmc-75014.picgzc.qpic.cn/consult_viewer_pic__16e6b048-a625-481f-ac4f-174642e8051f_1741840724601.jpg"
        }
      ];

      let randomCombination = songCombinations[0];  // 使用第一个歌曲组合

      obj.title = randomCombination.song_name;
      obj.singer = randomCombination.song_singer;
      obj.cover = randomCombination.cover;

      let updatedBody = JSON.stringify(obj);

      $done({ body: updatedBody, headers: headers });

    } else {
      $done({ body: body, headers: headers });
    }

  } catch (e) {
    console.log("by祁厅长", e);
    $done({ body: body, headers: headers });
  }
} else {
  $done({});
}