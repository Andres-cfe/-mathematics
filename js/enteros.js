jQuery(document).ready(function($){

var categoria;
var data = [];
var newnumone = [];
var numpri=[];
var res = [];
var newnumonedec = [];
var numpridec=[];
var resdec = [];
	//-----------------------------------------------------
	//--------	DETERMINAR TIPO DE OPERACION  -------------
	//-----------------------------------------------------
	$(".btn-operacion").click(function(){
	  
	  //validar si usuario esta logeado ya

	  	$('.dashboard').hide(300);
	  	$('.descripcion').show(300);


		var tipo = $(this).attr('data');
		console.log(tipo);
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
		    $('.descripcion .title').html('➤ Resta de enteros');
		    $('#tipoOperacion').html('<strong>-</strong>');
		    break;
		  case 'resta-decimales':
		    //titulo
		    $('.numero').off('keypress');
		    $('.descripcion .title').html('➤ Resta de decimales');
		    $('#tipoOperacion').html('<strong>-</strong>');
		    break;
		   case 'multiplicacion-enteros':
		    $('.numero').keypress(decimal);
		    $('.descripcion .title').html('➤ Multiplicación de enteros');
		    $('#tipoOperacion').html('<strong>X</strong>');
		   break;
		   case 'multiplicacion-decimales':
		    $('.numero').off('keypress');
		    $('.descripcion .title').html('➤ Multiplicación de decimales');
		    $('#tipoOperacion').html('<strong>X</strong>');
		   break;
		   case 'division-enteros':
		    $('.numero').keypress(decimal);
		    $('.descripcion .title').html('➤ División de enteros');
		    $('#tipoOperacion').html('<strong>/</strong>');
		   break;
		   case 'division-decimales':
		    $('.numero').off('keypress');
		    $('.descripcion .title').html('➤ División de decimales');
		    $('#tipoOperacion').html('<strong>/</strong>');
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
	 
		var resultado = 0;
		var val;
		var num1="";
		var num2="";
		var num = [];
		var res1= [];
		var res2= [];
		var res3= [];		
		var t_res;

		categoria = $('#modelo').val();
		$('.ejemplo').empty();

		$( ".numero" ).each(function() {
			if ($(this).val() != '') {

				num.push($(this).val());
			}
		});

		//--igualar inputs sin texto a 0--
		   	$( ".numero" ).each(function() {
		  		if ($(this).val() == '') {
		  			$(this).val(0);
		  		}
		  		
			});
		//--obtener valores de inputs--
			num1=$('#firstnumber').val();
			num2=$('#secondnumber').val();

		if (num.length <= 1) {
			$('.desarrollo').hide(300);
			$('.instrucciones').hide(300);
		}else {
			$('.desarrollo').show(300);
			$('.instrucciones').show(300);
		}
	
		switch(operacion) {
		//--Suma--
		  case 'suma':
		  //--Realizar operacion y pasar valor a input--
		  	$( ".numero" ).each(function() {
		  		var val = $(this).val();
		  		resultado = resultado+parseFloat(val);
		  		
			});
		  	$('#resultado').val(resultado);
		  	//--Obtener valor de input de resultado--
		    	var num3=$('#resultado').val();
			//--Agregar simbolo a operacion seleccionada, poner o quitar flecha en operacion--	
				$('.flecha').html('&#129044');
				$('.simbol').html('+');
			
		    
		    if(categoria == 'enteros'){
		      	
		    	  crear_explicacion(num1,num2,num3,operacion);				  
				  		
				  console.log("corto",res,"nevo",newnumone);
		    }else {
				
		    	$('.ent').addClass('text-right').removeClass('text-left');
		 		//crear_explicacion(num1,num2,num3,operacion);
		    	var dres1 = num1.split(".");
		    	var dres2 = num2.split(".");
		    	var inpupri="";
		    	var inpumen="";
		    	var newnumdec=[];
		    	var punto=".";
		    	var ent1=[];
		    	var ent2=[];		    	
		    	var dec1=dres1[1].split("");
		    	var dec2=dres2[1].split("");
		    	    ent1=dres1[0].split("");
		    		ent2=dres2[0].split("");
		    		
		    	ent1.push(punto);
		    	ent2.push(punto);
		    	console.log(dec1,dec2);
		    	console.log(ent1,ent2);

		    	if(dec1.length >= dec2.length){
				    var pridec = dec1;
				    inpu=1;
				  }else{
				    var pridec = dec2;
				    inpu=2;
				  }

				  if(dec1.length <= dec2.length){
				    var mendec = dec1;
				    inpumen=1;
				  }else{
				    var mendec = dec2;
				    inpumen=2;
				  }

				  if (dec1.length == dec2.length) {
				  	var pridec=dec1;
				  	inpu=1;
				  	var mendec=dec2;
				  	inpumen=2;
				  }

				  for (var dec = 0; dec <= (pridec.length-1); dec++) {
				      
				      if (mendec[dec] == undefined) {
				        newnumdec[dec] = 0;
				      }else{
				        newnumdec[dec] = parseInt(mendec[dec]);
				      }
				      
				  }
				  if(inpu==1){
				  	var numc1=ent1.concat(pridec);
				  }else{
				  	var numc2=ent2.concat(pridec);
				  }

				  if(inpumen==1){
				  	var numc1=ent1.concat(newnumdec);
				  }else{
				  	var numc2=ent2.concat(newnumdec);
				  }
				  	
				  num1=numc1.join('');
				  num2=numc2.join('');

				  crear_explicacion(num1,num2,num3,operacion);
				  console.log(numc2,operacion,"numonedec",pridec,"numtwodec",newnumdec);
		    	
		    }
		    	    
		 //--Agregar notas de instrucciones--   
		    extractIntrucciones(operacion,categoria);
		    break;
		//--Resta--
		  case 'resta':
		  //--Realizar operacion y pasar valor a input--
		  	resultado = num.reduce(myFunc);
		  	$('#resultado').val(resultado);

			function myFunc(total, num) {
			  return total - num;
			}
		  //--Obtener valor de input de resultado--
		    var num3=$('#resultado').val();

		  //--Agregar simbolo a operacion seleccionada, poner o quitar flecha en operacion--				
		    $('.simbol').html('-');
		    $('.flecha').html('&#129044');

			if(categoria == 'enteros'){

		    crear_explicacion(num1,num2,num3,operacion);

		   }else{
		
		   	$('.ent').addClass('text-right').removeClass('text-left');
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
		    
		    extractIntrucciones('resta');
		    console.log(data) ;
		    break;
		//--Multiplicacion--
		   case 'multiplicacion':
		   //--igualar inputs sin texto a 0--
		   	$( ".numero" ).each(function() {
		  		if ($(this).val() == '') {
		  			$(this).val(0);
		  		}
		  		
			});
			//--obtener valores de inputs--
				var num1=$('#firstnumber').val();
				var num2=$('#secondnumber').val();
			//--realizar operacion y pasar valor a input--
				resultado= num1* num2;
				$('#resultado').val(resultado);
			//--obtener valor de input de resultado--
				var num3=$('#resultado').val();
			//--agregar simbolo a operacion seleccionada, poner o quitar flecha en operacion--
				$('.simbol').html('X');
				$('.flecha').html('');
		    
		    	$('.operacion-desglosada').addClass('text-right').removeClass('text-left');
		    	
		    	if (categoria=='enteros') {
		    		crear_explicacion(num1,num2,num3);
		    	
		    	}

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

	function crear_explicacion(num1,num2,num3,oper){
		newnumone = [];		
		numpri=[];

		res1 = num1.split("");
    	res2 = num2.split("");
    	res3 = num3.split("");
    	

    	$.each(res1, function(i, val){
			$('.numone').append('<button type="button" class="btn numero mr-1" disabled><b>'+val+'</b>');				
		});
    	$.each(res2, function(i, val){
			$('.numtwo').append('<button type="button" class="btn numero mr-1" disabled><b>'+val+'</b>');				
		});
    	$.each(res3, function(i, val){
			$('.numresul').append('<button type="button" class="btn numero mr-1" disabled><b>'+val+'</b>');				
		});
		if(oper=="suma"||oper=="resta"){
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
		}
    	
    	switch (oper) {
    		case 'suma':
    			if (categoria=="enteros") {
    				oper_suma(numpri,newnumone);
    			}else{
    				oper_sumadec(numpri,newnumone);
    			}
    			
    			break;
    		case 'resta':
    			oper_resta(res1,res2);
    			break;
    	}
		
	}

	function oper_suma(valor1, valor2){
		res = [];
		  
				  for(var r=(valor1.length-1);r>=0;r--){
				  	if((valor1.length-1)==r){
				  		t_res=parseInt(valor1[r])+valor2[r];		
				  		res[r]="&nbsp&nbsp";
				  	}else {
				  		if (res[r]=="&nbsp&nbsp") {
				  			t_res=parseInt(valor1[r])+valor2[r];
				  		}else {
				  			t_res=parseInt(valor1[r])+valor2[r]+res[r];
				  		}		  		

				  	}
				  		
				  	if(t_res>=10){
				  			res[r-1]=1;
				  		}else{
				  			res[r-1]="&nbsp&nbsp";
				  		}	
				  }
				  for (var i = 0; i < valor2.length; i++) {
						$('.reside').append('<button type="button" class="btn residuo mr-1" disabled><b>'+res[i]+'</b>');
					}
				
				  
	}

	function oper_sumadec(valor1, valor2,eval1,){
		
		res = [];
		
				  for(var r=(valor1.length-1);r>=0;r--){
				  	if((valor1.length-1)==r){
				  		t_res=parseInt(valor1[r])+valor2[r];		
				  		res[r]="&nbsp&nbsp";
				  	}else {
				  		if (res[r]=="&nbsp&nbsp") {
				  			t_res=parseInt(valor1[r])+valor2[r];
				  		}else {
				  			t_res=parseInt(valor1[r])+valor2[r]+res[r];
				  		}		  		

				  	}
				  		if(valor1[r]=="."){
				  			if(res[r]==1){
				  				t_res=10;
				  				res[r]="&nbsp&nbsp";
				  			}
				  		}
				  	if(t_res>=10){
				  			res[r-1]=1;
				  		}else{
				  			res[r-1]="&nbsp&nbsp";
				  		}	
				  }
				  for (var i = 0; i < valor2.length; i++) {
						$('.reside').append('<button type="button" class="btn residuo mr-1" disabled><b>'+res[i]+'</b>');
					}
				
	}

	function oper_resta(valor1,valor2){
		newnumone = [];
		res = [];
		numpri=[];
		var minuendo;
		var sustraendo;
			console.log("numone",valor1,"numtwo",valor2);
				  if(valor1.length >= valor2.length){
				    numpri = valor1;
				    minuendo =numpri;
				  }else{
				    numpri = valor2;
				    sustraendo= numpri;
				  }

				  if(valor1.length <= valor2.length){
				    nummen = valor1;
				  }else{
				    nummen = valor2;
				  }

				  if (valor1.length == valor2.length) {
				  	numpri=valor1;
				  	nummen=valor2;
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
				  numpri
	}
});