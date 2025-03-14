 #!name=点歌卡片
 #!desc=黄白选网易，misaka选qq
 #!openUrl= https://qi-ting-zhang.github.io/sileo/
 #!author=祁厅长[https://h5.clewm.net/?url=qr61.cn%2FoMuCi0%2FqHe9QuO]
 #!homepage=https://github.com/Qi-Ting-Zhang/repo
 #!icon=http://fmc-75014.picgzc.qpic.cn/consult_viewer_pic__e4ce1ddd-821c-4264-85fd-02059d93efbb_1741954438747.jpg

[Script]

http-response ^https?:\/\/www\.hhlqilongzhu\.cn\/API\/NetEase_CloudMusic\/\?name=.+&n=1 script-path=https://raw.githubusercontent.com/Qi-Ting-Zhang/repo/refs/heads/master/Scripts/hb180.js, requires-body=true, timeout=60, tag=黄白

http-response ^https?:\/\/api\.xingzhige\.com\/API\/NetEase_CloudMusic\/\?name=.+&n=1 script-path=https://raw.githubusercontent.com/Qi-Ting-Zhang/repo/refs/heads/master/Scripts/hb178.js, requires-body=true, timeout=60, tag=黄白

http-response ^https:\/\/api\.dragonlongzhu\.cn\/.* script-path=https://raw.githubusercontent.com/Qi-Ting-Zhang/repo/refs/heads/master/Scripts/mkqqyy.js, requires-body=true, timeout=60, tag=misaka

[MitM]
hostname = api.xingzhige.com , www.hhlqilongzhu.cn , api.dragonlongzhu.cn