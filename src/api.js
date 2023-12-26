import api from 'api';

const sdk = api('@easybroker-staging/v1.0#15gio736lmsbx8xg');

sdk.auth('l7u502p8v46ba3ppgvj5y2aad50lb9');
export const getProperties = async () =>
  sdk.getProperties({page: '1', limit: '20'})
    .then(({ data }) => {
      // Iterate through each property and print the title
      data.content.forEach(property => {
        console.log(property.title);
      });
    })
    .catch(err => console.error(err));

