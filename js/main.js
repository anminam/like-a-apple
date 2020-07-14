(() => {
  let yOffset = 0;

  const sceneInfo = [
    {
      tyle: "sticky",
      heightNum: 5, // 브라우저 높이의 num배로 셋팅
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#scroll-section-0"),
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
      console.log(item);
      item.scrollHeight = item.heightNum * window.innerHeight;
      item.objs.container.style.height = `${item.scrollHeight}px`;
    });

    console.log(sceneInfo);
  };

  const scrollLoop = () => {};

  window.addEventListener("resize", setLayout);

  window.addEventListener("scroll", () => {
    yOffset = window.pageYOffset;
    scrollLoop();
  });
  setLayout();
})();
