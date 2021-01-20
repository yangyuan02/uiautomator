(function (doc) {
  class UiPath {
    constructor() {
      this.HTMLElement = doc.documentElement;
      this.currentElement = null;
      this.maskInstance = null;
    }
    init () {
      this.HTMLElement.addEventListener(
        "mousemove",
        event => {
          this.move(event);
        },
        false
      );
    }
    move (event) {
      const {
        x, y
      } = event;
      this.currentElement = doc.elementFromPoint(x, y);
      console.log(this.currentElement.tagName, "tagName");
      this.createLocator();
      this.updateRect();
    }
    createLocator (color = "red", size = 4) {
      if (this.maskInstance) {
        return this.maskInstance;
      }
      const div = doc.createElement("div");
      div.style.border = `${size}px solid ${color}`;
      div.style.position = "fixed";
      div.style.zIndex = 11111111;
      div.style.pointerEvents = 'none'
      this.maskInstance = doc.body.appendChild(div); // 返回被添加的div
    }
    updateRect () {
      const {
        left,
        top,
        width,
        height
      } = this.currentElement.getBoundingClientRect();
      this.maskInstance.style.width = `${width}px`;
      this.maskInstance.style.height = `${height}px`;
      this.maskInstance.style.left = `${left}px`;
      this.maskInstance.style.top = `${top}px`;
    }
  }

  function init () {
    const uiPath = new UiPath();
    uiPath.init();
  }

  init();
})(document);

// function cssPath (target, origin) {
//   const data = "";
//   let stop = false;

//   function deep (origin) {
//     const child = origin["children"];
//     for (let i = 0; i <= child.length; i++) {
//       const whiteList = ["head", "link", "script"];
//       if (!child[i]) {
//         continue;
//       }
//       if (
//         whiteList.includes(child[i] && child[i].nodeName.toLocaleLowerCase())
//       ) {
//         continue;
//       }
//       if (child[i] === target) {
//         console.log(child[i]);
//         stop = true;
//         break;
//       }
//       else {
//         deep(child[i]);
//       }
//     }
//   }
//   deep(origin);
// }