// jQuery metodları (jQuery reference): https://api.jquery.com/

// Text metodu (elementin text içeriğini getirmek)

console.log($(.someElement).text());
// output: someElement'in text içeriği.

// Text metoduyla elementin içeriğini değiştirmek

const newText = "something"

$(#someElement).text(newText);

// .val() metoduyla input elementlerine girilen verileri getirmek

var x = $(#someInputElement).val();

// addClass() metoduyla sınıf ekleme

/**
*  CSS'te herhangi bir sınıf ismi oluşturduysanız, elementlere
*  bunu dinamik bir şekilde ekleyebilirsiniz
*  örn: .stil-bir
*/

$(.someElement).addClass("stil-bir");

// toggleClass() metoduyla dönüşümlü etkileşim yaratmak

$(.someElement).toggleClass("stil-bir"); // her tıklandığında, stil değişikliği yapar

// removeClass() metoduyla sınıf ismi silmek

$(.someElement).removeClass("stil-bir");

// attr() metoduyla elementin özelliklerini değiştirmek (width, height vs)
// $(selector).attr(attribute,value)

$(.someElement).attr("width", "256px"); // someElement'in genişliğini 256px yapar
