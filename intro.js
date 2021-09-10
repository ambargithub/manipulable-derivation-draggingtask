d3.select("#button_next").on("click",function(){
    var person = prompt("Please enter your name","");
    if (person != null & person != "") {
        window.open("2_DraggableImages.html","_blank" );

        let temp_data_log = {'event_type':'participant-name', 'name':person};
        $('body').trigger({ 'type': 'data_log_event', 'event_data': temp_data_log }); 
    }

      
  })

  /*************************************/
//Data Log
let data_log = [], data_log_archive = [];

// Data Log Event
$('body').on('data_log_event', function(event){
    data_log.push(event.event_data);
    data_log_archive.push(event.event_data);
})

/*************************************/