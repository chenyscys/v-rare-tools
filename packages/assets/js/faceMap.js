const emojiWeixinObj = [{ label: '葡萄', value: '🍇' }, { label: '甜瓜', value: '🍈' }, { label: '西瓜', value: '🍉' }, { label: '橘子', value: '🍊' }, { label: '柠檬', value: '🍋' }, { label: '香蕉', value: '🍌' }, { label: '菠萝', value: '🍍' }, { label: '红苹果', value: '🍎' }, { label: '青苹果', value: '🍏' }, { label: '梨', value: '🍐' }, { label: '桃', value: '🍑' }, { label: '樱桃', value: '🍒' }, { label: '草莓', value: '🍓' }, { label: '猕猴桃', value: '🥝' }, { label: '番茄', value: '🍅' }, { label: '牛油果', value: '🥑' }, { label: '茄子', value: '🍆' }, { label: '土豆', value: '🥔' }, { label: '胡萝卜', value: '🥕' }, { label: '玉米', value: '🌽' }, { label: '辣椒', value: '🌶' }, { label: '黄瓜', value: '🥒' }, { label: '蘑菇', value: '🍄' }, { label: '花生', value: '🥜' }, { label: '栗子', value: '🌰' }, { label: '面包', value: '🍞' }, { label: '羊角面包', value: '🥐' }, { label: '烙饼', value: '🥞' }, { label: '奶酪楔形', value: '🧀' }, { label: '肉类', value: '🍖' }, { label: '禽肉', value: '🍗' }, { label: '熏肉', value: '🥓' }, { label: '汉堡包', value: '🍔' }, { label: '炸薯条', value: '🍟' }, { label: '披萨', value: '🍕' }, { label: '热狗', value: '🌭' }, { label: '墨西哥玉米卷', value: '🌮' }, { label: '卷饼', value: '🌯' }, { label: '夹心面包', value: '🥙' }, { label: '鸡蛋', value: '🥚' }, { label: '烹饪', value: '🍳' }, { label: '浅盘食物', value: '🥘' }, { label: '一锅食物', value: '🍲' }, { label: '蔬菜沙拉', value: '🥗' }, { label: '爆米花', value: '🍿' }, { label: '便当盒', value: '🍱' }, { label: '香米饼', value: '🍘' }, { label: '饭团', value: '🍙' }, { label: '熟米饭', value: '🍚' }, { label: '咖喱饭', value: '🍛' }, { label: '蒸碗', value: '🍜' }, { label: '意大利面', value: '🍝' }, { label: '烤红薯', value: '🍠' }, { label: '关东煮', value: '🍢' }, { label: '寿司', value: '🍣' }, { label: '炸虾', value: '🍤' }, { label: '漩涡鱼糕', value: '🍥' }, { label: '鱼丸', value: '🍡' }, { label: '冰淇淋', value: '🍦' }, { label: '刨冰', value: '🍧' }, { label: '奶油', value: '🍨' }, { label: '甜甜圈', value: '🍩' }, { label: '曲奇饼', value: '🍪' }, { label: '生日蛋糕', value: '🎂' }, { label: '水果蛋糕', value: '🍰' }, { label: '巧克力条', value: '🍫' }, { label: '糖果', value: '🍬' }, { label: '棒棒糖', value: '🍭' }, { label: '布丁', value: '🍮' }, { label: '蜜罐', value: '🍯' }, { label: '婴儿奶瓶', value: '🍼' }, { label: '牛奶', value: '🥛' }, { label: '热饮料', value: '☕' }, { label: '绿茶', value: '🍵' }, { label: '清酒', value: '🍶' }, { label: '香槟', value: '🍾' }, { label: '红酒', value: '🍷' }, { label: '鸡尾酒', value: '🍸' }, { label: '热带饮料', value: '🍹' }, { label: '啤酒杯', value: '🍺' }, { label: '干杯', value: '🍻' }, { label: '碰杯', value: '🥂' }, { label: '平底杯', value: '🥃' }, { label: '叉刀盘', value: '🍽' }, { label: '叉刀', value: '🍴' }, { label: '勺子', value: '🥄' }];
const emojiFace = [{ label: '笑脸', value: 0, code: '1f604' }, { label: '生病', value: 1, code: '1f637' }, { label: '破涕为笑', value: 2, code: '1f602' }, { label: '吐舌', value: 3, code: '1f445' }, { label: '脸红', value: 4, code: '1f633' }, { label: '恐惧', value: 5, code: '1f631' }, { label: '失望', value: 6, code: '1f640' }, { label: '无语', value: 7, code: '1f612' }, { label: '嘿哈', value: 8 }, { label: '捂脸', value: 9 }, { label: '奸笑', value: 10 }, { label: '机智', value: 11 }, { label: '皱眉', value: 12 }, { label: '耶', value: 13 }, { label: '鬼魂', value: 14, code: '1f47b' }, { label: '合十', value: 15, code: '1f64f' }, { label: '强壮', value: 16, code: '1f4aa' }, { label: '庆祝', value: 17, code: '1f389' }, { label: '礼物', value: 18, code: '1f381' }, { label: '红包', value: 19 }, { label: '鸡', value: 20, code: '1f414' }, { label: '开心', value: 21, code: '1f60a' }, { label: '大笑', value: 22, code: '1f603' }, { label: '热情', value: 23, code: '263a' }, { label: '眨眼', value: 24, code: '1f609' }, { label: '色', value: 25, code: '1f60d' }, { label: '接吻', value: 26, code: '1f618' }, { label: '亲吻', value: 27, code: '1f61a' }, { label: '露齿笑', value: 28, code: '1f63c' }, { label: '满意', value: 29, code: '1f60c' }, { label: '戏弄', value: 30, code: '1f61c' }, { label: '得意', value: 31, code: '1f60f' }, { label: '汗', value: 32, code: '1f613' }, { label: '低落', value: 33, code: '1f61e' }, { label: '呸', value: 34, code: '1f616' }, { label: '焦虑', value: 35, code: '1f625' }, { label: '担心', value: 36, code: '1f630' }, { label: '震惊', value: 37, code: '1f628' }, { label: '悔恨', value: 38, code: '1f62b' }, { label: '眼泪', value: 39, code: '1f622' }, { label: '哭', value: 40, code: '1f62d' }, { label: '晕', value: 41, code: '1f632' }, { label: '心烦', value: 42, code: '1f620' }, { label: '生气', value: 43, code: '1f63e' }, { label: '睡觉', value: 44, code: '1f62a' }, { label: '恶魔', value: 45, code: '1f47f' }, { label: '外星人', value: 46, code: '1f47d' }, { label: '心', value: 47, code: '2764' }, { label: '心碎', value: 48, code: '1f494' }, { label: '丘比特', value: 49, code: '1f498' }, { label: '闪烁', value: 50, code: '2728' }, { label: '星星', value: 51, code: '1f31f' }, { label: '叹号', value: 52, code: '2755' }, { label: '问号', value: 53, code: '2754' }, { label: '睡着', value: 54, code: '1f4a4' }, { label: '水滴', value: 55, code: '1f4a6' }, { label: '音乐', value: 56, code: '1f3b5' }, { label: '火', value: 57, code: '1f525' }, { label: '便便', value: 58, code: '1f4a9' }, { label: '强', value: 59, code: '1f44d' }, { label: '弱', value: 60, code: '1f44e' }, { label: '拳头', value: 61, code: '1f44a' }, { label: '胜利', value: 62, code: '270c' }, { label: '上', value: 63, code: '1f446' }, { label: '下', value: 64, code: '1f447' }, { label: '右', value: 65, code: '1f449' }, { label: '左', value: 66, code: '1f448' }, { label: '第一', value: 67, code: '261d' }, { label: '吻', value: 68, code: '1f48f' }, { label: '热恋', value: 69, code: '1f491' }, { label: '男孩', value: 70, code: '1f466' }, { label: '女孩', value: 71, code: '1f467' }, { label: '女士', value: 72, code: '1f469' }, { label: '男士', value: 73, code: '1f468' }, { label: '天使', value: 74, code: '1f47c' }, { label: '骷髅', value: 75, code: '1f480' }, { label: '红唇', value: 76, code: '1f48b' }, { label: '太阳', value: 77, code: '2600' }, { label: '下雨', value: 78, code: '2614' }, { label: '多云', value: 79, code: '2601' }, { label: '雪人', value: 80, code: '26c4' }, { label: '月亮', value: 81, code: '1f319' }, { label: '闪电', value: 82, code: '26a1' }, { label: '海浪', value: 83, code: '1f30a' }, { label: '猫', value: 84, code: '1f431' }, { label: '小狗', value: 85, code: '1f429' }, { label: '老鼠', value: 86, code: '1f42d' }, { label: '仓鼠', value: 87, code: '1f439' }, { label: '兔子', value: 88, code: '1f430' }, { label: '狗', value: 89, code: '1f43a' }, { label: '青蛙', value: 90, code: '1f438' }, { label: '老虎', value: 91, code: '1f42f' }, { label: '考拉', value: 92, code: '1f428' }, { label: '熊', value: 93, code: '1f43b' }, { label: '猪', value: 94, code: '1f437' }, { label: '牛', value: 95, code: '1f42e' }, { label: '野猪', value: 96, code: '1f417' }, { label: '猴子', value: 97, code: '1f435' }, { label: '马', value: 98, code: '1f434' }, { label: '蛇', value: 99, code: '1f40d' }, { label: '鸽子', value: 100, code: '1f426' }, { label: '鸡', value: 101, code: '1f414' }, { label: '企鹅', value: 102, code: '1f427' }, { label: '毛虫', value: 103, code: '1f41b' }, { label: '章鱼', value: 104, code: '1f419' }, { label: '鱼', value: 105, code: '1f420' }, { label: '鲸鱼', value: 106, code: '1f433' }, { label: '海豚', value: 107, code: '1f42c' }, { label: '玫瑰', value: 108, code: '1f339' }, { label: '花', value: 109, code: '1f33a' }, { label: '棕榈树', value: 110, code: '1f334' }, { label: '仙人掌', value: 111, code: '1f335' }, { label: '礼盒', value: 112, code: '1f49d' }, { label: '南瓜灯', value: 113, code: '1f383' }, { label: '圣诞老人', value: 114, code: '1f385' }, { label: '圣诞树', value: 115, code: '1f384' }, { label: '铃', value: 116, code: '1f514' }, { label: '气球', value: 117, code: '1f388' }, { label: 'CD', value: 118, code: '1f4bf' }, { label: '相机', value: 119, code: '1f4f7' }, { label: '录像机', value: 120, code: '1f3a5' }, { label: '电脑', value: 121, code: '1f4bb' }, { label: '电视', value: 122, code: '1f4fa' }, { label: '电话', value: 123, code: '1f4de' }, { label: '解锁', value: 124, code: '1f513' }, { label: '锁', value: 125, code: '1f512' }, { label: '钥匙', value: 126, code: '1f511' }, { label: '成交', value: 127, code: '1f528' }, { label: '灯泡', value: 128, code: '1f4a1' }, { label: '邮箱', value: 129, code: '1f4eb' }, { label: '浴缸', value: 130, code: '1f6c0' }, { label: '钱', value: 131, code: '1f4b2' }, { label: '炸弹', value: 132, code: '1f4a3' }, { label: '手枪', value: 133, code: '1f52b' }, { label: '药丸', value: 134, code: '1f48a' }, { label: '橄榄球', value: 135, code: '1f3c8' }, { label: '篮球', value: 136, code: '1f3c0' }, { label: '足球', value: 137, code: '26bd' }, { label: '棒球', value: 138, code: '26be' }, { label: '高尔夫', value: 139, code: '26f3' }, { label: '奖杯', value: 140, code: '1f3c6' }, { label: '入侵者', value: 141, code: '1f47e' }, { label: '唱歌', value: 142, code: '1f3a4' }, { label: '吉他', value: 143, code: '1f3b8' }, { label: '比基尼', value: 144, code: '1f459' }, { label: '皇冠', value: 145, code: '1f451' }, { label: '雨伞', value: 146, code: '1f302' }, { label: '手提包', value: 147, code: '1f45c' }, { label: '口红', value: 148, code: '1f484' }, { label: '戒指', value: 149, code: '1f48d' }, { label: '钻石', value: 150, code: '1f48e' }, { label: '咖啡', value: 151, code: '2615' }, { label: '啤酒', value: 152, code: '1f37a' }, { label: '干杯', value: 153, code: '1f37b' }, { label: '鸡尾酒', value: 154, code: '1f377' }, { label: '汉堡', value: 155, code: '1f354' }, { label: '薯条', value: 156, code: '1f35f' }, { label: '意面', value: 157, code: '1f35d' }, { label: '寿司', value: 158, code: '1f363' }, { label: '面条', value: 159, code: '1f35c' }, { label: '煎蛋', value: 160, code: '1f373' }, { label: '冰激凌', value: 161, code: '1f366' }, { label: '蛋糕', value: 162, code: '1f382' }, { label: '苹果', value: 163, code: '1f34f' }, { label: '飞机', value: 164, code: '2708' }, { label: '火箭', value: 165, code: '1f680' }, { label: '自行车', value: 166, code: '1f6b2' }, { label: '高铁', value: 167, code: '1f684' }, { label: '警告', value: 168, code: '26a0' }, { label: '旗', value: 169, code: '1f3c1' }, { label: '男人', value: 170, code: '1f6b9' }, { label: '女人', value: 171, code: '1f6ba' }, { label: 'O', value: 172, code: '2b55' }, { label: 'X', value: 173, code: '274e' }, { label: '版权', value: 174, code: 'a9' }, { label: '注册商标', value: 175, code: 'ae' }, { label: '商标', value: 176, code: '2122' }];
const qqFaceMap = [{ label: '微笑', value: '0' }, { label: '撇嘴', value: '1' }, { label: '色', value: '2' }, { label: '发呆', value: '3' }, { label: '得意', value: '4' }, { label: '流泪', value: '5' }, { label: '害羞', value: '6' }, { label: '闭嘴', value: '7' }, { label: '睡', value: '8' }, { label: '大哭', value: '9' }, { label: '尴尬', value: '10' }, { label: '发怒', value: '11' }, { label: '调皮', value: '12' }, { label: '呲牙', value: '13' }, { label: '惊讶', value: '14' }, { label: '难过', value: '15' }, { label: '酷', value: '16' }, { label: '冷汗', value: '17' }, { label: '抓狂', value: '18' }, { label: '吐', value: '19' }, { label: '偷笑', value: '20' }, { label: '愉快', value: '21' }, { label: '白眼', value: '22' }, { label: '傲慢', value: '23' }, { label: '饥饿', value: '24' }, { label: '困', value: '25' }, { label: '惊恐', value: '26' }, { label: '流汗', value: '27' }, { label: '憨笑', value: '28' }, { label: '悠闲', value: '29' }, { label: '奋斗', value: '30' }, { label: '咒骂', value: '31' }, { label: '疑问', value: '32' }, { label: '嘘', value: '33' }, { label: '晕', value: '34' }, { label: '疯了', value: '35' }, { label: '衰', value: '36' }, { label: '骷髅', value: '37' }, { label: '敲打', value: '38' }, { label: '再见', value: '39' }, { label: '擦汗', value: '40' }, { label: '抠鼻', value: '41' }, { label: '鼓掌', value: '42' }, { label: '糗大了', value: '43' }, { label: '坏笑', value: '44' }, { label: '左哼哼', value: '45' }, { label: '右哼哼', value: '46' }, { label: '哈欠', value: '47' }, { label: '鄙视', value: '48' }, { label: '委屈', value: '49' }, { label: '快哭了', value: '50' }, { label: '阴险', value: '51' }, { label: '亲亲', value: '52' }, { label: '吓', value: '53' }, { label: '可怜', value: '54' }, { label: '菜刀', value: '55' }, { label: '西瓜', value: '56' }, { label: '啤酒', value: '57' }, { label: '篮球', value: '58' }, { label: '乒乓', value: '59' }, { label: '咖啡', value: '60' }, { label: '饭', value: '61' }, { label: '猪头', value: '62' }, { label: '玫瑰', value: '63' }, { label: '凋谢', value: '64' }, { label: '嘴唇', value: '65' }, { label: '爱心', value: '66' }, { label: '心碎', value: '67' }, { label: '蛋糕', value: '68' }, { label: '闪电', value: '69' }, { label: '炸弹', value: '70' }, { label: '刀', value: '71' }, { label: '足球', value: '72' }, { label: '瓢虫', value: '73' }, { label: '便便', value: '74' }, { label: '月亮', value: '75' }, { label: '太阳', value: '76' }, { label: '礼物', value: '77' }, { label: '拥抱', value: '78' }, { label: '强', value: '79' }, { label: '弱', value: '80' }, { label: '握手', value: '81' }, { label: '胜利', value: '82' }, { label: '抱拳', value: '83' }, { label: '勾引', value: '84' }, { label: '拳头', value: '85' }, { label: '差劲', value: '86' }, { label: '爱你', value: '87' }, { label: 'NO', value: '88' }, { label: 'OK', value: '89' }, { label: '爱情', value: '90' }, { label: '飞吻', value: '91' }, { label: '跳跳', value: '92' }, { label: '发抖', value: '93' }, { label: '怄火', value: '94' }, { label: '转圈', value: '95' }, { label: '磕头', value: '96' }, { label: '回头', value: '97' }, { label: '跳绳', value: '98' }, { label: '投降', value: '99' }, { label: '激动', value: '100' }, { label: '乱舞', value: '101' }, { label: '献吻', value: '102' }, { label: '左太极', value: '103' }, { label: '右太极', value: '104' }];

