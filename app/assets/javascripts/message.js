$(function(){
  function buildHTML(message){
  if ( message.image ) {
    var html =
     `<div class="message">
        <div class="upper_info">
          <div class="message_upper_info_talker">
            ${message.user_name}
          </div>
          <div class="message_upper_info_date">
            ${message.created_at}
          </div>
        </div>
        <div class="message_text">
          <p class="message_text">
            ${message.content}
          </p>
        </div>

        <img src=${message.image} >
      </div>`
    return html;
  } else {
    var html =
     `<div class="message">
        <div class="upper_info">
          <div class="message_upper_info_talker">
            ${message.user_name}
          </div>
          <div class="message_upper_info_date">
            ${message.created_at}
          </div>
        </div>
        <div class="message_text">
          <p class="message_text">
            ${message.content}
          </p>
        </div>
      </div>`
    return html;
  };
}
$('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      $('.submit-btn').val("Send")
      var html = buildHTML(data);
      $('.messages').append(html);
      $('form')[0].reset();
      $('.chat-main').animate({ scrollTop: $('.chat-main')[0].scrollHeight});
      $('input').prop('disabled', false);
    })
    .fail(function() {
      alert('メッセージ送信に失敗しました。')
    });
  });
});