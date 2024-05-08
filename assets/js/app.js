const bgsEls = document.querySelectorAll(".backgrounds .item")
const aurasEls = document.querySelectorAll(".auras .item")
const bodiesEls = document.querySelectorAll(".bodies .item")
const flagsEls = document.querySelectorAll(".flags .item")
const faceEls = document.querySelectorAll(".faces .item")
const headsEls = document.querySelectorAll(".heads .item")
const objectsEls = document.querySelectorAll(".objects .item")


const backgrounds = [
    "/assets/TRAITS/bg-1.png",
    "/assets/TRAITS/bg-2.png",
    "/assets/TRAITS/bg-3.png",
    "/assets/TRAITS/bg-4.png",
    "/assets/TRAITS/bg-5.png",
    "/assets/TRAITS/bg-6.png",
    "/assets/TRAITS/bg-7.png",
    "/assets/TRAITS/bg-8.png",
    "/assets/TRAITS/bg-9.png",
    "/assets/TRAITS/bg-10.png",
    "/assets/TRAITS/bg-11.png",
    "/assets/TRAITS/bg-12.png",
    "/assets/TRAITS/bg-13.png",
    "/assets/TRAITS/bg-14.png"
];

const auras = [
    "/assets/TRAITS/aura-1.png",
    "/assets/TRAITS/aura-2.png",
    "/assets/TRAITS/aura-3.png",
    "/assets/TRAITS/aura-4.png",
    "/assets/TRAITS/aura-5.png",
    "/assets/TRAITS/aura-6.png",
    "/assets/TRAITS/aura-7.png",
    "/assets/TRAITS/aura-8.png",
    "/assets/TRAITS/aura-9.png",
    "/assets/TRAITS/aura-10.png",
    "/assets/TRAITS/aura-11.png",
    "/assets/TRAITS/aura-12.png"
];

const bodies = [
    "/assets/TRAITS/body-bitcolor.png",
    "/assets/TRAITS/body-blacklight.png",
    "/assets/TRAITS/body-blackwhite.png",
    "/assets/TRAITS/body-chromacat.png",
    "/assets/TRAITS/body-dark.png",
    "/assets/TRAITS/body-invert.png",
    "/assets/TRAITS/body-light.png",
    "/assets/TRAITS/body-main.png",
    "/assets/TRAITS/body-pinkenergy.png",
    "/assets/TRAITS/body-purple.png",
    "/assets/TRAITS/body-pinkfur.png",
    "/assets/TRAITS/body-pinklighting.png",
    "/assets/TRAITS/body-purple.png",
    "/assets/TRAITS/body-roschac.png",
    "/assets/TRAITS/body-satura.png",
    "/assets/TRAITS/body-shadow.png"
]

const flags = [
    "/assets/TRAITS/flags-china.png",
    "/assets/TRAITS/flags-dubai.png",
    "/assets/TRAITS/flags-japan.png",
    "/assets/TRAITS/flags-russia.png",
    "/assets/TRAITS/flags-usa.png"
]

const faces = [
    "/assets/TRAITS/eyes-sad.png",
    "/assets/TRAITS/eyes-3d.png",
    "/assets/TRAITS/eyes-shrek.png",
    "/assets/TRAITS/eyes-anime1.png",
    "/assets/TRAITS/eyes-anime2.png",
    "/assets/TRAITS/eyes-anime3.png",
    "/assets/TRAITS/eyes-anime4.png",
    "/assets/TRAITS/eyes-anime5.png",
    "/assets/TRAITS/eyes-big.png",
    "/assets/TRAITS/eyes-ciborg.png",
    "/assets/TRAITS/eyes-ciborg.png",
    "/assets/TRAITS/eyes-ciclope.png",
    "/assets/TRAITS/eyes-ciclops.png",
    "/assets/TRAITS/eyes-confused.png",
    "/assets/TRAITS/eyes-eyebrownmoustache.png",
    "/assets/TRAITS/eyes-glass.png",
    "/assets/TRAITS/eyes-goku.png",
    "/assets/TRAITS/eyes-harrypot.png",
    "/assets/TRAITS/eyes-horny.png",
    "/assets/TRAITS/eyes-illuminati.png",
    "/assets/TRAITS/eyes-joji.png",
    "/assets/TRAITS/eyes-leaving.png",
    "/assets/TRAITS/eyes-pinkwindow.png",
    "/assets/TRAITS/eyes-round.png",
    "/assets/TRAITS/eyes-sad.png",
    "/assets/TRAITS/eyes-shrek.png",
    "/assets/TRAITS/eyes-swim.png",
    "/assets/TRAITS/eyes-tomas.png",
    "/assets/TRAITS/eyes-trollface.png",
    "/assets/TRAITS/eyes-trollfaceexe.png",
    "/assets/TRAITS/eyes-turndown.png",
    "/assets/TRAITS/eyes-uwu.png",
    "/assets/TRAITS/eyes-wut.png",
    "/assets/TRAITS/eyes-yellowglass.png",
    "/assets/TRAITS/eyes-sad.png",
    "/assets/TRAITS/eyes-3d.png",
    "/assets/TRAITS/eyes-shrek.png",
    "/assets/TRAITS/eyes-anime1.png",
    "/assets/TRAITS/eyes-anime2.png",
    "/assets/TRAITS/eyes-anime3.png",
    "/assets/TRAITS/eyes-anime4.png",
    "/assets/TRAITS/eyes-anime5.png",
    "/assets/TRAITS/eyes-big.png",
    "/assets/TRAITS/eyes-ciborg.png",
    "/assets/TRAITS/eyes-ciborg.png",
    "/assets/TRAITS/eyes-ciclope.png",
    "/assets/TRAITS/eyes-ciclops.png",
    "/assets/TRAITS/eyes-confused.png",
    "/assets/TRAITS/eyes-eyebrownmoustache.png",
    "/assets/TRAITS/eyes-glass.png",
    "/assets/TRAITS/eyes-goku.png",
    "/assets/TRAITS/eyes-harrypot.png",
    "/assets/TRAITS/eyes-horny.png",
    "/assets/TRAITS/eyes-illuminati.png",
    "/assets/TRAITS/eyes-joji.png",
    "/assets/TRAITS/eyes-leaving.png",
    "/assets/TRAITS/eyes-pinkwindow.png",
    "/assets/TRAITS/eyes-round.png",
    "/assets/TRAITS/eyes-sad.png",
    "/assets/TRAITS/eyes-shrek.png",
    "/assets/TRAITS/eyes-swim.png",
    "/assets/TRAITS/eyes-tomas.png",
    "/assets/TRAITS/eyes-trollface.png",
    "/assets/TRAITS/eyes-trollfaceexe.png",
    "/assets/TRAITS/eyes-turndown.png",
    "/assets/TRAITS/eyes-uwu.png",
    "/assets/TRAITS/eyes-wut.png",
    "/assets/TRAITS/eyes-yellowglass.png"
]

