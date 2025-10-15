export default class BrACKS2ItemSheet extends ItemSheet {
    get template() {
        return `systems/bretenwalda/templates/sheets/${this.item.type}-sheet.html`;
    }

    getData() {
        const data = super.getData();

        data.config = CONFIG.bretenwalda;

        return data;
    }
}