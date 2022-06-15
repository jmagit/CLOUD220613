package com.example.demo;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.DisplayNameGeneration;
import org.junit.jupiter.api.DisplayNameGenerator;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

@DisplayNameGeneration(DisplayNameGenerator.ReplaceUnderscores.class)
public class CalculadoraTest {
	Calculadora calculadora;

	@BeforeEach
	void incializar() {
		calculadora = new Calculadora();
	}

	@Nested
	@DisplayName("Pruebas del método de sumar")
	class Suma {
		@Test
		void Suma_dos_positivos() {
			var calculadora = new Calculadora();

			var resultado = calculadora.suma(2, 2);

			assertEquals(4, resultado);
		}

		@Test
		void Suma_con_negativos() {
			var calculadora = new Calculadora();

			var resultado = calculadora.suma(-2, 2);

			assertEquals(0, resultado, "Primero");
			assertEquals(-1, calculadora.suma(1, -2), "Segundo");
		}

		@Test
		@Disabled
		void Suma_rara() {
			var calculadora = new Calculadora();

			var resultado = calculadora.suma(0.1, 0.2);

			assertEquals(0.3, resultado);
		}
		
		@ParameterizedTest(name =  "Suma: {0} + {1} = {2}")
		@CsvSource({ "1,1,2", "-1,1,0", "2,-1,1","-1,-1,-2","0,0,0" })
		void sumas_ok(double numero1, double numero2, double resultado) {
			assertEquals(resultado, calculadora.suma(numero1, numero2));
		}

	}

	@DisplayName("Pruebas de las divisiones")
	@Nested
	class Dividir {
		@Nested
		class OK {
			@Test
			void Division_enteros() {
				assertEquals(2, calculadora.divide(4, 2));
			}
			@Test
			void Division_enteros_2() {
				assertEquals(1, calculadora.divide(3, 2));
			}

			@Test
			void Division_reales() {
				assertEquals(2, calculadora.divide(4.0, 2.0));
			}
		}

		@Nested
		class KO {
			@Test
			void Division_enteros() {
				assertThrows(ArithmeticException.class, () -> calculadora.divide(4, 0));
			}

			@Test
			void Division_reales() {
				assertThrows(ArithmeticException.class, () -> calculadora.divide(4.0, 0.0));
			}
		}
	}
}
