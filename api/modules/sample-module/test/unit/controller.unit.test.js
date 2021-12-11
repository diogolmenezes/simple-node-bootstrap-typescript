"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = __importDefault(require("../../controller"));
const controller = new controller_1.default();
test('Should return 200 and have the correct name', () => {
    const desiredName = 'some_name';
    controller.service.loadByName = jest.fn().mockReturnValue({ name: desiredName });
    const req = { params: { name: desiredName } };
    const res = {
        send: (code, customer) => {
            expect(customer.name).toBe(desiredName);
            expect(code).toBe(200);
        }
    };
    controller.load(req, res, () => { });
});
