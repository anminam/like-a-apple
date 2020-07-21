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
        videoConfig: {
          path: "./src/videos/duckdog",
          width: 852,
          height: 480,
          count: 406,
          sequenceArr: [0, 405],
          startNumber: 80,
        },
        canvase_opacity_in: [0, 1, { start: 0.01, end: 0.2 }],
        canvase_opacity_out: [1, 0, { start: 0.9, end: 1 }],
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
        canvas: document.querySelector("#video-canvas-2"),
        context: document.querySelector("#video-canvas-2").getContext("2d"),
        videoImages: [],
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
        videoConfig: {
          path: "./src/videos/duckdog",
          width: 852,
          height: 480,
          count: 406,
          sequenceArr: [0, 405],
        },
        canvase_opacity_in: [0, 1, { start: 0, end: 0.1 }],
        canvase_opacity_out: [1, 0, { start: 0.95, end: 1 }],
      },
    },
    {
      type: "sticky",
      heightNum: 6, // 브라우저 높이의 num배로 셋팅
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#scroll-section-3"),
        canvasCaption: document.querySelector(".canvas-caption"),
        canvas: document.querySelector(".image-blend-canvas"),
        context: document.querySelector(".image-blend-canvas").getContext("2d"),
        imagesPath: [
          "./src/images/blend-image-1.jpg",
          "./src/images/blend-image-2.jpg",
        ],
        images: [],
      },
      values: {
        rect1X: [0, 0, { start: 0, end: 0 }],
        rect2X: [0, 0, { start: 0, end: 0 }],
        blendHeight: [0, 0, { start: 0, end: 0 }],
        canvasScale: [0, 0, { start: 0, end: 0 }],

        caption_opacity: [0, 1, { start: 0, end: 0 }],
        caption_translateY: [20, 0, { start: 0, end: 0 }],
        rectStartY: 0,
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
    sceneInfo[2].objs.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`;

    console.log("Init SceneInfo", sceneInfo);
  };

  const checkMenu = () => {
    if (yOffset > 44) {
      document.body.classList.add("local-nav-sticky");
    } else {
      document.body.classList.remove("local-nav-sticky");
    }
  };

  const scrollLoop = () => {
    enterNewScene = false;
    prevScrollHeight = 0;
    for (let i = 0; i < currentScene; i++) {
      prevScrollHeight += sceneInfo[i].scrollHeight;
    }

    if (
      delayedYOffset >
      prevScrollHeight + sceneInfo[currentScene].scrollHeight
    ) {
      enterNewScene = true;
      currentScene++;
      document.body.setAttribute("id", `show-scene-${currentScene}`);
    }

    if (delayedYOffset < prevScrollHeight) {
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
        // let sequence = Math.round(
        //   calcValues(values.videoConfig.sequenceArr, currentYOffset)
        // );

        // const tempImage = objs.videoImages[sequence];
        // objs.context.drawImage(
        //   tempImage,
        //   1920 / 2 - tempImage.width / 2,
        //   1080 / 2 - tempImage.height / 2
        // );

        // console.log("sequence", sequence);
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
        // let sequence2 = Math.round(
        //   calcValues(values.videoConfig.sequenceArr, currentYOffset)
        // );

        // const tempImage2 = objs.videoImages[sequence2];
        // objs.context.drawImage(
        //   tempImage2,
        //   1920 / 2 - tempImage2.width / 2,
        //   1080 / 2 - tempImage2.height / 2
        // );

        // console.log("sequence2", sequence2);
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

        // 등장하고 나가고니까 그냥 반으로 한다
        if (scrollRatio <= 0.5) {
          objs.canvas.style.opacity = calcValues(
            values.canvase_opacity_in,
            currentYOffset
          );
        } else {
          objs.canvas.style.opacity = calcValues(
            values.canvase_opacity_out,
            currentYOffset
          );
        }

        if (scrollRatio > 0.9) {
          const { values, objs } = sceneInfo[3];
          // 가로/세로 모두 꽉 차게 하기 위해 여기서 세팅(계산 필요)
          const widthRatio = document.body.offsetWidth / objs.canvas.width;
          const heightRatio = window.innerHeight / objs.canvas.height;
          let canvasScaleRatio;

          if (widthRatio <= heightRatio) {
            // 캔버스보다 브라우저 창이 홀쭉한 경우
            canvasScaleRatio = heightRatio;
          } else {
            // 캔버스보다 브라우저 창이 납작한 경우
            canvasScaleRatio = widthRatio;
          }

          objs.canvas.style.transform = `scale(${canvasScaleRatio})`;
          objs.context.fillStyle = "white";
          objs.context.drawImage(objs.images[0], 0, 0);

          // 캔버스 사이즈에 맞춰 가정한 innerWidth와 innerHeight
          const recalculatedInnerWidth =
            document.body.offsetWidth / canvasScaleRatio;
          const recalculatedInnerHeight = window.innerHeight / canvasScaleRatio;

          // 하얀박스
          const whiteRectWidth = recalculatedInnerWidth * 0.15;
          values.rect1X[0] = (objs.canvas.width - recalculatedInnerWidth) / 2;
          values.rect1X[1] = values.rect1X[0] - whiteRectWidth;
          values.rect2X[0] =
            values.rect1X[0] + recalculatedInnerWidth - whiteRectWidth;
          values.rect2X[1] = values.rect2X[0] + whiteRectWidth;

          // console.log("3 start");
          // 좌우 흰색 박스 그리기
          objs.context.fillRect(
            parseInt(values.rect1X[0]),
            0,
            parseInt(whiteRectWidth),
            objs.canvas.height
          );
          objs.context.fillRect(
            parseInt(values.rect2X[0]),
            0,
            parseInt(whiteRectWidth),
            objs.canvas.height
          );
        }
        break;
      case 3:
        let step = 0;

        // 가로/세로 모두 꽉 차게 하기 위해 여기서 세팅(계산 필요)
        const widthRatio = document.body.offsetWidth / objs.canvas.width;
        const heightRatio = window.innerHeight / objs.canvas.height;
        let canvasScaleRatio;

        if (widthRatio <= heightRatio) {
          // 캔버스보다 브라우저 창이 홀쭉한 경우
          canvasScaleRatio = heightRatio;
        } else {
          // 캔버스보다 브라우저 창이 납작한 경우
          canvasScaleRatio = widthRatio;
        }

        objs.canvas.style.transform = `scale(${canvasScaleRatio})`;
        objs.context.fillStyle = "white";
        objs.context.drawImage(objs.images[0], 0, 0);

        // 캔버스 사이즈에 맞춰 가정한 innerWidth와 innerHeight
        const recalculatedInnerWidth =
          document.body.offsetWidth / canvasScaleRatio;
        const recalculatedInnerHeight = window.innerHeight / canvasScaleRatio;

        if (!values.rectStartY) {
          // values.rectStartY = objs.canvas.getBoundingClientRect().top;
          values.rectStartY =
            objs.canvas.offsetTop +
            (objs.canvas.height - objs.canvas.height * canvasScaleRatio) / 2;
          values.rect1X[2].start = window.innerHeight / 2 / scrollHeight;
          values.rect2X[2].start = window.innerHeight / 2 / scrollHeight;
          values.rect1X[2].end = values.rectStartY / scrollHeight;
          values.rect2X[2].end = values.rectStartY / scrollHeight;
          console.log(
            "rectStartY",
            values.rectStartY,
            values.rect1X[2].end,
            values.rect2X[2].end
          );
        }

        // 하얀박스
        const whiteRectWidth = recalculatedInnerWidth * 0.15;
        values.rect1X[0] = (objs.canvas.width - recalculatedInnerWidth) / 2;
        values.rect1X[1] = values.rect1X[0] - whiteRectWidth;
        values.rect2X[0] =
          values.rect1X[0] + recalculatedInnerWidth - whiteRectWidth;
        values.rect2X[1] = values.rect2X[0] + whiteRectWidth;

        // console.log("3 start");
        // 좌우 흰색 박스 그리기
        objs.context.fillRect(
          parseInt(calcValues(values.rect1X, currentYOffset)),
          0,
          parseInt(whiteRectWidth),
          objs.canvas.height
        );
        objs.context.fillRect(
          parseInt(calcValues(values.rect2X, currentYOffset)),
          0,
          parseInt(whiteRectWidth),
          objs.canvas.height
        );

        if (scrollRatio < values.rect1X[2].end) {
          step = 1;
          objs.canvas.classList.remove("sticky");
        } else {
          step = 2;
          console.log("캔버스 닿은 후");

          // [0, 0, { start: 0, end: 0 }],

          values.blendHeight[0] = 0;
          values.blendHeight[1] = objs.canvas.height;
          values.blendHeight[2].start = values.rect1X[2].end;
          values.blendHeight[2].end = values.blendHeight[2].start + 0.2;

          // objs.context.drawImage(objs.images[1], 0, 200);

          const blendHeight = calcValues(values.blendHeight, currentYOffset);

          objs.context.drawImage(
            objs.images[1],
            0, // sx,
            objs.canvas.height - blendHeight, // sy,
            objs.canvas.width, // sWidth,
            blendHeight, // sHeight,
            0, // sx,
            objs.canvas.height - blendHeight, // sy,
            objs.canvas.width, // sWidth,
            blendHeight // sHeight,
          );

          objs.canvas.classList.add("sticky");
          objs.canvas.style.top = `${
            -(objs.canvas.height - objs.canvas.height * canvasScaleRatio) / 2
          }px`;
        }

        if (scrollRatio > values.blendHeight[2].end) {
          values.canvasScale[0] = canvasScaleRatio;
          values.canvasScale[1] =
            document.body.offsetWidth / (1.5 * objs.canvas.width);
          values.canvasScale[2].start = values.blendHeight[2].end;
          values.canvasScale[2].end = values.canvasScale[2].start + 0.2;
          objs.canvas.style.transform = `scale(${calcValues(
            values.canvasScale,
            currentYOffset
          )})`;

          objs.canvas.style.marginTop = 0;
        }

        if (
          scrollRatio > values.canvasScale[2].end &&
          values.canvasScale[2].end > 0
        ) {
          objs.canvas.classList.remove("sticky");
          objs.canvas.style.marginTop = `${scrollHeight * 0.4}px`;

          values.caption_opacity[2].start = values.canvasScale[2].end;
          values.caption_opacity[2].end = values.caption_opacity[2].start + 0.1;
          objs.canvasCaption.style.opacity = calcValues(
            values.caption_opacity,
            currentYOffset
          );

          values.caption_translateY[2].start = values.canvasScale[2].end;
          values.caption_translateY[2].end =
            values.caption_translateY[2].start + 0.1;
          objs.canvasCaption.style.transform = `translate3d(0, ${calcValues(
            values.caption_translateY,
            currentYOffset
          )}%, 0)`;
        }
        // console.log("reaclac", recalcInnerWidth, recalcInnerHeight);

        // console.log("case3", widthRatio, heightRatio, canvasScaleRatio);
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
    for (let i = 0; i < sceneInfo[0].values.videoConfig.count; i++) {
      imgElem = new Image();
      imgElem.src = `${sceneInfo[0].values.videoConfig.path}/${(
        i + sceneInfo[0].values.videoConfig.startNumber
      )
        .toString()
        .padStart(3, "0")}.jpg`;
      sceneInfo[0].objs.videoImages.push(imgElem);
    }

    let imgElem2;
    for (let i = 0; i < sceneInfo[2].values.videoConfig.count; i++) {
      imgElem2 = new Image();
      imgElem2.src = `${sceneInfo[2].values.videoConfig.path}/${(i + 80)
        .toString()
        .padStart(3, "0")}.jpg`;
      sceneInfo[2].objs.videoImages.push(imgElem2);
    }

    sceneInfo[3].objs.imagesPath.forEach((item) => {
      const imgElem = new Image();
      imgElem.src = item;
      sceneInfo[3].objs.images.push(imgElem);
    });
    // console.log(sceneInfo[3].objs.images);
  };

  setCanvasImages();
  // console.log(sceneInfo[0].objs.videoImages);

  //   window.addEventListener("DOMContentLoaded", setLayout);
  window.addEventListener("load", () => {
    document.body.classList.remove("before-load");
    setLayout();
    const { objs } = sceneInfo[0];
    const tempImage = objs.videoImages[0];
    objs.context.drawImage(
      tempImage,
      1920 / 2 - tempImage.width / 2,
      1080 / 2 - tempImage.height / 2
    );

    let tempYOffset = yOffset;
    let tempScrollCount = 0;

    if (yOffset > 0) {
      let siId = setInterval(() => {
        window.scrollTo(0, tempYOffset);
        tempYOffset += 2;

        if (tempScrollCount++ > 20) {
          clearInterval(siId);
        }
      }, 20);
    }

    window.addEventListener("scroll", () => {
      yOffset = window.pageYOffset;
      scrollLoop();
      checkMenu();

      if (!rafState) {
        rafId = requestAnimationFrame(loop);
        rafState = true;
      }
    });

    document
      .querySelector(".loading")
      .addEventListener("transitionend", (event) => {
        document.body.removeChild(event.currentTarget);
      });

    window.addEventListener("orientationchange", () => {
      setTimeout(setLayout, 500);
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) {
        setLayout();
        sceneInfo[3].values.rectStartY = 0;
      }
    });
  });

  // loop
  let acc = 0.1;
  let delayedYOffset = 0;
  let rafId;
  let rafState;

  const loop = () => {
    delayedYOffset = delayedYOffset + (yOffset - delayedYOffset) * acc;

    if (!enterNewScene) {
      if (currentScene === 0 || currentScene == 2) {
        const currentYOffset = delayedYOffset - prevScrollHeight;
        const { values, objs } = sceneInfo[currentScene];
        let sequence = Math.round(
          calcValues(values.videoConfig.sequenceArr, currentYOffset)
        );

        if (objs.videoImages[sequence]) {
          const tempImage = objs.videoImages[sequence];
          objs.context.drawImage(
            tempImage,
            1920 / 2 - tempImage.width / 2,
            1080 / 2 - tempImage.height / 2
          );
        }
      }
    }

    rafId = requestAnimationFrame(loop);

    if (Math.abs(yOffset - delayedYOffset) < 1) {
      cancelAnimationFrame(rafId);
      rafState = false;
    }
  };
})();
