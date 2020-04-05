document.querySelector(".submit-btn").addEventListener("click", () => {
  const name = document.querySelector("#name").value;
  let genlis = document.getElementsByName("gender");
  let gen;
  for (let i = 0; i < genlis.length; i++) {
    if (genlis[i].checked) {
      gen = genlis[i].value;
    }
  }
  const addr = document.querySelector("#addr").value;
  const pin = document.querySelector("#pin").value;
  const district = document.querySelector(".dist-sel").value;
  let symplis = document.getElementsByName("symp");
  let symps = [];
  for (let i = 0; i < symplis.length; i++) {
    if (symplis[i].checked) {
      symps.push(symplis[i].value);
    }
  }
  if (!name) {
    alert("Enter your Name");
    return "";
  } else if (!addr) {
    alert("Address should not be empty");
    return "";
  } else if (!pin) {
    alert("Enter the PIN");
    return "";
  } else if (pin.length !== 6 || !parseInt(pin)) {
    alert("Pin should be a number and of length 7");
    return "";
  } else if (symps.length == 0) {
    alert("If you don't have symptoms Why are you here?");
    return "";
  }
  alert(
    `Name: ${name}\n\nSex: ${gen}\n\nAddress:\n${addr}\n\nPIN: ${pin}\n\nDistrict: ${district}\n\nSymptoms:\n${symps}`
  );
});
