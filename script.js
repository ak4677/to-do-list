let task = document.getElementById('task');
let enter = document.getElementById('enter');
let button = document.getElementById('button');
let i=1;
async function create(value) {
  let li = document.createElement("li");
    li.style.margin = "auto";
    li.style.marginBottom="1rem";
    li.style.padding = "15px";
    li.style.width = "300px";
    li.style.textAlign="center";
    li.style.listStyleType="none";
    li.style.background = "black";
    li.style.color = "white";
    li.style.textShadow="2px 2px 8px white";
    li.style.fontSize="relative";
    li.style.borderRadius = "10px"
    li.innerHTML = localStorage.getItem(value);
    document.getElementById('task2').appendChild(li);
    li.onclick=async function done() {
      li.style.opacity="0.5";
      localStorage.removeItem(value);
    }
}
async function already() {
  if(localStorage.length!=0) {
    for(key in localStorage){
      if(localStorage.getItem(key)==null){
        continue;
      }else{
        await create(key);
        i++
      }
    }
  }
}
already()
button.onclick = async function() {
  localStorage.setItem(i, enter.value);
  await create(i);
  i++;
}