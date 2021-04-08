
import chai from "chai";
import chaiHttp from "chai-http";
import { baseUrl } from "../common";
import { token } from "./getToken";

const expect = chai.expect;
chai.use(chaiHttp);

let id = 0;
const order = {
  name: "Sandine (Milo)",
  customer_email: "oyetoketoby80@gmail.com",
  customer_name: "Oyetoke Toby",
  quantity: 5,
  customer_address: "Aboru, Lagos",
};
describe("Create order 2", function(){
    it("Create order 3", function(done){
      chai
      .request(baseUrl)
      .post("/new_order")
      .set("Authorization", `Basic ${token}`)
      .send(order)
      .end(function(err, res){
          expect(res).to.have.status(200);
          expect(res.body).to.have.property("data")
          expect(res.body.message).to.equal("Order created successfully");
          id = res.body.data._id;
          done();
      });
    })
});

export { id }
