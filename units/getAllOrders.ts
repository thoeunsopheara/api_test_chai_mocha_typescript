

import chai from "chai";
import chaiHttp from "chai-http";
import { token } from "./getToken";
import { baseUrl } from "../common";

const expect = chai.expect;
chai.use(chaiHttp);

describe("Get Order", function() {
    it("Send request for order", function(done){
        chai
        .request(baseUrl)
        .get("/orders")
        .set("Authorization", `Basic ${token}`)
        .end(function(err, res) {
            expect(res).to.have.status(200);
            expect(res.body).to.be.an("array");
            done();
        });
    });
});
