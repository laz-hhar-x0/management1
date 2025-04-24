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

function promptCode(url) {
  targetUrl = url;
  document.getElementById("codePrompt").style.display = "block";
}

function closePrompt() {
  document.getElementById("codePrompt").style.display = "none";
  document.getElementById("codeInput").value = "";
}

function checkCode() {
  const correctCode = "admin@"; 
  const enteredCode = document.getElementById("codeInput").value;
  if (enteredCode === correctCode) {
    window.location.href = targetUrl;
  } else {
    alert("🚫 Incorrect code .. ! try Again");
  }
}





  function showCodePrompt(action, url, form = null) {
    const promptDiv = document.getElementById("codePrompt");
    promptDiv.style.display = "block";

    const submitBtn = promptDiv.querySelector("button.btn-primary");
    const input = document.getElementById("codeInput");

    // Reset previous value
    input.value = "";

    submitBtn.onclick = function () {
      const code = input.value;
      if (code === "admin@") {
        if (action === "edit") {
          window.location.href = url;
        } else if (action === "delete" && form) {
          form.submit();
        }
      } else {
        alert("Incorrect code");
      }
    };
  }

 