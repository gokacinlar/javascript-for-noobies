// select elements with tag name

let windowDocumentHead;
let windowDocumentBody;
let windowDocumentUrl;
let windowDocumentDomain;
let windowDocumentImages;
let formWithId;
let formWithMethod;
let formWithAction;
let windowDocumentScripts;

windowDocumentHead = window.document.head;
windowDocumentBody = window.document.body;
windowDocumentUrl = window.document.URL;
windowDocumentDomain = window.document.domain;
windowDocumentImages = window.document.images;
formWithId = window.document.forms[0].id; // form dökümanının ilk elemanını seçer
formWithMethod = window.document.forms[0].method;
formWithAction = window.document.forms[0].action;
windowDocumentScripts = window.document.scripts;


console.log(windowDocumentHead);
console.log(windowDocumentBody);
console.log(windowDocumentUrl);
console.log(windowDocumentDomain);
console.log(windowDocumentImages);