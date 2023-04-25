const header = document.createElement("header");
const nav = document.createElement("nav");
const contain = document.createElement("ul");
const home = document.createElement("li");
const about = document.createElement("li");
const blog = document.createElement("li");
const contact = document.createElement("li");
const section1 = document.createElement("section");
const section2 = document.createElement("section");
const section3 = document.createElement("section");
const section4 = document.createElement("section");

document.body.append(header);
document.body.append(section1);
document.body.append(section2);
document.body.append(section3);
document.body.append(section4);

header.append(nav);
nav.append(contain);
contain.append(home);
contain.append(about);
contain.append(blog);
contain.append(contact);

home.innerHTML = "<strong>Home<strong/>";
about.innerHTML = "<strong>About<strong/>";
blog.innerHTML = "<strong>Blog<strong/>";
contact.innerHTML = "<strong>Contact<strong/>";
section1.innerHTML = "Home";
section2.innerHTML = "About";
section3.innerHTML = "Blog";
section4.innerHTML = "Contact";

header.style.backgroundColor = "black";
header.style.height = "65px";

contain.style.display = "flex";
contain.style.justifyContent = "space-around";
contain.style.alignItems = "center";
contain.style.padding = "20px";


home.style.color = "white";
home.style.fontSize = "20px";
home.style.cursor = "pointer";
home.style.listStyle = "none";

about.style.color = "white";
about.style.fontSize = "20px";
about.style.cursor = "pointer";
about.style.listStyle = "none";

blog.style.color = "white";
blog.style.fontSize = "20px";
blog.style.cursor = "pointer";
blog.style.listStyle = "none";

contact.style.color = "white";
contact.style.fontSize = "20px";
contact.style.cursor = "pointer";
contact.style.listStyle = "none";

section1.style.display = "flex";
section1.style.justifyContent = "center";
section1.style.alignItems = "center";
section1.style.fontSize = "30px";
section1.style.height = "80vh";
section1.style.border = "1px dashed #000";
section1.style.margin = "20px 0";

section2.style.display = "flex";
section2.style.justifyContent = "center";
section2.style.alignItems = "center";
section2.style.fontSize = "30px";
section2.style.height = "80vh";
section2.style.border = "1px dashed #000";
section2.style.margin = "20px 0";

section3.style.display = "flex";
section3.style.justifyContent = "center";
section3.style.alignItems = "center";
section3.style.fontSize = "30px";
section3.style.height = "80vh";
section3.style.border = "1px dashed #000";
section3.style.margin = "20px 0";


section4.style.display = "flex";
section4.style.justifyContent = "center";
section4.style.alignItems = "center";
section4.style.fontSize = "30px";
section4.style.height = "80vh";
section4.style.border = "1px dashed #000";
section4.style.margin = "20px 0";

section1.id = "home";
section2.id = "about";
section3.id = "blog";
section4.id = "contact";

home.addEventListener("click", function () {
  window.location = "#home";
});
about.addEventListener("click", function () {
  location = "#about";
});
blog.addEventListener("click", function () {
 location = "#blog";
});
contact.addEventListener("click", function () {
  window.location.href = "#contact";
});