const faceValueMap = {};
faceValueMap['0'] = '微笑';
faceValueMap['1'] = '撇嘴';
faceValueMap['2'] = '色';
faceValueMap['3'] = '发呆';
faceValueMap['4'] = '得意';
faceValueMap['5'] = '流泪';
faceValueMap['6'] = '害羞';
faceValueMap['7'] = '闭嘴';
faceValueMap['8'] = '睡';
faceValueMap['9'] = '大哭';
faceValueMap['10'] = '尴尬';
faceValueMap['11'] = '发怒';
faceValueMap['12'] = '调皮';
faceValueMap['13'] = '呲牙';
faceValueMap['14'] = '惊讶';
faceValueMap['15'] = '难过';
faceValueMap['16'] = '酷';
faceValueMap['17'] = '冷汗';
faceValueMap['18'] = '抓狂';
faceValueMap['19'] = '吐';
faceValueMap['20'] = '偷笑';
// faceValueMap["21"] = "可爱";
faceValueMap['21'] = '愉快';
faceValueMap['22'] = '白眼';
faceValueMap['23'] = '傲慢';
faceValueMap['24'] = '饥饿';
faceValueMap['25'] = '困';
faceValueMap['26'] = '惊恐';
faceValueMap['27'] = '流汗';
faceValueMap['28'] = '憨笑';
faceValueMap['29'] = '悠闲';
// faceValueMap["29"] = "大兵";
faceValueMap['30'] = '奋斗';
faceValueMap['31'] = '咒骂';
faceValueMap['32'] = '疑问';
faceValueMap['33'] = '嘘';
faceValueMap['34'] = '晕';
faceValueMap['35'] = '疯了';
// fceValueMap["35"] = "折磨";
faceValueMap['36'] = '衰';
faceValueMap['37'] = '骷髅';
faceValueMap['38'] = '敲打';
faceValueMap['39'] = '再见';
faceValueMap['40'] = '擦汗';
faceValueMap['41'] = '抠鼻';
faceValueMap['42'] = '鼓掌';
faceValueMap['43'] = '糗大了';
faceValueMap['44'] = '坏笑';
faceValueMap['45'] = '左哼哼';
faceValueMap['46'] = '右哼哼';
faceValueMap['47'] = '哈欠';
faceValueMap['48'] = '鄙视';
faceValueMap['49'] = '委屈';
faceValueMap['50'] = '快哭了';
faceValueMap['51'] = '阴险';
faceValueMap['52'] = '亲亲';
faceValueMap['53'] = '吓';
faceValueMap['54'] = '可怜';
faceValueMap['55'] = '菜刀';
faceValueMap['56'] = '西瓜';
faceValueMap['57'] = '啤酒';
faceValueMap['58'] = '篮球';
faceValueMap['59'] = '乒乓';
faceValueMap['60'] = '咖啡';
faceValueMap['61'] = '饭';
faceValueMap['62'] = '猪头';
faceValueMap['63'] = '玫瑰';
faceValueMap['64'] = '凋谢';
faceValueMap['65'] = '嘴唇';
// faceValueMap["65"] = "示爱";
faceValueMap['66'] = '爱心';
faceValueMap['67'] = '心碎';
faceValueMap['68'] = '蛋糕';
faceValueMap['69'] = '闪电';
faceValueMap['70'] = '炸弹';
faceValueMap['71'] = '刀';
faceValueMap['72'] = '足球';
faceValueMap['73'] = '瓢虫';
faceValueMap['74'] = '便便';
faceValueMap['75'] = '月亮';
faceValueMap['76'] = '太阳';
faceValueMap['77'] = '礼物';
faceValueMap['78'] = '拥抱';
faceValueMap['79'] = '强';
faceValueMap['80'] = '弱';
faceValueMap['81'] = '握手';
faceValueMap['82'] = '胜利';
faceValueMap['83'] = '抱拳';
faceValueMap['84'] = '勾引';
faceValueMap['85'] = '拳头';
faceValueMap['86'] = '差劲';
faceValueMap['87'] = '爱你';
faceValueMap['88'] = 'NO';
faceValueMap['89'] = 'OK';
faceValueMap['90'] = '爱情';
faceValueMap['91'] = '飞吻';
faceValueMap['92'] = '跳跳';
faceValueMap['93'] = '发抖';
faceValueMap['94'] = '怄火';
faceValueMap['95'] = '转圈';
faceValueMap['96'] = '磕头';
faceValueMap['97'] = '回头';
faceValueMap['98'] = '跳绳';
faceValueMap['99'] = '投降';
faceValueMap['100'] = '激动';
faceValueMap['101'] = '乱舞';
faceValueMap['102'] = '献吻';
faceValueMap['103'] = '左太极';
faceValueMap['104'] = '右太极';
faceValueMap['105'] = '嘿哈';
faceValueMap['106'] = '捂脸';
faceValueMap['107'] = '奸笑';
faceValueMap['108'] = '机智';
faceValueMap['109'] = '皱眉';
faceValueMap['110'] = '耶';
faceValueMap['111'] = '鸡';
faceValueMap['112'] = '红包';
faceValueMap['蜡烛'] = '蜡烛';
faceValueMap['1f604'] = '';
faceValueMap['1f60a'] = '';
faceValueMap['1f603'] = '';
faceValueMap['263a'] = '';
faceValueMap['1f609'] = '';
faceValueMap['1f60d'] = '';
faceValueMap['1f618'] = '';
faceValueMap['1f61a'] = '';
faceValueMap['1f633'] = '';
faceValueMap['1f63c'] = '';
faceValueMap['1f60c'] = '';
faceValueMap['1f61c'] = '';
faceValueMap['1f445'] = '';
faceValueMap['1f612'] = '';
faceValueMap['1f60f'] = '';
faceValueMap['1f613'] = '';
faceValueMap['1f640'] = '';
faceValueMap['1f61e'] = '';
faceValueMap['1f616'] = '';
faceValueMap['1f625'] = '';
faceValueMap['1f630'] = '';
faceValueMap['1f628'] = '';
faceValueMap['1f62b'] = '';
faceValueMap['1f622'] = '';
faceValueMap['1f62d'] = '';
faceValueMap['1f602'] = '';
faceValueMap['1f632'] = '';
faceValueMap['1f631'] = '';
faceValueMap['1f620'] = '';
faceValueMap['1f63e'] = '';
faceValueMap['1f62a'] = '';
faceValueMap['1f637'] = '';
faceValueMap['1f47f'] = '';
faceValueMap['1f47d'] = '';
faceValueMap['2764'] = '';
faceValueMap['1f494'] = '';
faceValueMap['1f498'] = '';
faceValueMap['2728'] = '';
faceValueMap['1f31f'] = '';
faceValueMap['2755'] = '';
faceValueMap['2754'] = '';
faceValueMap['1f4a4'] = '';
faceValueMap['1f4a6'] = '';
faceValueMap['1f3b5'] = '';
faceValueMap['1f525'] = '';
faceValueMap['1f4a9'] = '';
faceValueMap['1f44d'] = '';
faceValueMap['1f44e'] = '';
faceValueMap['1f44a'] = '';
faceValueMap['270c'] = '';
faceValueMap['1f446'] = '';
faceValueMap['1f447'] = '';
faceValueMap['1f449'] = '';
faceValueMap['1f448'] = '';
faceValueMap['261d'] = '';
faceValueMap['1f4aa'] = '';
faceValueMap['1f48f'] = '';
faceValueMap['1f491'] = '';
faceValueMap['1f466'] = '';
faceValueMap['1f467'] = '';
faceValueMap['1f469'] = '';
faceValueMap['1f468'] = '';
faceValueMap['1f47c'] = '';
faceValueMap['1f480'] = '';
faceValueMap['1f48b'] = '';
faceValueMap['2600'] = '';
faceValueMap['2614'] = '';
faceValueMap['2601'] = '';
faceValueMap['26c4'] = '';
faceValueMap['1f319'] = '';
faceValueMap['26a1'] = '';
faceValueMap['1f30a'] = '';
faceValueMap['1f431'] = '';
faceValueMap['1f429'] = '';
faceValueMap['1f42d'] = '';
faceValueMap['1f439'] = '';
faceValueMap['1f430'] = '';
faceValueMap['1f43a'] = '';
faceValueMap['1f438'] = '';
faceValueMap['1f42f'] = '';
faceValueMap['1f428'] = '';
faceValueMap['1f43b'] = '';
faceValueMap['1f437'] = '';
faceValueMap['1f42e'] = '';
faceValueMap['1f417'] = '';
faceValueMap['1f435'] = '';
faceValueMap['1f434'] = '';
faceValueMap['1f40d'] = '';
faceValueMap['1f426'] = '';
faceValueMap['1f414'] = '';
faceValueMap['1f427'] = '';
faceValueMap['1f41b'] = '';
faceValueMap['1f419'] = '';
faceValueMap['1f420'] = '';
faceValueMap['1f433'] = '';
faceValueMap['1f42c'] = '';
faceValueMap['1f339'] = '';
faceValueMap['1f33a'] = '';
faceValueMap['1f334'] = '';
faceValueMap['1f335'] = '';
faceValueMap['1f49d'] = '';
faceValueMap['1f383'] = '';
faceValueMap['1f47b'] = '';
faceValueMap['1f385'] = '';
faceValueMap['1f384'] = '';
faceValueMap['1f381'] = '';
faceValueMap['1f514'] = '';
faceValueMap['1f389'] = '';
faceValueMap['1f388'] = '';
faceValueMap['1f4bf'] = '';
faceValueMap['1f4f7'] = '';
faceValueMap['1f3a5'] = '';
faceValueMap['1f4bb'] = '';
faceValueMap['1f4fa'] = '';
faceValueMap['1f4de'] = '';
faceValueMap['1f513'] = '';
faceValueMap['1f512'] = '';
faceValueMap['1f511'] = '';
faceValueMap['1f528'] = '';
faceValueMap['1f4a1'] = '';
faceValueMap['1f4eb'] = '';
faceValueMap['1f6c0'] = '';
faceValueMap['1f4b2'] = '';
faceValueMap['1f4a3'] = '';
faceValueMap['1f52b'] = '';
faceValueMap['1f48a'] = '';
faceValueMap['1f3c8'] = '';
faceValueMap['1f3c0'] = '';
faceValueMap['26bd'] = '';
faceValueMap['26be'] = '';
faceValueMap['26f3'] = '';
faceValueMap['1f3c6'] = '';
faceValueMap['1f47e'] = '';
faceValueMap['1f3a4'] = '';
faceValueMap['1f3b8'] = '';
faceValueMap['1f459'] = '';
faceValueMap['1f451'] = '';
faceValueMap['1f302'] = '';
faceValueMap['1f45c'] = '';
faceValueMap['1f484'] = '';
faceValueMap['1f48d'] = '';
faceValueMap['1f48e'] = '';
faceValueMap['2615'] = '';
faceValueMap['1f37a'] = '';
faceValueMap['1f37b'] = '';
faceValueMap['1f377'] = '';
faceValueMap['1f354'] = '';
faceValueMap['1f35f'] = '';
faceValueMap['1f35d'] = '';
faceValueMap['1f363'] = '';
faceValueMap['1f35c'] = '';
faceValueMap['1f373'] = '';
faceValueMap['1f366'] = '';
faceValueMap['1f382'] = '';
faceValueMap['1f34f'] = '';
faceValueMap['2708'] = '';
faceValueMap['1f680'] = '';
faceValueMap['1f6b2'] = '';
faceValueMap['1f684'] = '';
faceValueMap['26a0'] = '';
faceValueMap['1f3c1'] = '';
faceValueMap['1f6b9'] = '';
faceValueMap['1f6ba'] = '';
faceValueMap['2b55'] = '';
faceValueMap['274e'] = '';
faceValueMap.a9 = '';
faceValueMap.ae = '';
faceValueMap['2122'] = '';
faceValueMap['1f64f'] = '';

