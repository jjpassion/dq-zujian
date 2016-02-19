
// require.config({
// 	//通过paths的配置会使我们的模块名字更精炼，paths还有一个重要的功能，就是可以配置多个路径，如果远程cdn库没有加载成功，可以加载本地的库
	
// 	 paths : {
//         // "jquery" : ["http://libs.baidu.com/jquery/2.0.3/jquery","js/jquery"]
//         "jquery" : ["js/jquery"]
//     }
// })

//在使用requirejs时，加载模块时不用写.js后缀的，当然也是不能写后缀
define(['jquery','test'],function($,test){

	console.log( $('body').html()  )
	console.log( test.init() )

})