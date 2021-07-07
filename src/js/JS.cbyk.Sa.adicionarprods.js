setTimeout(()=>{
$(".prateleira .btn-add-buy-button-asynchronous").text("ADICIONAR AO CARRINHO")
}, 1500);


$(document).on('click', '.qtd-shelf .btn', function () {
    var $this = $(this);
    var $qtd = $(this).parent().parent().find('.qtd');
    var valor = parseInt($qtd.val());
    if ($this.hasClass('btn-mais')) {
        $qtd.val(valor + 1);
    } else if ($this.hasClass('btn-menos')) {
        if (valor > 1) {
            $qtd.val(valor - 1);
        }
    }
});

$(".prateleira .link-dinamico").on("click", function(e){
    e.preventDefault();

     let qtd = $(this).parent().find('.qtd-wrapper .qtd-shelf .qtd');
    let urlbuilder = $(this).parent().find(".btn-add-buy-button-asynchronous").attr('href');
    console.log(urlbuilder)

})