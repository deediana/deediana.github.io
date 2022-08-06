$(document).ready(
    function(){
        $("#view_button").click(getData);
});

function getData(){
    getPicture();
    getTitle();;
}

function getPicture(){
    $.ajax({
        url: "https://api.nasa.gov/planetary/apod",
        type: "GET",
        data: { api_key: "DEMO_KEY",
                date: $("#date").val()},
        dataType: "json",
        "success": showPicture,
        "error": noPicture
        });
    };

    function showPicture(data){
        $("#pic").attr("src", data.url);
    };

    function noPicture(error){
        alert(error.responseText);
    };

function getTitle(){
    $.ajax({
        url: "https://api.nasa.gov/planetary/apod",
        type: "GET",
        data: { api_key: "DEMO_KEY",
                date: $("#date").val()},
        dataType: "json",
        "success": showTitle,
        "error": noTitle
            });
        };

    function showTitle(data){
        document.getElementById("about").textContent = "";
        $("#about").append("Title : "+ data.title);    
    };

    function noTitle(error){
        alert(error.responseText);
    };