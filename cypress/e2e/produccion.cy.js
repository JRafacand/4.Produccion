//Review file utils.js for functions used in this spec Author: Rafael Candilejo
import { capturarTiempoDeCarga } from '../support/utils.js'; //environment variables
import path from 'path';
import moment from 'moment/moment.js';

describe('Tgalaope1', () => {
  beforeEach(function () {
    const specName = this.currentTest.title; // Obtener el nombre del spec actual // Obtener el nombre del spec actual
    logs.push({ message: `Title: ${specName}` }); // Agregar el nombre del spec como un log separador
    Cypress.env('specName', specName); // Agregar el nombre del spec como una variable global', filePath);  
  });
  before(() => {//obtener author de las pruebas
    cy.exec('git config --global user.name').then((result) => {
      const author1 = result.stdout.trim();
      const outputFolder = 'D:/Testercy/Logs/2.TestAll/June/Produccion/19-06-2023';
      const timestamp = moment().format('DD-MM-YYYY-HH-mm-ss');
      const fileName = `logs_${timestamp}_${author1}.txt`;
      const filePath = path.join(outputFolder, fileName);
      logs.push({ authortest: `Author: ${author1}` });
      cy.writeFile(filePath, JSON.stringify(logs, null, 2), [])
      Cypress.env('filePath', filePath);
    });
  });
  Cypress.on('test:after:run', (test, runnable) => {//valido que se capture el log hasta que existe un fallo
    if (test.state === 'failed') {
      isTestFailed = true;
    }
  });
   const logs = []
  Cypress.env('logs', logs);//declaro logs como variable global 
  Cypress.on('log:added', (log) => {//mensajes del log, capturo tiempos de respuesta
    const message = log.event ? `${log.consoleProps.Event}: ${log.consoleProps.URL}` : `${log.consoleProps.Command}: ${log.message}`
    console.log(log.wallClockStartedAt, 'log.wallClockStartedAt')
    const startTime = new Date(log.wallClockStartedAt).getTime();//capturo el tiempo
    const endTime = new Date().getTime();
    const duration = `Tiempo en mili segundos del evento Cypress ${((endTime - startTime))}`;
    console.log(duration, 'duration');
    logs.push({ message: message, duration: duration });/* - ${currentSpec} */
  }); 

  Cypress.on('uncaught:exception', (err, runnable) => {//capturo uncaught:exception para que cyporess continue con la prueba 
    const error_message = err.message;
    return false
  })

  const urlgal = 'https://sales.galavail.com/galavail-web/login.xhtml';
  const cookkie2 = 'https://sales.galavail.com/galavail-web/web/management/fleet.xhtml';
  it('Fleet Management Availability', () => {
    cy.visit(urlgal)
    cy.get("#name").type("averdezoto@galavail.com")
    cy.get('#botonNext').click()
    cy.get('#j_idt17').select(3)
    cy.get('#rol').select(0)
    cy.wait(1000)
    cy.get('#password').type('12345')
    cy.wait(1000)
    //cy.pause()    
    cy.get('#botonLogin').click()
     cy.setCookie('cookie', cookkie2).then(() => {
      cy.getCookie('cookie').then((cookie) => {
        const url = cookie.value
        console.log(url, 'url')
        cy.visit(url)
        cy.get('#txtBuscarbarco').type('Natural Paradise')
        cy.get('#btnbuscarBarco').click()
        cy.wait(1000)
        cy.get('#j_idt117\\:0\\:dynaButton > .fa').scrollIntoView().click()
        cy.wait(1000)
        cy.log('Selecciona el año de 2023')
        cy.get('#j_idt117\\:0\\:j_idt132 > .ui-menu-list > :nth-child(1) > .ui-menuitem-link').scrollIntoView().click()//default 2023
        cy.wait(1000)
        cy.log('Selecciona mes Abril')
        cy.get('[href="availability.xhtml?barco=4ns5N8%2BDlb8%3D&mes=QkCMjIEUxu0%3D&anio=UxlBDQ%2F%2BUls%3D"]').click()
          .then(capturarTiempoDeCarga)
        cy.wait(1000)
        cy.log('Selecciona mes Marzo')
        cy.get('[href="availability.xhtml?barco=4ns5N8%2BDlb8%3D&mes=ofc9JomTKhU%3D&anio=UxlBDQ%2F%2BUls%3D"]').click()
          .then(capturarTiempoDeCarga)
        cy.wait(1000)
        cy.log('Selecciona mes Octubre')
        cy.get('[href="availability.xhtml?barco=4ns5N8%2BDlb8%3D&mes=OrvrJaJhdjw%3D&anio=UxlBDQ%2F%2BUls%3D"]').click()
          .then(capturarTiempoDeCarga)
        cy.wait(1000)
        cy.log('Selecciona mes Diciembre')
        cy.get('[href="availability.xhtml?barco=4ns5N8%2BDlb8%3D&mes=cItoji52KlI%3D&anio=UxlBDQ%2F%2BUls%3D"]').click()
          .then(capturarTiempoDeCarga)
        cy.wait(1000)
        cy.get('#j_idt94_label').click()
        cy.get('#j_idt94_4').click()//2024
        cy.log('Selecciona año 2024')
        cy.wait(1000)
        cy.log('Selecciona mes Abril')
        cy.get('[href="availability.xhtml?barco=4ns5N8%2BDlb8%3D&mes=QkCMjIEUxu0%3D&anio=fxx69LgMYFE%3D"]').click()
          .then(capturarTiempoDeCarga)
        cy.wait(1000)
        cy.log('Selecciona mes Marzo')
        cy.get('[href="availability.xhtml?barco=4ns5N8%2BDlb8%3D&mes=ofc9JomTKhU%3D&anio=fxx69LgMYFE%3D"]').click()
          .then(capturarTiempoDeCarga)
        cy.wait(1000)
        cy.log('Selecciona mes Octubre')
        cy.get('[href="availability.xhtml?barco=4ns5N8%2BDlb8%3D&mes=OrvrJaJhdjw%3D&anio=fxx69LgMYFE%3D"]').click()
          .then(capturarTiempoDeCarga)
        cy.wait(1000)
        cy.log('Selecciona mes Diciembre')
        cy.get('[href="availability.xhtml?barco=4ns5N8%2BDlb8%3D&mes=cItoji52KlI%3D&anio=fxx69LgMYFE%3D"]').click()
          .then(capturarTiempoDeCarga)
        cy.wait(1000)
        cy.get('#j_idt94_label').click()
        cy.get('#j_idt94_5').click()//2025
        cy.log('Selecciona año2025')
        cy.wait(1000)
        cy.log('Selecciona mes Abril')
        cy.get('[href="availability.xhtml?barco=4ns5N8%2BDlb8%3D&mes=QkCMjIEUxu0%3D&anio=JdrmaTM3zCI%3D"]').click()
          .then(capturarTiempoDeCarga)
        cy.wait(1000)
        cy.log('Selecciona mes Marzo')
        cy.get('[href="availability.xhtml?barco=4ns5N8%2BDlb8%3D&mes=ofc9JomTKhU%3D&anio=JdrmaTM3zCI%3D"]').click()
          .then(capturarTiempoDeCarga)
        cy.wait(1000)
        cy.log('Selecciona mes Octubre')
        cy.get('[href="availability.xhtml?barco=4ns5N8%2BDlb8%3D&mes=OrvrJaJhdjw%3D&anio=JdrmaTM3zCI%3D"]').click()
          .then(capturarTiempoDeCarga)
        cy.wait(1000)
        cy.log('Selecciona mes Diciembre')
        cy.get('[href="availability.xhtml?barco=4ns5N8%2BDlb8%3D&mes=cItoji52KlI%3D&anio=JdrmaTM3zCI%3D"]').click()
          .then(capturarTiempoDeCarga)
        cy.wait(1000)
        cy.get('#j_idt94_label').click()
        cy.get('#j_idt94_6').click()//2026
        cy.log('Selecciona año 2026')
        cy.wait(1000)
        cy.log('Selecciona mes Abril')
        cy.get('[href="availability.xhtml?barco=4ns5N8%2BDlb8%3D&mes=QkCMjIEUxu0%3D&anio=DS4%2BCKpoK%2B8%3D"]').click()
          .then(capturarTiempoDeCarga)
        cy.wait(1000)
        cy.log('Selecciona mes Marzo')
        cy.get('[href="availability.xhtml?barco=4ns5N8%2BDlb8%3D&mes=ofc9JomTKhU%3D&anio=DS4%2BCKpoK%2B8%3D"]').click()
          .then(capturarTiempoDeCarga)
        cy.wait(1000)
        cy.log('Selecciona mes Octubre')
        cy.get('[href="availability.xhtml?barco=4ns5N8%2BDlb8%3D&mes=OrvrJaJhdjw%3D&anio=DS4%2BCKpoK%2B8%3D"]').click()
          .then(capturarTiempoDeCarga)
        cy.wait(1000)
        cy.log('Selecciona mes Diciembre')
        cy.get('[href="availability.xhtml?barco=4ns5N8%2BDlb8%3D&mes=cItoji52KlI%3D&anio=DS4%2BCKpoK%2B8%3D"]').click()
          .then(capturarTiempoDeCarga)
        cy.wait(1000)
        cy.get('#table-header > :nth-child(2)').click()
        cy.get('#j_idt48').click() 
      })
    })
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

