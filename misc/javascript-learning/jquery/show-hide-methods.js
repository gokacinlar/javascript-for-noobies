// Show & Hide methods

#(document).ready(function() {
  // Hide method

  const hideElement = $("#elementToBeHidden");
  const hideButton = $("#elementHider");

  hideButton.click(function() {
    hideElement.hide();
  });

  // Show method

  const showButton = $("#elementShower");

  showButton.click(function() {
    hideElement.show();
  });

  const toggleBtn = $("#toggleBtn");

  // Toggle metoduyla tek butonla bu işlemi gerçekleştirmek
  toggleBtn.click(function() {
    hideElement.toggle();
  });


  // Animasyon ekleme
  // .show, .hide, .toggle gibi eventlerin aldığı parametrelere
  // göre animasyon eklenebilir:
  // $(selector).show(speed, callback);
  // Speed: Animasyonun hızını belirtir
  // Callback: Animasyon bitince ne olacağını belirler
  // Örneğin yeni bir function() yazılabilir veya çağrılabilir.

  toggleBtn.click(function() {
    hideElement.toggle("slow");
  });

  toggleBtn.click(function() {
    hideElement.toggle("fast");
  });
  
  toggleBtn.click(function() {
    hideElement.toggle(2000); // MS türünden de değer verilebilir.
  });

  toggleBtn.click(function() {
    hideElement.toggle(2000, showMessage("Ali"));
  });

  function showMessage(name) {
    const newMessage = "Merhaba, " + name + "!";
    alert(newMessage);
  }
});
