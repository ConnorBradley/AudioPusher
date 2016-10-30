$(document).ready( function() {

  var Playing = false;
  var uploaded = false;
    $('.send').on('click', function () {
      if(!uploaded)
      {
        $('#upload-input').trigger('click')
        $("#upload-input").change(function(){
          $('.text').addClass('active');
          $('.send').addClass('active');
          $('.loader').addClass('active');
          $('.send').delay(1700).queue(function () {
              $(this).addClass('finished').clearQueue();
          });
          $('.done').delay(1600).queue(function () {
              $(this).addClass('active').clearQueue();
          });
          uploaded = true;
        });
      }
  });


  $('.upload-btn').on('click', function (){
      $('#upload-input').click();
      $('.progress-bar').text('0%');
      $('.progress-bar').width('0%');
  });


    $("#open-upload-input").click(function(){
      //if class = this do stuff
      if ($('#open-upload-input').hasClass("uploaded")){
        $.ajax({
          url: "/play",
          type: 'POST',
          processData: false,
          contentType: false,
          success: function(result){
          }});
        }
    });

  $('#upload-input').on('change', function(){
    var files = $(this).get(0).files;

    if (files.length > 0){
      // create a FormData object which will be sent as the data payload in the
      // AJAX request
      var formData = new FormData();

      // loop through all the selected files and add them to the formData object
      for (var i = 0; i < files.length; i++) {
        var file = files[i];

        // add the files to formData object for the data payload
        formData.append('uploads[]', file, file.name);
      }

      $.ajax({
        url: '/upload',
        type: 'POST',
        processData: false,
        contentType: false,

        success: function(roomCode) {
          var protocol = window.location.protocol;
          var host = window.location.hostname;
          var port = window.location.port;
          var generatedUrl = "";
          if (port == 80) {
            generatedUrl = protocol + '//' + host + /room/ + String(roomCode);
          }
          else {
            generatedUrl = protocol + '//' + host + ':' + port + /room/ + String(roomCode);
          }
          $('#generatedUrl').append('<h2>' + generatedUrl + '</h2>');

          $('#open-upload-input').addClass("uploaded");
          $('#open-upload-input').removeClass("upload-in-action");

          console.log('upload successful!\n' + generatedUrl);
        },
        xhr: function() {
          // create an XMLHttpRequest
          var xhr = new XMLHttpRequest();

          // listen to the 'progress' event
          xhr.upload.addEventListener('progress', function(evt) {

            if (evt.lengthComputable) {
              // calculate the percentage of upload completed
              var percentComplete = evt.loaded / evt.total;
              percentComplete = parseInt(percentComplete * 100);

              // update the Bootstrap progress bar with the new percentage
              $('.progress-bar').text(percentComplete + '%');
              $('.progress-bar').width(percentComplete + '%');

              // once the upload reaches 100%, set the progress bar text to done
              if (percentComplete === 100) {
                $('.progress-bar').html('Done');
              }

            }

          }, false);

          return xhr;
        }
      });

    }
  });


});
