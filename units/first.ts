
import chai from "chai";
import chaiHttp from "chai-http";
import { baseUrl } from "../common";

const expect = chai.expect;

chai.use(chaiHttp);

describe("Test Server is running or not", function(){
    it("Server is live", function(done) {
        chai
        .request(baseUrl)
        .get("/")
        .end(function(err, res){
            expect(res).to.have.status(200);
            expect(res.text).to.equal("Hurray! Its live.")
            done();
        });
    });
});
