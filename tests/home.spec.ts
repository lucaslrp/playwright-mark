import { test, expect } from '@playwright/test'

test('webapp should be online', async ({ page }) => {
    await page.goto('http://localhost:8080/')
    await expect(page).toHaveTitle('Gerencie suas tarefas com Mark L')
})






// function showName() {
//     console.log('Lucas Passos')
// }

// const printName = () => {
//     console.log ('Lucas Passos')
// }