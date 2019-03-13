let adminClient = require('keycloak-admin-client');

let settings = {
    baseUrl: 'http://176.122.187.48:8080/auth',
    username: 'admin',
    password: 'admin',
    grant_type: 'password',
    client_id: 'admin-cli'
};

adminClient(settings)
    .then(client => {
        console.log('client', client);
        client.realms.find().then(realms => {
            console.log('realms', realms);
        });
    })
    .catch(err => {
        console.log('Error', err);
    });

class keycloakUtil {
    constructor(settings) {}
}
