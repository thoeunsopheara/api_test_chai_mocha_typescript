
import chai from "chai";
import chaiHttp from "chai-http";
import { baseUrl } from "../common";

const expect = chai.expect;
chai.use(chaiHttp);

let token = "";
describe("Get JWT Token", function() {
    it("Request for token", function(done){
        chai
        .request(baseUrl)
        .post("/request-token")
        .end(function(err, res) {
            expect(res).to.have.status(201);
            expect(res.body).to.have.property("token");
            token = res.body.token;
            done();
        });
    });
});

export { token };
