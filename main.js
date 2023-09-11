function font() {
  var link = document.createElement('link');
  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('type', 'text/css');
  link.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
  document.head.appendChild(link);
}
font();

const container = document.createElement('div');
const mainBox = document.createElement('div');
const tittle = document.createElement('h5');
const mainText = document.createElement('h1');
const h3 = document.createElement('h3');
const box1 = document.createElement('div');
const btn1 = document.createElement('button')
const btn2 = document.createElement('button')
const btnText = document.createElement('h4');
const btnText2 = document.createElement('h4');
btnText2.className = "texts";
btnText2.classList.add = ("texts");
const courseSection = document.createElement('div');

document.body.style.margin = "0px";
document.body.style.padding = "0px";
document.body.style.display = "flex";
document.body.style.fontFamily = "Montserrat";
document.body.style.flexDirection = "column";
container.style.backgroundColor = "#252B42";
container.style.width = "100%";
container.style.display = "flex";
container.style.alignItems = "Center";
container.style.justifyContent = "center";
mainBox.style.marginTop = "140px";
mainBox.style.width = "699px";
mainBox.style.display = "flex";
mainBox.style.flexDirection = "column";
mainBox.style.alignItems = "Center";
mainBox.style.justifyContent = "center";
tittle.innerHTML = "Welcome";
tittle.style.color = "#23A6F0";
tittle.style.fontSize = "16px";
tittle.style.fontStyle = "normal";
tittle.style.fontWeight = "700";
tittle.style.letterSpacing = "0.1px";
mainText.innerHTML = "Selling on the internet like a pro";
mainText.style.color = "white";
mainText.style.textAlign = "center";
mainText.style.fontSize = "58px";
mainText.style.fontWeight = "700";
mainText.style.lineHeight = "80px";
mainText.style.letterSpacing = "0.2px";
mainText.style.width = "542px";
mainText.style.marginTop = "40px";
h3.innerHTML = "We know how large objects will act, but things on a small scale just do not act that way.";
h3.style.color = "white";
h3.style.textAlign = "center";
h3.style.fontSize = "20px";
h3.style.fontStyle = "normal";
h3.style.fontWeight = "400";
h3.style.lineHeight = "30px";
h3.style.letterSpacing = "0.2px";
h3.style.width = "470px";
h3.style.marginTop = "20px";
btn1.style.width = "193px";
btn1.style.height = "52px";
btn1.style.display = "flex";
btn1.style.padding = "15px 40px";
btn1.style.alignItems = "center";
btn1.style.gap = "10px";
btn1.style.backgroundColor = "#23A6F0";
btn1.style.borderRadius = "5px";
btn1.style.border = "none";
box1.style.display = "flex";
btn2.style.width = "162px";
btn2.style.height = "52px";
btn2.style.display = "flex";
btn2.style.padding = "15px 40px";
btn2.style.alignItems = "center";
btn2.style.gap = "10px";
btn2.style.backgroundColor = "#252B42";
btn2.style.border = "1px solid #23A6F0";
btn2.style.borderRadius = "5px";
btn2.style.marginLeft = "10px";
btnText.innerHTML = "Get Quote Now";
btnText.style.color = "#FFFFFF";
btnText.style.fontSize = "14px";
btnText.style.fontStyle = "normal";
btnText.style.fontWeight = "700";
btnText.style.lineHeight = "22px";
btnText.style.letterSpacing = "0,2";
btnText2.innerHTML = "Learn More";
btnText2.style.fontSize = "14px";
btnText2.style.fontStyle = "normal";
btnText2.style.fontWeight = "700";
btnText2.style.lineHeight = "22px";
btnText2.style.letterSpacing = "0.2px";
btnText2.style.color = "#23A6F0";
courseSection.style.display = "flex";
courseSection.style.gap = "30px";
courseSection.style.marginTop = "120px";
courseSection.style.marginBottom = "80px";


function cards (bgcolor, img, text, clr, ln,pcolor){
  const card = document.createElement('div');
  card.style.width = "328px";
  card.style.padding = "35px 40px";
  card.style.display = "flex";
  card.style.flexDirection = "column";
  card.style.alignItems = "flex-start";
  card.style.gap = "20px";
  card.style.backgroundColor = bgcolor;
  card.style.boxShadow = "0px 13px 19px 0px rgba(0, 0, 0, 0.07)";

  const icon = new Image(70, 76);
  icon.src = img;

  const cardTittle = document.createElement('h2');
  cardTittle.innerHTML = text;
  cardTittle.style.fontSize = "16px";
  cardTittle.style.fontWeight = "700";
  cardTittle.style.lineHeight = "24px";
  cardTittle.style.letterSpacing = "0.1px"
  cardTittle.style.color = clr;

  const line = new Image(50, 2);
  line.src = ln;
  const paragraph = document.createElement('p');
  paragraph.innerHTML = "The gradual accumulation of information about atomic and small-scale behaviour...";
  paragraph.style.fontSize = "14px";
  paragraph.style.fontStyle = "normal";
  paragraph.style.fontWeight = "400";
  paragraph.style.lineHeight = "20px";
  paragraph.style.letterSpacing = "0.2px";
  paragraph.style.color = pcolor;

courseSection.appendChild(card);
card.appendChild(icon);
card.appendChild(cardTittle);
card.appendChild(line);
card.appendChild(paragraph);
}
cards("white", "assets/img1.svg", "training Courses", "#252B42", "assets/red-line.svg", "#737373");
cards("white", "assets/img2.svg", "2,769 online courses", "#252B42", "assets/red-line.svg", "#737373");
cards("#23A6F0", "assets/img3.svg", "training Courses", "white", "assets/white-line.svg", "white");

