let isActive = false;
let circulos;

$(document).ready(function () {
  circulos = $("div#circulo");
  $(".circuloOrange").click(function () {
    if (!isActive) {
      $(this).toggleClass("circuloGrey");
    }
  });
});

$(document).ready(function () {
  $("#buttonPutRed").click(function () {
    for (let i = 0; i < circulos.length; i++) {
      $(circulos[i]).addClass("circuloRed");
    }
    isActive = true;
  });
});
$(document).ready(function () {
  $("#buttonQuitRed").click(function () {
    for (let i = 0; i < circulos.length; i++) {
      $(circulos[i]).removeClass("circuloRed");
      $(circulos[i]).addClass("circuloOrange");
    }

    isActive = false;
  });
});

$(document).ready(function () {
  let buttonCopiar = $("button#buttonCopy");
  let inputTextToCopy = $("input#textToCopy");
  let inputcopiedText = $("input#copiedText");
  let textToCopy;
  $(buttonCopiar).click(function () {
    textToCopy = $(inputTextToCopy).val();
    $(inputcopiedText).val(textToCopy);
  });
});

$(document).ready(function () {
  let text = ''
  $("#input_3").on("input", ({ target }) => {
    const { value } = target;

    text = value;
  });

  $('#button_reemp').on('click',() => {
    putInfoOnTable(text);
    text = ''
    $('#input_3').val('')
  })

  $('#button_add').on('click',() => {
    addTetxtOnTable(text)
    text = ''
    $('#input_3').val('')
  })


  function putInfoOnTable(value = ''){

    const cellList = $('.cell_text');
    cellList.each(function(i){
      this.innerHTML  = value
    })
    
  }

  function addTetxtOnTable(value = ''){
    const cellList = $('.cell_text');
    $(cellList).append(value);
    
  }


});

$(document).ready(function () {
  let defaultValue = 0;
   const input  = $("#input_number");
   const buttonPlus  = $("#buttonPlus");
   const buttonMinus  = $("#buttonMinus");
  $(input).val(defaultValue); 

  $(buttonPlus).click(function() {
    if(defaultValue === 10){
      return;
    }
    defaultValue++;
    $(input).val(defaultValue); 
  });
  $(buttonMinus).click(function() {
    if(defaultValue === 0){
      return;
    }
    defaultValue--;
    $(input).val(defaultValue); 
  });


});

$(document).ready(function () {
  let paginator = $("#pagination");
  let pageLink = $(".page-link");
  let add = $("#add"); 
  let remove = $("#remove"); 
  $(add).click(function () {

    let itemToPush = pageLink[pageLink.length -2];
    let valusTuPush = parseInt($(itemToPush).text())+1;

    $(itemToPush).text(valusTuPush+1);   
    
    console.log('itemToPush',itemToPush);
    //pageItem.push(itemToPush);

   // $('.pagination').val($(itemToPush).val($(itemToPush).val()))
    console.log(pageLink);
  });
  $(remove).click(function () {

    let itemToPush = pageLink[pageLink.length -2];
    let valusTuPush = parseInt($(itemToPush).text())-1;

    $(itemToPush).text(valusTuPush+1);   
    console.log('itemToPush',itemToPush);
    //pageItem.push(itemToPush);

   // $('.pagination').val($(itemToPush).val($(itemToPush).val()))
    console.log(pageLink);
  });
});



