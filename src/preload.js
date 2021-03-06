/* eslint-disable no-unused-vars */
let preload;
let firstBackgroundPreload;

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    //console.log("Телефон");
    preload = [
        [
            "./imagesHD/test1/1.webp",
            "./imagesHD/test1/2.webp",
            "./imagesHD/test1/3.webp",
            "./imagesHD/test1/4.webp",
        ],
        [
            "./imagesHD/test2/1.webp",
            "./imagesHD/test2/2.webp",
            "./imagesHD/test2/3.webp",
            "./imagesHD/test2/4.webp",
        ],
        [
            "./imagesHD/test3/1.webp",
            "./imagesHD/test3/2.webp",
            "./imagesHD/test3/3.webp",
            "./imagesHD/test3/4.webp",
            "./imagesHD/test3/5.webp",
        ],
        ["./imagesHD/test4/1.webp", "./imagesHD/test4/2.webp", "./imagesHD/test4/3.webp"],
        [
            "./imagesHD/test5/1.webp",
            "./imagesHD/test5/2.webp",
            "./imagesHD/test5/3.webp",
            "./imagesHD/test5/4.webp",
            "./imagesHD/test5/5.webp",
            "./imagesHD/test5/6.webp",
        ],
        [
            "./imagesHD/test6/1.webp",
            "./imagesHD/test6/2.webp",
            "./imagesHD/test6/3.webp",
            "./imagesHD/test6/4.webp",
            "./imagesHD/test6/5.webp",
        ],
    ];
    firstBackgroundPreload = [
        "./imagesHD/test1/1.webp",
        "./imagesHD/test1/2.webp",
        "./imagesHD/test1/3.webp",
        "./imagesHD/test1/4.webp",
    ];
} else {
    //console.log("Компуктер");
    preload = [
        [
            "./imagesHD/test1/1.png",
            "./imagesHD/test1/2.png",
            "./imagesHD/test1/3.png",
            "./imagesHD/test1/4.png",
        ],
        [
            "./imagesHD/test2/1.png",
            "./imagesHD/test2/2.png",
            "./imagesHD/test2/3.png",
            "./imagesHD/test2/4.png",
        ],
        [
            "./imagesHD/test3/1.png",
            "./imagesHD/test3/2.png",
            "./imagesHD/test3/3.png",
            "./imagesHD/test3/4.png",
            "./imagesHD/test3/5.png",
        ],
        ["./imagesHD/test4/1.png", "./imagesHD/test4/2.png", "./imagesHD/test4/3.png"],
        [
            "./imagesHD/test5/1.png",
            "./imagesHD/test5/2.png",
            "./imagesHD/test5/3.png",
            "./imagesHD/test5/4.png",
            "./imagesHD/test5/5.png",
            "./imagesHD/test5/6.png",
        ],
        [
            "./imagesHD/test6/1.png",
            "./imagesHD/test6/2.png",
            "./imagesHD/test6/3.png",
            "./imagesHD/test6/4.png",
            "./imagesHD/test6/5.png",
        ],
    ];
    firstBackgroundPreload = [
        "./imagesHD/test1/1.png",
        "./imagesHD/test1/2.png",
        "./imagesHD/test1/3.png",
        "./imagesHD/test1/4.png",
    ];
}
