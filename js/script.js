function updateBullRetuenTable(){
    var bullLow  = parseFloat( $( "#bull-return-low" ).val()) ;
    var bullHigh = parseFloat( $( "#bull-return-high" ).val()) ;
    var diff = bullHigh - bullLow ;
    var ratio = [191,236,333,382,500,618,666,764,809,875];
    for ( var i = 0 ; i < ratio.length ; i++){
        $( "#bull-return-0" + ratio[i] ).html( Math.round( (bullHigh - diff * ratio[i] / 1000 ) * 100) / 100 );
    }
}

$(document).ready(function(){
    $( "#bull-return-low" ).keyup(function() {
        updateBullRetuenTable();
    });
    $( "#bull-return-high" ).keyup(function() {
        updateBullRetuenTable();
    });
    $("#bull-return-low-left").click(function(){
        $( "#bull-return-low" ).val( parseInt( $( "#bull-return-low" ).val() ) - 1 ) ;
        updateBullRetuenTable();
    });
    $("#bull-return-low-right").click(function(){
        $( "#bull-return-low" ).val( parseInt( $( "#bull-return-low" ).val() ) + 1 ) ;
        updateBullRetuenTable();
    });
    $("#bull-return-high-left").click(function(){
        $( "#bull-return-high" ).val( parseInt( $( "#bull-return-high" ).val() ) - 1 ) ;
        updateBullRetuenTable();
    });
    $("#bull-return-high-right").click(function(){
        $( "#bull-return-high" ).val( parseInt( $( "#bull-return-high" ).val() ) + 1 ) ;
        updateBullRetuenTable();
    });    
    $( "#bull-return-high" ).val(9600);
    $( "#bull-return-low" ).val(9500);
    updateBullRetuenTable();
});

