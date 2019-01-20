var pageValueRecord = {} ;

function updateBullRetuenTable(){
    var bullLow  = parseFloat( $( "#bull-return-low" ).val()) ;
    var bullHigh = parseFloat( $( "#bull-return-high" ).val()) ;
    var bullBack = parseFloat( $( "#bull-return-back" ).val()) ;
    var diff = bullHigh - bullLow ;
    var ratio = [191,236,333,382,500,618,666,764,809,875,1000,1100,1191,1382,1500,1618,1809,2000,3000];
    for ( var i = 0 ; i < ratio.length ; i++){
        if ( $("#h-switch").prop("checked") ){
            if ( $("#drawer-list a.active").attr('id') == "bull-return-menu" ){
                $( "#bull-return-" + ratio[i] ).html( Math.round( (bullBack + diff * ratio[i] / 1000 ) * 100) / 100 );
            }else{
                $( "#bull-return-" + ratio[i] ).html( Math.round( (bullBack - diff * ratio[i] / 1000 ) * 100) / 100 );
            }
        }else{
            $( "#bull-return-" + ratio[i] ).html( Math.round( (bullHigh - diff * ratio[i] / 1000 ) * 100) / 100 );
        }
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
    var toRecord = [$('.record-1').val(),$('.record-2').val(),$('.record-3').val(),$("#h-switch").prop("checked")];
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
    
    // Bind all listener
    $( "#bull-return-low" ).unbind("keyup");
    $( "#bull-return-high" ).unbind("keyup");
    $("#bull-return-low-left").unbind("click");
    $("#bull-return-low-right").unbind("click");
    $("#bull-return-high-left").unbind("click");
    $("#bull-return-high-right").unbind("click");
    $("#bull-return-back-left").unbind("click");
    $("#bull-return-back-right").unbind("click");
    $("#h-switch").unbind("change");
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
    $("#bull-return-back-left").click(function(){
        $( "#bull-return-back" ).val( parseInt( $( "#bull-return-back" ).val() ) - 1 ) ;
        updateBullRetuenTable();
    });
    $("#bull-return-back-right").click(function(){
        $( "#bull-return-back" ).val( parseInt( $( "#bull-return-back" ).val() ) + 1 ) ;
        updateBullRetuenTable();
    });
    
    $("#h-switch").change(function(){
        renderSwitch();
    });
    
    // recover all numbers
    var recoverdNumber = recoverRecordNumber() ;
    if (recoverdNumber === undefined){
        $( "#bull-return-high" ).val(9600);
        $( "#bull-return-low" ).val(9500);
        $( "#bull-return-back" ).val(9550);
    }else{
        $( "#bull-return-high" ).val(recoverdNumber[0]);
        $( "#bull-return-low" ).val(recoverdNumber[1]);
        $( "#bull-return-back" ).val(recoverdNumber[2]);
    }
    
    renderSwitch();    
    updateBullRetuenTable();
    
}


function renderSwitch(){
    if ( $("#h-switch").prop("checked") ){
        $(".h-only").show();
        $(".return-only").hide();
    }else{
        $(".h-only").hide();
        $(".return-only").show();
    }
    
    updateBullRetuenTable();
    
}

$(document).ready(function(){
    $('#drawer-list a').click(function(){
        changePageTo($(this).attr('id'));
        $('.bmd-layout-backdrop').click();
    });
    
    renderP1("bull");

});

