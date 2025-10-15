export default class BrACKS2ItemSheet extends ItemSheet {
    get template() {
        return `systems/bretenwalda/templates/sheets/${this.item.type}-sheet.html`;
    }
}