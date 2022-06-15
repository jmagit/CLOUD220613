package com.example.demo;

public class Pedido {
	private Calculadora calculadora;
	
	public Pedido(Calculadora calculadora) {
		this.calculadora = calculadora;
	}
	
	public double getTotal(int cantidad, double precio) {
		return calculadora.suma(cantidad, precio);
	}

}
