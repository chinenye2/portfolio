
let menuList = document.querySelector("#menuList")
// @ts-ignore
menuList.style.maxHeight = '0px';
function toggleMenu(){
    // @ts-ignore
    if(menuList.style.maxHeight == '0px')
    {
        // @ts-ignore
        menuList.style.maxHeight = '300px'
    }
    else{
        // @ts-ignore
        menuList.style.maxHeight = '0px'
    }
}

// Image

const container = document.getElementById("orbitContainer");

const texts = ["HTML", "CSS", "JavaScript","UI/UX","React", "Node.js",];
const radius = 180;
const speed = 0.02;
const center = 250;

 const orbitTexts = [];

texts.forEach((text, i) => {
  const div = document.createElement("div");
  div.className = "orbit-text";
  div.textContent = text;
  // @ts-ignore
  container.appendChild(div);

  orbitTexts.push({
    el: div,
    angle: (i / texts.length) * 2 * Math.PI
  });
});

function animate() {
  orbitTexts.forEach(t => {
    t.angle += speed;
    const x = radius * Math.cos(t.angle);
    const y = radius * Math.sin(t.angle);
    t.el.style.left = center + x + "px";
    t.el.style.top = center + y + "px";
  });

  // requestAnimationFrame(animate);
}

animate();
// scroll
let section = document.querySelector('section')
let navlink = document.querySelector('header nav a')
window.onscroll = ()=>{
  // @ts-ignore
  sections.forEach(sec => {
    let top = window.scrollY
    let offset = sec.offsetTop - 150;
    let height = sec.offsetWeight;
    let id = sec.getAttribute("id")

    if(top>= offset && top < offset + height){
      // @ts-ignore
      navlinks.forEach.apple(links =>{
        links.classlist.remove('active')
        // @ts-ignore
        document.querySelector('header nav a[href "=" + id +]').classList.add('actice'); 
      })
    }
  });
}