const heads = [
    "/assets/TRAITS/head-3dpinlk.png",
    "/assets/TRAITS/head-animeboy.png",
    "/assets/TRAITS/head-blackpower.png",
    "/assets/TRAITS/head-blonde.png",
    "/assets/TRAITS/head-chinesegirl.png",
    "/assets/TRAITS/head-chopsuey.png",
    "/assets/TRAITS/head-chunli.png",
    "/assets/TRAITS/head-cutemessedup.png",
    "/assets/TRAITS/head-dirtyunderwear.png",
    "/assets/TRAITS/head-greenanimehair.png",
    "/assets/TRAITS/head-hairman.png",
    "/assets/TRAITS/head-hat.png",
    "/assets/TRAITS/head-japanese.png",
    "/assets/TRAITS/head-joint.png",
    "/assets/TRAITS/head-kunglao.png",
    "/assets/TRAITS/head-lilgirlflower.png",
    "/assets/TRAITS/head-main.png",
    "/assets/TRAITS/head-mario.png",
    "/assets/TRAITS/head-mickeymouse.png",
    "/assets/TRAITS/head-nikebeanie.png",
    "/assets/TRAITS/head-pan.png",
    "/assets/TRAITS/head-piercing.png",
    "/assets/TRAITS/head-pinkgirl.png",
    "/assets/TRAITS/head-redcapbeer.png",
    "/assets/TRAITS/head-rocklee.png",
    "/assets/TRAITS/head-samuraiwoman.png",
    "/assets/TRAITS/head-spike.png",
    "/assets/TRAITS/head-sushiman.png",
    "/assets/TRAITS/head-swimglass.png",
    "/assets/TRAITS/head-trasherhat.png",
    "/assets/TRAITS/head-white.png",
    "/assets/TRAITS/head-xxxx.png"
];

const objects = [
    "/assets/TRAITS/obj-beer.png",
    "/assets/TRAITS/obj-coke.png",
    "/assets/TRAITS/obj-couragedog.png",
    "/assets/TRAITS/obj-dexter.png",
    "/assets/TRAITS/obj-grass.png",
    "/assets/TRAITS/obj-rtx.png",
    "/assets/TRAITS/obj-shrek.png"
];

let metadata = {
    background: {
        link: "/assets/TRAITS/bg-1.png",
    },
    aura: {
        link: "/assets/TRAITS/aura-1.png"
    },
    body: {
        link: "/assets/TRAITS/body-bitcolor.png",
    },
    flag: {
        link: "/assets/TRAITS/flags-china.png",
    },
    face: {
        link: "/assets/TRAITS/eyes-sad.png",
    },
    head: {
        link: "/assets/TRAITS/head-3dpinlk.png"
    },
    objects: {
        link: "/assets/TRAITS/obj-beer.png"
    }
}

const init = async () => {
    resize();
    drawAll();
}

const sleep = (s) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), s * 1000);
    })
}

