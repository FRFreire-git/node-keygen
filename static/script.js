const password = document.getElementById("password");
const copy = document.getElementById("copy");
const generate = document.getElementById("generate");
const numbers = document.getElementById("numbers");
const uppercase = document.getElementById("uppercase");
const symbols = document.getElementById("symbols");
const spaces = document.getElementById("spaces");

copy.addEventListener("click", () => {
	var TempText = document.createElement("input");
	TempText.value = password.innerText;
	document.body.appendChild(TempText);
	TempText.select();
	document.execCommand("copy");
	document.body.removeChild(TempText);
});

generate.addEventListener("click", () => {
	var result = [];
	
	var characters = "abcdefghijklmnopqrstuvwxyz";

	if (numbers.checked) {
        characters += "0123456789";
	}
    
    if(uppercase.checked){
        characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if(symbols.checked){
        characters += "$%^&)><?'\"@_-*#(![]{}";
    }
    
    // if(spaces.checked){
    //     characters += " ";
    // }
    
	var charactersLength = characters.length;

	for (var i = 0; i < 12; i++) {
		result.push(
			characters.charAt(Math.floor(Math.random() * charactersLength))
		);
	}

	password.innerText = result.join("");
});