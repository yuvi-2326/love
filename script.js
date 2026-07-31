const message = `
❤️ I LOVE YOU, AANCHAL ❤️
~ My Gadhi 🤭💗

Happy Girlfriend's Day!

I'll never just call you my girlfriend..
Because to me,
you'll always be my Life Partner...

Thank you for making me smile
and for keeping my inner child alive.

I can't imagine a world without you...

No matter what happens,
I'll always choose you every single time..

Forever & Always,
Yours,
YUVI❤️
`;

let i = 0;
const element = document.getElementById("t");

function typeWriter() {
    if (i < message.length) {
        if (message.charAt(i) === "\n") {
            element.innerHTML += "<br>";
        } else {
            element.innerHTML += message.charAt(i);
        }
        i++;
        setTimeout(typeWriter, 40);
    }
}

typeWriter();
