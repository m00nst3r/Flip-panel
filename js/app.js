/**
 * Created with JetBrains WebStorm.
 * User: ankolesnyk
 * Date: 6/7/13
 * Time: 5:03 PM
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function () {
    $('.flip_panel').on('touchstart', '.block', function () {
        var flipped = $(this).hasClass('flipped');
        $('.flip_panel .block.flipped').removeClass('flipped');
        if (!flipped){
            $(this).toggleClass('flipped');
        }
    });
});