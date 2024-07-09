const encryptionRules = [
  { condition: "e", replace: "enter" },
  { condition: "i", replace: "imes" },
  { condition: "a", replace: "ai" },
  { condition: "o", replace: "ober" },
  { condition: "u", replace: "ufat" },
];

const decryptionRules = [
  { condition: "ai", replace: "a" },
  { condition: "enter", replace: "e" },
  { condition: "imes", replace: "i" },
  { condition: "ober", replace: "o" },
  { condition: "ufat", replace: "u" },
];

const classVerifierTagHTML = (tag, nameClass) => {
  let elementHTML = document.querySelector(tag).classList.contains(nameClass);

  return elementHTML ? true : false;
};

const classAddTagHTML = (tag, nameClass) => {
  document.querySelector(tag).classList.add(nameClass);
  return;
};

const classRemoveTagHTML = (tag, nameClass) => {
  document.querySelector(tag).classList.remove(nameClass);
  return;
};

const assignTextElements = (tag, text) => {
  let elementHTML = document.querySelector(tag);
  elementHTML.innerHTML = text;
  return;
};

const getText = (id) => {
  return String(document.getElementById(id).value).toLowerCase();
};

const replaceValue = (text, rules) => {
  let textReplace = text;

  rules.forEach((rule) => {
    const regex = new RegExp(rule.condition, "g");
    textReplace = textReplace.replace(regex, rule.replace);
  });

  return textReplace;
};

const showTextEncryptDecrypt = (text, rule) => {
  if (text !== "") {
    let textEncryptDecrypt = replaceValue(text, rule);
    classAddTagHTML(".container_img_text_section", "display_none");
    assignTextElements(".text_encrypt_decrypt", textEncryptDecrypt);
    classRemoveTagHTML(".container_img_text_section_copy", "display_none");
  } else {
    let classVerifire = classVerifierTagHTML(
      ".container_img_text_section",
      "display_none"
    );

    if (classVerifire) {
      classRemoveTagHTML(".container_img_text_section", "display_none");
      classAddTagHTML(".container_img_text_section_copy", "display_none");
    }
  }

  return;
};

const encrypt = () => {
  let text = getText("text_encrypt_decrypt");
  showTextEncryptDecrypt(text, encryptionRules);

  return;
};

const decrypt = () => {
  let textEncrypt = getText("text_encrypt_decrypt");
  showTextEncryptDecrypt(textEncrypt, decryptionRules);

  return;
};

const copy = async () => {
  let copyText = document.querySelector(".text_encrypt_decrypt").innerHTML;

  try {
    await navigator.clipboard.writeText(copyText);
  } catch (error) {
    console.log("Error to copy text");
  }

  return;
};
