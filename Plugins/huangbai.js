#!name=Misaka点歌
#!desc=通过Misaka点歌API提供歌曲推荐服务。
#!openUrl=https://github.com/Qi-Ting-Zhang/repo
#!author=祁厅长

[Rule]
AND,((DOMAIN-SUFFIX,dragonlongzhu.cn))

[Rewrite]
^https:\/\/api\.dragonlongzhu\.cn\/.* url script-response-body https://raw.githubusercontent.com/Qi-Ting-Zhang/repo/refs/heads/master/Scripts/mkqqyy.js,tag=Misaka点歌

[MitM]
hostname=api.dragonlongzhu.cn

#!name=黄白178
#!desc=通过黄白178接口提供网易云点歌服务。
#!openUrl=https://github.com/Qi-Ting-Zhang/repo
#!author=Qi-Ting-Zhang

[Rule]
AND,((DOMAIN-SUFFIX,xingzhige.com))

[Rewrite]
^https?:\/\/api\.xingzhige\.com\/API\/NetEase_CloudMusic\/\?name=.+&n=1 url script-response-body https://raw.githubusercontent.com/Qi-Ting-Zhang/repo/refs/heads/master/Scripts/hb178.js,tag=黄白178

[MitM]
hostname=api.xingzhige.com

#!name=黄白180
#!desc=通过黄白180接口提供网易云点歌服务。
#!openUrl=https://github.com/Qi-Ting-Zhang/repo
#!author=Qi-Ting-Zhang

[Rule]
AND,((DOMAIN-SUFFIX,hhlqilongzhu.cn))

[Rewrite]
^https?:\/\/www\.hhlqilongzhu\.cn\/API\/NetEase_CloudMusic\/\?name=.+&n=1 url script-response-body https://raw.githubusercontent.com/Qi-Ting-Zhang/repo/refs/heads/master/Scripts/hb180.js,tag=黄白180

[MitM]
hostname=www.hhlqilongzhu.cn
