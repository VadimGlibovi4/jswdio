describe('User', () => {
    it('can search by Google', async () => {
        await browser.url(`https://www.google.com/`);
        await $(`input[name="q"]`).setValue(`ukraine`);
        await $(`input[name="btnK"]`).click();
    });
});


