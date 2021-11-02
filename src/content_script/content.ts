import UiPath from "/Users/yangyuan/Desktop/learn/chrome/uiautomator/src/content_script/locator"

export default () => {
    (function (doc) {
        function init() {
            const uiPath = new UiPath(doc);
            uiPath.init();
        }

        init();
    })(document);
}
