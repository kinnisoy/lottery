/**
 * 奖品设置
 * type: 唯一标识，0是默认特别奖的占位符，其它奖品不可使用
 * count: 奖品数量
 * title: 奖品描述
 * text: 奖品标题
 * img: 图片地址
 */
const prizes = [
  {
    type: 0,
    count: 1,
    title: "Switch游戏机",
    text: "天马行空奖"
  },
  {
    type: 1,
    count: 30,
    text: "阳光普照奖",
    title: "独角兽公仔",
    img: "../img/secrit.jpg"
  },
  {
    type: 2,
    count: 30,
    text: "阳光普照奖",
    title: "黑骑士丙烯升级套装42色颜料",
    img: "../img/mbp.jpg"
  },
  {
    type: 3,
    count: 20,
    text: "阳光普照奖",
    title: "摇摇杯&饱饱卡(100元)",
    img: "../img/huawei.png"
  },
  {
    type: 4,
    count: 3,
    text: "阳光普照奖",
    title: "BEATS主动降噪蓝牙耳机(1199元)",
    img: "../img/ipad.jpg"
  },
  {
    type: 5,
    count: 20,
    text: "阳光普照奖",
    title: "天马行空音乐节限量文化衫",
    img: "../img/spark.jpg"
  },
  {
    type: 6,
    count: 10,
    text: "阳光普照",
    title: "超市卡(200元)",
    img: "../img/kindle.jpg"
  },
  {
    type: 7,
    count: 30,
    text: "阳光普照奖",
    title: "独角兽公仔(小飞马)",
    img: "../img/edifier.jpg"
  }
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [1, 10, 10, 10, 3, 10, 5, 10];

/**
 * 卡片公司名称标识
 */
const COMPANY = "MoShang";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};
