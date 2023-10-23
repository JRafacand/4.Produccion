// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import path from 'path';
import moment from 'moment/moment.js';
beforeEach(function () {
    const specName = this.currentTest.title; // Obtener el nombre del spec actual // Obtener el nombre del spec actual
    logs.push({ message: `Title: ${specName}` }); // Agregar el nombre del spec como un log separador
    Cypress.env('specName', specName); // Agregar el nombre del spec como una variable global', filePath);  
  });
  before(() => {//obtener author de las pruebas
      const author1 = 'JrafaCand';
      const outputFolder = 'D:/TESTERCY/LOGS/TESTE2EGAL/PRODUCCION/october/30-10-2023/';
      const timestamp = moment().format('DD-MM-YYYY-HH-mm-ss');
      const fileName = `logs_${timestamp}_${author1}.txt`;
      const filePath = path.join(outputFolder, fileName);
      logs.push({ authortest: `Author: ${author1}` });
      cy.writeFile(filePath, JSON.stringify(logs, null, 2), [])
      Cypress.env('filePath', filePath);
   });
  
    Cypress.on('test:after:run', (test) => {//valido que se capture el log hasta que existe un fallo
    if (test.state === 'failed') {
      console.log('Test failed');
    }
  });
  
  Cypress.on('uncaught:exception', (err, runnable) => {
    let uncaught = [runnable]
    console.log(uncaught, 'entre')
    //uncaught.
    return false//capturo uncaught:exception para que cyporess continue con la prueba    
  });

  const logs = []
  Cypress.env('logs', logs);//declaro logs como variable global 
  Cypress.on('log:added', (log) => {//mensajes del log, capturo tiempos de respuesta
    const message = log.Event? `${log.CONSOLEPROPS.Event}: ${log.consoleProps.URL}` : `${log.consoleProps.Command}: ${log.message}`
    console.log(log.wallClockStartedAt,'log.wallClockStartedAt')
    const startTime = new Date(log.wallClockStartedAt).getTime();//capturo el tiempo
    const endTime = new Date().getTime();
    const duration = `Tiempo en mili segundos del evento Cypress ${((endTime - startTime))}`;
    console.log(duration,'duration');
    logs.push({ message: message, duration: duration });/* - ${currentSpec} */
  });

