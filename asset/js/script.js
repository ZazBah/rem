var convertInto = "px";

$('.btn_rem').click(() => {
    $('.convert_type').removeClass('active_btn');
    $('.btn_rem').addClass('active_btn');
    convertInto = "rem";

    converter()
})
$('.btn_pixel').click(() => {
    $('.convert_type').removeClass('active_btn');
    $('.btn_pixel').addClass('active_btn');
    convertInto = "px";

    converter()
})
$('.btn_percent').click(() => {
    $('.convert_type').removeClass('active_btn');
    $('.btn_percent').addClass('active_btn');
    convertInto = "%";

    converter()
})
$('.btn_point').click(() => {
    $('.convert_type').removeClass('active_btn');
    $('.btn_point').addClass('active_btn');
    convertInto = "pt";

    converter()
})

$('.btn_calculate').click(()=>{
    converterCalculate();
})



function converter(){
    inputType = $('#inpuType').find(":selected").val();
    inputData = $('.input_data_box').val();

    if(inputData == '' || inputData == NaN){
        
    } else if(inputData != '' || inputData != NaN){
        if(inputType == 'rem'){

            let resultInPixel = inputData * 16;
            let resultInPersent = inputData * 100;
            let resultInPoint = inputData * 12;

            if(convertInto == 'px'){

                $('.input_data').text(inputData);
                $('.input_perams').text(inputType);
                $('.converted_perams').text(convertInto);

                $('.converted_data').text(resultInPixel);

            } else if(convertInto == '%'){

                $('.input_data').text(inputData);
                $('.input_perams').text(inputType);
                $('.converted_perams').text(convertInto);

                $('.converted_data').text(resultInPersent);

            } else if(convertInto == 'pt'){

                $('.input_data').text(inputData);
                $('.input_perams').text(inputType);
                $('.converted_perams').text(convertInto);

                $('.converted_data').text(resultInPoint);

            }

        } else if(inputType == 'px'){

            let resultInRem = inputData / 16;
            let resultInpersent = inputData * 6.25;
            let resultInPoint = inputData * 0.75;

            if(convertInto == 'rem'){

                $('.input_data').text(inputData);
                $('.input_perams').text(inputType);
                $('.converted_perams').text(convertInto);

                $('.converted_data').text(resultInRem);

            } else if(convertInto == '%'){

                $('.input_data').text(inputData);
                $('.input_perams').text(inputType);
                $('.converted_perams').text(convertInto);

                $('.converted_data').text(resultInPersent);

            } else if(convertInto == 'pt'){

                $('.input_data').text(inputData);
                $('.input_perams').text(inputType);
                $('.converted_perams').text(convertInto);

                $('.converted_data').text(resultInPoint);

            }

        } else if(inputType == '%'){

            let resultInRem = inputData * 0.01;
            let resultInPixel = inputData * 0.16;
            let resultInPoint = inputData * 0.12;

            if(convertInto == 'rem'){

                $('.input_data').text(inputData);
                $('.input_perams').text(inputType);
                $('.converted_perams').text(convertInto);

                $('.converted_data').text(resultInRem);

            } else if(convertInto == 'px'){

                $('.input_data').text(inputData);
                $('.input_perams').text(inputType);
                $('.converted_perams').text(convertInto);

                $('.converted_data').text(resultInPixel);

            } else if(convertInto == 'pt'){

                $('.input_data').text(inputData);
                $('.input_perams').text(inputType);
                $('.converted_perams').text(convertInto);

                $('.converted_data').text(resultInPoint);

            }

        }else if(inputType == 'pt'){

            let resultInRem = inputData * 0.0831;
            let resultInPixel = inputData * 1.33;
            let resultInPersent = inputData * 8.31;

            if(convertInto == 'rem'){

                $('.input_data').text(inputData);
                $('.input_perams').text(inputType);
                $('.converted_perams').text(convertInto);

                $('.converted_data').text(resultInRem);

            } else if(convertInto == 'px'){

                $('.input_data').text(inputData);
                $('.input_perams').text(inputType);
                $('.converted_perams').text(convertInto);

                $('.converted_data').text(resultInPixel);

            } else if(convertInto == '%'){

                $('.input_data').text(inputData);
                $('.input_perams').text(inputType);
                $('.converted_perams').text(convertInto);

                $('.converted_data').text(resultInPersent);

            }

        }
    }
}

