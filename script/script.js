  document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector(".grid");
    if (!grid) return;

    imagesLoaded(grid, () => {
      new Masonry(grid, {
        itemSelector: ".grid-item",
        columnWidth: ".grid-sizer",  // ✅ %폭 기준
        gutter: 16,                  // ✅ 간격
        percentPosition: true,        // ✅ %계산
        fitWidth: false               // ✅ 100% 꽉 채우기
      });
    });
  });