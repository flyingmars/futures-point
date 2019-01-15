var pageValueRecord = {} ;

function updateBullRetuenTable(){
    var bullLow  = parseFloat( $( "#bull-return-low" ).val()) ;
    var bullHigh = parseFloat( $( "#bull-return-high" ).val()) ;
    var diff = bullHigh - bullLow ;
    var ratio = [191,236,333,382,500,618,666,764,809,875];
    for ( var i = 0 ; i < ratio.length ; i++){
        $( "#bull-return-0" + ratio[i] ).html( Math.round( (bullHigh - diff * ratio[i] / 1000 ) * 100) / 100 );
    }
}

function recordNumberBeforeChangePage(toRecord){
    var currentPageName = $("#drawer-list a.active").attr('id');
    pageValueRecord[currentPageName] = toRecord ;
}

function recoverRecordNumber(){
    var currentPageName = $("#drawer-list a.active").attr('id');
    return pageValueRecord[currentPageName];
}

function changePageTo(destination){
    var toRecord = [$('.record-1').val(),$('.record-2').val(),$('.record-3').val()];
    recordNumberBeforeChangePage(toRecord);
    
    $("#drawer-list a.active").removeClass('active');
    $('#' + destination).addClass('active');
    
    if ( $("#drawer-list a.active").data("page") == 'p1' ){
        renderP1();
    }
}

function renderP1(){
    if ( $("#drawer-list a.active").attr('id') == "bull-return-menu" ){
        $('.p1.bear').hide();
        $('.p1.bull').show();
    }else{
        $('.p1.bear').show();
        $('.p1.bull').hide();        
    }
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
    
    var recoverdNumber = recoverRecordNumber() ;
    if (recoverdNumber === undefined){
        $( "#bull-return-high" ).val(9600);
        $( "#bull-return-low" ).val(9500);
    }else{
        $( "#bull-return-high" ).val(recoverdNumber[0]);
        $( "#bull-return-low" ).val(recoverdNumber[1]);
    }
    updateBullRetuenTable();
    
}

$(document).ready(function(){
    $('#drawer-list a').click(function(){
        changePageTo($(this).attr('id'));
    });
    
    renderP1("bull");

});

