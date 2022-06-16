const utils = require("./utils.js");
const tests = {};
tests["Pagina Principal"] = async (driver, vars, opts = {}) => {
  await driver.get((new URL(`/`, BASE_URL)).href);
  try {
    await driver.manage().window().setRect({
      width: 1202,
      height: 821
    });
  } catch (error) {
    console.log('Unable to resize window. Skipping.');
  };
  await driver.wait(until.elementLocated(By.linkText(`Inicio`)), configuration.timeout);
  await expect(driver.findElement(By.linkText(`Inicio`))).resolves.toHaveText(`Inicio`);
  await driver.wait(until.elementLocated(By.linkText(`Calculadora`)), configuration.timeout);
  await driver.findElement(By.linkText(`Calculadora`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`h1`)), configuration.timeout);
  await expect(driver.findElement(By.css(`h1`))).resolves.toHaveText(`Calculadora`);
  await driver.wait(until.elementLocated(By.linkText(`Compras`)), configuration.timeout);
  await driver.findElement(By.linkText(`Compras`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`h1`)), configuration.timeout);
  await expect(driver.findElement(By.css(`h1`))).resolves.toHaveText(`Compras`);
  await driver.wait(until.elementLocated(By.linkText(`Contactos`)), configuration.timeout);
  await driver.findElement(By.linkText(`Contactos`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`h1`)), configuration.timeout);
  await expect(driver.findElement(By.css(`h1`))).resolves.toHaveText(`Contactos`);
  await driver.wait(until.elementLocated(By.linkText(`Alertas`)), configuration.timeout);
  await driver.findElement(By.linkText(`Alertas`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`h1:nth-child(1)`)), configuration.timeout);
  await expect(driver.findElement(By.css(`h1:nth-child(1)`))).resolves.toHaveText(`Alertas`);
  await driver.wait(until.elementLocated(By.linkText(`Ficheros`)), configuration.timeout);
  await driver.findElement(By.linkText(`Ficheros`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`h1`)), configuration.timeout);
  await expect(driver.findElement(By.css(`h1`))).resolves.toHaveText(`Subir ficheros`);
  await driver.wait(until.elementLocated(By.linkText(`APIs`)), configuration.timeout);
  await driver.findElement(By.linkText(`APIs`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`h2:nth-child(1)`)), configuration.timeout);
  await expect(driver.findElement(By.css(`h2:nth-child(1)`))).resolves.toHaveText(`Servicios RestFul`);
  await driver.wait(until.elementLocated(By.css(`.fa-info-circle`)), configuration.timeout);
  await driver.findElement(By.css(`.fa-info-circle`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`h1`)), configuration.timeout);
  await expect(driver.findElement(By.css(`h1`))).resolves.toHaveText(`Web4Testing`);
}
tests["Login"] = async (driver, vars, opts = {}) => {
  await driver.get((new URL(`/`, BASE_URL)).href);
  try {
    await driver.manage().window().setRect({
      width: 1202,
      height: 821
    });
  } catch (error) {
    console.log('Unable to resize window. Skipping.');
  };
  await driver.wait(until.elementLocated(By.id(`txtUsuario`)), configuration.timeout);
  await driver.findElement(By.id(`txtUsuario`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.id(`txtUsuario`)), configuration.timeout);
  await driver.findElement(By.id(`txtUsuario`)).then(element => {
    return element.clear().then(() => {
      return element.sendKeys(`admin`);
    });
  });
  await driver.wait(until.elementLocated(By.id(`txtPassword`)), configuration.timeout);
  await driver.findElement(By.id(`txtPassword`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.id(`txtPassword`)), configuration.timeout);
  await driver.findElement(By.id(`txtPassword`)).then(element => {
    return element.clear().then(() => {
      return element.sendKeys(`P`);
    });
  });
  await driver.wait(until.elementLocated(By.id(`txtPassword`)), configuration.timeout);
  await driver.findElement(By.id(`txtPassword`)).then(element => {
    return element.clear().then(() => {
      return element.sendKeys(`P@$$w0rd`);
    });
  });
  await driver.wait(until.elementLocated(By.css(`.fa-sign-in-alt`)), configuration.timeout);
  await driver.findElement(By.css(`.fa-sign-in-alt`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.id(`userData`)), configuration.timeout);
  await expect(driver.findElement(By.id(`userData`))).resolves.toHaveText(`Hola Administrador`);
  await driver.wait(until.elementLocated(By.css(`.fa-sign-out-alt`)), configuration.timeout);
  await driver.findElement(By.css(`.fa-sign-out-alt`)).then(element => {
    return element.click();
  });
}
tests["Calculadora"] = async (driver, vars, opts = {}) => {
  await driver.get((new URL(`/`, BASE_URL)).href);
  try {
    await driver.manage().window().setRect({
      width: 1202,
      height: 821
    });
  } catch (error) {
    console.log('Unable to resize window. Skipping.');
  };
  await driver.wait(until.elementLocated(By.linkText(`Calculadora`)), configuration.timeout);
  await driver.findElement(By.linkText(`Calculadora`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`h1`)), configuration.timeout);
  await expect(driver.findElement(By.css(`h1`))).resolves.toHaveText(`Calculadora`);
  await driver.wait(until.elementLocated(By.css(`tr:nth-child(4) > td:nth-child(3) > .btnDigito`)), configuration.timeout);
  await driver.findElement(By.css(`tr:nth-child(4) > td:nth-child(3) > .btnDigito`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`tr:nth-child(4) > td:nth-child(2) > .btnDigito`)), configuration.timeout);
  await driver.findElement(By.css(`tr:nth-child(4) > td:nth-child(2) > .btnDigito`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`tr:nth-child(4) > td:nth-child(1) > .btnDigito`)), configuration.timeout);
  await driver.findElement(By.css(`tr:nth-child(4) > td:nth-child(1) > .btnDigito`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`tr:nth-child(5) > td:nth-child(3) > .btnDigito`)), configuration.timeout);
  await driver.findElement(By.css(`tr:nth-child(5) > td:nth-child(3) > .btnDigito`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`tr:nth-child(5) > td:nth-child(2) > .btnDigito`)), configuration.timeout);
  await driver.findElement(By.css(`tr:nth-child(5) > td:nth-child(2) > .btnDigito`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`tr:nth-child(5) > td:nth-child(1) > .btnDigito`)), configuration.timeout);
  await driver.findElement(By.css(`tr:nth-child(5) > td:nth-child(1) > .btnDigito`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`tr:nth-child(6) > td:nth-child(3) > .btnDigito`)), configuration.timeout);
  await driver.findElement(By.css(`tr:nth-child(6) > td:nth-child(3) > .btnDigito`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`tr:nth-child(6) > td:nth-child(2) > .btnDigito`)), configuration.timeout);
  await driver.findElement(By.css(`tr:nth-child(6) > td:nth-child(2) > .btnDigito`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`tr:nth-child(6) > td:nth-child(1) > .btnDigito`)), configuration.timeout);
  await driver.findElement(By.css(`tr:nth-child(6) > td:nth-child(1) > .btnDigito`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`tr:nth-child(7) .btnNum`)), configuration.timeout);
  await driver.findElement(By.css(`tr:nth-child(7) .btnNum`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.id(`txtPantalla`)), configuration.timeout);
  await expect(driver.findElement(By.id(`txtPantalla`))).resolves.toHaveText(`9876543210`);
  await driver.wait(until.elementLocated(By.id(`btnBorrar`)), configuration.timeout);
  await driver.findElement(By.id(`btnBorrar`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.id(`btnBorrar`)), configuration.timeout);
  await driver.findElement(By.id(`btnBorrar`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.id(`btnBorrar`)), configuration.timeout);
  await driver.findElement(By.id(`btnBorrar`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.id(`btnBorrar`)), configuration.timeout);
  await driver.findElement(By.id(`btnBorrar`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.id(`txtPantalla`)), configuration.timeout);
  await expect(driver.findElement(By.id(`txtPantalla`))).resolves.toHaveText(`987654`);
  await driver.wait(until.elementLocated(By.id(`btnIniciar`)), configuration.timeout);
  await driver.findElement(By.id(`btnIniciar`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.id(`txtPantalla`)), configuration.timeout);
  await expect(driver.findElement(By.id(`txtPantalla`))).resolves.toHaveText(`0`);
  await driver.wait(until.elementLocated(By.css(`tr:nth-child(7) .btnNum`)), configuration.timeout);
  await driver.findElement(By.css(`tr:nth-child(7) .btnNum`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`tr:nth-child(7) > td:nth-child(3) > .btnDigito`)), configuration.timeout);
  await driver.findElement(By.css(`tr:nth-child(7) > td:nth-child(3) > .btnDigito`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`tr:nth-child(6) > td:nth-child(1) > .btnDigito`)), configuration.timeout);
  await driver.findElement(By.css(`tr:nth-child(6) > td:nth-child(1) > .btnDigito`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`td:nth-child(3) > .btnOperar`)), configuration.timeout);
  await driver.findElement(By.css(`td:nth-child(3) > .btnOperar`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`tr:nth-child(7) .btnNum`)), configuration.timeout);
  await driver.findElement(By.css(`tr:nth-child(7) .btnNum`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`tr:nth-child(7) > td:nth-child(3) > .btnDigito`)), configuration.timeout);
  await driver.findElement(By.css(`tr:nth-child(7) > td:nth-child(3) > .btnDigito`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`tr:nth-child(6) > td:nth-child(2) > .btnDigito`)), configuration.timeout);
  await driver.findElement(By.css(`tr:nth-child(6) > td:nth-child(2) > .btnDigito`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`tr:nth-child(7) .btnOperar`)), configuration.timeout);
  await driver.findElement(By.css(`tr:nth-child(7) .btnOperar`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.id(`txtPantalla`)), configuration.timeout);
  await expect(driver.findElement(By.id(`txtPantalla`))).resolves.toHaveText(`0,30000000000000004`);
}
module.exports = tests;