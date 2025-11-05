import { bretenwalda } from "./module/config.js";
import BrACKS2ItemSheet from "./module/sheets/BrACKS2ItemSheet.js";

Hooks.once("init", async function() {
    console.log("Bretenwalda | Initialising Bretenwalda System");

    // Load template.json
    const templateData = await fetch("systems/bretenwalda/template.json").then(r => r.json());
    bretenwalda.Item = templateData.Item;

    CONFIG.bretenwalda = bretenwalda;

    // Register Handlebars helper for formatting encumbrance
    Handlebars.registerHelper("formatEncumbrance", function(value) {
        if (value < 6) {
            return value + (value === 1 ? " item" : " items");
        } else {
            const stones = Math.floor(value / 6);
            const remainder = value % 6;
            let result = stones + " stone";
            if (remainder > 0) {
                result += " " + remainder + " items";
            }
            return result;
        }
    });

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("bretenwalda", BrACKS2ItemSheet, { makeDefault: true});
})