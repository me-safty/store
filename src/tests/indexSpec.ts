import supertest from "supertest";
import app from "../index";

const requst = supertest(app);

describe("test bacic endpoint server", () => {
  it("test the / endpoint", async () => {
    const responce = await requst.get("/");
    expect(responce.status).toBe(200);
  });
});
