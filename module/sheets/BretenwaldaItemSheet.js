export default class BretenwaldaItemSheet extends ItemSheet {
    get template() {
        return `systems/bretenwalda/templates/sheets/${this.item.data.type}-sheet.html`;
    }
}