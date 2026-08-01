const loading = document.getElementById("loading-screen");
const messageBox = document.getElementById("messageBox");
const typingText = document.getElementById("typingText");
const letterBtn = document.getElementById("letterBtn");
const letter = document.getElementById("letter");

const message = `Happy Girlfriend's Day!

I'll never call you just my girlfriend...

Because to me,
you'll always be my Life Partner.

Thank you for making me smile
and for keeping my inner child alive.

I can't imagine a world without you.

No matter what happens,
I'll always choose you.
Every single time.

Forever & Always...
Yours,
YUVI ❤️`;

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 180; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2,
        o: Math.random()
    });
}

function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach(s => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.o})`;
        ctx.fill();

        s.o += (Math.random() - 0.5) * 0.05;

        if (s.o < 0.2) s.o = 0.2;
        if (s.o > 1) s.o = 1;
    });

    requestAnimationFrame(animateStars);
}

animateStars();

loading.addEventListener("click", () => {

    loading.style.opacity = "0";

    setTimeout(() => {

        loading.style.display = "none";

        messageBox.style.display = "block";

        typeWriter();

    }, 800);

});

let i = 0;

function typeWriter() {

    if (i < message.length) {

        if (message.charAt(i) === "\n") {
            typingText.innerHTML += "<br>";
        } else {
            typingText.innerHTML += message.charAt(i);
        }

        i++;

        setTimeout(typeWriter, 45);

    } else {

        letterBtn.style.display = "block";

    }

}

letterBtn.onclick = () => {

    letter.style.display = "block";

    messageBox.style.display = "none";

    letterBtn.style.display = "none";

};

window.onresize = () => {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

};
