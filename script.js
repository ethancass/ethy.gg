document.addEventListener("DOMContentLoaded", () => {
    const ethyText = document.querySelector(".command-line");
    const modpackText = document.querySelector(".modpack-static");
    const serverIPText = document.querySelector(".server-static");
    const tooltip = document.getElementById("copied-tooltip");

    const characters = "abcdefghijklmnopqrstuvwxyz";

    // Hacker animation function
    function hackerEffect(element, targetText, speed = 50) {
        let iteration = 0;
        const interval = setInterval(() => {
            element.textContent = targetText
                .split("")
                .map((char, index) => {
                    if (index < iteration) {
                        return char; // Show correct character
                    }
                    return characters[Math.floor(Math.random() * characters.length)];
                })
                .join("");

            if (iteration >= targetText.length) {
                clearInterval(interval); // Stop the effect
            }

            iteration += 1 / 3; // Adjust speed of resolution
        }, speed); // Speed of effect
    }

    // Add hover effect for ethy, modpack:, and server ip:
    ethyText.addEventListener("mouseenter", () => hackerEffect(ethyText, "ethy", 70));
    modpackText.addEventListener("mouseenter", () => hackerEffect(modpackText, "modpack:", 50));
    serverIPText.addEventListener("mouseenter", () => hackerEffect(serverIPText, "server ip:", 50));

    // Function to copy the server IP to clipboard
    window.copyToClipboard = function () {
        const serverIP = "mc.ethy.gg";
        navigator.clipboard.writeText(serverIP).then(() => {
            // Show tooltip
            tooltip.style.opacity = 1;

            // Hide tooltip after 2 seconds
            setTimeout(() => {
                tooltip.style.opacity = 0;
            }, 2000);
        }).catch((err) => {
            console.error("Failed to copy text: ", err);
        });
    };
});
