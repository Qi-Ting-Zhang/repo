let body = $response.body; 
let headers = $response.headers;  

if (body) {
  try {
    let obj = JSON.parse(body);

    if (obj && obj.singer) {
      
      const songCombination = [
        {
          song_name: "恭喜发财,大吉大利！",
          song_singer: "领取红包",
          cover: "http://fmc-75014.picgzc.qpic.cn/consult_viewer_pic__934190a1-8b9f-4eea-b8ee-04fd82211d31_1741878745602.jpg"
        }
      ];

      // 更新歌曲信息
      obj.title = songCombination[0].song_name; // 使用索引访问
      obj.singer = songCombination[0].song_singer; // 使用索引访问
      obj.cover = songCombination[0].cover; // 使用索引访问

      let updatedBody = JSON.stringify(obj);

      $done({ body: updatedBody, headers: headers });

    } else {
      $done({ body: body, headers: headers });
    }

  } catch (e) {
    console.log("by 祁厅长180", e);
    $done({ body: body, headers: headers });
  }
} else {
  $done({});
}