const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const atendente = `Olá ${order.order.delivery.deliveryPerson}`;
  const nome = `entrega para: ${order.name}`;
  const telefone = `Telefone: ${order.phoneNumber}`;
  const rua = order.address.street;
  const numero = `N° ${order.address.number}`;
  const apto = `AP: ${order.address.apartment}`;

  console.log(`${atendente}, ${nome}, ${telefone}, ${rua}, ${numero}, ${apto}`);
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const orderNova = order;
  orderNova.name = `Luiz Silva`;
  const nome = orderNova.name;
  const pizzas = Object.keys(order.order.pizza);
  const bebida = order.order.drinks.coke.type;
  const preco = orderNova.total = '50';

  console.log(`Olá ${nome}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${bebida} é R$${preco},00`);
}

orderModifier(order);