import { GraphQLClient } from 'graphql-request';
import { DATOCMS_ENDPOINT } from '../consts/urls';
import { ALL_RECIPES } from '../consts/queries';

const apiToken = process.env.DATO_API_KEY;
const endpoint = DATOCMS_ENDPOINT;
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: 'Bearer ' + apiToken,
};

class DatoCmsClient {
  constructor() {
    this.client = new GraphQLClient(endpoint, { headers });
  }

  async allRecipes() {
    const res = await this.client.request(ALL_RECIPES);
    return res;
  }
}

export default new DatoCmsClient();
