#!name=黄白misaka点歌
#!desc=通过接口提供网易云{黄白}qq音乐{misaka}点歌服务。
#!openUrl= https://qi-ting-zhang.github.io/sileo/
#!author=祁厅长[https://h5.clewm.net/?url=qr61.cn%2FoMuCi0%2FqHe9QuO]
#!homepage=https://github.com/Qi-Ting-Zhang/repo
#!icon=https://raw.githubusercontent.com/Qi-Ting-Zhang/repo/refs/heads/master/Icons/hb180_icon.png


[Script]
http-response ^https?:\/\/www\.hhlqilongzhu\.cn\/API\/NetEase_CloudMusic\/\?name=.+&n=1 url script-response-body https://raw.githubusercontent.com/Qi-Ting-Zhang/repo/refs/heads/master/Scripts/hb180.js,tag=黄白180

http-response ^https?:\/\/api\.xingzhige\.com\/API\/NetEase_CloudMusic\/\?name=.+&n=1 url script-response-body https://raw.githubusercontent.com/Qi-Ting-Zhang/repo/refs/heads/master/Scripts/hb178.js,tag=黄白178

http-response ^https:\/\/api\.dragonlongzhu\.cn\/.* url script-response-body https://raw.githubusercontent.com/Qi-Ting-Zhang/repo/refs/heads/master/Scripts/mkqqyy.js,tag=Misaka点歌
http-response ^https:\/\/api\.dragonlongzhu\.cn\/api\/dg_shenmiMusic_SQ\.php\?msg=[^&]+&n=1&type=json$ -url script-response-body https://raw.githubusercontent.com/Qi-Ting-Zhang/repo/refs/heads/master/Scripts/hb178.js script-path=https://raw.githubusercontent.com/Qi-Ting-Zhang/repo/refs/heads/master/Scripts/hb178.js, timeout=60, tag=点歌
[MitM]
hostname=www.hhlqilongzhu.cn , hostname=api.xingzhige.com , hostname=api.dragonlongzhu.cn
