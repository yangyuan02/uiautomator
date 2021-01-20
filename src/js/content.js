(function (doc) {
  class UiPath {
    constructor() {
      this.HTMLElement = doc.documentElement;
      this.currentElement = null;
      this.maskInstance = null;
      this.oldElement = null
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
      if (this.currentElement !== this.oldElement) {
          this.createLocatorMask();
          this.updateRect();
          this.makeLocator()
          this.oldElement = this.currentElement;
      }
    }
    createLocatorMask (color = "red", size = 4) {
      console.log(111)
      if (this.maskInstance) {
        return this.maskInstance;
      }
      const div = doc.createElement("div");
      div.id = 'createLocatorMask'
      div.style.border = `${size}px solid ${color}`;
      div.style.position = "fixed";
      div.style.zIndex = 11111111;
      div.style.pointerEvents = 'none'
      this.maskInstance = doc.body.appendChild(div); // 返回被添加的div
    }
    removeCreateLocatorMask () {
      const ele = document.getElementById('createLocatorMask');
      if (ele) {
          document.body.removeChild(ele)
          this.oldElement = null;
         this.maskInstance = null;
      }
    }
    makeLocator () {
      this.currentElement.onclick = () => {
        this.cssPath(this.currentElement, document)
          this.removeCreateLocatorMask()
      }
      // this.currentElement.addEventListener('click', () => {
      //     this.cssPath(this.currentElement, document)
      //     this.removeCreateLocatorMask()
      // },false)
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
    cssPath (target, origin = document) {
        const data = "";
        let stop = false;

        function deep (origin) {
          const child = origin["children"];
          for (let i = 0; i <= child.length; i++) {
            const whiteList = ["head", "link", "script"];
            if (!child[i]) {
              continue;
            }
            if (
              whiteList.includes(child[i] && child[i].nodeName.toLocaleLowerCase())
            ) {
              continue;
            }
            if (child[i] === target) {
              console.log(child[i]);
              stop = true;
              break;
            }
            else {
              deep(child[i]);
            }
          }
      }
      deep(origin);
    }
  }

  function init () {
    const uiPath = new UiPath();
    uiPath.init();
  }

  init();
})(document);
