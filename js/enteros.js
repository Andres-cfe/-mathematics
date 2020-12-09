jQuery(document).ready(function($){

var data = [];
	//-----------------------------------------------------
	//--------	DETERMINAR TIPO DE OPERACION  -------------
	//-----------------------------------------------------
	$(".btn-operacion").click(function(){
	  
	  //validar si usuario esta logeado ya

	  	$('.dashboard').hide(300);
	  	$('.descripcion').show(300);


		var tipo = $(this).attr('data');
		 var res = tipo.split('-');
		 $('#tipoOperacionlab').val(res[0]);
		 $('#modelo').val(res[1]);
	  	switch(tipo) {
		  case 'suma-enteros':
		    //titulo
		    $('.descripcion .title').html('Suma de enteros');
		    $('#tipoOperacion').html('<strong>+</strong>');
		    break;
		  case 'suma-decimales':
		    //titulo
		    $('.descripcion .title').html('Suma de decimales');
		    $('#tipoOperacion').html('<strong>+</strong>');
		    break;
		  case 'resta-enteros':
		    //titulo
		    $('.descripcion .title').html('Resta de decimales');
		    $('#tipoOperacion').html('<strong>-</strong>');
		    break;
		  case 'resta-decimales':
		    //titulo
		    $('.descripcion .title').html('Resta de decimales');
		    $('#tipoOperacion').html('<strong>-</strong>');
		    break;
		  default:
		    // code block
		}
	});


	//-----------------------------------------------------
	//--------	BOTON REGRESAR A MENU ANTERIOR  -------------
	//-----------------------------------------------------
	$("#btn-regresar").click(function(){
		$('.dashboard').show(300);
		$('.descripcion').hide(300);
		$('.desarrollo').hide(300);
		$('.instrucciones').hide(300);
		$( ".numero" ).each(function() {
			$(this).val('');
		});
		$('#resultado').val('');
	});



	//-----------------------------------------------------
	//-----------	REALIZAR OPERACIONES  -----------------
	//-----------------------------------------------------
	$("#btnoperar").click(function(){

		var operacion = $('#tipoOperacionlab').val();
		var categoria = $('#modelo').val();
		var resultado = 0;
		var val;
		var num = [];

		$( ".numero" ).each(function() {
			if ($(this).val() != '') {

				num.push($(this).val());
			}
		});

		if (num.length <= 1) {
			$('.desarrollo').hide(300);
			$('.instrucciones').hide(300);
		}else {
			$('.desarrollo').show(300);
			$('.instrucciones').show(300);
		}


		switch(operacion) {
		  case 'suma':
		  	$( ".numero" ).each(function() {
		  		if ($(this).val() == '') {
		  			var val = 0;
		  		}else{
		  			var val = $(this).val();
		  		}
		  		resultado = resultado + parseFloat(val);
		  		
			});

		    $('#resultado').val(resultado);
		    if(categoria == 'enteros'){
				$('.numone').html(Math.round($('#firstnumber').val()));
		    	$('.numtwo').html(Math.round($('#secondnumber').val()));
		    	$('.numresul').html(Math.round(resultado));
		    	$('.operacion-desglosada').addClass('text-right').removeClass('text-left');
		    }else {
				$('.numone').html($('#firstnumber').val());
		    	$('.numtwo').html($('#secondnumber').val());
		    	$('.numresul').html(resultado);
		    	$('.operacion-desglosada').addClass('text-left').removeClass('text-right');
		    }
		    
		    $('.simbol').html('+');
		    
		    extractIntrucciones(operacion,categoria);
		    break;
		  case 'resta':
		  	resultado = num.reduce(myFunc);
			function myFunc(total, num) {
			  return total - num;
			}

		    $('#resultado').val(resultado);
		    $('.numone').html($('#firstnumber').val());
		    $('.simbol').html('-');
		    $('.numtwo').html($('#secondnumber').val());
		    $('.numresul').html(resultado);
		    extractIntrucciones('resta');
		    console.log(data) 
		    break;
		   case 'multiplicacion':



		   break;
		  default:
		    // code block
		}




	});


	function extractIntrucciones(operador,categoria){
		var tipo = operador+'_'+categoria;
		//console.log(tipo);
		 $.getJSON("./json/instrucciones.json", function(result){
		    $.each(result, function(i, field){
		    	if(i == tipo){
		    	data = field;
		    	}
		      
		    });
		   	$('.instrucciones').empty();
			$.each(data, function(i, val){
				$('.instrucciones').append('<p>'+val+'</p>');
			});

		  });
		 
		 
	}

});