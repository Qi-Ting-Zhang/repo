#!name=黄白misaka点歌
#!desc=通过接口提供网易云{黄白}qq音乐{misaka}点歌服务。
#!openUrl= https://qi-ting-zhang.github.io/sileo/
#!author=祁厅长
#!homepage=https://github.com/Qi-Ting-Zhang/repo
#!icon=https://raw.githubusercontent.com/Qi-Ting-Zhang/repo/refs/heads/master/Icons/hb180_icon.png


[Rule]
AND,((DOMAIN-SUFFIX,dragonlongzhu.cn))

[Rewrite]
^https:\/\/api\.dragonlongzhu\.cn\/.* url script-response-body https://raw.githubusercontent.com/Qi-Ting-Zhang/repo/refs/heads/master/Scripts/mkqqyy.js,tag=Misaka点歌

[Rule]
AND,((DOMAIN-SUFFIX,xingzhige.com))

[Rewrite]
^https?:\/\/api\.xingzhige\.com\/API\/NetEase_CloudMusic\/\?name=.+&n=1 url script-response-body https://raw.githubusercontent.com/Qi-Ting-Zhang/repo/refs/heads/master/Scripts/hb178.js,tag=黄白178

[Rule]
AND,((DOMAIN-SUFFIX,hhlqilongzhu.cn))

[Rewrite]
^https?:\/\/www\.hhlqilongzhu\.cn\/API\/NetEase_CloudMusic\/\?name=.+&n=1 url script-response-body https://raw.githubusercontent.com/Qi-Ting-Zhang/repo/refs/heads/master/Scripts/hb180.js,tag=黄白180

[MitM]
hostname=www.hhlqilongzhu.cn , hostname=api.xingzhige.com , hostname=api.dragonlongzhu.cn
