function sendcap(key){
    $.ajax({
        url: '/loadsitephp/load.php',
        type: "POST",
        data: {googlekey: key,ch: "0"},
        dataType: "json",
        success: function (data) {
            if(data.good == 1)
            {
                location.reload();
            } else alert("Ошибка прохождения Каптчи!");
        }
    });
}
function checks(){
    var result;
    $.ajax({
        url: '/loadsitephp/load.php',
        async: false,
        type: "POST",
        data: {ch: "1",width: window.screen.width,height: window.screen.height},
        dataType: "json",
        success: function (data) {
            if(data.good == 1)
            {
                result = data.ret;
            } else alert("Ошибка");
        }
    });
    return result;
}
$(window).load(function () {
    //$('.center').show();
    power(1);
});
function power(test)
{
    let progress = test;
    progress+=2;
    if(progress > 99)
    {
        if(checks() == 1)
        {
            $('.recaprha').show();
            grecaptcha.execute();
            return true;
        } else location.reload();
        return true;
    }
    setTimeout(function () { power(progress); }, 65);
}
