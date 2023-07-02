import { stringify } from './lib/stringify.js';
import { json_parse } from './lib/parse.js'

let globalObj;

if (typeof globalThis !== 'undefined') {
    globalObj = globalThis;
} else if (typeof self !== 'undefined') {
    globalObj = self;
} else if (typeof window !== 'undefined') {
    globalObj = window;
} else if (typeof global !== 'undefined') {
    globalObj = global;
}

globalObj.BigInt.prototype.toJSON = function () {
    return this;
}

globalObj.JSON.parse = json_parse();
globalObj.JSON.stringify = stringify;
