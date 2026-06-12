let i = 0;
const text = "Dari sekadar peneman masa terluang,\nKini jadi orang yang paling kerap terbayang. 💜\n\nFor you Azlan,\nThank you for always being with me even though you're busy with your life.\n\nFor every laugh and moment we share, I treasure it always. 🪐\n\nLike in The Little Prince, we only truly see with the heart. That's why the memories we share mean more than words can explain.\n\nPlease, ni first coding project yang aku buat, so jangan judge banyak auu! Haha. 🙈\n\nHappy Birthday, Azlan! ^^ 🔮✨";function openLetter() {
    document.getElementById("open-btn").style.display = "none";
    document.getElementById("letter").style.display = "block";
    document.getElementById("message").innerHTML = "";

    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    typeWriter();
}

function typeWriter() {
    if (i < text.length) {
        document.getElementById("message").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50); // Kelajuan taip (50ms)
    } else {
        confetti({
            particleCount: 50,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 50,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });
        
        document.getElementById("gallery-btn").style.display = "block";
    }
}

function showGallery() {
    confetti({
        particleCount: 100,
        spread: 100,
        origin: { y: 0.6 }
    });

    setTimeout(() => {
        window.open("https://www.tiktok.com/@alienorfilms/video/7625019648089607444?_r=1&_t=ZS-978m3Pnbluq", "_blank");
    }, 1000);
}

const container = document.getElementById("flower-container");

function createFlower() {
    const flower = document.createElement("div");
    flower.classList.add("flower");

const flowers = ["🌹", "🌸", "🔮", "🌻", "🪐", "🌷", "⭐"];    flower.innerText = flowers[Math.floor(Math.random() * flowers.length)];

    flower.style.left = Math.random() * 100 + "vw";
    flower.style.fontSize = (16 + Math.random() * 20) + "px";

    const duration = 6 + Math.random() * 6;
    flower.style.animationDuration = duration + "s";

    container.appendChild(flower);

    setTimeout(() => {
        flower.remove();
    }, duration * 1000);
}

setInterval(createFlower, 500);