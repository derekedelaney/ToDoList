$(document).ready(function(){
    $("ol").keyup(function(){
        $("li").keyup(addItem);
    });
});

function addItem(event){
    if(event.keyCode == 8 && $(this).children().val() === "" && $(this).next().is("li")){
        $(this).remove();
        return;
    }
    if(!$(this).next().is("li") && event.keyCode !== 8)
        $("ol").append('<li class="listItem"><input type="text" placeholder="Finish ToDo List"></li>');
}
