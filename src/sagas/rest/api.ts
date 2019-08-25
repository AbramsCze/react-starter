import axios from 'axios'
import { JsonConfig, Token } from '../../types/global'

const defaultHeaders = {
  Accept: 'application/json;charset=UTF-8',
  //'Cache-Control': 'no-cache',
  'Content-Type': 'application/json;charset=UTF-8',
}

export class Api {
  axiosApi: Record<string, any>
  api: Record<string, any>
  headers: Record<string, any>

  constructor(headers: Record<string, any>) {
    this.axiosApi = {
      defaults: {
        headers: {
          common: {},
        },
      },
    }
    this.api = {
      getEndpoint: () => {},
      postEndpoint: () => {},
      putEndpoint: () => {},
      deleteEndpoint: () => {},
      patchEndpoint: () => { },
      unauthorizedPostEndpoint: () => { },
    }

    this.headers = headers
  }

  createApi = (config: JsonConfig) => {
    this.axiosApi = axios.create({
      headers: this.headers,
      baseURL: config.apiUrl,
      timeout: config.timeout,
    })

    this.api = {
      getEndpoint: (endpoint: string, token: Token, params: Record<string, any>) => {
        this.updateAuthorizationHeader(token)
        return this.axiosApi.get(endpoint, {
          params,
          validateStatus: (status: number) => this.isValidStatus(status),
        })
      },
      postEndpoint: (endpoint: string, token: Token, payload: Record<string, any>) => {
        this.updateAuthorizationHeader(token)
        return this.axiosApi.post(endpoint, payload, {
          validateStatus: (status: number) => this.isValidStatus(status),
        })
      },
      putEndpoint: (endpoint: string, token: Token, payload: Record<string, any>) => {
        this.updateAuthorizationHeader(token)
        return this.axiosApi.put(endpoint, payload, {
          validateStatus: (status: number) => this.isValidStatus(status),
        })
      },
      patchEndpoint: (endpoint: string, token: Token, payload: Record<string, any>) => {
        this.updateAuthorizationHeader(token)
        return this.axiosApi.patch(endpoint, payload, {
          validateStatus: (status: number) => this.isValidStatus(status),
        })
      },
      deleteEndpoint: (endpoint: string, token: Token, params: Record<string, any>, payload: Record<string, any>) => {
        this.updateAuthorizationHeader(token)
        return this.axiosApi.delete(endpoint, {
          params,
          data: payload,
          validateStatus: (status: number) => this.isValidStatus(status),
        })
      },
      unauthorizedPostEndpoint: (endpoint: string, payload: Record<string, any>) =>
        this.axiosApi.post(endpoint, payload),
    }
  }

  updateAuthorizationHeader = (token: Token): void => {
    if (token != null) {
      //this.axiosApi.defaults.headers.common.Authorization = `Bearer ${token}`
    } else if (this.axiosApi.defaults.headers.common.Authorization) {
      delete this.axiosApi.defaults.headers.common.Authorization
    }
  }

  // only Success HTTP codes are considered valid (i.e. 200, 201, ... 2xx)
  isValidStatus = (status: number) => status >= 200 && status <= 299
}

// factory for producing instance of `Api` class
export const apiFactory = (headers: Record<string, any>) => new Api(headers)

// singleton instance of `Api` class
export const apiSingleton: Api = apiFactory(defaultHeaders)
