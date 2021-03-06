// Generated by Selenium IDE
import org.junit.Test;
import org.junit.Before;
import org.junit.After;
import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.core.IsNot.not;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Alert;
import org.openqa.selenium.Keys;
import java.util.*;
import java.net.MalformedURLException;
import java.net.URL;
public class CalculadoraTest {
  private WebDriver driver;
  private Map<String, Object> vars;
  JavascriptExecutor js;
  @Before
  public void setUp() {
    driver = new ChromeDriver();
    js = (JavascriptExecutor) driver;
    vars = new HashMap<String, Object>();
  }
  @After
  public void tearDown() {
    driver.quit();
  }
  @Test
  public void calculadora() {
    driver.get("http://localhost:8181/");
    driver.manage().window().setSize(new Dimension(1202, 821));
    driver.findElement(By.linkText("Calculadora")).click();
    assertThat(driver.findElement(By.cssSelector("h1")).getText(), is("Calculadora"));
    driver.findElement(By.cssSelector("tr:nth-child(4) > td:nth-child(3) > .btnDigito")).click();
    driver.findElement(By.cssSelector("tr:nth-child(4) > td:nth-child(2) > .btnDigito")).click();
    driver.findElement(By.cssSelector("tr:nth-child(4) > td:nth-child(1) > .btnDigito")).click();
    driver.findElement(By.cssSelector("tr:nth-child(5) > td:nth-child(3) > .btnDigito")).click();
    driver.findElement(By.cssSelector("tr:nth-child(5) > td:nth-child(2) > .btnDigito")).click();
    driver.findElement(By.cssSelector("tr:nth-child(5) > td:nth-child(1) > .btnDigito")).click();
    driver.findElement(By.cssSelector("tr:nth-child(6) > td:nth-child(3) > .btnDigito")).click();
    driver.findElement(By.cssSelector("tr:nth-child(6) > td:nth-child(2) > .btnDigito")).click();
    driver.findElement(By.cssSelector("tr:nth-child(6) > td:nth-child(1) > .btnDigito")).click();
    driver.findElement(By.cssSelector("tr:nth-child(7) .btnNum")).click();
    assertThat(driver.findElement(By.id("txtPantalla")).getText(), is("9876543210"));
    driver.findElement(By.id("btnBorrar")).click();
    driver.findElement(By.id("btnBorrar")).click();
    driver.findElement(By.id("btnBorrar")).click();
    driver.findElement(By.id("btnBorrar")).click();
    assertThat(driver.findElement(By.id("txtPantalla")).getText(), is("987654"));
    driver.findElement(By.id("btnIniciar")).click();
    assertThat(driver.findElement(By.id("txtPantalla")).getText(), is("0"));
    driver.findElement(By.cssSelector("tr:nth-child(7) .btnNum")).click();
    driver.findElement(By.cssSelector("tr:nth-child(7) > td:nth-child(3) > .btnDigito")).click();
    driver.findElement(By.cssSelector("tr:nth-child(6) > td:nth-child(1) > .btnDigito")).click();
    driver.findElement(By.cssSelector("td:nth-child(3) > .btnOperar")).click();
    driver.findElement(By.cssSelector("tr:nth-child(7) .btnNum")).click();
    driver.findElement(By.cssSelector("tr:nth-child(7) > td:nth-child(3) > .btnDigito")).click();
    driver.findElement(By.cssSelector("tr:nth-child(6) > td:nth-child(2) > .btnDigito")).click();
    driver.findElement(By.cssSelector("tr:nth-child(7) .btnOperar")).click();
    assertThat(driver.findElement(By.id("txtPantalla")).getText(), is("0,30000000000000004"));
  }
}
