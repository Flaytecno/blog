$('.capa-data').hide();
$('.container-data').hide();

$('.container-data').css({
    bottom: '-450px'
});

$('.request').on('click', Function () {
            $('.capa-data').fidein();
            $('.container-data').show();

            $('.container-data').animate({
                bottom: '0px'
            });
});
            $('.capa-data').on('click', function () {
                $(this).fideout();
                $('.container-data').css({
                    bottom: '-450px'
                });
});

$(Function(){
$('.loadphoto').change(Function (e){
    addImage(e);
});
    Function addImage(e){
        var file = e.target.file[0],
        imageType = /image.*/;

        if (!File.type.match(imageType))
        return;

        var reader = new FileReader();
        reader.onload = fileonload;
        reader.readAsDataURL(file);
    }

    Function fileonload(e){
        var result = e.target.result;
        $('#photoselect').attr("src",result);
    }
});