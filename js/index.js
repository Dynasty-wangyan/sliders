    function Slide(box,time){
        this.time =time;  //轮播时间
        this.index = 0; //定义一个轮播图片的初始化值、、
        this.isPlay = true ; //定义图片是否轮播
        this.box =$(box);   //获取装图片的大容器
        this.imgBox =this.box.find("ul").eq(0);  //获取轮播图片的容器
        this.pageBox =this.box.find("ul").eq(1); //获取文字区域/按钮的容器
        this.pageLi =this.pageBox.find("li");   //获取文字区域/按钮的li
        this.len =this.pageLi.length;  //获取图片的数量
        this.init();  //该方法会在对象实例化是自动执行
    }
   Slide.prototype ={
       autoMove : function(){ //通过原型添加各种执行功能：自动轮播功能
            var _this = this ;
           if(this.isPlay){
               _this.move();
               _this.index++;
               _this.index %=_this.len;
           }
           setTimeout(function(){ //闭包
               _this.autoMove();
           },_this.time);
       },
       move:function(){  //轮播图切换功能（图片切换，文字样式切换）
           this.imgBox.animate({left:-(this.index * 666)},500);
           this.pageLi.eq(this.index).addClass("active").siblings().removeClass("active");
       },
        hoverEvent :function(){   //定义轮播图悬停停止功能
           var _this = this;
            this.box.hover(function(){
                _this.isPlay =false;
            },function(){
                _this.isPlay = true;
            })
        },
         liEvent :function(){//鼠标悬停切换到指定显示
             var _this =this;
             //console.log(_this);
             _this.pageLi.mouseover(function(){
                 _this.index =$(this).index();
                 _this.move();
             })
         },
          init : function(){
           this.autoMove(); //执行自动轮播切换
           this.liEvent();  //轮播图切换功（图片切换，文字样式切换）
           this.hoverEvent(); //执行鼠标悬停到文字显示对应的图片
       }
   };
    $(".slide").each(function(index,item){
        console.log(item);
        new Slide(item,1000);
    })