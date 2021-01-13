jQuery(document).ready(function($){

var categoria;
var data = [];
var newnumone = [];
var numpri=[];
var res = [];
var newnumonedec = [];
var numpridec=[];
var resdec = [];
var inpri, inmen;
$('.number').on('input', function () { 
    this.value = this.value.replace(/[^0-9]/g,'');
});
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
		console.log("operacion",operacion);
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
			
		    $('.operacion-desglosada').show();
		    $('.o-division').hide();
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
		    var nummayor=parseInt(num1);
		  	var nummen= parseInt(num2);
		  if (nummayor<nummen) {
		  	nummayor=num2;
		  	nummen= num1;
		  	num1=nummayor;
		  	num2=nummen;
		  }
		    var num3=$('#resultado').val();

		  //--Agregar simbolo a operacion seleccionada, poner o quitar flecha en operacion--				
		    $('.simbol').html('-');
		    $('.flecha').html('&#129044');
		    $('.operacion-desglosada').show();
		    $('.o-division').hide();
			if(categoria == 'enteros'){

		    crear_explicacion(num1,num2,num3,operacion);

		   }else{
		
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
		    
		    extractIntrucciones(operacion,categoria);
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
				resultado= parseFloat(num1)*parseFloat(num2);
				$('#resultado').val(resultado);
			//--obtener valor de input de resultado--
				var num3=$('#resultado').val();
			//--agregar simbolo a operacion seleccionada, poner o quitar flecha en operacion--
				$('.simbol').html('X');
				$('.flecha').html('');
		    	$('.operacion-desglosada').show();
		    	$('.o-division').hide();
		    	$('.operacion-desglosada').addClass('text-right').removeClass('text-left');
		    	crear_explicacion(num1,num2,num3,operacion);
		    	var multiplicando=num1.split("");
		    	var multiplicador=num2.split("");
		    	var numsd=num1.replace('.', '');
		    	var valm=[];
		    	var rsm=[];
		    	var a=0;
		    	$('.multiplica').empty();
		    	$('.resmulti').empty();
		    	//Realiza multiplicacion por multiplicador
		    	  for (var m = (multiplicador.length-1); m >= 0; m--) {
		    	  		if(multiplicador[m]!="."){
		    	  			valm[a]=multiplicador[m]*numsd;
			    	  		var ures=valm[a].toString().split("");
			    	  		console.log("ures",ures);
			    	  		$('.multiplica').append('<div class="row numresul'+a+' ejemplo">');
			    	  		if(a==0){
			    	  			
			    	  			$.each(ures,function(i,val){
			    	  				if (val!=".") {
			    	  				$('.numresul'+a).append('<button type="button" class="btn numero mr-1" disabled><b>'+val+'</b>');
			    	  				}
			    	  			});
			    	  			
			    	  		}else{
			    	  			
			    	  			$.each(ures,function(i,val){
			    	  				if (val!=".") {
			    	  				$('.numresul'+a).append('<button type="button" class="btn numero mr-1" disabled><b>'+val+'</b>');
			    	  				}
			    	  			});
			    	  			for(var vu=1; vu<=a;vu++){
			    	  				$('.numresul'+a).append('<button type="button" class="btn numero mr-1" disabled><b>&nbsp&nbsp</b>');
			    	  			}
			    	  			
			    	  			
			    	  		}
			    	  		$('.multiplica').append('</div>');		
			    	  		if(m==0){
			    	  			$('.numresul'+a).addClass('linea-res')
			    	  		}  	  	
			    	  	
			    	  	 
					     a++;
		    	  		}
		    	  		
				  }
				  var dar=0;
				  var punto="no";
				  var rs=multiplicando.length;
				  //Residuo de multiplicacion 
				  for (var rm = 0 ; rm <= (multiplicador.length-1); rm++){
				  	if(multiplicador[rm]!="."){
				  		for(var mr=rs-1;mr>=0;mr--){
		    	  			rsm[mr]=multiplicador[rm]*multiplicando[mr];
		    	  			if(mr!=rs-1){
		    	  				rsm[mr]=rsm[mr]+parseInt(rsm[mr+1]);
		    	  			}		    	  			
		    	  			console.log("multi",multiplicador[rm],multiplicando[mr],rsm[mr]);
		    	  			if(rsm[mr]>=10){
		    	  				var uni= (rsm[mr]/10).toString().split(".");
		    	  				rsm[mr]=uni[0];
		    	  			}else{
		    	  				if(multiplicando[mr]=="."){
		    	  					rsm[mr]=rsm[mr+1];
				  					rsm[mr+1]="&nbsp&nbsp";

					  			}else{
			    	  				rsm[mr]="&nbsp&nbsp";
					  			}
		    	  			}
		    	  			console.log("i",mr,rsm[mr]);	
		    	  			//dar++;	
		    	  		  	  		
				  		}
				 
		    	  	$('.resmulti').append('<div class="row reside'+rm+' ejemplo">');
		    	  	for (var i = 0; i <= rs; i++) {
		    	  		
		    	  		if(i==rs){
		    	  			$('.reside'+rm).append('<button type="button" class="btn residuo mr-1" disabled><b>&nbsp&nbsp</b>');
		    	  		}if(i!=0 && i!=rs){
		    	  			$('.reside'+rm).append('<button type="button" class="btn residuo mr-1" disabled><b>'+rsm[i]+'</b>');
		    	  		}
		    	  	}
				  	
				  	console.log(rsm,rm);
				  	rsm=[];
				  	dar=0;
				  	}
				  }
				  //console.log(rsm);
				   extractIntrucciones(operacion,categoria);
		   break;
		   //--Division--
		   case 'division':
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
			resultado= (num1/num2);
			
				if(Number.isInteger(resultado)==false){
					resultado=resultado.toFixed(2);
				}
			
			if(categoria=="decimales"){
					num1=parseInt(num1*100);
					num2=parseInt(num2*100);
				}
				console.log("numero2",num2);
				$('#resultado').val(resultado);
			//--obtener valor de input de resultado--
				var num3=$('#resultado').val();
			//--agregar simbolo a operacion seleccionada, poner o quitar flecha en operacion--
				$('.simbol').html('/');
				$('.flecha').html('');
		    
		    	$('.operacion-desglosada').hide();
		    	$('.o-division').show();
		    	$('.residuos').empty();
		    	var dividendo=num1.toString().split("");
		    	var divisor = num2.toString().split("");
		    	var divide = num3.split("");
		    	var dvres=num3.split("");
		    	console.log("dividor",dividendo,"=",divisor);
		    	$.each(dividendo, function(i, val){
					$('.dividendo').append('<button type="button" class="btn numero mr-1" disabled><b>'+val+'</b>');				
				});
				$.each(divisor, function(i, val){
					$('.divisor').append('<button type="button" class="btn numero mr-1" disabled><b>'+val+'</b>');				
				});
				// variable total digitos divisor
				var nrestar=0;
				var numd=divisor.length;
				
				// variable primer digito divisor
				var vnumd=numd-1;
				var digito="";
				var dgdiv="";
				var endo=dividendo.length;
				var dprimer;

				//dividir dividendo a numero de digitos iguales a divisor
				for (var dg=0;dg <= numd-1;dg++){
					digito=digito+dividendo[dg];
					if(dg==vnumd){
						dgdiv=digito;	
						if(num2>digito){
							dgdiv=digito+dividendo[dg+1];
							numd=numd+1;
						}										
					}
				}

				for (var i = numd-1; i >= 1; i--) {
					console.log("numd-1",numd,"i",i);
					dvres.unshift("&nbsp&nbsp");
					console.log("numd-1",dvres,"i",i);
				}

				$.each(dvres,function(i,val){
				 		$('.result').append('<button type="button" class="btn " disabled><b>'+val+'</b>')
				 	});
				for (var dv =0 ; dv <= divide.length-1; dv++) {
					if(isNaN(divide[dv])==false){
						nrestar=divide[dv]*num2;
						digito=dgdiv-nrestar;
						var nres=nrestar.toString().split("");
						dprimer=nres.length;
						$('.residuos').append('<div class="row menosdiv linea-res dres-'+dv+'">');
						$('.dres-'+dv).append('<h4 class="simbol">-</h4>');
						var difres=(numd-1)-nres.length;
						if(nres.length!=numd+1){
							for (var fr = difres; fr >= 0; fr--) {
								nres.unshift("&nbsp&nbsp");
							}
							
						}
						$.each(nres,function(i,val){

							$('.dres-'+dv).append('<button type="button" class="btn" disabled><b>'+val+'</b>');

						});
					
					$('.residuos').append('</div>');
					$('.residuos').append('<div class="row restardiv igual-'+dv+'">');
					console.log("resta",digito,dividendo[numd]);
					if(dividendo[numd]!==undefined){
						digito=digito+""+dividendo[numd];
					}else{
						digito=digito+""+0;
					}
					
					console.log("resta des",digito,numd);
					if(digito!=undefined){
					var dspt=digito.toString().split("");
					console.log('dspt',dspt);
					var sp=numd;
					console.log('sp',sp);	
					}	
					var dif=(numd)-dspt.length;
					console.log("diferencia",dif);
					if(dspt.length!=numd+1){
						
							for (var di = dif; di >= 0; di--) {
								dspt.unshift("&nbsp&nbsp");
								
							}	
							if(sp>endo){
									dspt.unshift("&nbsp&nbsp");
									dspt.shift();
									dspt.push(0);
								}
						
						
					}
					$.each(dspt,function(i,val){
						$('.igual-'+dv).append('<button type="button" class="btn " disabled><b>'+val+'</b>');
					})
					
					numd++;
					dgdiv=digito;
					}
					
				}
				 	
				 extractIntrucciones(operacion,categoria);
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
		$('.instrucciones').empty();
		console.log("instrucciones",tipo);
		 $.getJSON("./json/instrucciones.json", function(result){
		    $.each(result, function(i, field){
		    	if(i == tipo){
		    	data = field;
		    	}
		      
		    });
		   
			$.each(data, function(i, val){
				$('.instrucciones').append('<div class="col-md-4 mb-3"><div class="card card-instrucciones h-100"><p>'+val+'</p>');
				
			});

		  });
		 
		 
	}

	function crear_explicacion(num1,num2,num3,oper){
		newnumone = [];		
		numpri=[];
		inpri="";
		inmen="";
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
    			if (categoria=="enteros") {
    				oper_resta(numpri,newnumone,inpri,inmen);
    			}else{
    				oper_restadec(numpri,newnumone);
    			}
    			break;
    		case 'multiplicacion':
    			
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
		res = [];
		var minuendo=valor1;
		var sustraendo=valor2;
		var cambio="no";
		  
		  console.log("input1",minuendo,"input2",sustraendo);
		  for(var r=(minuendo.length-1);r>=0;r--){
		  			minuendo[r]=parseInt(minuendo[r]);
		  			sustraendo[r]=parseInt(sustraendo[r]);
		  			var resta = minuendo[r]-sustraendo[r];
		  			console.log("La resta",resta);
		  		if(resta<0){
		  			minuendo[r-1]=(minuendo[r-1])-1;
		  			res[r]=minuendo[r]+10;
		  			res[r-1]=minuendo[r-1];
		  			cambio="si";
		  		}else{
		  			if(cambio=="no"){
		  				res[r]="";
		  			}else{
		  				res[r-1]="";
		  			}
		  			
		  		}

		  		console.log(res);
		  		
		  }

		  $.each(res, function(i, val){
		  	if(val!=undefined){
		  		$('.reside').append('<button type="button" class="btn residuo" disabled><b>'+val+'</b>');
		  	}else{
		  		$('.reside').append('<button type="button" class="btn residuo" disabled><b>&nbsp&nbsp</b>');
		  	}
			});
				  
	}

	function oper_restadec(valor1,valor2){
		res = [];
		var minuendo=valor1;
		var sustraendo=valor2;
		var cambio="no";
		  
		  console.log("input1",minuendo,"input2",sustraendo);
		  for(var r=(minuendo.length-1);r>=0;r--){
		  			minuendo[r]=parseInt(minuendo[r]);
		  			sustraendo[r]=parseInt(sustraendo[r]);
		  			var resta = minuendo[r]-sustraendo[r];
		  			console.log("La resta",resta);
		  		if(resta<0){
		  			if(isNaN(minuendo[r-1])==true){
		  				console.log("entre decimal");
		  				minuendo[r-2]=(minuendo[r-2])-1;
		  				res[r-1]=".";
		  				res[r]=minuendo[r]+10;
		  				res[r-2]=minuendo[r-2];
		  			}else{
		  				minuendo[r-1]=(minuendo[r-1])-1;
		  				res[r]=minuendo[r]+10;
		  				res[r-1]=minuendo[r-1];
		  			}
		  			
		  			cambio="si";
		  		}else{
		  			if(cambio=="no"){
		  				res[r]="";
		  			}else{
		  				res[r-1]="";
		  			}
		  			
		  		}

		  		console.log(res);
		  		
		  }

		  $.each(res, function(i, val){
		  	if(val!=""){
		  		$('.reside').append('<button type="button" class="btn residuo" disabled><b>'+val+'</b>');
		  	}else{
		  		$('.reside').append('<button type="button" class="btn residuo" disabled><b>&nbsp&nbsp</b>');
		  	}
			});
				  
	}
});