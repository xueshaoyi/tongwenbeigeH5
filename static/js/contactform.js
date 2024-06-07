$(function () {
    "use strict";
    
    
    $('#ajax-contact').validator();
    $('#ajax-contact').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "assets/phpscripts/contact.php";
            $( "#msgSubmit" ).removeClass( "hidden" );
            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    $('#ajax-contact')[0].reset();
                    
                }
            });
            return false;
        }
    })
});