const emojiQQlist = {
  红包: '112',
  鸡: '111',
  耶: '110',
  皱眉: '109',
  机智: '108',
  奸笑: '107',
  捂脸: '106',
  嘿哈: '105',
};

const emojiQQlist2 = {
  红包: '19',
  鸡: '20',
  耶: '13',
  皱眉: '12',
  机智: '11',
  奸笑: '10',
  捂脸: '9',
  嘿哈: '8',
};

function findKey(obj, value, compare = (a, b) => a === b) {
  return Object.keys(obj).find((k) => compare(obj[k], value));
}

export function isChinese(faceValue) {
  if (faceValue.match(/^[\u4e00-\u9fa5]+$/)) return true;
  return false;
}


export function getFaceSendValue(faceValueId) {
  const strFaceValue = faceValueMap[faceValueId];

  if (isChinese(strFaceValue)) {
    return `[${strFaceValue}]`;
  }
  return strFaceValue;
}

export function getEmojiWeixin(name) {
  return emojiWeixinObj[name];
}

export function replaceImg(nstr, dimg = '') {
  if (nstr !== undefined) {
    const strList = nstr.split('');
    const regstr = /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/;
    let newstr = '';
    for (let i = 0; i < strList.length; i += 1) {
      if (!regstr.test(strList[i]) && strList[i] !== '[' && strList[i] !== ']') {
        const code = findKey(faceValueMap, strList[i]);
        if (code) {
          let isFace = false;
          for (let j = 0; j < emojiFace.length; j += 1) {
            if (emojiFace[j].code === code) {
              newstr += `<img class="emojibox emoji${emojiFace[j].value}" data-name="${strList[i]}" src="${dimg}" />`;
              isFace = true;
              break;
            }
          }
          if (!isFace) {
            newstr += strList[i];
          }
        } else {
          newstr += strList[i];
        }
      } else {
        newstr += strList[i];
      }
    }
    return newstr.replace(/\[(.*?)\]/gi, (str) => {
      const facestr = str.slice(1, -1);
      const strkey = findKey(faceValueMap, facestr);
      if (emojiQQlist2[facestr]) {
        return `<img class="emojibox emoji${emojiQQlist2[facestr]}" data-name="[${facestr}]" src="${dimg}" />`;
      }
      return `<img class="facebox qqface${strkey}" data-name="[${facestr}]" src="${dimg}" />`;
    });
  }
  return '';
}

export {
  qqFaceMap, emojiFace, emojiWeixinObj, emojiQQlist, faceValueMap,
};
