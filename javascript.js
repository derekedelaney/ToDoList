$(document).ready(function(){
    $("ol").keyup(function(){
        $("li").keyup(addAndRemoveItem);
    });

    $("button").click(toggleButton);

    $("#editButton").click(function() {
        $("ol").toggleClass("edit");
        $('<input class="checkbox" type="checkbox">').prependTo('li');
    });

    $("#deleteButton").click(function() {
        // remove checked items
        $(":checked").parent().remove();

        $("ol").toggleClass("edit");
        $(".checkbox").remove();

        // Check if all have been removed. If so, add a new line.
        if(!$("ol").children().is("li")){
             $("ol").append('<li class="listItem"><input class="textField" type="text"></li>');
        }
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

