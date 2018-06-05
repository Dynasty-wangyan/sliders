    function Slide(box,time){
        this.time =time;  //�ֲ�ʱ��
        this.index = 0; //����һ���ֲ�ͼƬ�ĳ�ʼ��ֵ����
        this.isPlay = true ; //����ͼƬ�Ƿ��ֲ�
        this.box =$(box);   //��ȡװͼƬ�Ĵ�����
        this.imgBox =this.box.find("ul").eq(0);  //��ȡ�ֲ�ͼƬ������
        this.pageBox =this.box.find("ul").eq(1); //��ȡ��������/��ť������
        this.pageLi =this.pageBox.find("li");   //��ȡ��������/��ť��li
        this.len =this.pageLi.length;  //��ȡͼƬ������
        this.init();  //�÷������ڶ���ʵ�������Զ�ִ��
    }
   Slide.prototype ={
       autoMove : function(){ //ͨ��ԭ����Ӹ���ִ�й��ܣ��Զ��ֲ�����
            var _this = this ;
           if(this.isPlay){
               _this.move();
               _this.index++;
               _this.index %=_this.len;
           }
           setTimeout(function(){ //�հ�
               _this.autoMove();
           },_this.time);
       },
       move:function(){  //�ֲ�ͼ�л����ܣ�ͼƬ�л���������ʽ�л���
           this.imgBox.animate({left:-(this.index * 666)},500);
           this.pageLi.eq(this.index).addClass("active").siblings().removeClass("active");
       },
        hoverEvent :function(){   //�����ֲ�ͼ��ֹͣͣ����
           var _this = this;
            this.box.hover(function(){
                _this.isPlay =false;
            },function(){
                _this.isPlay = true;
            })
        },
         liEvent :function(){//�����ͣ�л���ָ����ʾ
             var _this =this;
             //console.log(_this);
             _this.pageLi.mouseover(function(){
                 _this.index =$(this).index();
                 _this.move();
             })
         },
          init : function(){
           this.autoMove(); //ִ���Զ��ֲ��л�
           this.liEvent();  //�ֲ�ͼ�л�����ͼƬ�л���������ʽ�л���
           this.hoverEvent(); //ִ�������ͣ��������ʾ��Ӧ��ͼƬ
       }
   };
    $(".slide").each(function(index,item){
        console.log(item);
        new Slide(item,1000);
    })