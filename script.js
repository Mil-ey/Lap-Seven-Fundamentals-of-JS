// Mouse events//
const hoverButton = document.getElementById("hover-button");
const mouseOutput = document.getElementById("mouse-events-output");

 hoverButton.addEventListener("mouseover", function() {
    mouseOutput.textContent = "Mouse is over the button!";
}
);
 hoverButton.addEventListener("mouseout", function() {
    mouseOutput.textContent = "Mouse is out of the button!";
});
 hoverButton.addEventListener("click", function() {
    mouseOutput.textContent = "Button clicked!";
});

// Keyboard events//
const inputField = document.getElementById("KeyInput");
const keyOutput = document.getElementById("keyboard-events-output");

 inputField.addEventListener("keydown", function(event) {
    keyOutput.textContent = "Key pressed: " + event.key;
}
);
 inputField.addEventListener("keyup", function(event) {
    keyOutput.textContent = "Key released: " + event.key;
}
);
    inputField.addEventListener("keypress", function(event) {
        keyOutput.textContent = "Key pressed (keypress): " + event.key;
    }
    );

// Form events//
const form = document.getElementById("form-events");
const formOutput = document.getElementById("form-events-output");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    formOutput.textContent = "Form submitted!";
}
);
form.addEventListener("reset", function() {
    formOutput.textContent = "Form reset!";
}
);

// Focus Events//
const focusInput = document.getElementById("focusInput");
const focusOutput = document.createElement("p");
focusOutput.id = "focus-events-output";
document.getElementById("focus-events").appendChild(focusOutput);

focusInput.addEventListener("focus", function() {
    focusOutput.textContent = "Input field focused!";
}
);
focusInput.addEventListener("blur", function() {
    focusOutput.textContent = "Input field blurred!";
}
);

// Event Delegation//
const container = document.getElementById("event-delegation");
const delegationOutput = document.getElementById("event-delegation-output");
const items = document.querySelectorAll(".delegation-item");

container.addEventListener("click", function(event) {
    if (event.target.classList.contains("btn")) {
        delegationOutput.textContent = "Item clicked: " + event.target.textContent;
    }
    
});



