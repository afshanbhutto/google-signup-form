('input').on('foucusin',function(){
    $(this).parent().find('label').addClass('active');
});
('input').on('foucusin',function(){
    if(!this.value){
    (this).parent().find('label').removeClass('active');
    }
});