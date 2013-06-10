/**
 * Created with JetBrains WebStorm.
 * User: ankolesnyk
 * Date: 6/7/13
 * Time: 5:18 PM
 * To change this template use File | Settings | File Templates.
 */
$('.flip').click(function(){
    $(this).find('.card').addClass('flipped').mouseleave(function(){
        $(this).removeClass('flipped');
    });
    return false;
});