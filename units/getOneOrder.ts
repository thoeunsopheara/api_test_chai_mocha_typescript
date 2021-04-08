
import chai from "chai";
import chaiHttp from "chai-http";
import { baseUrl } from "../common";
import { token } from "./getToken";
import { id } from "./createOrder";

const { expect } = chai;
chai.use(chaiHttp);

describe("Get One order 2", function(){
    it("Get one order 3", function(done){
        chai
        .request(baseUrl)
        .get(`/orders/${id}`)
        .set("Authorization", `Basic ${token}`)
        .end(function(err, res) {
            expect(res).to.have.status(200);
            expect(res.body).to.have.property("_id");
            expect(res.body._id).to.equal(id);
            done();
        });
    });
});
