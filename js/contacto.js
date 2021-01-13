/****************************************************************************
**********************  Copyright PROYECTOS W & A  **************************
*****************************************************************************/
jQuery(document).ready(function ($) {

  $(".formcontacto").validate({
    submitHandler: function (form) {

      var controller = 'site/controller/postContacto.php';

      $.ajax({
          url: controller,
          type: 'POST',
          data: $(".formcontacto").serializeArray(),
        })
        .done(function (response) {
          var _data = JSON.parse(response);
          $('.modal-body .msg').empty();
          $('.modal-body .icon').empty();
          $('.modal-body .msg').append(_data.msg);
          $('.modal-body .icon').append(_data.icon);
          $('.modal_alert').modal();
          reload();

        })
        .fail(function () {
          //console.log("error");
        })
        .always(function () {
          //console.log("complete");
        });
    },
    rules: {
      email: {
        required: true,
        maxlength: 254,
        minlength: 2,
        email: true
      },
      mensaje: {
        required: true,
        maxlength: 1000,
        minlength: 2
      }
    },
    messages: {
      email: {
        required: "El correo electrónico es obligatorio"
      },
      mensaje: {
        required: "El necesario que incluyas un mensaje."
      }
    }
  });

  
  function reload(){
    $('.formcontacto .form-control').val('');
  }

});