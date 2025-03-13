[rewrite_local]
//misaka点歌
^https:\/\/api\.dragonlongzhu\.cn\/.* url script-response-body https://raw.githubusercontent.com/Qi-Ting-Zhang/repo/refs/heads/master/Scripts/mkqqyy.js
//黄白178
^https:\/\/api\.xingzhige.\com/.* url script-response-body https://raw\.githubusercontent\.com/Qi-Ting-Zhang/repo/refs/heads/master/Scripts/hb178.js
//黄白180
^https:\/\/www\.hhlqilongzhu\.cn/.* url script-response-body https://raw.githubusercontent.com/Qi-Ting-Zhang/repo/refs/heads/master/Scripts/hb180.js
[mitm] 
hostname = api.xingzhige.com , www.hhlqilongzhu.cn , api.dragonlongzhu.cn