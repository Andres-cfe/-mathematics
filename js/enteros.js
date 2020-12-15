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
		    $('.numero').keypress(decimal);
		    $('.descripcion .title').html('➤ Suma de enteros');
		    $('#tipoOperacion').html('<strong>+</strong>');
		    
		    break;
		  case 'suma-decimales':
		    //titulo
		    $('.numero').off('keypress');
		    $('.descripcion .title').html('➤ Suma de decimales');
		    $('#tipoOperacion').html('<strong>+</strong>');
		    break;
		  case 'resta-enteros':
		    //titulo
		    $('.numero').keypress(decimal);
		    $('.descripcion .title').html('➤ Resta de decimales');
		    $('#tipoOperacion').html('<strong>-</strong>');
		    break;
		  case 'resta-decimales':
		    //titulo
		    $('.numero').off('keypress');
		    $('.descripcion .title').html('➤ Resta de decimales');
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
		var res = [];
		var res1= [];
		var res2= [];
		var res3= [];		
		var t_res;

		$('.ejemplo').empty();

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
			var num1=$('#firstnumber').val();
			var num2=$('#secondnumber').val();
			
		    
		    if(categoria == 'enteros'){
		    	
		    	$('#resultado').val(Math.round(resultado));
		    	var num3=$('#resultado').val();
		    	$('.operacion-desglosada').addClass('text-right').removeClass('text-left');
		    	
		    	res1 = num1.split("");
		    	res2 = num2.split("");
		    	res3 = num3.split("");
		    	var numpri;
		    	var s_res;

		    	$.each(res1, function(i, val){
					$('.numone').append('<button type="button" class="btn numero mr-1" disabled><b>'+val+'</b>');				
				});
		    	$.each(res2, function(i, val){
					$('.numtwo').append('<button type="button" class="btn numero mr-1" disabled><b>'+val+'</b>');				
				});
		    	$.each(res3, function(i, val){
					$('.numresul').append('<button type="button" class="btn numero mr-1" disabled><b>'+val+'</b>');				
				});

				  var newnumone = [];
				  if(res1.length >= res2.length){
				    numpri = res1;
				  }else{
				    numpri = res2;
				  }

				  if(res1.length <= res2.length){
				    nummen = res1;
				  }else{
				    nummen = res2;
				  }

				  if (res1.length == res2.length) {
				  	numpri=res1;
				  	nummen=res2;
				  }

				  var index = (nummen.length-1);
				  for (var d = (numpri.length-1); d >= 0; d--) {
				      console.log("valor d ",d, nummen[index]);
				      if (nummen[index] == undefined) {
				        newnumone[d] = 0;
				      }else{
				        newnumone[d] = parseInt(nummen[index]);
				      }
				      index--;
				  }
				  console.log("numone",numpri,"numtwo",newnumone);
				  
				  for(var r=(numpri.length-1);r>=0;r--){
				  	if((numpri.length-1)==r){
				  		t_res=parseInt(numpri[r])+newnumone[r];		
				  		res[r]="&nbsp&nbsp";
				  	}else {
				  		if (res[r]=="&nbsp&nbsp") {
				  			t_res=parseInt(numpri[r])+newnumone[r];
				  		}else {
				  			t_res=parseInt(numpri[r])+newnumone[r]+res[r];
				  		}		  		

				  	}
				  		console.log(t_res);
				  	if(t_res>=10){
				  			res[r-1]=1;
				  		}else{
				  			res[r-1]="&nbsp&nbsp";
				  		}	
				  }
				
					for (var i = 0; i < newnumone.length; i++) {
						console.log('residuo',res[i]);
						$('.reside').append('<button type="button" class="btn numero mr-1" disabled><b>'+res[i]+'</b>');
					}
				
				  console.log("corto",res,"nevo",newnumone);
		    }else {
	
		    	$('#resultado').val(resultado);
		    	var num3=$('#resultado').val();
		 
		    	res1 = num1.split(".");
		    	res2 = num2.split(".");
		    	res3 = num3.split(".");
		    	console.log(res3);
		    	var ent1=res1[0].split("");
		    	var dec1=res1[1].split("");
		    	var ent2=res2[0].split("");
		    	var dec2=res2[1].split("");
		    	var ent3=res3[0].split("");
		    	var dec3=res3[1].split("");
		    	
		    
		    	$.each(ent1, function(i, val){
					$('.numone').append('<button type="button" class="btn numero mr-1" disabled><b>'+val+'</b>');				
				});
				$.each(dec1, function(i, val){
					$('.numdone').append('<button type="button" class="btn numero mr-1" disabled><b>'+val+'</b>');				
				});
		    	$.each(ent2, function(i, val){
					$('.numtwo').append('<button type="button" class="btn numero mr-1" disabled><b>'+val+'</b>');				
				});
				$.each(dec2, function(i, val){
					$('.numdtwo').append('<button type="button" class="btn numero mr-1" disabled><b>'+val+'</b>');				
				});
		    	$.each(ent3, function(i, val){
					$('.numresul').append('<button type="button" class="btn numero mr-1" disabled><b>'+val+'</b>');				
				});
				$.each(dec3, function(i, val){
					$('.numdresul').append('<button type="button" class="btn numero mr-1" disabled><b>'+val+'</b>');				
				});

		    	
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

	function decimal(tecla){
		if(tecla.charCode < 48 || tecla.charCode > 57) return false;
	}
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
				$('.instrucciones').append('<div class="col-md-4 mb-3"><div class="card card-instrucciones h-100"><p>'+val+'</p>');
				
			});

		  });
		 
		 
	}

});