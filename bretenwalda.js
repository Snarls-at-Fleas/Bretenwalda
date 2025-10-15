import BrACKS2ItemSheet from "./module/sheets/BrACKS2ItemSheet.js";

Hooks.once("init", function() {
    console.log("Bretenwalda | Initialising Bretenwalda System");

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("bretenwalda", BrACKS2ItemSheet, { makeDefault: true});
})