const drawAll = async () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // draw background
    draw(metadata.background.link);
    await sleep(.05)
    // draw aura
    draw(metadata.aura.link);
    await sleep(.05)
    // draw body
    draw(metadata.body.link);
    await sleep(.05)
    // draw flag
    draw(metadata.flag.link);
    await sleep(.05)
    // draw face
    draw(metadata.face.link);
    await sleep(.05)
    // draw head
    draw(metadata.head.link);
    await sleep(.05)
    // draw objects
    draw(metadata.objects.link);
}


const draw = (link) => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    // Create an image element
    const img = new Image();
    img.src = link;

    img.addEventListener("load", (e) => {
        const scaleFactor = Math.min(canvas.width / img.width, canvas.height / img.height);
        // Calculate the scaled dimensions
        const scaledWidth = img.width * scaleFactor;
        const scaledHeight = img.height * scaleFactor;
        ctx.drawImage(img, (canvas.width - scaledWidth) / 2, (canvas.height - scaledHeight) / 2, scaledWidth, scaledHeight);
    });
}


function randomize() {
    metadata.background.link = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    metadata.aura.link = auras[Math.floor(Math.random() * auras.length)];
    metadata.body.link = bodies[Math.floor(Math.random() * bodies.length)];
    metadata.flag.link = flags[Math.floor(Math.random() * flags.length)];
    metadata.face.link = faces[Math.floor(Math.random() * faces.length)];
    metadata.head.link = heads[Math.floor(Math.random() * heads.length)];
    metadata.objects.link = objects[Math.floor(Math.random() * objects.length)];
    document.querySelectorAll(".item").forEach(item => item.classList.remove("active"))
    init();
}


bgsEls.forEach((el, index) => el.addEventListener("click", e => {
    bgsEls.forEach(el => el.classList.remove("active"));
    if ((index === 0)) {
        metadata.background.link = "";
    } else {
        metadata.background.link = "/assets" + e.target.src.split("/assets")[1];
    }
    el.classList.add("active");
    init();
}));

aurasEls.forEach((el, index) => el.addEventListener("click", e => {
    aurasEls.forEach(el => el.classList.remove("active"));
    if ((index === 0)) {
        metadata.aura.link = "";
    } else {
        metadata.aura.link = "/assets" + e.target.src.split("/assets")[1];
    }
    el.classList.add("active");
    init();
}));

bodiesEls.forEach((el, index) => el.addEventListener("click", e => {
    bodiesEls.forEach(el => el.classList.remove("active"));
    if ((index === 0)) {
        metadata.body.link = "";
    } else {
        metadata.body.link = "/assets" + e.target.src.split("/assets")[1];
    }
    el.classList.add("active");
    init();
}));

flagsEls.forEach((el, index) => el.addEventListener("click", e => {
    flagsEls.forEach(el => el.classList.remove("active"));
    if ((index === 0)) {
        metadata.flag.link = "";
    } else {
        metadata.flag.link = "/assets" + e.target.src.split("/assets")[1];
    }
    el.classList.add("active");
    init();
}));

faceEls.forEach((el, index) => el.addEventListener("click", e => {
    faceEls.forEach(el => el.classList.remove("active"));
    if ((index === 0)) {
        metadata.face.link = "";
    } else {
        metadata.face.link = "/assets" + e.target.src.split("/assets")[1];
    }
    el.classList.add("active");
    init();
}));


headsEls.forEach((el, index) => el.addEventListener("click", e => {
    headsEls.forEach(el => el.classList.remove("active"));
    if ((index === 0)) {
        metadata.head.link = "";
    } else {
        metadata.head.link = "/assets" + e.target.src.split("/assets")[1];
    }
    el.classList.add("active");
    init();
}));

objectsEls.forEach((el, index) => el.addEventListener("click", e => {
    objectsEls.forEach(el => el.classList.remove("active"));
    if ((index === 0)) {
        metadata.objects.link = "";
    } else {
        metadata.objects.link = "/assets" + e.target.src.split("/assets")[1];
    }
    el.classList.add("active");
    init();
}));


function download() {
    const canvas = document.getElementById('canvas');
    const dataURL = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'richi.png';
    link.click();
}

function reset() {
    const _metadata = {
        background: {
            link: "/assets/TRAITS/bg-1.png",
        },
        aura: {
            link: "/assets/TRAITS/aura-1.png"
        },
        body: {
            link: "/assets/TRAITS/body-bitcolor.png",
        },
        flag: {
            link: "/assets/TRAITS/flags-china.png",
        },
        face: {
            link: "/assets/TRAITS/eyes-sad.png",
        },
        head: {
            link: "/assets/TRAITS/head-3dpinlk.png"
        },
        objects: {
            link: "/assets/TRAITS/obj-beer.png"
        }
    }

    metadata = { ..._metadata };
    init();
}

const resize = () => {
    const canvas = document.getElementById("canvas");
    const windowWidth = window.innerWidth;

    if (windowWidth > 770) {
        canvas.width = (windowWidth / 3.5);
    } else {
        canvas.width = (windowWidth / 1.6);
    }
    document.getElementById('canvas').height = (document.getElementById('canvas').offsetWidth * 1);
}

window.addEventListener("resize", init);

init();