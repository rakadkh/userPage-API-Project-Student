

let Api;
$("#Load").on("click",function(){
    Api = new APIManager()
})

$("#Display").on("click",function(){
    const Render=new Renderer(Api)
})