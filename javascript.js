$(document).ready(function(){
    $("ol").keyup(function(){
        $("li").keyup(addAndRemoveItem);
    });

    $("button").click(toggleButton);

    $("#editButton").click(function() {
        $("ol").replaceWith($('<ul>'+$("ol").html()+'</ul>'));
        $('<input class="checkbox" type="checkbox">').prependTo('li');
    });

    $("#deleteButton").click(function() {
        $("ul").replaceWith($('<ol>'+$("ul").html()+'</ul>'));
        $(".checkbox").remove();
    });

});

function addAndRemoveItem(event){
    if(event.keyCode == 8 && $(this).children().val() === "" && $("li").size() !== 1){
        $(this).prev().children().focus();
        $(this).remove();

        return;
    }
    if(!$(this).next().is("li") && event.keyCode !== 8 && event.keyCode === 13){
        $("ol").append('<li class="listItem"><input class="textField" type="text"></li>');
        $(this).next().children().focus();
    }
}

function toggleButton(){
    $("button").toggleClass("hidden");
}
