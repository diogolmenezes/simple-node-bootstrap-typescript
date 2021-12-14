import Controller from '../../controller';
const controller = new Controller();

test('Should return 200 and have the correct name', () => {
    const desiredName = 'some_name';

    controller.service.loadByName = jest.fn().mockReturnValue({ name: desiredName });

    const req = { params: { name: desiredName } };
    const res = {
        send: (code: number, customer: { name: string; }) => {
            expect(customer.name).toBe(desiredName);
            expect(code).toBe(200);
        }
    };

    controller.load(req, res, () => {});
});
