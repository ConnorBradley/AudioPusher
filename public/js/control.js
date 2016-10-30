var HTMLheaderName = '<h1 id="name">%data%</h1>';

var formattedName = HTMLheaderName.replace("%data%","Amplifyr");
$("#header").append(formattedName);

var texttosend = "thistexttosend"

function pauseFunc(){

  $.ajax({
    // type: 'POST',
  // make sure you respect the same origin policy with this url:
  // http://en.wikipedia.org/wiki/Same_origin_policy
  // url: 'http://nakolesah.ru/',


    url: '/pause',
    type: "POST",
    data: {
        'roomCode': texttosend
        // 'ca$libri': 'no$libri' // <-- the $ sign in the parameter name seems unusual, I would avoid it
    },
    // data: 'roomCode='+texttosend,
    // processData: false,
    // contentType: false,
    // dataType: "text",

    // data send back from server
    success: function(data){
        console.log('upload successful!\n' + "This is what we received: " + data);
    }

    });

}

function resumeFunc(){

  $.ajax({

    url: '/resume',
    type: "POST",
    data: {
        'roomCode': texttosend
        // 'ca$libri': 'no$libri' // <-- the $ sign in the parameter name seems unusual, I would avoid it
    },
   // data: 'roomCode='+texttosend,
    // processData: false,
    // contentType: false,
    // dataType: "text",

    // data send back from server
    success: function(data) {
        console.log('upload successful!\n' + "This is what we received: " + data);
    }

    });
}
