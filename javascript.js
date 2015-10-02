$(document).ready(function(){
    $("ol").keyup(function(){
        $("li").keyup(addItem);
    });
});

function addItem(event){
    if(event.keyCode == 8 && $(this).children().val() === ""){
        $(this).remove();
        return;
    }
    if(!$(this).next().is("li"))
        $("ol").append('<li class="listItem"><input type="text"></li>');
}
