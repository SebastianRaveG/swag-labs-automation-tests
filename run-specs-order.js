const { exec } = require('child_process');

// Lista de specs en el orden deseado
const specs = [
  'cypress/e2e/login/login_succesfull.spec.cy.js',
  'cypress/e2e/login/login_failure.spec.cy.js',
  'cypress/e2e/login/login_empty.spec.cy.js',
  'cypress/e2e/login/login_blocked.spec.cy.js',

  'cypress/e2e/logout/logout_succesfull.spec.cy.js',

  'cypress/e2e/sort_products_by_name/sort_products_by_name_a_to_z.spec.cy.js'

];

function runSpecs(specs) {
  if (specs.length === 0) return;
  const spec = specs.shift();

  exec(`npx cypress run --browser chrome --spec "${spec}"`, (err, stdout, stderr) => {
    if (err) {
      console.error(`Error ejecutando ${spec}:`, err);
      return;
    }

    console.log(`Ejecutado ${spec} con éxito`);
    console.log(stdout);

    runSpecs(specs);
  });
}

runSpecs([...specs]);
