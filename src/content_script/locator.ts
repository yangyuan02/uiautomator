export default class UiPath {
    private doc: Document
    private HTMLElement: HTMLElement
    private currentElement: HTMLElement | null
    private maskInstance: HTMLDivElement | null
    private oldElement: HTMLElement | null
    constructor(doc: Document) {
        this.doc = doc;
        this.HTMLElement = doc.documentElement;
        this.currentElement = null;
        this.maskInstance = null;
        this.oldElement = null;
    }
    init() {
        this.HTMLElement.addEventListener(
            "mousemove",
            event => {
                this.move(event);
            },
            false
        );
    }
    move(event: MouseEvent) {
        const { x, y } = event;
        this.currentElement = this.doc.elementFromPoint(x, y) as HTMLElement;
        if (this.currentElement !== this.oldElement) {
            this.createLocatorMask();
            this.updateRect();
            this.makeLocator();
            this.oldElement = this.currentElement;
        }
    }
    createLocatorMask(color = "red", size = 4) {
        console.log(111);
        if (this.maskInstance) {
            return this.maskInstance;
        }
        const div = this.doc.createElement("div");
        div.id = "createLocatorMask";
        div.style.border = `${size}px solid ${color}`;
        div.style.position = "fixed";
        div.style.zIndex = '11111111';
        div.style.pointerEvents = "none";
        this.maskInstance = this.doc.body.appendChild(div); // 返回被添加的div
    }
    removeCreateLocatorMask() {
        const ele = document.getElementById("createLocatorMask");
        if (ele) {
            document.body.removeChild(ele);
            this.oldElement = null;
            this.maskInstance = null;
        }
    }
    makeLocator() {
        (this.currentElement as HTMLElement).onclick = () => {
            this.cssPath(this.currentElement as HTMLElement, document);
            this.removeCreateLocatorMask();
        };
        // this.currentElement.addEventListener('click', () => {
        //     this.cssPath(this.currentElement, document)
        //     this.removeCreateLocatorMask()
        // },false)
    }
    updateRect() {
        const currentElement = this.currentElement as HTMLElement
        const maskInstance = this.maskInstance as HTMLElement;
        const {
            left,
            top,
            width,
            height
        } = currentElement.getBoundingClientRect();
        maskInstance.style.width = `${width}px`;
        maskInstance.style.height = `${height}px`;
        maskInstance.style.left = `${left}px`;
        maskInstance.style.top = `${top}px`;
    }
    cssPath(target: HTMLElement, origin: Document = document) {
        const data = "";
        let stop = false;

        function deep(origin: HTMLElement | Document) {
            const child = origin["children"];
            for (let i = 0; i <= child.length; i++) {
                const whiteList = ["head", "link", "script"];
                if (!child[i]) {
                    continue;
                }
                if (
                    whiteList.includes(
                        child[i] && child[i].nodeName.toLocaleLowerCase()
                    )
                ) {
                    continue;
                }
                if (child[i] === target) {
                    console.log(child[i]);
                    stop = true;
                    break;
                } else {
                    deep(child[i] as HTMLElement);
                }
            }
        }
        deep(origin as Document);
    }
}