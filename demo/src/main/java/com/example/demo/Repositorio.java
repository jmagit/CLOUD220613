package com.example.demo;

import java.util.List;

public interface Repositorio {
	List<Pedido> getAll();
	Pedido getOne(int id);
	void insert(Pedido item);
	void update(Pedido item);
	void delete(int id);
}
