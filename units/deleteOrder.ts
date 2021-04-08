
import chai from "chai";
import chaiHttp from "chai-http";
import { baseUrl } from "../common";
import { token } from "./getToken";
import { id } from "./createOrder";

const { expect } = chai;
chai.use(chaiHttp);

describe("Delete Order 2", function(){
    it("Delete Order 3", function(done){
        chai
        .request(baseUrl)
        .delete(`/orders/${id}`)
        .set("Authorization", `Basic ${token}`)
        .end(function(err, res){
            expect(res).to.have.status(200);
            expect(res.body).to.have.property("message");
            expect(res.body.message).to.equal("Deleted Succesfully");
            chai
            .request(baseUrl)
            .get(`/orders/${id}`)
            .set("Authorization", `Basic ${token}`)
            .end(function(err, res){
              expect(res).to.have.status(404);
              expect(res.body).to.have.property("message");
              expect(res.body.message).to.equal("Order not found");
              done();
            });

        });
    });
});
