package com.example.demo;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Test;

public class PedidoTest {
	@Test
	void getTotal() {
		//var calc = new Calculadora();
		var calc = mock(Calculadora.class);
		when(calc.suma(2, 2)).thenReturn(4.0);
		var pedido = new Pedido(calc);
		
		assertEquals(4, pedido.getTotal(2, 2.00));
	}
	@Test
	void getTotalId1() {
		var dao = mock(Repositorio.class);
		when(dao.getOne(1)).thenReturn(new Pedido(new Calculadora()));
		
		assertEquals(4, dao.getOne(1).getTotal(2, 2.00));
	}
}
