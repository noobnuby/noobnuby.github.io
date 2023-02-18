const observer = new IntersectionObserver((e) => {
    e.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

const hiddenelements = document.querySelectorAll(".skillHidden");
hiddenelements.forEach((el) => observer.observe(el));

function easteregg() {
    alert("🎉축하드립니다 당신은 이스터에그를 발견하셨습니다!!");
}

function githubLink() {
    var github = "http://github.com/noobnuby";
    window.open(github);
}

function emailLink() {
    window.location.href = "mailto:me@noobnuby.com";
}

function discordLink() {
    var discord = "https://discord.com/users/878092667156856882";
    window.open(discord);
}
