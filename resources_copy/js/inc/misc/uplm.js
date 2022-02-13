$(document).ready(function(){
	$('.file_uploading').hide();
    $('#image_file').on('change',function(){
        $('#upload_form').ajaxForm({ 
            delegation: true,          
            target:'#myTable',
            beforeSubmit:function(e){
                $('.file_uploading').show();
            },
            success:function(e){
                $('.file_uploading').hide();
            },
            error:function(e){
            	$('.err').html('<h3> ERROR </h3>');
            	$('.file_uploading').hide();
            }
        }).submit();
        $('#upload_form').uploadProgress('change', 0, 100, 0);
    });
});