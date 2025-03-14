[rewrite_local]
^https://www.hhlqilongzhu.cn/.*$ url script-response-body https://raw.githubusercontent.com/Qi-Ting-Zhang/repo/refs/heads/master/Scripts/hb180.js
[mitm] 
hostname = api.xingzhige.com , www.hhlqilongzhu.cn , api.dragonlongzhu.cn
