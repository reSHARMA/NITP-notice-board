var data = '';
$.ajax({
  type: 'GET',
  url: 'https://nitp-api.herokuapp.com/',
  data: null,
  dataType: 'json',
  success: function(response) {
    var i=1;
    while(response[i]!=undefined){
   // console.log(response[i]);
      var temp = '<div class="data"><a href="'+response[i].link+'" target="_blank">'+response[i].head+'</a></div>';
      //data = data + temp;
         $('.data-wrap').append(temp);
      i++;
    }
  // $('.data-wrap').html(data);
 },
  error: function(error) {
    console.log('ERROR:', error);
}
});
