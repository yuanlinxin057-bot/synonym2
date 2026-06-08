/* ============================================================
   英语单词联想网络  —  你只需要编辑这个文件就能加词！
   ------------------------------------------------------------
   思路：按「意思」联想，而不是按词性。每个概念是一个中心，
        相关的词挂在周围。同一个词出现在多个概念里时，
        它会自动变成连接两团的「桥」（比如 gulp 连「吃」和「喝」）。

   结构：
     "概念名（中文 英文）": {
       related: ["可关联到的其它概念名", ...],   // 可留空 []
       words: [
         ["word", "中文释义；和近义词的区别", "例句（可留空 '')"],
         ...
       ]
     },

   想加新词？复制一段改成你的内容即可。注意：
   - 所有引号用英文 ""，逗号用英文 ,
   - 想让两个词产生联系，只要把它们放进同一个概念，或在 related 里互相写上对方
   - 同名词写在不同概念里 = 自动桥接，不会重复
   ============================================================ */

const DATA = {

  /* ---------- 动作：吃喝 ---------- */
  "吃 eat": { related:["喝 drink","嘴 mouth"], words:[
    ["eat", "吃（通用）", "eat lunch"],
    ["swallow", "吞咽：不嚼直接咽下去", "swallow a pill"],
    ["chew", "咀嚼：用牙磨碎", "chew gum"],
    ["bite", "咬：用牙咬住或咬下一口", "bite an apple"],
    ["gnaw", "啃：持续地咬硬物", "a dog gnawing a bone"],
    ["nibble", "小口啃、一点点咬", "nibble on a biscuit"],
    ["munch", "大声咀嚼、嚼得有声", "munch crisps"],
    ["devour", "狼吞虎咽、吃光", "devour a whole pizza"],
    ["lick", "舔", "lick an ice cream"],
    ["taste", "品尝、尝味道", "taste the soup"],
    ["gulp", "大口吞食", "gulp down food"],
  ]},
  "喝 drink": { related:["吃 eat","容器 cup"], words:[
    ["drink", "喝（通用）", "drink water"],
    ["sip", "小口抿、慢慢喝", "sip hot tea"],
    ["gulp", "大口吞咽（咕咚一下）", "gulp down a glass of water"],
    ["swallow", "咽下去", "hard to swallow"],
    ["slurp", "出声地吸食、唏哩呼噜喝", "slurp noodles"],
    ["taste", "品尝（饮品也用）", "taste the wine"],
  ]},

  /* ---------- 动作：移动 / 感官 ---------- */
  "移动 / 走 move": { related:["路 road"], words:[
    ["walk", "走、步行", "walk to school"],
    ["run", "跑", "run fast"],
    ["jog", "慢跑（健身）", "jog in the park"],
    ["sprint", "短距离冲刺、全力跑", "sprint to the finish"],
    ["stroll", "悠闲地散步", "stroll along the beach"],
    ["wander", "漫步、闲逛（无目的）", "wander around town"],
    ["march", "齐步走、行军", "soldiers marching"],
    ["hike", "徒步、远足", "hike up a mountain"],
    ["crawl", "爬行", "a baby crawling"],
    ["limp", "一瘸一拐地走", "limp after the injury"],
    ["stride", "大步走", "stride confidently"],
    ["climb", "攀爬", "climb a ladder"],
  ]},
  "看 look": { related:["眼睛 eye"], words:[
    ["look", "（主动）看，强调动作", "look at the board"],
    ["see", "看见，强调结果", "I can see the sea."],
    ["watch", "观看会动的东西", "watch a film"],
    ["stare", "盯着看（久、专注）", "stare at the screen"],
    ["glare", "怒视、瞪", "glare angrily"],
    ["glance", "瞥一眼（快、短）", "glance at the clock"],
    ["gaze", "凝视（出神、欣赏）", "gaze at the stars"],
    ["peep", "偷看、窥视", "peep through the keyhole"],
    ["glimpse", "瞥见、一瞥（名/动）", "catch a glimpse of"],
    ["observe", "观察（仔细研究）", "observe behaviour"],
  ]},
  "说 speak": { related:["嘴 mouth"], words:[
    ["say", "说（后接内容）", "say sorry"],
    ["tell", "告诉（后接人）", "tell me a story"],
    ["speak", "讲（语言/正式发言）", "speak French"],
    ["talk", "交谈、聊（双向）", "talk to a friend"],
    ["whisper", "低语、耳语", "whisper a secret"],
    ["shout", "喊、大声叫", "shout for help"],
    ["yell", "吼叫（更激动）", "yell in anger"],
    ["scream", "尖叫", "scream in fear"],
    ["mutter", "嘀咕、小声抱怨", "mutter under one's breath"],
    ["mumble", "含糊不清地说", "mumble an answer"],
    ["argue", "争论、争辩", "argue about money"],
  ]},

  /* ---------- 动作：表情 / 情绪反应 ---------- */
  "笑 laugh": { related:[], words:[
    ["laugh", "（出声）笑", "laugh out loud"],
    ["smile", "微笑（不出声）", "smile at someone"],
    ["giggle", "咯咯地笑、傻笑", "giggle nervously"],
    ["grin", "咧嘴大笑", "grin with joy"],
    ["chuckle", "轻声笑、暗笑", "chuckle quietly"],
    ["smirk", "得意/嘲讽地笑", "smirk smugly"],
    ["beam", "笑容满面", "beam with pride"],
  ]},
  "哭 cry": { related:[], words:[
    ["cry", "哭（通用）", "cry loudly"],
    ["weep", "（默默）流泪、哭泣", "weep for joy"],
    ["sob", "抽泣、啜泣", "sob uncontrollably"],
    ["whimper", "呜咽、低声哭", "whimper in pain"],
    ["wail", "嚎啕大哭、哀号", "wail in grief"],
  ]},

  /* ---------- 动作：手部 ---------- */
  "拿 / 握 hold": { related:["扔 throw","推拉 push / pull"], words:[
    ["hold", "拿着、握住、抱", "hold a cup"],
    ["grab", "抓住（突然、快）", "grab my hand"],
    ["grasp", "紧紧抓住、握牢", "grasp the rope"],
    ["grip", "（用力）握紧", "grip the wheel"],
    ["clutch", "（紧张地）抱紧、攥住", "clutch a bag"],
    ["seize", "夺取、抓住（机会/物）", "seize the chance"],
    ["snatch", "一把夺过、抢", "snatch the phone"],
    ["hug", "拥抱", "hug a friend"],
    ["carry", "搬运、携带（拿着移动）", "carry a bag"],
    ["lift", "举起、抬", "lift a box"],
  ]},
  "扔 throw": { related:["拿 / 握 hold"], words:[
    ["throw", "扔、投（通用）", "throw a ball"],
    ["toss", "轻轻抛、随手扔", "toss a coin"],
    ["hurl", "猛力投掷", "hurl a rock"],
    ["fling", "（用力、随意）甩出", "fling the door open"],
    ["cast", "投、撒（网/钓线，正式）", "cast a net"],
  ]},
  "打 hit": { related:[], words:[
    ["hit", "打、击中（通用）", "hit the target"],
    ["strike", "击打（正式/突然）", "strike a match"],
    ["slap", "扇、掌掴", "slap his face"],
    ["punch", "（用拳）猛击", "punch the bag"],
    ["beat", "（反复）打、揍", "beat a drum"],
    ["knock", "敲（门）", "knock on the door"],
    ["tap", "轻拍、轻敲", "tap on the shoulder"],
    ["smash", "猛砸、砸碎", "smash a window"],
  ]},
  "推拉 push / pull": { related:["拿 / 握 hold"], words:[
    ["push", "推", "push the door"],
    ["pull", "拉", "pull the rope"],
    ["drag", "拖、拽（费力地）", "drag a heavy box"],
    ["shove", "猛推、粗暴地推", "shove someone aside"],
    ["tug", "用力拉一下、拽", "tug at her sleeve"],
    ["lift", "举起、抬", "lift weights"],
    ["carry", "搬运、携带", "carry a bag"],
  ]},
  "切 cut": { related:[], words:[
    ["cut", "切、割（通用）", "cut the cake"],
    ["slice", "切片", "slice bread"],
    ["chop", "剁、砍（用力、成块）", "chop vegetables"],
    ["carve", "雕刻、切（肉）", "carve a turkey"],
    ["trim", "修剪", "trim the hedge"],
    ["peel", "削皮", "peel an apple"],
    ["mince", "切碎、绞碎", "minced meat"],
  ]},

  /* ---------- 动作：头脑 / 休息 ---------- */
  "想 think": { related:[], words:[
    ["think", "想、认为（通用）", "think hard"],
    ["consider", "考虑（经思量）", "consider the options"],
    ["ponder", "沉思、深思", "ponder a question"],
    ["reflect", "反思、回想", "reflect on the past"],
    ["wonder", "想知道、纳闷", "wonder what happened"],
    ["imagine", "想象", "imagine a perfect day"],
    ["guess", "猜测", "guess the answer"],
    ["doubt", "怀疑", "doubt the news"],
  ]},
  "睡 sleep": { related:[], words:[
    ["sleep", "睡觉（通用）", "sleep eight hours"],
    ["nap", "小睡、打盹", "take a nap"],
    ["doze", "打瞌睡（不知不觉）", "doze off"],
    ["slumber", "酣睡（文学）", "deep slumber"],
    ["rest", "休息", "rest for a while"],
    ["yawn", "打哈欠", "yawn sleepily"],
  ]},

  /* ---------- 情绪（形容词）---------- */
  "高兴 happy": { related:["难过 sad"], words:[
    ["happy", "高兴、幸福（通用）", "a happy child"],
    ["glad", "（一时）高兴的", "glad to see you"],
    ["pleased", "满意、欣慰", "pleased with the result"],
    ["delighted", "非常高兴（语气强）", "delighted to help"],
    ["cheerful", "开朗、兴高采烈", "a cheerful mood"],
    ["joyful", "充满喜悦", "a joyful celebration"],
    ["thrilled", "激动、兴奋极了", "thrilled about the trip"],
    ["content", "知足、满足", "content with life"],
  ]},
  "难过 sad": { related:["高兴 happy"], words:[
    ["sad", "难过、伤心（通用）", "feel sad"],
    ["unhappy", "不开心的", "an unhappy marriage"],
    ["upset", "心烦、难受", "upset about the news"],
    ["gloomy", "忧郁、阴沉", "a gloomy mood"],
    ["miserable", "痛苦、悲惨", "feel miserable"],
    ["depressed", "沮丧、抑郁", "deeply depressed"],
    ["sorrowful", "悲伤的（文学）", "a sorrowful song"],
  ]},
  "生气 angry": { related:[], words:[
    ["angry", "生气（通用）", "angry with me"],
    ["annoyed", "恼火、烦", "annoyed by the noise"],
    ["irritated", "被惹恼、不耐烦", "irritated by delays"],
    ["cross", "（口语）生气的", "She's cross with you."],
    ["mad", "（口语）气疯了", "mad at him"],
    ["furious", "暴怒、狂怒", "furious about the lie"],
    ["outraged", "义愤填膺", "outraged by injustice"],
  ]},
  "害怕 afraid": { related:[], words:[
    ["afraid", "害怕（通用，作表语）", "afraid of dogs"],
    ["scared", "（受惊）害怕（口语）", "scared of the dark"],
    ["frightened", "受惊吓的", "frightened by the storm"],
    ["terrified", "极度恐惧（语气强）", "terrified of flying"],
    ["nervous", "紧张、不安", "nervous before the exam"],
    ["anxious", "焦虑、担忧", "anxious about the future"],
    ["panic", "惊慌（名/动）", "panic in the crowd"],
  ]},
  "累 tired": { related:[], words:[
    ["tired", "累（通用）", "feel tired"],
    ["exhausted", "精疲力竭（语气强）", "completely exhausted"],
    ["weary", "疲惫、厌倦", "weary after work"],
    ["sleepy", "困、想睡", "sleepy in class"],
    ["fatigued", "疲劳的（正式/医学）", "physically fatigued"],
  ]},

  /* ---------- 描述（形容词）---------- */
  "大 big": { related:["小 small"], words:[
    ["big", "大（口语、通用）", "a big house"],
    ["large", "大（尺寸/数量，正式）", "a large population"],
    ["huge", "巨大的", "a huge success"],
    ["enormous", "庞大的", "an enormous building"],
    ["giant", "巨型的", "a giant wave"],
    ["massive", "（块头）巨大、沉重", "a massive rock"],
    ["vast", "广阔的（面积）", "a vast desert"],
  ]},
  "小 small": { related:["大 big"], words:[
    ["small", "小（尺寸，通用）", "a small room"],
    ["little", "小、少（带感情）", "a cute little dog"],
    ["tiny", "微小的", "a tiny insect"],
    ["miniature", "微型的", "a miniature model"],
    ["minor", "次要的、轻微的", "a minor problem"],
    ["slight", "细微的、轻微的", "a slight change"],
  ]},
  "漂亮 beautiful": { related:[], words:[
    ["beautiful", "美丽的（通用）", "a beautiful view"],
    ["pretty", "漂亮的（多指女性/小巧）", "a pretty girl"],
    ["handsome", "英俊的（多指男性）", "a handsome man"],
    ["gorgeous", "极美的、惊艳", "you look gorgeous"],
    ["attractive", "有吸引力的", "an attractive design"],
    ["lovely", "可爱、宜人的", "a lovely day"],
    ["stunning", "令人惊叹的美", "a stunning sunset"],
    ["cute", "可爱的", "a cute baby"],
  ]},
  "聪明 clever": { related:[], words:[
    ["clever", "聪明、机灵（反应快）", "a clever idea"],
    ["smart", "聪明的（口语，美式）", "a smart kid"],
    ["intelligent", "有智慧的（正式）", "an intelligent answer"],
    ["bright", "（尤指年轻人）聪明", "a bright student"],
    ["wise", "明智、有阅历的", "a wise decision"],
    ["brilliant", "才华横溢、绝妙", "a brilliant scientist"],
  ]},
  "快 fast": { related:["移动 / 走 move"], words:[
    ["fast", "快（速度，形/副）", "a fast car"],
    ["quick", "快速的（短暂、迅速）", "a quick look"],
    ["rapid", "迅速的（变化/增长）", "rapid growth"],
    ["swift", "敏捷的（书面）", "a swift response"],
    ["speedy", "快速的、迅速的", "a speedy recovery"],
  ]},
  "好 good": { related:["坏 bad"], words:[
    ["good", "好（通用）", "a good idea"],
    ["great", "很棒的", "a great movie"],
    ["excellent", "优秀的、极好的", "excellent work"],
    ["wonderful", "精彩、美好的", "a wonderful time"],
    ["fantastic", "了不起的（口语）", "a fantastic result"],
    ["superb", "一流的、卓越的", "superb quality"],
    ["fine", "不错的、挺好的", "a fine performance"],
  ]},
  "坏 bad": { related:["好 good"], words:[
    ["bad", "坏（通用）", "a bad habit"],
    ["awful", "糟糕的、可怕的", "an awful smell"],
    ["terrible", "很糟、骇人的", "a terrible mistake"],
    ["horrible", "可怕、令人不快的", "horrible weather"],
    ["poor", "差的、质量低的", "poor quality"],
    ["nasty", "讨厌的、恶劣的", "a nasty surprise"],
  ]},

  /* ---------- 物品：穿戴 ---------- */
  "鞋 shoes": { related:["衣服 clothes"], words:[
    ["shoe", "鞋（统称）", "a pair of shoes"],
    ["slipper", "拖鞋、便鞋", "wear slippers at home"],
    ["boot", "靴子", "rain boots"],
    ["sandal", "凉鞋", "summer sandals"],
    ["sneaker", "运动鞋（美式）", "white sneakers"],
    ["trainer", "运动鞋（英式）", "a pair of trainers"],
    ["heel", "高跟鞋", "high heels"],
    ["loafer", "乐福鞋、平底便鞋", "leather loafers"],
  ]},
  "衣服 clothes": { related:["鞋 shoes"], words:[
    ["shirt", "衬衫", "a white shirt"],
    ["coat", "外套、大衣", "a winter coat"],
    ["jacket", "夹克", "a leather jacket"],
    ["sweater", "毛衣", "a wool sweater"],
    ["hoodie", "连帽衫", "a grey hoodie"],
    ["dress", "连衣裙", "a summer dress"],
    ["skirt", "半身裙", "a short skirt"],
    ["trousers", "裤子（英式）", "smart trousers"],
    ["suit", "西装、套装", "a business suit"],
  ]},

  /* ---------- 物品：住与家具 ---------- */
  "房子 house": { related:["家具 furniture"], words:[
    ["house", "房子（独栋）", "a big house"],
    ["home", "家（含归属感）", "go home"],
    ["flat", "公寓（英式）", "rent a flat"],
    ["apartment", "公寓（美式）", "a city apartment"],
    ["cottage", "小屋、村舍", "a country cottage"],
    ["villa", "别墅", "a seaside villa"],
    ["mansion", "豪宅", "a grand mansion"],
    ["cabin", "小木屋", "a log cabin"],
  ]},
  "家具 furniture": { related:["房子 house"], words:[
    ["chair", "椅子", "sit on a chair"],
    ["sofa", "沙发", "a leather sofa"],
    ["stool", "凳子（无靠背）", "a bar stool"],
    ["bench", "长椅", "a park bench"],
    ["table", "桌子", "a dining table"],
    ["desk", "书桌、办公桌", "a writing desk"],
    ["shelf", "架子", "a book shelf"],
  ]},

  /* ---------- 物品：出行 ---------- */
  "路 road": { related:["移动 / 走 move","车 vehicle"], words:[
    ["road", "道路（通用、车行）", "a busy road"],
    ["street", "街道（城市、两旁有房）", "a quiet street"],
    ["path", "小路、小径", "a garden path"],
    ["lane", "小巷、车道", "a country lane"],
    ["avenue", "大街、林荫道", "a tree-lined avenue"],
    ["highway", "公路、干道", "a busy highway"],
    ["trail", "（山野）小道", "a hiking trail"],
    ["alley", "胡同、后巷", "a dark alley"],
  ]},
  "车 vehicle": { related:["路 road"], words:[
    ["car", "小汽车", "drive a car"],
    ["bus", "公交车", "take the bus"],
    ["truck", "卡车（美式）", "a delivery truck"],
    ["lorry", "卡车（英式）", "a heavy lorry"],
    ["van", "厢式货车、面包车", "a delivery van"],
    ["taxi", "出租车", "call a taxi"],
    ["motorcycle", "摩托车", "ride a motorcycle"],
  ]},

  /* ---------- 物品：容器与随身 ---------- */
  "容器 cup": { related:["喝 drink"], words:[
    ["cup", "杯子（带把、喝热饮）", "a cup of tea"],
    ["mug", "马克杯（大、厚）", "a coffee mug"],
    ["glass", "玻璃杯", "a glass of water"],
    ["bottle", "瓶子", "a water bottle"],
    ["jar", "罐子（广口、带盖）", "a jam jar"],
    ["bowl", "碗", "a bowl of soup"],
    ["jug", "水壶、有嘴的罐", "a milk jug"],
    ["kettle", "烧水壶", "boil the kettle"],
  ]},
  "包 bag": { related:[], words:[
    ["bag", "包、袋（通用）", "a shopping bag"],
    ["backpack", "双肩背包", "a school backpack"],
    ["handbag", "手提包（女士）", "a leather handbag"],
    ["suitcase", "行李箱", "pack a suitcase"],
    ["purse", "钱包（美式）/小手袋", "a small purse"],
    ["wallet", "钱夹（男士）", "a leather wallet"],
    ["sack", "麻袋、大袋", "a sack of potatoes"],
  ]},

  /* ---------- 身体部位 ---------- */
  "嘴 mouth": { related:["吃 eat","说 speak"], words:[
    ["mouth", "嘴", "open your mouth"],
    ["lip", "嘴唇", "red lips"],
    ["tongue", "舌头", "stick out your tongue"],
    ["teeth", "牙齿（复数；单数 tooth）", "brush your teeth"],
    ["jaw", "下巴、颌", "a strong jaw"],
    ["throat", "喉咙", "a sore throat"],
    ["gum", "牙龈", "healthy gums"],
  ]},
  "眼睛 eye": { related:["看 look"], words:[
    ["eye", "眼睛", "blue eyes"],
    ["eyebrow", "眉毛", "raise an eyebrow"],
    ["eyelash", "睫毛", "long eyelashes"],
    ["eyelid", "眼皮", "heavy eyelids"],
    ["pupil", "瞳孔（也指学生）", "dilated pupils"],
  ]},

  /* ---------- 自然 / 抽象 ---------- */
  "天气 weather": { related:[], words:[
    ["rain", "雨", "heavy rain"],
    ["drizzle", "毛毛雨", "a light drizzle"],
    ["shower", "阵雨", "a sudden shower"],
    ["snow", "雪", "fresh snow"],
    ["storm", "暴风雨", "a thunderstorm"],
    ["fog", "雾", "thick fog"],
    ["breeze", "微风", "a gentle breeze"],
    ["thunder", "雷", "thunder and lightning"],
  ]},
  "钱 money": { related:[], words:[
    ["money", "钱（统称、不可数）", "earn money"],
    ["cash", "现金", "pay in cash"],
    ["coin", "硬币", "a gold coin"],
    ["note", "纸币（英式；美式 bill）", "a ten-pound note"],
    ["currency", "货币（某国的）", "foreign currency"],
    ["fund", "资金、基金", "raise funds"],
    ["salary", "薪水", "a monthly salary"],
  ]},

};
