// Change Events (such as user inputs)

const someForm = $("#someForm");

$(document).ready(function(){
  someForm.change(function(){
    console.log(`${someForm} elementi ile etkileşime geçildi.`);
    console.log($(this).val());
  });
}); 
