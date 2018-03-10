import Client from './client';
import CompanyAPI from './api/company';
import RolesAPI from './api/roles';
import UsersAPI from './api/users';

/**
 * Provides the starting point of the harvest module
 */
export default class Harvest {
  host: string;
  userAgent = null;
  concurrency = null;
  debug = false;

  client: Client;
  request;

  company;
  roles;
  users;

  constructor(config) {
    this.host = 'https://' + config.subdomain + '.harvestapp.com';
    this.userAgent = config.userAgent;
    this.concurrency = config.concurrency || null;
    this.debug = config.debug || false;

    this.client = new Client(config);
    this.request = this.requestGenerator();

    this.company = new CompanyAPI(this);
    this.roles = new RolesAPI(this);
    this.users = new UsersAPI(this);
  }

  requestGenerator() {
    return function(method: string, uri: string, data: any = {}) {
      return new Promise((resolve, reject) => {
        this.client.push({
          method,
          uri,
          data,
          callback: (error, results) => {
            if (error) {
              reject(error);
            }

            resolve(results);
          }
        });
      });
    };
  }
}