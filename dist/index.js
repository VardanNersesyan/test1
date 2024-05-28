"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const arrayOperations_1 = require("./part1/arrayOperations");
const processData_1 = require("./part2/processData");
const part3_1 = require("./part3");
const BankAccount_1 = require("./part4/BankAccount");
const part7_1 = require("./part7");
const part8_1 = require("./part8");
const DataFetcher_1 = require("./part9/DataFetcher");
const Calculator_1 = require("./part10/Calculator");
(() => __awaiter(void 0, void 0, void 0, function* () {
    (0, arrayOperations_1.task1)();
    (0, processData_1.task2)();
    (0, part3_1.task3)();
    (0, BankAccount_1.task4)();
    (0, part7_1.task7)();
    (0, part8_1.task8)();
    yield (0, DataFetcher_1.task9)();
    (0, Calculator_1.task10)();
}))();
