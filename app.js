var app = {
    title: "Hardware Enjoy",
    events: [],
    init: function () {
        $("#title").html(app.title);
        app.load();
    },
    load: function () {
        $.ajax(
            {
                url: "./data.json",
                method: "get",
                dataType: "json",
            }
        ).done(app.onSuccess).fail(app.onError);
    },
    onSuccess: function (jsonData) {
        console.log(jsonData);
        app.events = jsonData.events;
        app.hardwareList = jsonData.hardwareList;
        app.writelist();

    },
    onError: function (error) {
        console.log("ERROR !! Cause is " + error);
    },
    writelist: function () {
        var str = "";
        for (i = 0; i < app.hardwareList.length; i++) {
            str += '<img src="immagini/' + app.hardwareList[i].imgUrl + '" >';

        }
        $("#menu").html(str);
    }


}
$(document).ready(app.init);
