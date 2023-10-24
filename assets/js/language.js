function changLanguageSet(e) {
    var lang = $(e).attr('rel');
    $.ajax({
        url : '/globalaction/changLanguageSet',
        method: 'POST',
        data:{ lang:lang },
        success:function(response){
            if(!response.error) {
                // $.notifyDefaults({ type: 'success', allow_dismiss: false});
                // $.notify(response.msg);
                location.reload();
            }
        }
    });
}