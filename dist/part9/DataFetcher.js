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
exports.task9 = void 0;
class NetworkError extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
        this.name = 'NetworkError';
    }
}
class DataFetcher {
    constructor(url) {
        this.url = url;
    }
    setUrl(url) {
        this.url = url;
    }
    fetchData() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(this.url);
                if (!response.ok) {
                    throw new NetworkError(`HTTP error! status: ${response.status}`, response.status);
                }
                const data = yield response.json();
                return data;
            }
            catch (error) {
                this.logError(error);
            }
        });
    }
    processData(data) {
        this.log(`Fetched data: ${JSON.stringify(data)}`);
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.fetchData();
            if (data) {
                this.processData(data);
            }
        });
    }
    log(message) {
        console.log(message);
    }
    logError(error) {
        if (error instanceof Error) {
            console.error(`Error: ${error.message}`);
            if (error instanceof NetworkError) {
                console.error(`Status Code: ${error.status}`);
            }
        }
        else {
            console.error('Unknown error:', error);
        }
    }
}
function task9() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Task 9 running:');
        const url = "https://jsonplaceholder.typicode.com/posts/1";
        const fetcher = new DataFetcher(url);
        yield fetcher.execute();
        console.log('----------------------------------');
    });
}
exports.task9 = task9;
