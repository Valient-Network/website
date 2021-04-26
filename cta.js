$(function() {
  $( "#button" ).click(function() {
    $( "#button" ).addClass( "onclic", 250, validate);
  });

  function validate() {
    setTimeout(function() {
      $( "#button" ).removeClass( "onclic" );
      $( "#button" ).addClass( "validate", 450, callback );
      var $temp = $("<input>");
      $("body").append($temp);
      $temp.val($(element).text()).select();
      document.execCommand("copy");
      $temp.remove();
    }, 2250 );
  }
    function callback() {
      setTimeout(function() {
        $( "#button" )
        window.location.href = 'https://discord.gg/TTssvR7W3x';
      }, 1250 );
    }
  });
