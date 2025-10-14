import BretenwaldaItemSheet from "./module/sheets/BretenwaldaItemSheet";

Hooks.once("init", function() {
    console.log("Bretenwalda | Initialising Bretenwalda System");

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("bretenwalda", BretenwaldaItemSheet, { makeDefault: true});
})