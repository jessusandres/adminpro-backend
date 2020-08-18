"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var colors_1 = __importDefault(require("colors"));
var config_1 = require("./src/database/config");
var dotenv = __importStar(require("dotenv"));
dotenv.config();
var app = express_1.default();
// DATABASE
config_1.dbConnection();
// adminprouser0
// livklixqr18
app.get('/', function (req, res) {
    res.json({
        ok: true,
        message: 'Hola :D'
    });
});
app.listen(process.env.PORT, function () {
    console.log(colors_1.default.cyan("APP BACKEND ON PORT " + process.env.PORT));
});
