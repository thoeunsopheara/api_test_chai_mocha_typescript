

function smallTest(name: string, path: string){
  describe(name, function(){
    require(path);
  })
}


describe("Test for all", function(){
  beforeEach(() => console.log("Starting unit..."));
  afterEach(() => console.log("Finished unit..."));
  smallTest("Server is live", "./units/first");
  smallTest("Get Token", "./units/getToken");
  smallTest("Get all orders", "./units/getAllOrders");
  smallTest("Create order 1", "./units/createOrder");
  smallTest("Get One order 1", "./units/getOneOrder");
  smallTest("Update order 1", "./units/updateOrder");
  smallTest("Delete order 1", "./units/deleteOrder");
  console.log(`After test`);
});
