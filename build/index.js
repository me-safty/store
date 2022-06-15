"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const port = 3000;
//create istance from server
const app = (0, express_1.default)();
//add routing func
app.get("/", (req, res) => {
    res.json({
        message: "hello, world",
    });
});
//start express server
app.listen(port, () => {
    console.log(`server is starting at http://localhost:${port}`);
});
exports.default = app;
