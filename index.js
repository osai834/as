// فتح نافذة "معاملات تجارب"
document.getElementById("biss").onclick = function() {
  document.getElementById("buying").style.display = "flex";
};

// فتح نافذة "شراء منتج"
document.getElementById("buy").onclick = function() {
  document.getElementById("bi").style.display = "flex";
};

// إغلاق نافذة "شراء منتج"
document.getElementById("close").onclick = function() {
  document.getElementById("bi").style.display = "none";
};

// إغلاق نافذة "معاملات تجارب"
document.getElementById("close1").onclick = function() {
  document.getElementById("buying").style.display = "none";
};

// إرسال نموذج "شراء منتج"
document.getElementById("sent").onclick = function() {
  let name = document.querySelector("#bi input[placeholder='اسمك']").value;
  let phone = document.querySelector("#bi input[placeholder='الهاتف']").value;
  let date = document.querySelector("#bi input[type='date']").value;
  let note = document.querySelector("#bi input[placeholder='ترك ملاحظه']").value;

  let message = ` حجز منتج جديد:\nالاسم: ${name}\nالهاتف: ${phone}\nالتاريخ: ${date}\nملاحظة: ${note}`;
  let encoded = encodeURIComponent(message);
  window.open(`https://wa.me/201110000913?text=${encoded}`, '_blank');
};

// إرسال نموذج "معاملات تجارب"
document.getElementById("sent1").onclick = function() {
  let name = document.querySelector("#buying input[placeholder='اسمك']").value;
  let phone = document.querySelector("#buying input[placeholder='الهاتف']").value;
  let date = document.querySelector("#buying input[type='date']").value;
  let type = document.querySelector("#buying input[placeholder='نوع المعله']").value;

  let message = ` طلب معاملة تجارب:\nالاسم: ${name}\nالهاتف: ${phone}\nالتاريخ: ${date}\nنوع المعاملة: ${type}`;
  let encoded = encodeURIComponent(message);
  window.open(`https://wa.me/+201110000913?text=${encoded}`, '_blank');
};