function converterCalculate(){
    inputType = $('#inpuType').find(":selected").val();
    inputData = $('.input_data_box').val();

    $('.output_text').css("font-size",`${inputData}${inputType}`);

    if(inputData == '' || inputData == NaN){
        alert('please input a valid number')
    } else{
        if(inputType == 'rem'){

            let resultInPixel = inputData * 16;
            let resultInPersent = inputData * 100;
            let resultInPoint = inputData * 12;

            if(convertInto == 'px'){ 

                $('.input_data').text(inputData);
                $('.input_perams').text(inputType);
                $('.converted_perams').text(convertInto);

                $('.converted_data').text(resultInPixel);

            } else if(convertInto == '%'){

                $('.input_data').text(inputData);
                $('.input_perams').text(inputType);
                $('.converted_perams').text(convertInto);

                $('.converted_data').text(resultInPersent);

            } else if(convertInto == 'pt'){

                $('.input_data').text(inputData);
                $('.input_perams').text(inputType);
                $('.converted_perams').text(convertInto);

                $('.converted_data').text(resultInPoint);

            }

        } else if(inputType == 'px'){

            let resultInRem = inputData / 16;
            let resultInpersent = inputData * 6.25;
            let resultInPoint = inputData * 0.75;

            if(convertInto == 'rem'){

                $('.input_data').text(inputData);
                $('.input_perams').text(inputType);
                $('.converted_perams').text(convertInto);

                $('.converted_data').text(resultInRem);

            } else if(convertInto == '%'){

                $('.input_data').text(inputData);
                $('.input_perams').text(inputType);
                $('.converted_perams').text(convertInto);

                $('.converted_data').text(resultInPersent);

            } else if(convertInto == 'pt'){

                $('.input_data').text(inputData);
                $('.input_perams').text(inputType);
                $('.converted_perams').text(convertInto);

                $('.converted_data').text(resultInPoint);

            }

        } else if(inputType == '%'){

            let resultInRem = inputData * 0.01;
            let resultInPixel = inputData * 0.16;
            let resultInPoint = inputData * 0.12;

            if(convertInto == 'rem'){

                $('.input_data').text(inputData);
                $('.input_perams').text(inputType);
                $('.converted_perams').text(convertInto);

                $('.converted_data').text(resultInRem);

            } else if(convertInto == 'px'){

                $('.input_data').text(inputData);
                $('.input_perams').text(inputType);
                $('.converted_perams').text(convertInto);

                $('.converted_data').text(resultInPixel);

            } else if(convertInto == 'pt'){

                $('.input_data').text(inputData);
                $('.input_perams').text(inputType);
                $('.converted_perams').text(convertInto);

                $('.converted_data').text(resultInPoint);

            }

        }else if(inputType == 'pt'){

            let resultInRem = inputData * 0.0831;
            let resultInPixel = inputData * 1.33;
            let resultInPersent = inputData * 8.31;

            if(convertInto == 'rem'){

                $('.input_data').text(inputData);
                $('.input_perams').text(inputType);
                $('.converted_perams').text(convertInto);

                $('.converted_data').text(resultInRem);

            } else if(convertInto == 'px'){

                $('.input_data').text(inputData);
                $('.input_perams').text(inputType);
                $('.converted_perams').text(convertInto);

                $('.converted_data').text(resultInPixel);

            } else if(convertInto == '%'){

                $('.input_data').text(inputData);
                $('.input_perams').text(inputType);
                $('.converted_perams').text(convertInto);

                $('.converted_data').text(resultInPersent);

            }

        }
    }
}

function checkType(){
    let inputType = $('#inpuType').find(":selected").val();

    if(inputType == 'rem'){
        $('.btn_pixel').removeAttr("disabled");
        $('.btn_percent').removeAttr("disabled");
        $('.btn_point').removeAttr("disabled");

        $('.btn_rem').attr("disabled","disabled");

        if(convertInto == 'rem'){
            $('.btn_rem').removeClass('active_btn');
            $('.btn_pixel').addClass('active_btn');

            convertInto = "px";
        }
    } else if(inputType == 'px'){
        $('.btn_rem').removeAttr("disabled");
        $('.btn_percent').removeAttr("disabled");
        $('.btn_point').removeAttr("disabled");

        $('.btn_pixel').attr("disabled","disabled");

        if(convertInto == 'px'){
            $('.btn_pixel').removeClass('active_btn');
            $('.btn_percent').addClass('active_btn');

            convertInto = "%";
        }
    } else if(inputType == '%'){
        $('.btn_rem').removeAttr("disabled");
        $('.btn_pixel').removeAttr("disabled");
        $('.btn_point').removeAttr("disabled");

        $('.btn_percent').attr("disabled","disabled");

        if(convertInto == '%'){
            $('.btn_percent').removeClass('active_btn');
            $('.btn_point').addClass('active_btn');

            convertInto = "pt";
        }
    } else if(inputType == 'pt'){
        $('.btn_rem').removeAttr("disabled");
        $('.btn_percent').removeAttr("disabled");
        $('.btn_pixel').removeAttr("disabled");

        $('.btn_point').attr("disabled","disabled");

        if(convertInto == 'pt'){
            $('.btn_point').removeClass('active_btn');
            $('.btn_rem').addClass('active_btn');

            convertInto = "rem";
        }
    }
}