import { API_URL } from 'config/consts';
import ApiError from '../utils/ApiError';

class Request {
  public async handleResponse(response: Response) {
    const responseJson = await response.json();
    if (response.ok) {
      return responseJson;
    }
    const apiError = new ApiError(response.status, responseJson.message);
    throw apiError;
  }

  public async sendRequest(method: string, path: string, body: {} = {}) {
    let url = `${API_URL}/${path}`;

    const options = {
      ...{
        method,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    };
    const response = await fetch(url, options);
    return this.handleResponse(response);
  }

  public async get(path: string) {
    return this.sendRequest('GET', path);
  }
}

const request = new Request();

export default request;
