$(function () {
    $('#picture').hide();
    $('#nav a').click(function () {
        name = $(this).attr('data-name');
        body = $(this).attr('data-body');
        src = $(this).attr('data-src');
        $('#name').text(name);
        $('#content').html(body);
        $('#pogoda').hide();
        $('#picture').show(function(){
           $('#picture').attr('src', 'media/img/icons/'+src);
        });
    });
    $('#logotext').on('click', function(){
       $('#header').hide(2000, function(){
           $('#header').show(2000);
       });
    });
});