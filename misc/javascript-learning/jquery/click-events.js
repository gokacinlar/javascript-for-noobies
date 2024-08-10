// Click events

const someElement = $(".some-element");

$(document).ready(function() {
  console.log("Document is fully loaded.");

  // Click event -> Function
  someElement.click(function() { // or call function here...
    console.log("Elemente tıklandı!");
      // This property holds our "someElement" element
      // to be later used.
      $(this).addClass("some-class");
  });
});
