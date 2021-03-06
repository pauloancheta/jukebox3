// Your code goes here.

$(document).ready(function(){
  $('body').submit(function(event) {
    event.preventDefault()
  });

  var songs = [];
  var empty = '';

  $('#song-form input[type="submit"]').on('click', function(){
    var song = $('#songString').val();
    songs.push(song);

    var songName = $('#songName').val();


    $('#song-queue').append( '<li>' +  songName + ' <span>' + song + '</span></li>' );
    $('span').hide();
    $('#song-form input[type="text"]').val('');
  });

  $('#play-button').on('click', function() {
    $(this).slideUp();
    $('li').eq(0).append(' Now Playing...');

    playSong(parseSong(songs[0]), 300, function(){
      songs.shift();
      $('#play-button').slideDown();
      $('li').eq(0).remove();
    });
  });

  $('ul').on('mouseenter','li', function() {
    $('span').eq( $(this).index() ).fadeIn(); 
  });

  $('ul').on('mouseleave', 'li', function() {
    $('span').fadeOut();
  });



});