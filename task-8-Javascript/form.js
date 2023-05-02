function handleSplit() {
  let num = document.getElementById("ino").value;
  let t = document.getElementById("isplit").value;
  if (num < t || num <= 0 || t <= 0) {
    alert("Invalid Inputs,PLease Check");
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
