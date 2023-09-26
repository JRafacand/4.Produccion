//Review file utils.js for functions used in this spec Author: Rafael Candilejo
import { capturarTiempoDeCarga } from '../support/utils.js'; //environment variables

describe('Ambiente Produccion Fleet Management Availability', () => {
   const urlgal = 'https://galavail.com/galavail-web/login.xhtml';
  it('Fleet Management Availability', () => {
    cy.visit(urlgal)
    cy.get("#name").type("averdezoto@galavail.com")
    cy.get('#botonNext').click()
    cy.get('#j_idt17').select(1)
    cy.get('#password').type('6093Anita')
    cy.wait(1000)
    cy.pause()    
    cy.get('#botonLogin').should('be.visible').click({force:true})
    cy.get('#txtBuscarbarco').type('Galapagos Horizon')
    cy.wait(1000) 
    cy.get('#btnbuscarBarco').click()
    cy.wait(1000)
    cy.get('#j_idt117\\:0\\:dynaButton > .fa').scrollIntoView().click()
    cy.wait(1000)
    cy.log('Selecciona el año de 2023')
    cy.get('#j_idt117\\:0\\:j_idt132 > .ui-menu-list > :nth-child(1) > .ui-menuitem-link').scrollIntoView().click()//default 2023
    cy.wait(1000)
    cy.log('Selecciona mes Abril')
    cy.get('[href="availability.xhtml?barco=y2uGVyk1fpk%3D&mes=QkCMjIEUxu0%3D&anio=UxlBDQ%2F%2BUls%3D"]').click()
      .then(capturarTiempoDeCarga)
    cy.wait(1000)
    cy.log('Selecciona mes Marzo')
    cy.get('[href="availability.xhtml?barco=y2uGVyk1fpk%3D&mes=ofc9JomTKhU%3D&anio=UxlBDQ%2F%2BUls%3D"]').click()
      .then(capturarTiempoDeCarga)
    cy.wait(1000)
    cy.log('Selecciona mes Octubre')
    cy.get('[href="availability.xhtml?barco=y2uGVyk1fpk%3D&mes=OrvrJaJhdjw%3D&anio=UxlBDQ%2F%2BUls%3D"]').click()
      .then(capturarTiempoDeCarga)
    cy.wait(1000)
    cy.log('Selecciona mes Diciembre')
    cy.get('[href="availability.xhtml?barco=y2uGVyk1fpk%3D&mes=cItoji52KlI%3D&anio=UxlBDQ%2F%2BUls%3D"]').click()
      .then(capturarTiempoDeCarga)
    cy.wait(1000)
    cy.get('#j_idt94_label').click()
    cy.get('#j_idt94_4').click()//2024
    cy.log('Selecciona año 2024')
    cy.wait(1000)
    cy.log('Selecciona mes Abril')
    cy.get('[href="availability.xhtml?barco=y2uGVyk1fpk%3D&mes=QkCMjIEUxu0%3D&anio=fxx69LgMYFE%3D"]').click()
      .then(capturarTiempoDeCarga)
    cy.wait(1000)
    cy.log('Selecciona mes Marzo')
    cy.get('[href="availability.xhtml?barco=y2uGVyk1fpk%3D&mes=ofc9JomTKhU%3D&anio=fxx69LgMYFE%3D"]').click()
      .then(capturarTiempoDeCarga)
    cy.wait(1000)
    cy.log('Selecciona mes Octubre')
    cy.get('[href="availability.xhtml?barco=y2uGVyk1fpk%3D&mes=OrvrJaJhdjw%3D&anio=fxx69LgMYFE%3D"]').click()
      .then(capturarTiempoDeCarga)
    cy.wait(1000)
    cy.log('Selecciona mes Diciembre')
    cy.get('[href="availability.xhtml?barco=y2uGVyk1fpk%3D&mes=cItoji52KlI%3D&anio=fxx69LgMYFE%3D"]').click()
      .then(capturarTiempoDeCarga)
    cy.wait(1000)
    cy.get('#j_idt94_label').click()
    cy.get('#j_idt94_5').click()//2025
    cy.log('Selecciona año2025')
    cy.wait(1000)
    cy.log('Selecciona mes Abril')
    cy.get('[href="availability.xhtml?barco=y2uGVyk1fpk%3D&mes=QkCMjIEUxu0%3D&anio=JdrmaTM3zCI%3D"]').click()
      .then(capturarTiempoDeCarga)
    cy.wait(1000)
    cy.log('Selecciona mes Marzo')
    cy.get('[href="availability.xhtml?barco=y2uGVyk1fpk%3D&mes=ofc9JomTKhU%3D&anio=JdrmaTM3zCI%3D"]').click()
      .then(capturarTiempoDeCarga)
    cy.wait(1000)
    cy.log('Selecciona mes Octubre')
    cy.get('[href="availability.xhtml?barco=y2uGVyk1fpk%3D&mes=OrvrJaJhdjw%3D&anio=JdrmaTM3zCI%3D"]').click()
      .then(capturarTiempoDeCarga)
    cy.wait(1000)
    cy.log('Selecciona mes Diciembre')
    cy.get('[href="availability.xhtml?barco=y2uGVyk1fpk%3D&mes=cItoji52KlI%3D&anio=JdrmaTM3zCI%3D"]').click()
      .then(capturarTiempoDeCarga)
    cy.wait(1000)
    cy.get('#j_idt94_label').click()
    cy.get('#j_idt94_6').click()//2026
    cy.log('Selecciona año 2026')
    cy.wait(1000)
    cy.log('Selecciona mes Abril')
    cy.get('[href="availability.xhtml?barco=y2uGVyk1fpk%3D&mes=QkCMjIEUxu0%3D&anio=DS4%2BCKpoK%2B8%3D"]').click()
      .then(capturarTiempoDeCarga)
    cy.wait(1000)
    cy.log('Selecciona mes Marzo')
    cy.get('[href="availability.xhtml?barco=y2uGVyk1fpk%3D&mes=ofc9JomTKhU%3D&anio=DS4%2BCKpoK%2B8%3D"]').click()
      .then(capturarTiempoDeCarga)
    cy.wait(1000)
    cy.log('Selecciona mes Octubre')
    cy.get('[href="availability.xhtml?barco=y2uGVyk1fpk%3D&mes=OrvrJaJhdjw%3D&anio=DS4%2BCKpoK%2B8%3D"]').click()
      .then(capturarTiempoDeCarga)
    cy.wait(1000)
    cy.log('Selecciona mes Diciembre')
    cy.get('[href="availability.xhtml?barco=y2uGVyk1fpk%3D&mes=cItoji52KlI%3D&anio=DS4%2BCKpoK%2B8%3D"]').click()
      .then(capturarTiempoDeCarga)
    cy.wait(1000)
    cy.get('#table-header > :nth-child(2)').click()
    cy.get('#j_idt48').click()   

  })
})

afterEach(() => {
  const filePath = Cypress.env('filePath');
  const logs = Cypress.env('logs');
  const specName = Cypress.env('specName');
  const logData = { specName, logs };
  const existingData = Cypress.env('existingData') || [];
  existingData.push(logData);
  cy.readFile(filePath) //leo el archivo
    .then(existingData => {
      const parsedFileData = existingData ? JSON.parse(existingData) : [];//si existe el archivo lo parseo sino lo dejo vacio
      parsedFileData.push(logData);//agrego el nuevo log
      return cy.writeFile(filePath, JSON.stringify(parsedFileData, null, 2), []);//retorno el archivo con el nuevo log
    })
    .then(() => {
      cy.log(`Logs guardados para "${specName}" en el archivo`);
      logs.length = 0; // Reiniciar el array de logs para el próximo spec
    });
});
