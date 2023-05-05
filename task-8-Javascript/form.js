function handleDanger(){
  let r=document.getElementById("dangerbtn");
  r.remove();
}

function handleSplit() {
  let num = Number(document.getElementById("ino").value);
  let t = Number(document.getElementById("isplit").value);
  if (num < t || num <= 0 || t <= 0) {
    var d = document.createElement("div");
    d.setAttribute('id', 'dangerbtn');
    d.style.width = "50px";
    d.style.backgroundColor = "white";
    d.style.height = "50px";
    // d.innerHTML = `${arr1[i]}`;
    d.style.marginTop="-94px";
    d.style.marginLeft="100px";
    d.innerHTML='<input class="btn btn-primary" type="button" value="Invalid Input" onclick="handleDanger()">'
    document.getElementById("box").appendChild(d);

    
  } else {
    let arr = Array.from({ length: t });
    let val = Math.floor(num / t);
    if (val * t != num) val++;
    arr.fill(val);
    let diff = val * t - num;
    while (diff > 0) {
      for (let i = 0; i < t && diff > 0; i++) {
        arr[i]--;
        diff--;
      }
    }
    arr.sort();
    arr.reverse();
    let arr1 = arr.slice(0);
    for (let i = 0; i < t; i++) {
      arr[i] = (arr[i] * 100) / num;
    }
    console.log(arr1);
    for (let i = 0; i < t; i++) {
      var d = document.createElement("div");
      d.style.width = `${arr[i]}%`;
      d.style.backgroundColor = "red";
      d.style.height = "100px";
      d.style.textAlign = "center";

      var randomColor = Math.floor(Math.random() * 16777215).toString(16);
      d.style.backgroundColor = `${randomColor}`;
      d.innerHTML = `${arr1[i]}`;
      document.getElementById("box").appendChild(d);
    }
  }
}
