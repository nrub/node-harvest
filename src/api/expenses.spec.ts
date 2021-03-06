import { ExpensesAPI } from './expenses';

const harvest = {
  request: () => {
    console.log('Request Made');
  }
};

/**
 * Dummy test
 */
describe('Expenses test', () => {
  let instance;
  let request;
  let id = 1000;

  beforeEach(() => {
    instance = new ExpensesAPI(harvest);
    request = spyOn(instance.harvest, 'request');
  });

  it('Expenses is instantiable', () => {
    expect(instance).toBeInstanceOf(ExpensesAPI);
  });

  it('should have a get method that calls the request method', () => {
    instance.get(id);
    expect(request).toBeCalledWith('GET', '/v2/expenses/1000');
  });

  it('should have a list method that calls the request method', () => {
    const query = { is_active: true };
    instance.list(query);
    expect(request).toBeCalledWith('GET', '/v2/expenses', query);
  });

  it('should have an create method that calls the request method', () => {
    const data = { property: true };
    instance.create(data);
    expect(request).toBeCalledWith('POST', '/v2/expenses', data);
  });

  it('should have an update method that calls the request method', () => {
    const query = { is_active: true };
    instance.update(id, query);
    expect(request).toBeCalledWith('PATCH', '/v2/expenses/1000', query);
  });

  it('should have a delete method that calls the request method', () => {
    instance.delete(id);
    expect(request).toBeCalledWith('DELETE', '/v2/expenses/1000');
  });
});
