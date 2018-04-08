$(document).ready(function () {
    var ch=$(document).height();
    $('.main-box').css('height',ch-130+'px');
    $('.main-left').css('min-height',ch+'px');
    $('.main-right').css('height',ch+'px');
    //Person-panel.html
    $('.top-list').click(function(){
        $('.top-list').removeClass('cur');
        $(this).addClass('cur');
    });
    $('.btn-list').click(function () {
        $('.btn-list').removeClass('cur');
        $(this).addClass('cur');
    })
    //person-panel.html 编辑
    $('.edit-btn').click(function(){
        var tds=$('tr').children('.td-input');
        var tdarr=[];
        for(var i=0;i<tds.length;i++){
            tds[i].index=i;
            tdarr.push(tds.eq(i).html());
        }
        tds.html('<input type="text"/>');
        var inputs=tds.children('input');
        for(var j=0;j<inputs.length;j++){
            inputs[j].index=j;
            inputs.eq(j).val(tdarr[j]);
        }
    })
    //person-panel.html 提交
    $('.tj-btn').click(function(){
        var tds=$('tr').children('.td-input');
        var input1=$('.td-input').children('input');
        var inputarr=[];
        for(k=0;k<input1.length;k++){
            input1[k].index=k;
            inputarr.push(input1.eq(k).val());
            tds.eq(k).html(inputarr[k])
        }
    })
    //Driving-list
    $('.look-btn-ling').click(function () {
        location.href='../Driving-management/Audit-information.html'
    })
    var btnstate =0;
    $('.edit-btn1').click(function(){
        var tds=$(this).parents('tr').children('.td-input');
        var str = $(this).text() == '修改' ? '提交':'修改';
        if($(this).text() == '修改'&&btnstate==0){
            btnstate = 1;
            $(this).html(str);
            var tdarr=[];
            for(var i=0;i<tds.length;i++){
                tds[i].index=i;
                tdarr.push(tds.eq(i).html());
            }
            tds.html('<input type="text"/>');
            var inputs=tds.children('input');
            for(var j=0;j<inputs.length;j++){
                inputs[j].index=j;
                inputs.eq(j).val(tdarr[j]);
            }
        }else if($(this).text() == '提交'){
            btnstate=0;
            var input1=$('.td-input').children('input');
            var inputarr=[];
            for(k=0;k<input1.length;k++){
                input1[k].index=k;
                inputarr.push(input1.eq(k).val());
                tds.eq(k).html(inputarr[k])
            }
            $(this).html(str);
        }
        console.log(btnstate)
    })
    //全选 取消
    $('.page-all span').click(function () {
        $('.page-all span').removeClass('cur');
        $(this).addClass('cur');
        if($(this).text()=='全选'){
            console.log(1);
            $("input[type='checkbox']").attr('checked','checked');
        }else{
            console.log(2);
            $("input[type='checkbox']").removeAttr('checked');
        }
    })
    //点击弹窗的link
    $('.link-list').click(function(){
        var id=$(this).children('.link-img').attr('id');
        reloadimg();
        $(this).children('.link-img').children('img').attr('src','../images/'+id+'cur.png');
        $(this).css('background','url("../images/Light.png") no-repeat center 46px');
    })
    //重置图片
    function reloadimg(){
        $('.link-img').each(function(index){
            var vid = $(this).attr('id');
            $(this).children('img').attr('src','../images/'+ vid +'.png')
        });
        $('.link-list').css('background','none');
    }
    //左侧导航栏
    $('.cur-list').click(function(){
        $('.cur-list').removeClass('cur');
        $(this).addClass('cur');
    })
    //Driving-adv.html
    $('.look-btn1').click(function(){
        $('.mask-box').show();
        $('.Application-Details').show();
    })
    $('.appli-close').click(function(){
        $('.mask-box').hide();
        $('.Application-Details').hide();
    })
    $('.mask-box').click(function(){
        $('.mask-box').hide();
        $('.Application-Details').hide();
    })
    $('.confim-btn').click(function(){
        $('.mask-box').hide();
        $('.Application-Details').hide();
    })
    //chose-city.html
    $('.sc-close').click(function(){
        $('.search-city').hide();
    })
    $('.search-btn').click(function(){
        $('.search-hide').hide();
        $('.search-result').show();
    })
    $('.seresu-btnlist').click(function(){
        $('.search-city').hide();
    })
    //chose-city.html
    $('.citycon-check input[type=checkbox]').click(function(){
        $('.search-city').show();
    })
    $('.cur-loc select').click(function(){
        $('iframe').attr('src','../chose-city.html');
    })
    $('.city-con-all p i').click(function(){
        var html=$(this).text();
        window.parent.$('.cur-loc select option').html(html);
    })
})
