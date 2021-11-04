import UiPath from "@/content_script/locator"

export default () => {
    (function (doc) {
        function init() {
            const uiPath = new UiPath(doc);
            uiPath.init();
        }

        init();
    })(document);
}
