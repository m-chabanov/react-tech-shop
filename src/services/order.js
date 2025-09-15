// TO REPLACE: There's no need to use this methods with real API.
// It's created for Back-End response timing emulation
// Just replace the code with fetch method sending data to correct API endpoint
const confirmAndSaveOrder = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let orders = JSON.parse(localStorage.getItem('orders')) || [];
      orders.push(data);
      localStorage.setItem('orders', JSON.stringify(orders));
      resolve(data);
    }, 1000);
  });
};

export { confirmAndSaveOrder };
