const { BaseService } = require('simple-node-framework').Base;
const CustomerRepository = require('../repository/customer-repository');

// sample service
class CustomerService extends BaseService {
    constructor() {
        super({
            module: 'Customer Service'
        });
        this.repository = new CustomerRepository();
    }

    async loadByName(name) {
        this.log.debug(`Loading customer [${name}]`);
        return { name: 'diogo menezes' };
        // return this.repository.loadByName(name);
    }
}

module.exports = CustomerService;
