[rewrite_local]

//黄白178点歌
^https://api.xingzhige.com/.*$ url script-response-body https://raw.githubusercontent.com/Qi-Ting-Zhang/repo/refs/heads/master/Scripts/hb178.js
//黄白180点歌
^https://www.hhlqilongzhu.cn/.*$ -url script-response-body https://raw.githubusercontent.com/Qi-Ting-Zhang/repo/refs/heads/master/Scripts/hb180.js

[mitm] 
hostname = api.xingzhige.com , www.hhlqilongzhu.cn