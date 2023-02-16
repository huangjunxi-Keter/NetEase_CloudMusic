// pages/video/video.js

import request from '../../utils/request'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        videoGroupList: [],
        navId: null,
        reserveVideoList: {
            "msg": "发现了更多新内容",
            "code": 200,
            "hasmore": true,
            "datas": [{
                    "type": 1,
                    "displayed": false,
                    "alg": "onlineHotGroup",
                    "extAlg": null,
                    "data": {
                        "alg": "onlineHotGroup",
                        "scm": "1.music-video-timeline.video_timeline.video.181017.-295043608",
                        "threadId": "R_VI_62_A24C8DF6283CD4356D86F92652989573",
                        "coverUrl": "https://p1.music.126.net/ixCc5NdWsaMnXBhi0ZENpg==/109951165050596015.jpg",
                        "height": 720,
                        "width": 1694,
                        "title": "2018 Destr0yer 作曲_削除(sakuzyo) 演唱_Nikki Simmons",
                        "description": "",
                        "commentCount": 86,
                        "shareCount": 76,
                        "resolutions": [{
                                "resolution": 240,
                                "size": 16244790
                            },
                            {
                                "resolution": 480,
                                "size": 25628976
                            },
                            {
                                "resolution": 720,
                                "size": 30046804
                            }
                        ],
                        "creator": {
                            "defaultAvatar": false,
                            "province": 420000,
                            "authStatus": 0,
                            "followed": false,
                            "avatarUrl": "http://p1.music.126.net/oEuvgZJXIFHsa6rOgsJDfA==/109951165711524083.jpg",
                            "accountStatus": 0,
                            "gender": 2,
                            "city": 420100,
                            "birthday": 1018627200000,
                            "userId": 1617779867,
                            "userType": 0,
                            "nickname": "F-Forristsis_as_霜落",
                            "signature": "有点冷呢，来杯咖啡？",
                            "description": "",
                            "detailDescription": "",
                            "avatarImgId": 109951165711524080,
                            "backgroundImgId": 109951165711522620,
                            "backgroundUrl": "http://p1.music.126.net/dC5-99ELOWUNVUtPpY6Hzg==/109951165711522616.jpg",
                            "authority": 0,
                            "mutual": false,
                            "expertTags": null,
                            "experts": null,
                            "djStatus": 0,
                            "vipType": 0,
                            "remarkName": null,
                            "avatarImgIdStr": "109951165711524083",
                            "backgroundImgIdStr": "109951165711522616"
                        },
                        "urlInfo": null,
                        "videoGroup": [{
                                "id": 1105,
                                "name": "最佳饭制",
                                "alg": null
                            },
                            {
                                "id": 9104,
                                "name": "电子",
                                "alg": null
                            },
                            {
                                "id": 4104,
                                "name": "电音",
                                "alg": null
                            },
                            {
                                "id": 5100,
                                "name": "音乐",
                                "alg": null
                            },
                            {
                                "id": 14212,
                                "name": "欧美音乐",
                                "alg": null
                            },
                            {
                                "id": 15241,
                                "name": "饭制",
                                "alg": null
                            },
                            {
                                "id": 23116,
                                "name": "音乐推荐",
                                "alg": null
                            }
                        ],
                        "previewUrl": "http://vodkgeyttp9.vod.126.net/vodkgeyttp8/preview_3025218398_IQGrzkzj.webp?wsSecret=2ffa72b6e44e0f618249265323cecd9b&wsTime=1676566099",
                        "previewDurationms": 4000,
                        "hasRelatedGameAd": false,
                        "markTypes": null,
                        "relateSong": [{
                            "name": "Destr0yer",
                            "id": 1403449766,
                            "pst": 0,
                            "t": 0,
                            "ar": [{
                                    "id": 12073277,
                                    "name": "削除",
                                    "tns": [],
                                    "alias": []
                                },
                                {
                                    "id": 29785818,
                                    "name": "Nikki Simmons",
                                    "tns": [],
                                    "alias": []
                                }
                            ],
                            "alia": [],
                            "pop": 90,
                            "st": 0,
                            "rt": "",
                            "fee": 0,
                            "v": 8,
                            "crbt": null,
                            "cf": "",
                            "al": {
                                "id": 83327894,
                                "name": "Destr0yer",
                                "picUrl": "http://p3.music.126.net/3jE-6EXSL3wLp3hVURfCyw==/109951164487140323.jpg",
                                "tns": [],
                                "pic_str": "109951164487140323",
                                "pic": 109951164487140320
                            },
                            "dt": 180741,
                            "h": null,
                            "m": null,
                            "l": {
                                "br": 128000,
                                "fid": 0,
                                "size": 2892321,
                                "vd": -64556
                            },
                            "a": null,
                            "cd": "01",
                            "no": 0,
                            "rtUrl": null,
                            "ftype": 0,
                            "rtUrls": [],
                            "djId": 0,
                            "copyright": 0,
                            "s_id": 0,
                            "mst": 9,
                            "cp": 0,
                            "mv": 14299953,
                            "rtype": 0,
                            "rurl": null,
                            "publishTime": 0,
                            "privilege": {
                                "id": 1403449766,
                                "fee": 0,
                                "payed": 0,
                                "st": 0,
                                "pl": 128000,
                                "dl": 128000,
                                "sp": 7,
                                "cp": 1,
                                "subp": 1,
                                "cs": false,
                                "maxbr": 128000,
                                "fl": 128000,
                                "toast": false,
                                "flag": 128,
                                "preSell": false
                            }
                        }],
                        "relatedInfo": null,
                        "videoUserLiveInfo": null,
                        "vid": "A24C8DF6283CD4356D86F92652989573",
                        "durationms": 183329,
                        "playTime": 60047,
                        "praisedCount": 1033,
                        "praised": false,
                        "subscribed": false
                    }
                },
                {
                    "type": 1,
                    "displayed": false,
                    "alg": "onlineHotGroup",
                    "extAlg": null,
                    "data": {
                        "alg": "onlineHotGroup",
                        "scm": "1.music-video-timeline.video_timeline.video.181017.-295043608",
                        "threadId": "R_VI_62_13F63BCA47CC3594DA2F94B45AD2003E",
                        "coverUrl": "https://p1.music.126.net/_K1EwIf6otZPdZFMnUm7tA==/109951164738445550.jpg",
                        "height": 1080,
                        "width": 1920,
                        "title": "【文豪野犬全员】ECHO",
                        "description": "文豪x文豪野犬全员向手书w\n\n原曲：Crusher-P《ECHO》\n原作：朝雾卡夫卡《文豪野犬》\n人设：春河35\n主唱：墨清弦；和声：乐正龙牙\n词/调/绘/视：洛阳雨寒",
                        "commentCount": 161,
                        "shareCount": 306,
                        "resolutions": [{
                                "resolution": 240,
                                "size": 15811824
                            },
                            {
                                "resolution": 480,
                                "size": 23184352
                            },
                            {
                                "resolution": 720,
                                "size": 31749405
                            },
                            {
                                "resolution": 1080,
                                "size": 32034823
                            }
                        ],
                        "creator": {
                            "defaultAvatar": false,
                            "province": 510000,
                            "authStatus": 1,
                            "followed": false,
                            "avatarUrl": "http://p1.music.126.net/SA7MTZyq2z7zyWaWYjL4uw==/109951165626844467.jpg",
                            "accountStatus": 0,
                            "gender": 2,
                            "city": 510100,
                            "birthday": 965836800000,
                            "userId": 360487537,
                            "userType": 4,
                            "nickname": "雨寒Ester",
                            "signature": "我有一座花园",
                            "description": "",
                            "detailDescription": "",
                            "avatarImgId": 109951165626844460,
                            "backgroundImgId": 109951166185109310,
                            "backgroundUrl": "http://p1.music.126.net/K6FBepC2E51Z9op-MnGUCg==/109951166185109314.jpg",
                            "authority": 0,
                            "mutual": false,
                            "expertTags": null,
                            "experts": null,
                            "djStatus": 10,
                            "vipType": 0,
                            "remarkName": null,
                            "avatarImgIdStr": "109951165626844467",
                            "backgroundImgIdStr": "109951166185109314"
                        },
                        "urlInfo": null,
                        "videoGroup": [{
                                "id": 60100,
                                "name": "翻唱",
                                "alg": null
                            },
                            {
                                "id": 9104,
                                "name": "电子",
                                "alg": null
                            },
                            {
                                "id": 4104,
                                "name": "电音",
                                "alg": null
                            },
                            {
                                "id": 5100,
                                "name": "音乐",
                                "alg": null
                            },
                            {
                                "id": 3102,
                                "name": "二次元",
                                "alg": null
                            }
                        ],
                        "previewUrl": "http://vodkgeyttp9.vod.126.net/vodkgeyttp8/preview_2915731549_YI6cffPd.webp?wsSecret=70168d9c43ae01699e24a717f56dc49e&wsTime=1676566099",
                        "previewDurationms": 4000,
                        "hasRelatedGameAd": false,
                        "markTypes": null,
                        "relateSong": [{
                            "name": "【文豪野犬】ECHO",
                            "id": 1424475152,
                            "pst": 0,
                            "t": 0,
                            "ar": [{
                                    "id": 34368408,
                                    "name": "雨寒Ester",
                                    "tns": [],
                                    "alias": []
                                },
                                {
                                    "id": 0,
                                    "name": "墨清弦",
                                    "tns": [],
                                    "alias": []
                                }
                            ],
                            "alia": [],
                            "pop": 65,
                            "st": 0,
                            "rt": "",
                            "fee": 0,
                            "v": 18,
                            "crbt": null,
                            "cf": "",
                            "al": {
                                "id": 85598174,
                                "name": "【文豪野犬】ECHO",
                                "picUrl": "http://p3.music.126.net/ihcD4nVBTGvaDlmjS1Vm8A==/109951164722046494.jpg",
                                "tns": [],
                                "pic_str": "109951164722046494",
                                "pic": 109951164722046500
                            },
                            "dt": 230668,
                            "h": {
                                "br": 320000,
                                "fid": 0,
                                "size": 9229485,
                                "vd": -13785
                            },
                            "m": {
                                "br": 192000,
                                "fid": 0,
                                "size": 5537709,
                                "vd": -11179
                            },
                            "l": {
                                "br": 128000,
                                "fid": 0,
                                "size": 3691821,
                                "vd": -9428
                            },
                            "a": null,
                            "cd": "01",
                            "no": 1,
                            "rtUrl": null,
                            "ftype": 0,
                            "rtUrls": [],
                            "djId": 0,
                            "copyright": 0,
                            "s_id": 0,
                            "mst": 9,
                            "cp": 0,
                            "mv": 0,
                            "rtype": 0,
                            "rurl": null,
                            "publishTime": 0,
                            "privilege": {
                                "id": 1424475152,
                                "fee": 0,
                                "payed": 0,
                                "st": 0,
                                "pl": 999000,
                                "dl": 999000,
                                "sp": 7,
                                "cp": 1,
                                "subp": 1,
                                "cs": false,
                                "maxbr": 999000,
                                "fl": 320000,
                                "toast": false,
                                "flag": 128,
                                "preSell": false
                            }
                        }],
                        "relatedInfo": null,
                        "videoUserLiveInfo": null,
                        "vid": "13F63BCA47CC3594DA2F94B45AD2003E",
                        "durationms": 230143,
                        "playTime": 135143,
                        "praisedCount": 3629,
                        "praised": false,
                        "subscribed": false
                    }
                },
                {
                    "type": 1,
                    "displayed": false,
                    "alg": "onlineHotGroup",
                    "extAlg": null,
                    "data": {
                        "alg": "onlineHotGroup",
                        "scm": "1.music-video-timeline.video_timeline.video.181017.-295043608",
                        "threadId": "R_VI_62_99CA8AEA9C188FC6D306E4851D4B6F83",
                        "coverUrl": "https://p1.music.126.net/xqiX3dYqPUlWYQvswbAobw==/109951165131484445.jpg",
                        "height": 1080,
                        "width": 1920,
                        "title": "求你们别再“左右抖胸跳舞”了！能尊重点原曲吗？",
                        "description": "求你们别再“左右抖胸跳舞”了！能尊重点原曲吗？\n风正在吹过来\n攀娘举牌热曲\n",
                        "commentCount": 404,
                        "shareCount": 417,
                        "resolutions": [{
                                "resolution": 240,
                                "size": 25950881
                            },
                            {
                                "resolution": 480,
                                "size": 43575967
                            },
                            {
                                "resolution": 720,
                                "size": 63511556
                            },
                            {
                                "resolution": 1080,
                                "size": 118099580
                            }
                        ],
                        "creator": {
                            "defaultAvatar": false,
                            "province": 220000,
                            "authStatus": 0,
                            "followed": false,
                            "avatarUrl": "http://p1.music.126.net/Ni4qH-x7_kzo57R5KXBL2g==/109951164380182392.jpg",
                            "accountStatus": 0,
                            "gender": 0,
                            "city": 220300,
                            "birthday": -2209017600000,
                            "userId": 1729016175,
                            "userType": 204,
                            "nickname": "音乐-音小六",
                            "signature": "用最短是时间，让你快速了解当下热门BGM，这是我的宗旨",
                            "description": "",
                            "detailDescription": "",
                            "avatarImgId": 109951164380182400,
                            "backgroundImgId": 109951162868126480,
                            "backgroundUrl": "http://p1.music.126.net/_f8R60U9mZ42sSNvdPn2sQ==/109951162868126486.jpg",
                            "authority": 0,
                            "mutual": false,
                            "expertTags": null,
                            "experts": {
                                "1": "视频达人"
                            },
                            "djStatus": 0,
                            "vipType": 0,
                            "remarkName": null,
                            "avatarImgIdStr": "109951164380182392",
                            "backgroundImgIdStr": "109951162868126486"
                        },
                        "urlInfo": null,
                        "videoGroup": [{
                                "id": 1101,
                                "name": "舞蹈",
                                "alg": null
                            },
                            {
                                "id": 9104,
                                "name": "电子",
                                "alg": null
                            },
                            {
                                "id": 4104,
                                "name": "电音",
                                "alg": null
                            },
                            {
                                "id": 5100,
                                "name": "音乐",
                                "alg": null
                            },
                            {
                                "id": 14212,
                                "name": "欧美音乐",
                                "alg": null
                            },
                            {
                                "id": 92105,
                                "name": "BLACKPINK",
                                "alg": null
                            },
                            {
                                "id": 23116,
                                "name": "音乐推荐",
                                "alg": null
                            }
                        ],
                        "previewUrl": "http://vodkgeyttp9.vod.126.net/vodkgeyttp8/preview_3055187383_mh2EfJt6.webp?wsSecret=69038cad090333b50aedc35ffd293f10&wsTime=1676566099",
                        "previewDurationms": 4000,
                        "hasRelatedGameAd": false,
                        "markTypes": null,
                        "relateSong": [{
                            "name": "风正在吹过来（DJ版）",
                            "id": 1444691544,
                            "pst": 0,
                            "t": 0,
                            "ar": [{
                                "id": 34616284,
                                "name": "琰琰",
                                "tns": [],
                                "alias": []
                            }],
                            "alia": [],
                            "pop": 5,
                            "st": 0,
                            "rt": "",
                            "fee": 8,
                            "v": 16,
                            "crbt": null,
                            "cf": "",
                            "al": {
                                "id": 88770704,
                                "name": "关于我爱过你",
                                "picUrl": "http://p3.music.126.net/ojyRNJjGGN5SdWCpkvO6rw==/109951164950936730.jpg",
                                "tns": [],
                                "pic_str": "109951164950936730",
                                "pic": 109951164950936740
                            },
                            "dt": 212638,
                            "h": {
                                "br": 320000,
                                "fid": 0,
                                "size": 8508648,
                                "vd": -32052
                            },
                            "m": {
                                "br": 192000,
                                "fid": 0,
                                "size": 5105206,
                                "vd": -29520
                            },
                            "l": {
                                "br": 128000,
                                "fid": 0,
                                "size": 3403485,
                                "vd": -27892
                            },
                            "a": null,
                            "cd": "01",
                            "no": 1,
                            "rtUrl": null,
                            "ftype": 0,
                            "rtUrls": [],
                            "djId": 0,
                            "copyright": 0,
                            "s_id": 0,
                            "mst": 9,
                            "cp": 0,
                            "mv": 0,
                            "rtype": 0,
                            "rurl": null,
                            "publishTime": 0,
                            "privilege": {
                                "id": 1444691544,
                                "fee": 8,
                                "payed": 1,
                                "st": 0,
                                "pl": 999000,
                                "dl": 999000,
                                "sp": 7,
                                "cp": 1,
                                "subp": 1,
                                "cs": false,
                                "maxbr": 999000,
                                "fl": 128000,
                                "toast": false,
                                "flag": 258,
                                "preSell": false
                            }
                        }],
                        "relatedInfo": null,
                        "videoUserLiveInfo": null,
                        "vid": "99CA8AEA9C188FC6D306E4851D4B6F83",
                        "durationms": 259690,
                        "playTime": 2740561,
                        "praisedCount": 13106,
                        "praised": false,
                        "subscribed": false
                    }
                },
                {
                    "type": 1,
                    "displayed": false,
                    "alg": "onlineHotGroup",
                    "extAlg": null,
                    "data": {
                        "alg": "onlineHotGroup",
                        "scm": "1.music-video-timeline.video_timeline.video.181017.-295043608",
                        "threadId": "R_VI_62_C71119707717DAE53FF2A746EDE7FB64",
                        "coverUrl": "https://p1.music.126.net/774PxRhJE1xCPlU7epmGeQ==/109951163572743245.jpg",
                        "height": 720,
                        "width": 1280,
                        "title": "小哥架子鼓炫酷演奏《Don't Let Me Down》这节奏实在是太棒了！",
                        "description": "国外小哥架子鼓炫酷演奏The Chainsmokers - Don't Let Me Down，这节奏实在是太棒了！",
                        "commentCount": 131,
                        "shareCount": 750,
                        "resolutions": [{
                                "resolution": 240,
                                "size": 26157577
                            },
                            {
                                "resolution": 480,
                                "size": 37403662
                            },
                            {
                                "resolution": 720,
                                "size": 59820422
                            }
                        ],
                        "creator": {
                            "defaultAvatar": false,
                            "province": 1000000,
                            "authStatus": 0,
                            "followed": false,
                            "avatarUrl": "http://p1.music.126.net/0fqTn4VpqjyX7iqUe41xhA==/109951166086321221.jpg",
                            "accountStatus": 0,
                            "gender": 0,
                            "city": 1010000,
                            "birthday": 883929600000,
                            "userId": 347267113,
                            "userType": 207,
                            "nickname": "Dennnnnniel",
                            "signature": ":(",
                            "description": "",
                            "detailDescription": "",
                            "avatarImgId": 109951166086321220,
                            "backgroundImgId": 109951166285210370,
                            "backgroundUrl": "http://p1.music.126.net/B_krR6XmlOPkkwAFIh51CA==/109951166285210360.jpg",
                            "authority": 0,
                            "mutual": false,
                            "expertTags": [
                                "电子",
                                "欧美"
                            ],
                            "experts": {
                                "1": "音乐视频达人",
                                "2": "电子|欧美音乐资讯达人"
                            },
                            "djStatus": 10,
                            "vipType": 11,
                            "remarkName": null,
                            "avatarImgIdStr": "109951166086321221",
                            "backgroundImgIdStr": "109951166285210360"
                        },
                        "urlInfo": null,
                        "videoGroup": [{
                                "id": 4103,
                                "name": "演奏",
                                "alg": null
                            },
                            {
                                "id": 9104,
                                "name": "电子",
                                "alg": null
                            },
                            {
                                "id": 4104,
                                "name": "电音",
                                "alg": null
                            },
                            {
                                "id": 5100,
                                "name": "音乐",
                                "alg": null
                            },
                            {
                                "id": 14242,
                                "name": "伤感",
                                "alg": null
                            },
                            {
                                "id": 13251,
                                "name": "The Chainsmokers",
                                "alg": null
                            },
                            {
                                "id": 16131,
                                "name": "英文",
                                "alg": null
                            },
                            {
                                "id": 23116,
                                "name": "音乐推荐",
                                "alg": null
                            },
                            {
                                "id": 13213,
                                "name": "架子鼓",
                                "alg": null
                            }
                        ],
                        "previewUrl": "http://vodkgeyttp9.vod.126.net/vodkgeyttp8/preview_70602177_WSaZrhZ9.webp?wsSecret=e989db6e43665d55dd19f8d51dc54494&wsTime=1676566099",
                        "previewDurationms": 4000,
                        "hasRelatedGameAd": false,
                        "markTypes": null,
                        "relateSong": [{
                            "name": "Don't Let Me Down",
                            "id": 402070862,
                            "pst": 0,
                            "t": 0,
                            "ar": [{
                                    "id": 893484,
                                    "name": "The Chainsmokers",
                                    "tns": [],
                                    "alias": []
                                },
                                {
                                    "id": 1081186,
                                    "name": "Daya",
                                    "tns": [],
                                    "alias": []
                                }
                            ],
                            "alia": [],
                            "pop": 100,
                            "st": 0,
                            "rt": null,
                            "fee": 1,
                            "v": 40,
                            "crbt": null,
                            "cf": "",
                            "al": {
                                "id": 34477274,
                                "name": "Don't Let Me Down",
                                "picUrl": "http://p3.music.126.net/J_ah6CaUIuH6w1v8khrcHQ==/109951165973655958.jpg",
                                "tns": [],
                                "pic_str": "109951165973655958",
                                "pic": 109951165973655950
                            },
                            "dt": 208373,
                            "h": {
                                "br": 320000,
                                "fid": 0,
                                "size": 8337284,
                                "vd": -61022
                            },
                            "m": {
                                "br": 192000,
                                "fid": 0,
                                "size": 5002387,
                                "vd": -58515
                            },
                            "l": {
                                "br": 128000,
                                "fid": 0,
                                "size": 3334939,
                                "vd": -57120
                            },
                            "a": null,
                            "cd": "1",
                            "no": 1,
                            "rtUrl": null,
                            "ftype": 0,
                            "rtUrls": [],
                            "djId": 0,
                            "copyright": 1,
                            "s_id": 0,
                            "mst": 9,
                            "cp": 7001,
                            "mv": 5323117,
                            "rtype": 0,
                            "rurl": null,
                            "publishTime": 1454601600007,
                            "privilege": {
                                "id": 402070862,
                                "fee": 1,
                                "payed": 1,
                                "st": 0,
                                "pl": 999000,
                                "dl": 999000,
                                "sp": 7,
                                "cp": 1,
                                "subp": 1,
                                "cs": false,
                                "maxbr": 999000,
                                "fl": 0,
                                "toast": false,
                                "flag": 4,
                                "preSell": false
                            }
                        }],
                        "relatedInfo": null,
                        "videoUserLiveInfo": null,
                        "vid": "C71119707717DAE53FF2A746EDE7FB64",
                        "durationms": 221564,
                        "playTime": 328375,
                        "praisedCount": 2092,
                        "praised": false,
                        "subscribed": false
                    }
                },
                {
                    "type": 1,
                    "displayed": false,
                    "alg": "onlineHotGroup",
                    "extAlg": null,
                    "data": {
                        "alg": "onlineHotGroup",
                        "scm": "1.music-video-timeline.video_timeline.video.181017.-295043608",
                        "threadId": "R_VI_62_5663EFED603932CA58C9042EC48300D7",
                        "coverUrl": "https://p1.music.126.net/uci0dj1ZT5Z8AtPVw7RHUg==/109951163572709702.jpg",
                        "height": 720,
                        "width": 1280,
                        "title": "失频Lost Frequencies北京表演热单《Reality》！",
                        "description": null,
                        "commentCount": 132,
                        "shareCount": 93,
                        "resolutions": [{
                                "resolution": 240,
                                "size": 24458046
                            },
                            {
                                "resolution": 480,
                                "size": 38441708
                            },
                            {
                                "resolution": 720,
                                "size": 45025395
                            }
                        ],
                        "creator": {
                            "defaultAvatar": false,
                            "province": 110000,
                            "authStatus": 0,
                            "followed": false,
                            "avatarUrl": "http://p1.music.126.net/9174T57KzffxFMdpe4-T0Q==/3167692999633198.jpg",
                            "accountStatus": 0,
                            "gender": 1,
                            "city": 110105,
                            "birthday": 430934400000,
                            "userId": 743030,
                            "userType": 0,
                            "nickname": "小猪男孩",
                            "signature": "现场∮，摄影☞，围脖☎，美食♨ ～四大皆控✪我的Instagram账号㊣:xznh_boy",
                            "description": "",
                            "detailDescription": "",
                            "avatarImgId": 3167692999633198,
                            "backgroundImgId": 2002210674180201,
                            "backgroundUrl": "http://p1.music.126.net/o3G7lWrGBQAvSRt3UuApTw==/2002210674180201.jpg",
                            "authority": 0,
                            "mutual": false,
                            "expertTags": null,
                            "experts": null,
                            "djStatus": 10,
                            "vipType": 11,
                            "remarkName": null,
                            "avatarImgIdStr": "3167692999633198",
                            "backgroundImgIdStr": "2002210674180201"
                        },
                        "urlInfo": null,
                        "videoGroup": [{
                                "id": 58100,
                                "name": "现场",
                                "alg": null
                            },
                            {
                                "id": 4103,
                                "name": "演奏",
                                "alg": null
                            },
                            {
                                "id": 1100,
                                "name": "音乐现场",
                                "alg": null
                            },
                            {
                                "id": 9104,
                                "name": "电子",
                                "alg": null
                            },
                            {
                                "id": 4104,
                                "name": "电音",
                                "alg": null
                            },
                            {
                                "id": 5100,
                                "name": "音乐",
                                "alg": null
                            },
                            {
                                "id": 16131,
                                "name": "英文",
                                "alg": null
                            },
                            {
                                "id": 13164,
                                "name": "快乐",
                                "alg": null
                            }
                        ],
                        "previewUrl": "http://vodkgeyttp9.vod.126.net/cloudmusic/preview_44037585_QgpuyipQ.webp?wsSecret=b63fd02efe29ddee2ef94293b527a205&wsTime=1676566099",
                        "previewDurationms": 4000,
                        "hasRelatedGameAd": false,
                        "markTypes": null,
                        "relateSong": [{
                            "name": "Reality",
                            "id": 32835377,
                            "pst": 0,
                            "t": 0,
                            "ar": [{
                                    "id": 1039114,
                                    "name": "Lost Frequencies",
                                    "tns": [],
                                    "alias": []
                                },
                                {
                                    "id": 12132070,
                                    "name": "Janieck",
                                    "tns": [],
                                    "alias": []
                                }
                            ],
                            "alia": [],
                            "pop": 100,
                            "st": 0,
                            "rt": null,
                            "fee": 8,
                            "v": 53,
                            "crbt": null,
                            "cf": "",
                            "al": {
                                "id": 3161845,
                                "name": "Reality",
                                "picUrl": "http://p3.music.126.net/Skx2Bu4PMKm4AG2mRkjnlw==/109951168250530265.jpg",
                                "tns": [],
                                "pic_str": "109951168250530265",
                                "pic": 109951168250530270
                            },
                            "dt": 159480,
                            "h": {
                                "br": 320000,
                                "fid": 0,
                                "size": 6382280,
                                "vd": -33962
                            },
                            "m": {
                                "br": 192000,
                                "fid": 0,
                                "size": 3829386,
                                "vd": -31340
                            },
                            "l": {
                                "br": 128000,
                                "fid": 0,
                                "size": 2552938,
                                "vd": -29604
                            },
                            "a": null,
                            "cd": "01",
                            "no": 1,
                            "rtUrl": null,
                            "ftype": 0,
                            "rtUrls": [],
                            "djId": 0,
                            "copyright": 2,
                            "s_id": 0,
                            "mst": 9,
                            "cp": 665010,
                            "mv": 419296,
                            "rtype": 0,
                            "rurl": null,
                            "publishTime": 1432252800000,
                            "privilege": {
                                "id": 32835377,
                                "fee": 8,
                                "payed": 1,
                                "st": 0,
                                "pl": 999000,
                                "dl": 999000,
                                "sp": 7,
                                "cp": 1,
                                "subp": 1,
                                "cs": false,
                                "maxbr": 999000,
                                "fl": 128000,
                                "toast": false,
                                "flag": 5,
                                "preSell": false
                            }
                        }],
                        "relatedInfo": null,
                        "videoUserLiveInfo": null,
                        "vid": "5663EFED603932CA58C9042EC48300D7",
                        "durationms": 234267,
                        "playTime": 277531,
                        "praisedCount": 960,
                        "praised": false,
                        "subscribed": false
                    }
                },
                {
                    "type": 1,
                    "displayed": false,
                    "alg": "onlineHotGroup",
                    "extAlg": null,
                    "data": {
                        "alg": "onlineHotGroup",
                        "scm": "1.music-video-timeline.video_timeline.video.181017.-295043608",
                        "threadId": "R_VI_62_D5735D6E71F0C7D34A7FF7FC3879A9DF",
                        "coverUrl": "https://p1.music.126.net/c9LpI3XMOvYgkcZtvuCjXA==/109951163573601406.jpg",
                        "height": 720,
                        "width": 1280,
                        "title": "《All Falls Down》听一遍就忍不住抖腿了，开口酥啊！",
                        "description": "Alan Walker ft. Noah Cyrus 《All Falls Down》听一遍就忍不住抖腿了，开口酥啊！",
                        "commentCount": 1618,
                        "shareCount": 3743,
                        "resolutions": [{
                                "resolution": 240,
                                "size": 27621374
                            },
                            {
                                "resolution": 480,
                                "size": 38168053
                            },
                            {
                                "resolution": 720,
                                "size": 58553557
                            }
                        ],
                        "creator": {
                            "defaultAvatar": false,
                            "province": 1000000,
                            "authStatus": 0,
                            "followed": false,
                            "avatarUrl": "http://p1.music.126.net/VPGeeVnQ0jLp4hK9kj0EPg==/18897306347016806.jpg",
                            "accountStatus": 0,
                            "gender": 0,
                            "city": 1002400,
                            "birthday": -2209017600000,
                            "userId": 449979212,
                            "userType": 207,
                            "nickname": "全球潮音乐",
                            "signature": "有时候音乐是陪我熬过那些夜晚的唯一朋友。",
                            "description": "",
                            "detailDescription": "",
                            "avatarImgId": 18897306347016810,
                            "backgroundImgId": 18987466300481468,
                            "backgroundUrl": "http://p1.music.126.net/qx6U5-1LCeMT9t7RLV7r1A==/18987466300481468.jpg",
                            "authority": 0,
                            "mutual": false,
                            "expertTags": null,
                            "experts": {
                                "1": "音乐视频达人",
                                "2": "华语音乐|欧美音乐资讯达人"
                            },
                            "djStatus": 0,
                            "vipType": 0,
                            "remarkName": null,
                            "avatarImgIdStr": "18897306347016806",
                            "backgroundImgIdStr": "18987466300481468"
                        },
                        "urlInfo": null,
                        "videoGroup": [{
                                "id": 58100,
                                "name": "现场",
                                "alg": null
                            },
                            {
                                "id": 57106,
                                "name": "欧美现场",
                                "alg": null
                            },
                            {
                                "id": 57108,
                                "name": "流行现场",
                                "alg": null
                            },
                            {
                                "id": 59108,
                                "name": "巡演现场",
                                "alg": null
                            },
                            {
                                "id": 9136,
                                "name": "艾兰·沃克",
                                "alg": null
                            },
                            {
                                "id": 1100,
                                "name": "音乐现场",
                                "alg": null
                            },
                            {
                                "id": 9104,
                                "name": "电子",
                                "alg": null
                            },
                            {
                                "id": 4104,
                                "name": "电音",
                                "alg": null
                            },
                            {
                                "id": 5100,
                                "name": "音乐",
                                "alg": null
                            },
                            {
                                "id": 15249,
                                "name": "Alan Walker",
                                "alg": null
                            }
                        ],
                        "previewUrl": "http://vodkgeyttp9.vod.126.net/vodkgeyttp8/preview_1624893373_C8JJYsFL.webp?wsSecret=5b0125025301d42894ad63e1e450d09c&wsTime=1676566099",
                        "previewDurationms": 4000,
                        "hasRelatedGameAd": false,
                        "markTypes": null,
                        "relateSong": [{
                            "name": "All Falls Down",
                            "id": 515453363,
                            "pst": 0,
                            "t": 0,
                            "ar": [{
                                    "id": 1045123,
                                    "name": "Alan Walker",
                                    "tns": [],
                                    "alias": []
                                },
                                {
                                    "id": 12175271,
                                    "name": "Noah Cyrus",
                                    "tns": [],
                                    "alias": []
                                },
                                {
                                    "id": 840929,
                                    "name": "Digital Farm Animals",
                                    "tns": [],
                                    "alias": []
                                },
                                {
                                    "id": 12647253,
                                    "name": "Juliander",
                                    "tns": [],
                                    "alias": []
                                }
                            ],
                            "alia": [],
                            "pop": 100,
                            "st": 0,
                            "rt": null,
                            "fee": 8,
                            "v": 138,
                            "crbt": null,
                            "cf": "",
                            "al": {
                                "id": 36682047,
                                "name": "All Falls Down",
                                "picUrl": "http://p3.music.126.net/LSNp2g4GIUaQBT1yvOq6XQ==/109951165983599325.jpg",
                                "tns": [],
                                "pic_str": "109951165983599325",
                                "pic": 109951165983599330
                            },
                            "dt": 199157,
                            "h": {
                                "br": 320002,
                                "fid": 0,
                                "size": 7967391,
                                "vd": -66081
                            },
                            "m": {
                                "br": 192002,
                                "fid": 0,
                                "size": 4780452,
                                "vd": -63792
                            },
                            "l": {
                                "br": 128002,
                                "fid": 0,
                                "size": 3186982,
                                "vd": -62581
                            },
                            "a": null,
                            "cd": "1",
                            "no": 1,
                            "rtUrl": null,
                            "ftype": 0,
                            "rtUrls": [],
                            "djId": 0,
                            "copyright": 1,
                            "s_id": 0,
                            "mst": 9,
                            "cp": 7001,
                            "mv": 5694021,
                            "rtype": 0,
                            "rurl": null,
                            "publishTime": 1509033600000,
                            "tns": [
                                "一切陨落"
                            ],
                            "privilege": {
                                "id": 515453363,
                                "fee": 8,
                                "payed": 1,
                                "st": 0,
                                "pl": 320000,
                                "dl": 320000,
                                "sp": 7,
                                "cp": 1,
                                "subp": 1,
                                "cs": false,
                                "maxbr": 320000,
                                "fl": 128000,
                                "toast": false,
                                "flag": 4,
                                "preSell": false
                            }
                        }],
                        "relatedInfo": null,
                        "videoUserLiveInfo": null,
                        "vid": "D5735D6E71F0C7D34A7FF7FC3879A9DF",
                        "durationms": 195954,
                        "playTime": 4949415,
                        "praisedCount": 30787,
                        "praised": false,
                        "subscribed": false
                    }
                },
                {
                    "type": 1,
                    "displayed": false,
                    "alg": "onlineHotGroup",
                    "extAlg": null,
                    "data": {
                        "alg": "onlineHotGroup",
                        "scm": "1.music-video-timeline.video_timeline.video.181017.-295043608",
                        "threadId": "R_VI_62_725296F1DC521E5C5A4508478ADE16EF",
                        "coverUrl": "https://p1.music.126.net/YzqgvtnQqQGzmBeIiPjMyQ==/109951163572662942.jpg",
                        "height": 540,
                        "width": 1276,
                        "title": "The Best Of Armin Only",
                        "description": "Here is a 19-minute recap of The Best Of Armin Only! When I saw this video for the first time, it felt like I was right there in the heat of the moment. \n\nI hope you will enjoy the recap as much as I do 😃! ",
                        "commentCount": 31,
                        "shareCount": 44,
                        "resolutions": [{
                                "resolution": 240,
                                "size": 3231942
                            },
                            {
                                "resolution": 480,
                                "size": 4591495
                            }
                        ],
                        "creator": {
                            "defaultAvatar": false,
                            "province": 1000000,
                            "authStatus": 1,
                            "followed": false,
                            "avatarUrl": "http://p1.music.126.net/2I2D0MwSKg4U5Ua_vSzQvQ==/109951168226409461.jpg",
                            "accountStatus": 0,
                            "gender": 1,
                            "city": 1003000,
                            "birthday": -2209017600000,
                            "userId": 351218439,
                            "userType": 2,
                            "nickname": "ArminvanBuurenOfficial",
                            "signature": "曾获格莱美奖提名的世界著名DJ和音乐制作人，与Duncan Laurence合作的新单《Feel Something》现已发行。",
                            "description": "荷兰DJ巨星，Armada创办人之一",
                            "detailDescription": "荷兰DJ巨星，Armada创办人之一",
                            "avatarImgId": 109951168226409460,
                            "backgroundImgId": 109951164427488000,
                            "backgroundUrl": "http://p1.music.126.net/kNBA6mHI6K_CHhoQUvdzxA==/109951164427488005.jpg",
                            "authority": 0,
                            "mutual": false,
                            "expertTags": null,
                            "experts": null,
                            "djStatus": 10,
                            "vipType": 0,
                            "remarkName": null,
                            "avatarImgIdStr": "109951168226409461",
                            "backgroundImgIdStr": "109951164427488005"
                        },
                        "urlInfo": null,
                        "videoGroup": [{
                                "id": 58100,
                                "name": "现场",
                                "alg": null
                            },
                            {
                                "id": 1100,
                                "name": "音乐现场",
                                "alg": null
                            },
                            {
                                "id": 9104,
                                "name": "电子",
                                "alg": null
                            },
                            {
                                "id": 4104,
                                "name": "电音",
                                "alg": null
                            },
                            {
                                "id": 5100,
                                "name": "音乐",
                                "alg": null
                            },
                            {
                                "id": 25137,
                                "name": "音乐资讯",
                                "alg": null
                            },
                            {
                                "id": 16131,
                                "name": "英文",
                                "alg": null
                            },
                            {
                                "id": 13164,
                                "name": "快乐",
                                "alg": null
                            },
                            {
                                "id": 13182,
                                "name": "Armin van Buuren",
                                "alg": null
                            }
                        ],
                        "previewUrl": "http://vodkgeyttp9.vod.126.net/vodkgeyttp8/preview_25559956_t1HMVf0K.webp?wsSecret=6ed7117acd41f66a0af903fcc2f3a514&wsTime=1676566099",
                        "previewDurationms": 4000,
                        "hasRelatedGameAd": false,
                        "markTypes": [
                            109
                        ],
                        "relateSong": [{
                                "name": "Freefall",
                                "id": 36024771,
                                "pst": 0,
                                "t": 0,
                                "ar": [{
                                        "id": 27621,
                                        "name": "Armin van Buuren",
                                        "tns": [],
                                        "alias": []
                                    },
                                    {
                                        "id": 1156096,
                                        "name": "BullySongs",
                                        "tns": [],
                                        "alias": []
                                    }
                                ],
                                "alia": [],
                                "pop": 85,
                                "st": 0,
                                "rt": null,
                                "fee": 8,
                                "v": 72,
                                "crbt": null,
                                "cf": "",
                                "al": {
                                    "id": 3317064,
                                    "name": "Embrace",
                                    "picUrl": "http://p3.music.126.net/go_cn3fJ7k3vE-X72J0d7A==/109951163177881148.jpg",
                                    "tns": [],
                                    "pic_str": "109951163177881148",
                                    "pic": 109951163177881150
                                },
                                "dt": 199026,
                                "h": {
                                    "br": 320000,
                                    "fid": 0,
                                    "size": 7963211,
                                    "vd": -7799
                                },
                                "m": {
                                    "br": 192000,
                                    "fid": 0,
                                    "size": 4777944,
                                    "vd": -5200
                                },
                                "l": {
                                    "br": 128000,
                                    "fid": 0,
                                    "size": 3185311,
                                    "vd": -4100
                                },
                                "a": null,
                                "cd": "1",
                                "no": 11,
                                "rtUrl": null,
                                "ftype": 0,
                                "rtUrls": [],
                                "djId": 0,
                                "copyright": 2,
                                "s_id": 0,
                                "mst": 9,
                                "cp": 665010,
                                "mv": 5328304,
                                "rtype": 0,
                                "rurl": null,
                                "publishTime": 1446076800000,
                                "privilege": {
                                    "id": 36024771,
                                    "fee": 8,
                                    "payed": 1,
                                    "st": 0,
                                    "pl": 999000,
                                    "dl": 999000,
                                    "sp": 7,
                                    "cp": 1,
                                    "subp": 1,
                                    "cs": false,
                                    "maxbr": 999000,
                                    "fl": 128000,
                                    "toast": false,
                                    "flag": 5,
                                    "preSell": false
                                }
                            },
                            {
                                "name": "Sunny Days",
                                "id": 484314566,
                                "pst": 0,
                                "t": 0,
                                "ar": [{
                                        "id": 27621,
                                        "name": "Armin van Buuren",
                                        "tns": [],
                                        "alias": []
                                    },
                                    {
                                        "id": 13202666,
                                        "name": "Josh Cumbee",
                                        "tns": [],
                                        "alias": []
                                    }
                                ],
                                "alia": [],
                                "pop": 65,
                                "st": 0,
                                "rt": null,
                                "fee": 8,
                                "v": 28,
                                "crbt": null,
                                "cf": "",
                                "al": {
                                    "id": 35623406,
                                    "name": "Sunny Days",
                                    "picUrl": "http://p4.music.126.net/9fwvg-Od3FGLZwdxq456dg==/109951163132656605.jpg",
                                    "tns": [],
                                    "pic_str": "109951163132656605",
                                    "pic": 109951163132656600
                                },
                                "dt": 210125,
                                "h": {
                                    "br": 320000,
                                    "fid": 0,
                                    "size": 8407293,
                                    "vd": -50676
                                },
                                "m": {
                                    "br": 192000,
                                    "fid": 0,
                                    "size": 5044393,
                                    "vd": -50676
                                },
                                "l": {
                                    "br": 128000,
                                    "fid": 0,
                                    "size": 3362943,
                                    "vd": -50676
                                },
                                "a": null,
                                "cd": "1",
                                "no": 1,
                                "rtUrl": null,
                                "ftype": 0,
                                "rtUrls": [],
                                "djId": 0,
                                "copyright": 0,
                                "s_id": 0,
                                "mst": 9,
                                "cp": 665010,
                                "mv": 5566060,
                                "rtype": 0,
                                "rurl": null,
                                "publishTime": 1497571200000,
                                "privilege": {
                                    "id": 484314566,
                                    "fee": 8,
                                    "payed": 1,
                                    "st": 0,
                                    "pl": 999000,
                                    "dl": 999000,
                                    "sp": 7,
                                    "cp": 1,
                                    "subp": 1,
                                    "cs": false,
                                    "maxbr": 999000,
                                    "fl": 128000,
                                    "toast": false,
                                    "flag": 0,
                                    "preSell": false
                                }
                            },
                            {
                                "name": "Great Spirit",
                                "id": 445844868,
                                "pst": 0,
                                "t": 0,
                                "ar": [{
                                        "id": 27621,
                                        "name": "Armin van Buuren",
                                        "tns": [],
                                        "alias": []
                                    },
                                    {
                                        "id": 1063156,
                                        "name": "Vini Vici",
                                        "tns": [],
                                        "alias": []
                                    },
                                    {
                                        "id": 131986,
                                        "name": "Hilight Tribe",
                                        "tns": [],
                                        "alias": []
                                    }
                                ],
                                "alia": [],
                                "pop": 90,
                                "st": 0,
                                "rt": null,
                                "fee": 8,
                                "v": 30,
                                "crbt": null,
                                "cf": "",
                                "al": {
                                    "id": 35044209,
                                    "name": "Great Spirit",
                                    "picUrl": "http://p3.music.126.net/cJp_BeaaZvryuLMbPoScIQ==/109951163128917807.jpg",
                                    "tns": [],
                                    "pic_str": "109951163128917807",
                                    "pic": 109951163128917810
                                },
                                "dt": 215773,
                                "h": {
                                    "br": 320000,
                                    "fid": 0,
                                    "size": 8634036,
                                    "vd": -42236
                                },
                                "m": {
                                    "br": 192000,
                                    "fid": 0,
                                    "size": 5180439,
                                    "vd": -39743
                                },
                                "l": {
                                    "br": 128000,
                                    "fid": 0,
                                    "size": 3453640,
                                    "vd": -38491
                                },
                                "a": null,
                                "cd": "1",
                                "no": 1,
                                "rtUrl": null,
                                "ftype": 0,
                                "rtUrls": [],
                                "djId": 0,
                                "copyright": 0,
                                "s_id": 0,
                                "mst": 9,
                                "cp": 665010,
                                "mv": 5393288,
                                "rtype": 0,
                                "rurl": null,
                                "publishTime": 1481500800000,
                                "privilege": {
                                    "id": 445844868,
                                    "fee": 8,
                                    "payed": 1,
                                    "st": 0,
                                    "pl": 999000,
                                    "dl": 999000,
                                    "sp": 7,
                                    "cp": 1,
                                    "subp": 1,
                                    "cs": false,
                                    "maxbr": 999000,
                                    "fl": 128000,
                                    "toast": false,
                                    "flag": 5,
                                    "preSell": false
                                }
                            }
                        ],
                        "relatedInfo": null,
                        "videoUserLiveInfo": null,
                        "vid": "725296F1DC521E5C5A4508478ADE16EF",
                        "durationms": 30249,
                        "playTime": 21763,
                        "praisedCount": 346,
                        "praised": false,
                        "subscribed": false
                    }
                },
                {
                    "type": 1,
                    "displayed": false,
                    "alg": "onlineHotGroup",
                    "extAlg": null,
                    "data": {
                        "alg": "onlineHotGroup",
                        "scm": "1.music-video-timeline.video_timeline.video.181017.-295043608",
                        "threadId": "R_VI_62_9171379F76944CBDB5D76FF3FC74EFFC",
                        "coverUrl": "https://p1.music.126.net/k-5b5Iz2-E2x95_9pUMx2w==/109951164988692608.jpg",
                        "height": 1080,
                        "width": 1920,
                        "title": "Dancer In The Dark|但愿殊途同归",
                        "description": "若能避开猛烈的欢喜，\n自然也不会有悲痛的来袭。\n#超燃计划#",
                        "commentCount": 19,
                        "shareCount": 59,
                        "resolutions": [{
                                "resolution": 240,
                                "size": 26649848
                            },
                            {
                                "resolution": 480,
                                "size": 44878140
                            },
                            {
                                "resolution": 720,
                                "size": 65506549
                            },
                            {
                                "resolution": 1080,
                                "size": 121271789
                            }
                        ],
                        "creator": {
                            "defaultAvatar": false,
                            "province": 0,
                            "authStatus": 0,
                            "followed": false,
                            "avatarUrl": "http://p1.music.126.net/SUeqMM8HOIpHv9Nhl9qt9w==/109951165647004069.jpg",
                            "accountStatus": 30,
                            "gender": 0,
                            "city": 100,
                            "birthday": -2209017600000,
                            "userId": 3325837972,
                            "userType": 204,
                            "nickname": "帐号已注销",
                            "signature": "",
                            "description": "",
                            "detailDescription": "",
                            "avatarImgId": 109951165647004060,
                            "backgroundImgId": 109951162868128400,
                            "backgroundUrl": "http://p1.music.126.net/2zSNIqTcpHL2jIvU6hG0EA==/109951162868128395.jpg",
                            "authority": 0,
                            "mutual": false,
                            "expertTags": null,
                            "experts": {
                                "1": "影视视频达人"
                            },
                            "djStatus": 0,
                            "vipType": 0,
                            "remarkName": null,
                            "avatarImgIdStr": "109951165647004069",
                            "backgroundImgIdStr": "109951162868128395"
                        },
                        "urlInfo": null,
                        "videoGroup": [{
                                "id": 1105,
                                "name": "最佳饭制",
                                "alg": null
                            },
                            {
                                "id": 9104,
                                "name": "电子",
                                "alg": null
                            },
                            {
                                "id": 4104,
                                "name": "电音",
                                "alg": null
                            },
                            {
                                "id": 5100,
                                "name": "音乐",
                                "alg": null
                            },
                            {
                                "id": 14146,
                                "name": "兴奋",
                                "alg": null
                            },
                            {
                                "id": 14212,
                                "name": "欧美音乐",
                                "alg": null
                            },
                            {
                                "id": 15241,
                                "name": "饭制",
                                "alg": null
                            },
                            {
                                "id": 23116,
                                "name": "音乐推荐",
                                "alg": null
                            },
                            {
                                "id": 13172,
                                "name": "欧美",
                                "alg": null
                            },
                            {
                                "id": 72116,
                                "name": "短片",
                                "alg": null
                            }
                        ],
                        "previewUrl": "http://vodkgeyttp9.vod.126.net/vodkgeyttp8/preview_3001226265_kywCdm1F.webp?wsSecret=295545b7c16617e9f0f2024d346c2e43&wsTime=1676566099",
                        "previewDurationms": 4000,
                        "hasRelatedGameAd": false,
                        "markTypes": null,
                        "relateSong": [{
                            "name": "Dancer In The Dark (Original Mix)",
                            "id": 1334059163,
                            "pst": 0,
                            "t": 0,
                            "ar": [{
                                    "id": 30476593,
                                    "name": "GRABOTE",
                                    "tns": [],
                                    "alias": []
                                },
                                {
                                    "id": 0,
                                    "name": "Marc Philippe",
                                    "tns": [],
                                    "alias": []
                                }
                            ],
                            "alia": [],
                            "pop": 100,
                            "st": 0,
                            "rt": null,
                            "fee": 8,
                            "v": 30,
                            "crbt": null,
                            "cf": "",
                            "al": {
                                "id": 74896143,
                                "name": "Dancer In The Dark (Original Mix)",
                                "picUrl": "http://p3.music.126.net/9BETsV4GpvIeKb2ydyVXFg==/109951163731656042.jpg",
                                "tns": [],
                                "pic_str": "109951163731656042",
                                "pic": 109951163731656050
                            },
                            "dt": 247132,
                            "h": {
                                "br": 320000,
                                "fid": 0,
                                "size": 9887913,
                                "vd": -34312
                            },
                            "m": {
                                "br": 192000,
                                "fid": 0,
                                "size": 5932765,
                                "vd": -34312
                            },
                            "l": {
                                "br": 128000,
                                "fid": 0,
                                "size": 3955191,
                                "vd": -34312
                            },
                            "a": null,
                            "cd": "01",
                            "no": 1,
                            "rtUrl": null,
                            "ftype": 0,
                            "rtUrls": [],
                            "djId": 0,
                            "copyright": 0,
                            "s_id": 0,
                            "mst": 9,
                            "cp": 0,
                            "mv": 0,
                            "rtype": 0,
                            "rurl": null,
                            "publishTime": 1544976000000,
                            "privilege": {
                                "id": 1334059163,
                                "fee": 8,
                                "payed": 1,
                                "st": 0,
                                "pl": 999000,
                                "dl": 999000,
                                "sp": 7,
                                "cp": 1,
                                "subp": 1,
                                "cs": false,
                                "maxbr": 999000,
                                "fl": 128000,
                                "toast": false,
                                "flag": 4,
                                "preSell": false
                            }
                        }],
                        "relatedInfo": null,
                        "videoUserLiveInfo": null,
                        "vid": "9171379F76944CBDB5D76FF3FC74EFFC",
                        "durationms": 212074,
                        "playTime": 149120,
                        "praisedCount": 605,
                        "praised": false,
                        "subscribed": false
                    }
                }
            ],
            "rcmdLimit": 8
        },
        videoList: []
    },

    //#region 获取导航数据
    async getVideoGroupListData() {
        let videoGroupListData = await request('/video/group/list');

        let videoGroupList = videoGroupListData.data.splice(0, 15);

        this.setData({
            videoGroupList,
            navId: videoGroupList[0].id
        });

        this.getVideoListData();
    },
    //#endregion

    //#region 切换导航
    changNav(event) {
        let id = event.currentTarget.dataset.id;

        this.setData({
            navId: id
        });

        this.getVideoListData();
    },
    //#endregion

    //#region 获取视频列表数据
    async getVideoListData() {
        let videoListData = await request('/video/group', {
            id: this.data.navId
        });
        
        // 接口有点问题，要是获取不到就用备用数据代替
        if (videoListData.code !== 200 || !videoListData.datas.length) {
            videoListData.datas = this.data.reserveVideoList.datas;
        }

        let index = 0;
        let videoList = videoListData.datas.map(item => {
            item.id = index++;
            return item;
        });
        
        this.setData({
            videoList
        });
    },
    //#endregion

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getVideoGroupListData();
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})