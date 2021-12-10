function fs(){
    var ui_w=100;//ui给的字体大小
    //获取屏幕的可视宽度
    var clientWidth=document.documentElement.clientWidth||document.body.clientWidth
    console.log(ui_w,clientWidth);

    //通过js动态改变html根节点字体大小
    var html_=document.getElementsByTagName('html')[0]
    html_.style.fontSize=(clientWidth/ui_w)*2+'px'
}
window.onresize = fs;