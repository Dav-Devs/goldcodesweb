      $(this).ajaxSubmit({
        beforeSubmit:function(e){
            $('#pre').show();
            $('form').hide();
        },
        success:function(e){
            $('#pre').hide();
            $('form').show();
        },
        error:function(e){
          $('error-txt').html('<h3> ERROR </h3>');
          $('#pre').hide();
        }
     });
