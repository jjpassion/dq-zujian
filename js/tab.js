define(['jquery'],function($){

var s = 'ddddd ';
console.log( '==',s.trim(),'ddd' )


/*
 Tab 组件

 html:
 <div class="js-tab">
     <div class="tab">
         <div class="js-tab-item">Tab-0</div>
         <div class="js-tab-item">Tab-1</div>
         <div class="js-tab-item">Tab-2</div>
     </div>

     <div class="js-tab-content"></div>
     <div class="js-tab-content"></div>
     <div class="js-tab-content"></div>
 </div>

 js-tab-item 与 js-tab-content 需要放置在 js-tab 下
 */
var NOOP            = function(){ return true; }; //空函数 返回true
var TAB_PREFIX      = 'tab-'; // tab前缀
var defaultConfig   = {
    autoInit : true //TODO:need to remove
    , rememberState : false
    , stateName : 'state'
    , event : 'click'
    , tab : '.js-tab'
    , 'tab-item' : '.js-tab-item' // tab 按钮
    , content : '.js-tab-content' //tab 对应内容
    , activeClass : 'active'
    , beforeChange : NOOP
    , afterChange : NOOP
};
var needFixedProps  = ['tab','tab-item','content','activeClass']
var rhash           = /#.*$/


function Tab( config ){
    this.init( this.config = config );
}

Tab.prototype = {
    constructor : Tab

    , init : function( config ){
        this.fixClass( config )

        var $p        = $( config.tab ) //获取最外层节点
        var $tabs     = $p.find( config[ 'tab-item' ] ) //tab items
        var $contents = $p.find( config.content )
        var stName    = config.stateName
        var _this     = this,
        var $curTab, $hashTab, $curContent

        if( config.autoInit ){
            $hashTab = this.getHashTab( $tabs );
        }

    }




    //防止 class 的.没写,先统一加上再去掉
    , fixClass : function( config ){
        needFixedProps.map(function( value ) {
            config[ value ] = ( value = config[value].trim() ).indexOf('.') == 0 ? value : ( '.' + value )
        });

        config.activeClassValue = config.activeClass.substring( 1 );
    }
    ,getHashTab : function( $tabs ){
        var hash = location.hash,
            config = this.config

        if( hash ){
            
            hash = hash.slice(1);

        }
    }



}



});