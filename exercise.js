$(document).ready(function()
{
    //click

    // $("p").click(function()
    // {
    // $(this).hide();
    // });

    //mouseenter
    // $("p").mouseenter(function()
    // {
    //     $(this).hide();
    // });
    // $("p").mouseleave(function()
    // {
    //     $("p").show();
    // });

    //focus and blur
    // $("input").focus(function()
    // {
    //     $(this).css("background-color","green");
    // });
    // $("input").blur(function()
    // {
    //     $(this).css("background-color","blue");
    // });


    //fruits animals list
    
    // function showDiv(val)
    // {
    //     if(val == 1)
    //     {
    //         var list = "<ul><li>Apple</li><li>Grapes</li><li>Orange</li></ul>";
    //         $("p").html(list);
    //     }
    //     else if(val == 2)
    //     {
    //         var list = "<ul><li>Cat</li><li>Dog</li><li>Cow</li></ul>";
    //         $("p").html(list);
    //     }
    // }
    // $("input[value = 'Fruits']").click(function(){
    //     showDiv(1);
    // });
    // $("input[value = 'Animals']").click(function(){
    //     showDiv(2);
    // });

    function showDiv(val)
    {
        if(val == 1)
        {
            var list = "<ul><li>Apple</li><li>Grapes</li><li>Orange</li></ul>";
            $("p").html(list);
            $("p").show();
        }
        else if(val == 2)
        {
            var list = "<ul><li>Cat</li><li>Dog</li><li>Cow</li></ul>";
            $("p").html(list);
            $("p").show();
        }
    }
    $("input[type = 'checkbox']").change(function()
    {
        if($(this).val() == 'fruits')
        {
            if($(this).prop('checked') == true)
                showDiv(1);
            else if($(this).prop('checked') == false)
                $("p").hide();
        }
        if($(this).val() == 'animals')
        {
            if($(this).prop('checked') == true)
                showDiv(2);
            else if($(this).prop('checked') == false)
                $("p").hide();
        }
    });
});

//when it comes to radio button type = radio and name = give same name for all the radio