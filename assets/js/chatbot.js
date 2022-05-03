questionFirst = $('[data-question]:first').attr('data-question');
$('#chatList ul').append('<li class="admin-message">'+questionFirst+'</li>');
$('[data-question]:first').appendTo('.message-box');

$('#send').on('click', function(e){
	
	questionVal = $('.message-box [data-question]').val();
	
	$('#chatList ul').append('<li class="client-message">'+questionVal+'</li>');
	dataName = $('.admin-client-message-wrap [data-name]').attr('data-question');
	
	if($('.message-box [name]').attr('name') == "name"){
		nameVal = $('.message-box [name]').val();
		$('.admin-client-message-wrap [data-name]').attr('data-question', "Hi " +nameVal+",</br>"+dataName );
	}
	
	$('.message-box-wrap .message-box [data-question]').appendTo('.submit_info');
	
	if($('.admin-client-message-wrap').children().length != 0){
		questionFirst = $('[data-question]:first').attr('data-question');
		$('#chatList ul').append('<li class="admin-message">'+questionFirst+'</li>');
		$('[data-question]:first').appendTo('.message-box');
		
		
		//validate email

		$("#email").on("change", function() {
		  email = $(this).val();

		  if (validateEmail(email)) {
		    $(this).css({
		      color: "white",
		      background: "green",
		      border: "1px solid green"
		    });
		  } else {
		    $(this).css({
		      color: "red",
		      border: "1px solid red"
		    });
				
		    alert('Email inválido');
		    return false;
		  }
		});

		function validateEmail(email) {
		  var pattern = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

		  return $.trim(email).match(pattern) ? true : false;
		}
		
		
		
		$('#send').css({"pointer-events":"none"});
		$('.message-box [data-question]').bind('click change keyup', function(e){
			if($(this).val() == ""){
				$('#send').css({"pointer-events":"none"});
			}else{
				$('#send').css({"pointer-events":"auto"});
			}
		});
	}
	
	$('#chatList').animate({scrollTop:5000});
	
});

$('.message-box [data-question]').bind('click change keyup', function(e){
	if($(this).val() == ""){
		$('#send').css({"pointer-events":"none"});
	}else{
		$('#send').css({"pointer-events":"auto"});
	}
});

$('#confirm').on('click', function(e){
	$('#submit').trigger('click');
});

$('#notconfirm').on('click', function(e){
	location.reload();
});

$('.chat_icon').on('click', function(e){
	$('.chatbot-box').toggleClass('active');
});