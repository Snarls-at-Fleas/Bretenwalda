import { bretenwalda } from "./module/config.js";
import BrACKS2ItemSheet from "./module/sheets/BrACKS2ItemSheet.js";

Hooks.once("init", function() {
    console.log("Bretenwalda | Initialising Bretenwalda System");

    CONFIG.bretenwalda = bretenwalda;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("bretenwalda", BrACKS2ItemSheet, { makeDefault: true});
})