/****************************************************************************
**********************  Copyright PROYECTOS W & A  **************************
*****************************************************************************/
jQuery(document).ready(function ($) {

blogs();

function blogs(){
    $.ajax({
        url: 'site/controller/getblogs.php'
      }).done(function (data) {
        var _data = JSON.parse(data);

        if (_data.code == "1") {
        	$('.dashboardblog').empty();

        	$.each(_data.datos, function (index, val) {
        		var target;

        		target = '<div class=" col-lg-4 col-md-4 col-12">'+
                        '<div class="item-box-blog bg-white">'+
                          '<div class="item-box-blog-image">'+
                            '<!--Fecha-->'+
                            '<div class="item-box-blog-date bg-gray "> <span class="mon">'+val.actualizacion+'</span> </div>'+
                            '<!--Imagen-->'+
                            '<figure> <img alt="" src="'+val.imagen+'"> </figure>'+
                          '</div>'+
                          '<div class="item-box-blog-body">'+
                            '<!--Titulo-->'+
                            '<div class="item-box-blog-heading">'+
                              '<a href="#" tabindex="0">'+
                                '<h5>'+val.titulo+'</h5>'+
                              '</a>'+
                            '</div>'+
                            '<!--Subtitulo-->'+
                            '<div class="item-box-blog-data" style="padding: px 15px;">'+
                              '<p><i class="far fa-laugh"></i> '+val.autor+', <button data="'+val.idblog+'" type="button" class="btn-comment btn btn-sm btn-link">Comentario('+val.comments+')</button></p>'+
                            '</div>'+
                            '<!--Contenido-->'+
                            '<div class="">'+
                              val.encabezado
                            '</div>'+
                            '<!--Boton leer mas'+
                            '<div class="mt"> <a href="#" tabindex="0" class="btn bg-gray read">Leer mas</a> </div> -->'+
                          '</div>'+
                        '</div>'+
                      '</div>';
                      $('.dashboardblog').append(target);
                      $(".btn-comment").click(function(){
                          var data = $(this).attr('data');
                          Comment(data);
                      });

        	});
        }
      })
      .fail(function () {

      })
      .always(function () {

       }); 
}



function Comment(idblog){
  $('.modal-body').show(300);
  var blog = idblog;
  $('.modal_alert .modal-title').html('Comentarios');

  $('.modal-body').empty();
  $('.modal_alert').modal();

  var data = {blog:idblog};

  $.ajax({
    type:'POST',
    data: data,
    url: './site/controller/getComments.php'
  }).done(function (data) {

    var _data = JSON.parse(data);
    if(_data.code == "200"){
      var comment;
      $.each(_data.padres, function (index, val) {
        
            comment = '<div id="idblog_'+val.idcomentario+'" class="padres col-lg-12 col-md-12 col-12 text-justify mt-3 msg card shadow">'+
                  '<div class="card-body body_'+val.idcomentario+'">'+
                    '<p>'+val.texto+'</p> '+
                  '<p><b><sub>'+val.creacion+'</sub></b> <button type="button" data="'+val.idcomentario+'" title="Citar" class="citar btn btn-sm btn-link"><i class="far fa-comment"></i> Responder</button></p>'+
                '</div>'+
              '</div>';
      

        $('.modal-body').append(comment);
      });

      $.each(_data.hijos, function (index, val) {
        var children = '<div id="idblog_'+val.idcomentario+'" class="col-lg-12 col-md-12 col-12 text-justify mt-3 msg card shadow">'+
                  '<div class="card-body body_'+val.idcomentario+'">'+
                    '<p>'+val.texto+'</p> '+
                  '<p><b><sub>'+val.creacion+'</sub></b> <button type="button" data="'+val.idcomentario+'" title="Citar" class="citar btn btn-sm btn-link"><i class="far fa-comment"></i> Responder</button></p>'+
                '</div>'+
              '</div>';

        $('#idblog_'+val.padre+' .body_'+val.padre).append(children);
      });


      var form = '<div class="form col-lg-12 col-md-12 col-12 text-justify mt-3 msg card shadow">'+
                    '<div class="card-body">'+
                      '<form class="formcomment">'+
                          '<input type="hidden" class="form-control" id="idblog" name="idblog" value="'+blog+'">'+
                          '<input type="hidden" class="form-control" id="padre" name="padre" value="0">'+
                        '<div class="form-group">'+
                            '<label id="cita" class="card-header" for="Comentario" style="display:none;"></label>'+
                            '<textarea class="form-control" id="comentario" name="comentario" rows="2" placeholder="Agrega tu comentario" required="required"></textarea>'+
                        '</div>'+
                        '<div class="text-center">'+
                          '<input type="submit" value="Enviar" class="btn bg-gray btn-block text-white py-2">'+
                        '</div>'+
                      '</form>'+
                    '</div>'+    
                '</div>';

      $('.modal-body').append(form);

    }else{
      var form = '<div class="form col-lg-12 col-md-12 col-12 text-justify mt-3 msg card shadow">'+
                    '<div class="card-body">'+
                      '<form class="formcomment">'+
                          '<input type="hidden" class="form-control" id="idblog" name="idblog" value="'+blog+'">'+
                          '<input type="hidden" class="form-control" id="padre" name="padre" value="0">'+
                        '<div class="form-group">'+
                            '<label id="cita" class="card-header" for="Comentario" style="display:none;"></label>'+
                            '<textarea class="form-control" id="comentario" name="comentario" rows="2" placeholder="Agrega tu comentario" required="required"></textarea>'+
                        '</div>'+
                        '<div class="text-center">'+
                          '<input type="submit" value="Enviar" class="btn bg-gray btn-block text-white py-2">'+
                        '</div>'+
                      '</form>'+
                    '</div>'+    
                '</div>';

      $('.modal-body').append(form);
    }
    
    $(".citar").click(function(){
        var com = $(this).attr('data');
        citar(com);
    });



    editor();
    validate();
  })
  .fail(function () {

  })
  .always(function () {

  }); 
}


function citar(coment){
  $('.padres').hide(300);
  $('#padre').val(coment);
  $('#cita').show(300);
  var cita = $('#idblog_'+coment+' .card-body').text();
  console.log(cita);
  $('#cita').html('<sub>'+cita+'</sub><p><button type="button" class="eliminar-citar btn btn-sm btn-link"><i class="fas fa-trash"></i> Eliminar</button></p>');

        $(".eliminar-citar").click(function(){
          var com = $(this).attr('data');
          eliminarcitar();
        });
}

function eliminarcitar(){
  $('.padres').show(300);
  $('#cita').hide(300);
  $('#padre').val(0);
  $('#cita').empty();
}

function editor(){
  $("#comentario").trumbowyg({
    lang: 'es',
    btns: [
      ['emoji'],
      ['strong', 'em', 'del'],
      ['superscript', 'subscript'],
      ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull']
    ]
  });
}


function reload(idblog){
  $('.cita').hide();
  $('#padre').val(0);
  $('#comentario').trumbowyg('empty');

  Comment(idblog);
  blogs();
}


function validate (){
  $(".formcomment").validate({
    submitHandler: function (form) {

      var controller = './site/controller/postComment.php';

      $.ajax({
          url: controller,
          type: 'POST',
          data: $(".formcomment").serializeArray(),
        })
        .done(function (response) {
          var _data = JSON.parse(response);
          $('.modal-body').hide(300);
          reload($('#idblog').val());

        })
        .fail(function () {
          //console.log("error");
        })
        .always(function () {
          //console.log("complete");
        });
    },
    rules: {
      comentario: {
        required: true,
        maxlength: 1000,
        minlength: 2
      }
    },
    messages: {
      comentario: {
        required: "Es necesario escribir un comentario."
      }
    }
  });
}

});