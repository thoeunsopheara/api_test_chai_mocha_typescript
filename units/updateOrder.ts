
import chai from "chai";
import chaiHttp from "chai-http";
import { baseUrl } from "../common";
import { token } from "./getToken";
import { id } from "./createOrder";

const { expect } = chai;
chai.use(chaiHttp);

const order = {
  name: "Sandine (Milo)",
  customer_email: "oyetoketoby80@gmail.com",
  customer_name: "Oyetoke ",
  quantity: 5,
  customer_address: "Aboru, Lagos",
  status: "pending",
};
describe("Update order 2", function(){
    it("Update order 3", function(done){
      chai
      .request(baseUrl)
      .put(`/orders/${id}`)
      .set("Authorization", `Basic ${token}`)
      .send(order)
      .end(function(err, res) {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property("data");
          expect(res.body.message).to.equal("Updated Succesfully");
          expect(res.body.data.status).to.equal(order.status);
          done();
      });
    });
});