const footer = document.createElement('div');
footer.style.display = "flex";
footer.style.justifyContent = "center";
footer.style.alignItems = "center";
footer.style.flexDirection = "column";
footer.style.backgroundColor = "#FFFFFF";
footer.style.width = "100%";
footer.style.height = "500px";

const footerText = document.createElement('h6');
footerText.innerHTML = "Practice Advice";
footerText.style.color = "#23A6F0";
footerText.style.fontSize = "14px";
footerText.style.fontStyle = "normal";
footerText.style.fontWeight = "700";
footerText.style.lineHeight = "24px";
footerText.style.letterSpacing = "0.2px";

footer.appendChild(footerText);


const footerTittle = document.createElement('h2');
footerTittle.className = "tittle";
footerTittle.classList.add = "tittle";
footerTittle.innerHTML = "Featured Products";
footerTittle.style.fontSize = "40px";
footerTittle.style.color = "#252B42";
footerTittle.style.fontStyle = "normal";
footerTittle.style.fontWeight = "700";
footerTittle.style.lineHeight = "50px";
footerTittle.style.letterSpacing = "0.2px";

footer.appendChild(footerTittle);


const footerParagraph = document.createElement('p');
footerParagraph.className = "paragraph";
footer.classList.add = "paragraph";
footerParagraph.innerHTML ="Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics";
footerParagraph.style.color ="#737373";
footerParagraph.style.width ="410px";
footerParagraph.style.fontSize ="14px";
footerParagraph.style.fontStyle ="normal";
footerParagraph.style.fontWeight ="400";
footerParagraph.style.lineHeight ="20px";
footerParagraph.style.letterSpacing ="0.2px";

footer.appendChild(footerParagraph);


const footerBtn = document.createElement('div');
footerBtn.style.width = "600px";
footerBtn.style.height = "50px";
footerBtn.style.backgroundColor = "#F9F9F9";
footerBtn.style.border = "1px solid #E6E6E6";
footerBtn.style.marginTop = "80px";
footerBtn.style.padding = "15px 59px 15px 20px";
footerBtn.style.alignItems = "center";
footerBtn.style.borderRadius = "5px";
footerBtn.style.display = "flex";
footerBtn.style.justifyContent = "space-between";
footerBtn.style.position = "relative";

const innerTxt = document.createElement('h3');
innerTxt.className = "txt";
innerTxt.classList.add = "txt";
innerTxt.innerHTML = "Your Email";
innerTxt.style.width = "100px";
innerTxt.style.color = "#737373";
innerTxt.style.fontSize = "14px";
innerTxt.style.fontStyle = "normal";
innerTxt.style.fontWeight = "400";
innerTxt.style.lineHeight = "28px";
innerTxt.style.letterSpacing = "0.2px";

const subBtn = document.createElement('div');
const btnDiv = document.createElement('div');
const btnTxt = document.createElement('h4');
btnTxt.className = "btnTXT";
btnTxt.classList.add = "btnTXT";
btnTxt.innerHTML = "Subscribe";
btnTxt.style.textAlign = "center";
btnTxt.style.color = "white";
btnTxt.style.fontSize = "14px";
btnTxt.style.fontStyle = "normal";
btnTxt.style.fontWeight = "400";
btnTxt.style.lineHeight = "28px";
btnTxt.style.fontWeight = "0.2px"
btnTxt.style.display = "flex";
subBtn.style.width = "117px";
subBtn.style.height = "50px";
subBtn.style.border = "1px solid #E6E6E6";
subBtn.style.backgroundColor = "#23A6F0";
subBtn.style.borderRadius = "0px 5px 5px 0px";
subBtn.style.padding = "15px 23px";
subBtn.style.display = "flex";
subBtn.style.justifyContent = "center";
subBtn.style.alignItems = "center";
subBtn.style.flexShrink = "0";
subBtn.style.position = "relative";
subBtn.style.alignItems = "0"


 
footer.appendChild(footerBtn);
footerBtn.appendChild(btnDiv);
btnDiv.appendChild(innerTxt);
footerBtn.appendChild(subBtn);
subBtn.appendChild(btnTxt);









document.body.appendChild(container);
document.body.appendChild(footer);
container.appendChild(mainBox);
mainBox.appendChild(tittle);
mainBox.appendChild(mainText);
mainBox.appendChild(h3);
mainBox.appendChild(box1);
box1.appendChild(btn1);
box1.appendChild(btn2);
btn1.appendChild(btnText);
btn2.appendChild(btnText2);
mainBox.appendChild(courseSection);
console.log(footerText)




