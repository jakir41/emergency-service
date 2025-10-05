function getelement(id) {
  const element = document.getElementById(id);
  return element;
}
const lovecount = document.getElementsByClassName("loves");
for (let love of lovecount) {
  love.addEventListener("click", function () {
    const totalLoveCount = getelement("love-count").innerText;

    getelement("love-count").innerText = Number(totalLoveCount) + 1;
  });
}

const callsbtn = document.getElementsByClassName("call-btn");
for (let call of callsbtn) {
  call.addEventListener("click", function () {
    const title = call.parentNode.parentNode.children[1].innerText;
    const nationalNumber = call.parentNode.parentNode.children[3].innerText;
    const coinsNumber = getelement("coin").innerText;
    if (coinsNumber >= 20) {
      const totalcoin = Number(coinsNumber) - 20;
      getelement("coin").innerText = totalcoin;
    }
    if (coinsNumber >= 20) {
      const callcontainer = getelement("call-history");
      const creatediv = document.createElement("div");

      creatediv.innerHTML = `
       <div class="flex justify-between items-center bg-[#fafafa] p-2 rounded-lg my-3">
              <div>
                <h1 class="font-bold">${title}</h1>
                <p class="text-gray-400">${nationalNumber}</p>
              </div>
              <div>
                ${new Date().toLocaleTimeString()}
              </div>
            </div>
       `;
      callcontainer.append(creatediv);
    } else {
      return alert("You need at least 20 coins to make a call!");
    }
    alert(` ${title} ${nationalNumber}`);
  });
}

document.getElementById("call-clear").addEventListener("click", function () {
  const callclera = getelement("call-history");
  callclera.innerHTML = "";
});

const copybtns = document.getElementsByClassName("copy-btn");
for (let copybtn of copybtns) {
  copybtn.addEventListener("click", function () {
    const copycounts = getelement("copy-count").innerText;
    const totalcopycountsNumber = Number(copycounts) + 1;
    getelement("copy-count").innerText = totalcopycountsNumber;
    const nationalNumber = copybtn.parentNode.parentNode.children[3].innerText;
    navigator.clipboard.writeText(nationalNumber).then(function () {
      alert(`number copy ${nationalNumber}`);
    });
  });
}
