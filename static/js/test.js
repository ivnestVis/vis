/**
 * Created by asus on 2018/6/20.
 */
$(function(){
    let $menu = $(".module-menu") ;
    $menu.find("a").click(function(){
        $menu.find("li").removeClass("active");
        $(this).parent().addClass("active");
        let id = $(this).attr("id");
        let path="./"+id+".html"
        window.open(path,"_self")
    }) ;
})
