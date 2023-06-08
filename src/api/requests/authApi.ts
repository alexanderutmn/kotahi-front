import { instanceAxios, setAuthHeader } from '../instanceAxios';
import { WhoAmITypeServerType } from '../serverTypes';

export const authApi = {
  async whoAmI(token: string) {
    const response = await instanceAxios.get<WhoAmITypeServerType>('/whoami', setAuthHeader(token));
    return response.data;
  },
};
