(function(window,jQuery,undefined){
    var HTMLS = {
        boxDom : '<div class="winpop-mask" ></div>' + '<div class="winpop-main" id="J_WinpopMain">' + '<p class="winpop-content">' + '</p><div class="winpop-btns">' + '</div></div>'
        ,alert : ' <button class="pop-btn alert-btn">确定</button>'
        ,confirm : '<button class="pop-btn confirm-false">取消</button><button class="pop-btn confirm-true">确定</button>'
    }
    
    function Winpop(){
        // var config = {}
        // this.set = function(k,v){
        //     config[k] = v;
        // },
        // this.get = function(k){
        //     return config[k];
        // }
        this.config = {}
        this.init();
    }
    Winpop.prototype = {
        constructor : Winpop,
        init : function(){
            // alert(1
            this.createDom();
            this.bindEvent();
        },
        createDom : function(){
            var body = jQuery('body');
            var ovl = jQuery('#J_WinpopMain');
            //确保目前没有 
            if (ovl.length === 0) {
                body.append( HTMLS.boxDom );
                // console.log( HTMLS.ovl )
            }
            this.set('ovl' , jQuery('#J_WinpopMain') );
            this.set('mask' , jQuery('.winpop-mask'));
        },
        bindEvent : function(){
            var _this = this;
            var ovl = _this.get('ovl');
            
            ovl.on('click', '.alert-btn', function(event) {
                _this.hide();
            }).on('click', '.confirm-false', function(event) {
                _this.hide();
                var cb = _this.get('confirmCb');
                cb && cb(false);
            }).on('click', '.confirm-true', function(event) {
                _this.hide();
                var cb = _this.get('confirmCb');
                cb && cb(true);
            });

        },
        alert : function(str,btnStr){
            // alert(str);
            var str = typeof str === 'string' ? str : str.toString();
            var ovl = this.get('ovl');

            this.set('type','alert');
            ovl.find('.winpop-content').html( str );
            
            if( typeof btnStr == 'undefined' ){
                ovl.find('.winpop-btns').html( HTMLS.alert );
            }else{
                ovl.find('.winpop-btns').html( btnStr );
            }
            this.show();
        },
        confirm : function(str,cb){
            // confirm('dddd')
            

            var str = typeof str === 'string' ? str : str.toString();
            var ovl = this.get('ovl');

            this.set('type','confirm');
            ovl.find('.winpop-content').html( str );
            ovl.find('.winpop-btns').html( HTMLS.confirm );

            /* 未考虑cb 不存在的情况 */
            this.set('confirmCb', ( cb || function(){} ) );

            this.show()
            
        },
        set : function(k,v){
            this.config[k] = v;
        },
        get : function(k){
            return this.config[k];
        },
        show : function(){
            this.get('ovl').show();
            this.get('mask').show();
        },
        hide : function(){
            var ovl = this.get('ovl');
            ovl.find('.winpop-content').empty();
            ovl.find('.winpop-btns').empty();
            ovl.hide();
            this.get('mask').hide();
        },
        destroy : function(){
            this.get('ovl').remove();
            this.get('mask').remove();
            delete window.myAlert
            delete window.myConfirm
        }
    }

    var obj = new Winpop();
    window.myAlert = function(str){
        obj.alert(str);
    }
    window.myConfirm = function(str,cb){
        obj.confirm(str,cb)
    }
})(window,jQuery)