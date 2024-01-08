export function capturarTiempoDeCarga() {
    return cy.window().then((win) => {
      return new Cypress.Promise((resolve) => {
        const [navigationTiming] = win.performance.getEntriesByType('navigation');
        const loadTime = (navigationTiming.loadEventEnd - navigationTiming.startTime) / 1000;
        cy.log(`Tiempo de carga de página: ${loadTime} en segundos del evento que carga la página para los meses`);
        resolve();
      });
    });
  }