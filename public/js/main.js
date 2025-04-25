if (localStorage.getItem("isSmall") === "yes") {
  sidebarId.classList.add("small-sidebar");
} else {
  sidebarId.classList.remove("small-sidebar");
}

const toggleSidebar = () => {
  if (localStorage.getItem("isSmall") === "yes") {
    localStorage.setItem("isSmall", "no");
    sidebarId.classList.remove("small-sidebar");
  } else {
    localStorage.setItem("isSmall", "yes");
    sidebarId.classList.add("small-sidebar");
  }
};



let targetUrl = ""; 
let targetForm = null;
let currentAction = ""; // 🆕 لتحديد نوع العملية

function promptCode(url, action) {
  targetUrl = url;
  currentAction = action;

  const offcanvasEl = document.querySelector(".offcanvas.show");
  if (offcanvasEl) {
    const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
    offcanvas.hide();
  }

  document.getElementById("codePrompt").style.display = "block";
  document.getElementById("codeInput").value = "";
}


function closePrompt() {
  document.getElementById("codePrompt").style.display = "none";
  document.getElementById("codeInput").value = "";
  targetForm = null;
}
// function checkCode() {
//   const correctCode = "admin@"; 
//   const enteredCode = document.getElementById("codeInput").value;
//   if (enteredCode === correctCode) {
//     window.location.href = targetUrl;
//   } else {
//     alert("🚫 Incorrect code .. ! try Again");
//   }
// }





//   function showCodePrompt(action, url, form = null) {
//     const promptDiv = document.getElementById("codePrompt");
//     promptDiv.style.display = "block";

//     const submitBtn = promptDiv.querySelector("button.btn-primary");
//     const input = document.getElementById("codeInput");

//     // Reset previous value
//     input.value = "";

//     submitBtn.onclick = function () {
//       const code = input.value;
//       if (code === "admin@") {
//         if (action === "edit") {
//           window.location.href = url;
//         } else if (action === "delete" && form) {
//           form.submit();
//         }
//       } else {
//         alert("Incorrect code !!");
//       }
//     };
//   }

 

function showCodePrompt(action, url, form = null) {
  currentAction = action; // 🆕 حفظ نوع العملية (edit أو delete)
  targetUrl = url;        // 🆕 حفظ الرابط
  targetForm = form;      // 🆕 حفظ الفورم إن وُجد

  document.getElementById("codePrompt").style.display = "block";
  document.getElementById("codeInput").value = "";

  const offcanvasEl = document.querySelector(".offcanvas.show");
  if (offcanvasEl) {
    const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
    offcanvas.hide();
  }
}



// corect 

// function checkCode() {
//   const enteredCode = document.getElementById("codeInput").value;

//   if (currentAction === "edit" && enteredCode === "admin@@") {
//     window.location.href = targetUrl;
//   } 
//   else if (currentAction === "delete" && enteredCode === "admin@") {
//     targetForm.submit();
//   } 
//   else if (currentAction === "addProf" && enteredCode === "admin@prof") {
//     window.location.href = targetUrl;
//   } 
//   else if (currentAction === "addEtud" && enteredCode === "admin@etud") {
//     window.location.href = targetUrl;
//   } 
//   else {
//     alert("🚫 Incorrect code for this action!");
//     return;
//   }

//   closePrompt(); // بعد العملية
// }


function checkCode() {
  const enteredCode = document.getElementById("codeInput").value;

  if (currentAction === "edit" && enteredCode === "admin@@") {
    window.location.href = targetUrl;
  } 
  else if (currentAction === "delete" && enteredCode === "admin@") {
    targetForm.submit(); // حذف سواء بروف أو طالب
  } 
  else if (currentAction === "addProf" && enteredCode === "admin@prof") {
    window.location.href = targetUrl;
  } 
  else if (currentAction === "addEtud" && enteredCode === "admin@etud") {
    window.location.href = targetUrl;
  } 
  else {
    alert("🚫 Incorrect code for this action!");
    return;
  }

  closePrompt(); // بعد العملية
}
