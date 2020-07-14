(() => {
  let yOffset = 0;
  let prevScrollHeight = 0;
  let currentScene = 0;
  let enterNewScene = false;

  const sceneInfo = [
    {
      tyle: "sticky",
      heightNum: 5, // 브라우저 높이의 num배로 셋팅
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#scroll-section-0"),
        messageA: document.querySelector("#scroll-section-0 .main-message.a"),
        messageB: document.querySelector("#scroll-section-0 .main-message.b"),
        messageC: document.querySelector("#scroll-section-0 .main-message.c"),
        messageD: document.querySelector("#scroll-section-0 .main-message.d"),
      },
      values: {
        messageA_opatity: [0, 1, { start: 0.1, end: 0.2 }],
        messageB_opatity: [0, 1, { start: 0.3, end: 0.4 }],
        messageB_opatity: [0, 1, { start: 0.5, end: 0.6 }],
        messageB_opatity: [0, 1, { start: 0.7, end: 0.8 }],
      },
    },
    {
      tyle: "normal",
      heightNum: 5, // 브라우저 높이의 num배로 셋팅
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#scroll-section-1"),
      },
    },
    {
      tyle: "sticky",
      heightNum: 5, // 브라우저 높이의 num배로 셋팅
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#scroll-section-2"),
      },
    },
    {
      tyle: "sticky",
      heightNum: 5, // 브라우저 높이의 num배로 셋팅
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#scroll-section-3"),
      },
    },
  ];

  const setLayout = () => {
    sceneInfo.forEach((item) => {
      item.scrollHeight = item.heightNum * window.innerHeight;
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

    console.log(sceneInfo);
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

  const playAnimation = () => {
    const { values, objs } = sceneInfo[currentScene];
    const currentYOffset = yOffset - prevScrollHeight;
    switch (currentScene) {
      case 0:
        const opacityIn = calcValues(values.messageA_opatity, currentYOffset);
        objs.messageA.style.opacity = opacityIn;
        console.log(opacityIn);
        break;
      case 1:
        console.log("1 play");
        break;
      case 2:
        console.log("2 play");
        break;
      case 3:
        console.log("3 play");
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

  window.addEventListener("resize", setLayout);
  //   window.addEventListener("DOMContentLoaded", setLayout);
  window.addEventListener("load", setLayout);

  window.addEventListener("scroll", () => {
    yOffset = window.pageYOffset;
    scrollLoop();
  });
})();
