const arr = [
  {
    name: 'hello world',
    number: 1,
  },
  {
    name: 'howdy?',
    number: 2,
  },
];

const htmlStrings = arr.map((elem) => {
  return `
    <div>
      <h1>You are ${elem.name}</h1>
    </div>
  `;
});

const html = htmlStrings.join("");

const exampleDiv = document.getElementById("exampleDiv");
exampleDiv.innerHTML = html;
