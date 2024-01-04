//Review file utils.js for functions used in this spec Author: Rafael Candilejo
import { capturarTiempoDeCarga } from '../support/utils.js'; //environment variables
require('cypress-xpath');

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
    cy.get('#j_idt117\\:0\\:j_idt132 > .ui-menu-list > :nth-child(1) > .ui-menuitem-link').scrollIntoView().click()//default 2023
       cy.log('Selecciona año 2024')
    cy.wait(1000)
    cy.log('Selecciona mes Abril')
    cy.xpath('//a[contains(text(),"Apr")]').click()
      .then(capturarTiempoDeCarga)
    cy.wait(1000)
    cy.log('Selecciona mes Marzo')
    cy.xpath('//a[contains(text(),"Mar")]').click()
      .then(capturarTiempoDeCarga)
    cy.wait(1000)
    cy.log('Selecciona mes Octubre')
    cy.xpath('//a[contains(text(),"Oct")]').click()
      .then(capturarTiempoDeCarga)
    cy.wait(1000)
    cy.log('Selecciona mes Diciembre')
    cy.xpath('//a[contains(text(),"Dec")]').click()
      .then(capturarTiempoDeCarga)
    cy.wait(1000)
    cy.get('#j_idt94_label').click()
    cy.get('#j_idt94_4').click()//2025
    cy.log('Selecciona año2025')
    cy.wait(1000)
    cy.log('Selecciona mes Abril')
    cy.xpath('//a[contains(text(),"Apr")]').click()
      .then(capturarTiempoDeCarga)
    cy.wait(1000)
    cy.log('Selecciona mes Marzo')
    cy.xpath('//a[contains(text(),"Mar")]').click()
      .then(capturarTiempoDeCarga)
    cy.wait(1000)
    cy.log('Selecciona mes Octubre')
    cy.xpath('//a[contains(text(),"Oct")]').click()
      .then(capturarTiempoDeCarga)
    cy.wait(1000)
    cy.log('Selecciona mes Diciembre')
    cy.xpath('//a[contains(text(),"Dec")]').click()
      .then(capturarTiempoDeCarga)
    cy.wait(1000)
    cy.get('#j_idt94_label').click()
    cy.get('#j_idt94_5').click()//2026
    cy.log('Selecciona año 2026')
    cy.wait(1000)
    cy.log('Selecciona mes Abril')
    cy.xpath('//a[contains(text(),"Apr")]').click()
      .then(capturarTiempoDeCarga)
    cy.wait(1000)
    cy.log('Selecciona mes Marzo')
    cy.xpath('//a[contains(text(),"Mar")]').click()
      .then(capturarTiempoDeCarga)
    cy.wait(1000)
    cy.log('Selecciona mes Octubre')
    cy.xpath('//a[contains(text(),"Oct")]').click()
      .then(capturarTiempoDeCarga)
    cy.wait(1000)
    cy.log('Selecciona mes Diciembre')
    cy.xpath('//a[contains(text(),"Dec")]').click()
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
