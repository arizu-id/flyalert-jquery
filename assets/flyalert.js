function flyalertClose(){
    $(".flyalert").empty();
}
function flyalert(title,description,type='warning',time='5'){
    $(".flyalert").empty();
    var flyalert_id = Math.floor(Math.random() * 10000);
    var flyalert_html = "<div class='flyalert flyalertid-"+flyalert_id+"'><div class='title "+type+"-title'><div class='title-text'>"+title+"</div><div class='title-closebutton' onclick='flyalertClose()'>&#x2715;</div></div><div class='description "+type+"-description'>"+description+"</div><div class='loadingbar'><div style='height:2px;animation-name: flyalert-loadingbar;-webkit-animation-name: flyalert-loadingbar;animation-duration: "+time+"s; animation-direction: alternate;' class='"+type+"-loadingbar'></div></div>";
    $(document.body).append(flyalert_html);
    var closetime = time*1000;
    //console.log("alert flyalertid-"+flyalert_id+" will close after "+closetime+" ms")
    setTimeout( function(){ 
        $(".flyalertid-"+flyalert_id).children().fadeOut(1000, function() {
            $(".flyalertid-"+flyalert_id).hide();
        });
    },closetime );
}
