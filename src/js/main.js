(() => {
  let yOffset = 0;
  let prevScrollHeight = 0;
  let currentScene = 0;
  let enterNewScene = false;
  const imageHeight = 852;

  const sceneInfo = [
    {
      type: "sticky",
      heightNum: 7, // 브라우저 높이의 num배로 셋팅
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#scroll-section-0"),
        messageA: document.querySelector("#scroll-section-0 .main-message.a"),
        messageB: document.querySelector("#scroll-section-0 .main-message.b"),
        messageC: document.querySelector("#scroll-section-0 .main-message.c"),
        messageD: document.querySelector("#scroll-section-0 .main-message.d"),
        canvas: document.querySelector("#video-canvas-0"),
        context: document.querySelector("#video-canvas-0").getContext("2d"),
        videoImages: [],
      },
      values: {
        messageA_opatity_in: [0, 1, { start: 0.1, end: 0.2 }],
        messageB_opatity_in: [0, 1, { start: 0.3, end: 0.4 }],
        messageC_opatity_in: [0, 1, { start: 0.5, end: 0.6 }],
        messageD_opatity_in: [0, 1, { start: 0.7, end: 0.8 }],
        messageA_opatity_out: [1, 0, { start: 0.25, end: 0.3 }],
        messageB_opatity_out: [1, 0, { start: 0.45, end: 0.5 }],
        messageC_opatity_out: [1, 0, { start: 0.65, end: 0.7 }],
        messageD_opatity_out: [1, 0, { start: 0.85, end: 0.9 }],
        messageA_translateY_in: [20, 0, { start: 0.1, end: 0.2 }],
        messageB_translateY_in: [20, 0, { start: 0.3, end: 0.4 }],
        messageC_translateY_in: [20, 0, { start: 0.5, end: 0.6 }],
        messageD_translateY_in: [20, 0, { start: 0.7, end: 0.8 }],
        messageA_translateY_out: [0, -20, { start: 0.25, end: 0.3 }],
        messageB_translateY_out: [0, -20, { start: 0.45, end: 0.5 }],
        messageC_translateY_out: [0, -20, { start: 0.65, end: 0.7 }],
        messageD_translateY_out: [0, -20, { start: 0.85, end: 0.9 }],
        videoImageCount: 406,
        imageSequence: [0, 405],
        canvase_opacity_in: [0, 1, { start: 0.01, end: 0.2 }],
        canvase_opacity_out: [1, 0, { start: 0.9, end: 1 }],
        imagePath: "./src/videos/duckdog",
        imageWidth: 852,
        imageHeight: 480,
      },
    },
    {
      type: "normal",
      // heightNum: 5, // 브라우저 높이의 num배로 셋팅
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#scroll-section-1"),
      },
    },
    {
      type: "sticky",
      heightNum: 5, // 브라우저 높이의 num배로 셋팅
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#scroll-section-2"),
        messageA: document.querySelector("#scroll-section-2 .main-message.a"),
        messageB: document.querySelector("#scroll-section-2 .desc-message.b"),
        messageC: document.querySelector("#scroll-section-2 .desc-message.c"),
        pinB: document.querySelector("#scroll-section-2 .desc-message.b .pin"),
        pinC: document.querySelector("#scroll-section-2 .desc-message.c .pin"),
      },
      values: {
        messageA_opatity_in: [0, 1, { start: 0.1, end: 0.3 }],
        messageB_opatity_in: [0, 1, { start: 0.4, end: 0.5 }],
        messageC_opatity_in: [0, 1, { start: 0.6, end: 0.7 }],
        messageA_opatity_out: [1, 0, { start: 0.35, end: 0.4 }],
        messageB_opatity_out: [1, 0, { start: 0.55, end: 0.6 }],
        messageC_opatity_out: [1, 0, { start: 0.75, end: 0.8 }],
        messageA_translateY_in: [20, 0, { start: 0.1, end: 0.3 }],
        messageB_translateY_in: [20, 0, { start: 0.4, end: 0.5 }],
        messageC_translateY_in: [20, 0, { start: 0.6, end: 0.7 }],
        messageA_translateY_out: [0, -20, { start: 0.35, end: 0.4 }],
        messageB_translateY_out: [0, -20, { start: 0.55, end: 0.6 }],
        messageC_translateY_out: [0, -20, { start: 0.75, end: 0.8 }],
      },
    },
    {
      type: "sticky",
      heightNum: 5, // 브라우저 높이의 num배로 셋팅
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#scroll-section-3"),
        canvaseCaption: document.querySelector(".canvase-section"),
      },
    },
  ];

  const setLayout = () => {
    sceneInfo.forEach((item) => {
      if (item.type === "sticky") {
        item.scrollHeight = item.heightNum * window.innerHeight;
      } else if (item.type === "normal") {
        item.scrollHeight = item.objs.container.offsetHeight;
      }

      item.objs.container.style.height = `${item.scrollHeight}px`;
    });

    yOffset = window.pageYOffset;

    let totalScrollHeight = 0;
    for (let i = 0; i < sceneInfo.length; i++) {
      totalScrollHeight += sceneInfo[i].scrollHeight;
      if (totalScrollHeight >= pageYOffset) {
        currentScene = i;
        break;
      }
    }

    document.body.setAttribute("id", `show-scene-${currentScene}`);

    const heightRatio = window.innerHeight / imageHeight;
    sceneInfo[0].objs.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`;

    console.log("Init SceneInfo", sceneInfo);
  };

  const scrollLoop = () => {
    enterNewScene = false;
    prevScrollHeight = 0;
    for (let i = 0; i < currentScene; i++) {
      prevScrollHeight += sceneInfo[i].scrollHeight;
    }

    if (yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
      enterNewScene = true;
      currentScene++;
      document.body.setAttribute("id", `show-scene-${currentScene}`);
    }

    if (yOffset < prevScrollHeight) {
      if (currentScene <= 0) {
        return;
      }
      enterNewScene = true;
      currentScene--;
      document.body.setAttribute("id", `show-scene-${currentScene}`);
    }

    if (enterNewScene) {
      return;
    }

    playAnimation();
  };

  const changeNormalStyle = (
    currentYOffset,
    style,
    opacityValue,
    translateYValue
  ) => {
    style.opacity = calcValues(opacityValue, currentYOffset);
    style.transform = `translate3d(0, ${calcValues(
      translateYValue,
      currentYOffset
    )}%)`;
  };

  const playAnimation = () => {
    const { values, objs } = sceneInfo[currentScene];
    const scrollHeight = sceneInfo[currentScene].scrollHeight;
    const currentYOffset = yOffset - prevScrollHeight;
    const scrollRatio = currentYOffset / scrollHeight;

    // console.log("currentScene", currentScene);
    switch (currentScene) {
      case 0:
        // a
        let sequence = Math.round(
          calcValues(values.imageSequence, currentYOffset)
        );

        const tempImage = objs.videoImages[sequence];
        objs.context.drawImage(
          tempImage,
          1920 / 2 - tempImage.width / 2,
          1080 / 2 - tempImage.height / 2
        );

        console.log("sequence", sequence);
        if (scrollRatio <= 0.22) {
          changeNormalStyle(
            currentYOffset,
            objs.messageA.style,
            values.messageA_opatity_in,
            values.messageA_translateY_in
          );
        } else {
          // out
          changeNormalStyle(
            currentYOffset,
            objs.messageA.style,
            values.messageA_opatity_out,
            values.messageA_translateY_out
          );
        }

        // b
        if (scrollRatio <= 0.45) {
          changeNormalStyle(
            currentYOffset,
            objs.messageB.style,
            values.messageB_opatity_in,
            values.messageB_translateY_in
          );
        } else {
          // out
          changeNormalStyle(
            currentYOffset,
            objs.messageB.style,
            values.messageB_opatity_out,
            values.messageB_translateY_out
          );
        }

        // c
        if (scrollRatio <= 0.65) {
          changeNormalStyle(
            currentYOffset,
            objs.messageC.style,
            values.messageC_opatity_in,
            values.messageC_translateY_in
          );
        } else {
          // out
          changeNormalStyle(
            currentYOffset,
            objs.messageC.style,
            values.messageC_opatity_out,
            values.messageC_translateY_out
          );
        }

        // d
        if (scrollRatio <= 0.85) {
          changeNormalStyle(
            currentYOffset,
            objs.messageD.style,
            values.messageD_opatity_in,
            values.messageD_translateY_in
          );
        } else {
          // out
          changeNormalStyle(
            currentYOffset,
            objs.messageD.style,
            values.messageD_opatity_out,
            values.messageD_translateY_out
          );
        }

        if (scrollRatio <= 0.2) {
          // objs.canvas.style.opacity = calcValues(
          //   values.canvase_opacity_in,
          //   currentYOffset
          // );
        } else {
          objs.canvas.style.opacity = calcValues(
            values.canvase_opacity_out,
            currentYOffset
          );
        }

        break;
      case 1:
        break;
      case 2:
        // a
        if (scrollRatio <= 0.22) {
          changeNormalStyle(
            currentYOffset,
            objs.messageA.style,
            values.messageA_opatity_in,
            values.messageA_translateY_in
          );
        } else {
          // out
          changeNormalStyle(
            currentYOffset,
            objs.messageA.style,
            values.messageA_opatity_out,
            values.messageA_translateY_out
          );
        }

        // b
        if (scrollRatio <= 0.45) {
          changeNormalStyle(
            currentYOffset,
            objs.messageB.style,
            values.messageB_opatity_in,
            values.messageB_translateY_in
          );
        } else {
          // out
          changeNormalStyle(
            currentYOffset,
            objs.messageB.style,
            values.messageB_opatity_out,
            values.messageB_translateY_out
          );
        }

        // c
        if (scrollRatio <= 0.65) {
          changeNormalStyle(
            currentYOffset,
            objs.messageC.style,
            values.messageC_opatity_in,
            values.messageC_translateY_in
          );
        } else {
          // out
          changeNormalStyle(
            currentYOffset,
            objs.messageC.style,
            values.messageC_opatity_out,
            values.messageC_translateY_out
          );
        }
        break;
      case 3:
        break;
    }
    // console.log(values, currentYOffset);
  };

  const calcValues = (values, currentYOffset) => {
    let rv = 0;
    const scrollHeight = sceneInfo[currentScene].scrollHeight;
    const scrollRatio = currentYOffset / sceneInfo[currentScene].scrollHeight;

    if (values.length === 3) {
      // 시점
      const { start, end } = values[2];
      const partScrollStart = start * scrollHeight;
      const partScrollEnd = end * scrollHeight;
      const partScrollHeight = partScrollEnd - partScrollStart;

      if (
        currentYOffset >= partScrollStart &&
        currentYOffset <= partScrollEnd
      ) {
        rv =
          ((currentYOffset - partScrollStart) / partScrollHeight) *
            (values[1] - values[0]) +
          values[0];
      } else if (currentYOffset < partScrollStart) {
        rv = values[0];
      } else if (currentYOffset > partScrollEnd) {
        rv = values[1];
      }
    } else {
      rv = scrollRatio * (values[1] - values[0]) + values[0];
    }

    return rv;
  };

  const setCanvasImages = () => {
    let imgElem;
    for (let i = 0; i < sceneInfo[0].values.videoImageCount; i++) {
      imgElem = new Image();
      imgElem.src = `${sceneInfo[0].values.imagePath}/${(i + 80)
        .toString()
        .padStart(3, "0")}.jpg`;
      sceneInfo[0].objs.videoImages.push(imgElem);
    }
  };

  setCanvasImages();
  console.log(sceneInfo[0].objs.videoImages);

  window.addEventListener("resize", setLayout);
  //   window.addEventListener("DOMContentLoaded", setLayout);
  window.addEventListener("load", () => {
    setLayout();
    const { objs } = sceneInfo[0];
    const tempImage = objs.videoImages[0];
    objs.context.drawImage(
      tempImage,
      1920 / 2 - tempImage.width / 2,
      1080 / 2 - tempImage.height / 2
    );
  });

  window.addEventListener("scroll", () => {
    yOffset = window.pageYOffset;
    scrollLoop();
  });
})();
