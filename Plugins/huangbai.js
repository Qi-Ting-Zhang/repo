 #!name=点歌卡片
 #!desc=黄白选网易，misaka选qq。
 #!openUrl= https://qi-ting-zhang.github.io/sileo/
 #!author=祁厅长[https://h5.clewm.net/?url=qr61.cn%2FoMuCi0%2FqHe9QuO],圈叉复制这个链接添加重写[https://raw.githubusercontent.com/Qi-Ting-Zhang/repo/refs/heads/master/Scripts/hb.js]
 #!homepage=https://github.com/Qi-Ting-Zhang/repo/blob/master/README.md
 #!icon=http://fmc-75014.picgzc.qpic.cn/consult_viewer_pic__e4ce1ddd-821c-4264-85fd-02059d93efbb_1741954438747.jpg


[Argument]
combo = select,"默认","随机","红包","转账","祁厅",tag=卡片选择,desc=随机模式会自动轮换不同组合

[Script]
http-response ^https://www.hhlqilongzhu.cn/.*$ script-path=https://raw.githubusercontent.com/Qi-Ting-Zhang/repo/refs/heads/master/Plugins/hb180.js,requires-body=true,argument=[{combo}],tag=黄白180

http-response ^https?:\/\/api\.xingzhige\.com\/API\/NetEase_CloudMusic\/\?name=.+&n=1 script-path=https://raw.githubusercontent.com/Qi-Ting-Zhang/repo/refs/heads/master/Plugins/hb178.js, requires-body=true,argument=[{combo}], tag=黄白

http-response ^https:\/\/api\.dragonlongzhu\.cn\/.* script-path=https://raw.githubusercontent.com/Qi-Ting-Zhang/repo/refs/heads/master/Plugins/mkqqyy.js, requires-body=true, argument=[{combo}], tag=misaka

[MitM]
hostname = api.xingzhige.com , www.hhlqilongzhu.cn , api.dragonlongzhu.cn