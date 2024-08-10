// .css() metodu ile jQuery içerisinde CSS manipule edilebilir

$(.someElement).css({
  "display": "flex",
  "flex-direction": "row",
  "flex": "1 1 0"
  // ve dahası
});

// veya bir nesne değişkenine yapılan atamalarla da bu iş yapılabilir

const cssStyling = {
  display: "flex",
  flex-direction: "row",
  // ve dahası
}

$(.someElement).css(cssStyling);
