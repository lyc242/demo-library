const media = [
	{
		title: 'Hop on Pop',
		description: '【经典英文绘本】《Hop on Pop》.',
		type: '图书',
		liClass: 'book',
		contributor: 'Dr. Suess',
		showDetail: false
	},
	{
		title: '欢乐画室',
		description: 'bob可能是这个世界上最快乐的人!',
		type: 'DVD',
		contributor: 'Bob Ross',
		showDetail: false
	},
	{
		title: '邪恶力量第十二季',
		description: '一部（几乎）停不下来的路程.',
		type: 'DVD',
		contributor: '',
		showDetail: false
	},
	{
		title: '行星地球 II',
		description:
			'曾经惊艳世人的纪录片《地球脉动》，再次由来自BBC的制作团队倾力奉献出最新的第二季。',
		type: '流媒体',
		liClass: 'streaming',
		contributor: '戴维·阿滕伯勒',
		showDetail: false
	},
	{
		title: '泰坦尼克号',
		description: '船沉了.',
		type: 'DVD',
		contributor: '詹姆斯·卡梅隆',
		showDetail: false
	},
	{
		title: '泰坦星的海妖',
		description:
			'溫斯頓‧奈爾斯‧倫法德承著他的太空船進入漏斗狀時間地區後，就以波動的方式存在，直到被地球或其他星球攔截為止，所以他每隔五十九天，就會在地球的羅德島新港市顯形一小時。',
		type: '图书',
		liClass: 'book',
		contributor: 'Kurt Vonnegut',
		showDetail: false
	},
	{
		title: '风骚律师',
		description: '本剧为《绝命毒师》的前传，讲述律师Saul Goodman的故事',
		type: '流媒体',
		liClass: 'streaming',
		contributor: '',
		showDetail: false
	},
	{
		title: 'Title 1',
		description: '一个空的电子书模板.',
		type: 'e-book',
		contributor: '',
		showDetail: false
	},
	{
		title: 'Title 2',
		description: '一个空的电子书模板.',
		type: 'e-book',
		contributor: '',
		showDetail: false
	}
];

const app = new Vue({
	el: '#media-list',
	data: {
		title: '海圈市图书馆',
		mediaList: media,
		type: ''
	},
	methods: {
		toggleDetails: function(media) {
			media.showDetail = !media.showDetail;
		},
		filterList: function(event) {
			this.type = event.target.value;
		}
	},
	computed: {
		uniqueItemsList: function() {
			const types = [];
			this.mediaList.forEach(item => {
				if (!types.includes(item.type)) {
					types.push(item.type);
				}
			});
			return types;
		}
	}
});
