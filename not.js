let bal = prompt("balingizni kiriting");
if (bal < 80) {
  alert("oqishga kirolmadingiz");
} else if (bal >= 80 && bal < 100) {
  alert("oqishga super kantirakt asosida kirdingiz");
  let sum = prompt("pul miqtorini kiriting");
  if (sum < 3000) {
    alert("qabul qilinmadingiz");
  } else {
    alert("oqishga qabul qilindingiz");
  }
} else if (bal >= 100 && bal < 150) {
  alert("kontrakt asosida qabul qilindizngiz");
  let sum = prompt("pul miqtorini kiriting");
  if (sum < 2000) {
    alert("qabul qilinmadingiz");
  } else {
    alert("oqishga qabul qilindingiz");
  }
} else if (bal >= 150 && bal <= 180) {
  alert("grant asosida o'qishga qabul qilinsin.");
}
