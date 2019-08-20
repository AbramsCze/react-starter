import axios from 'axios'

const defaultHeaders = {
  Accept: 'application/json;charset=UTF-8',
  'Cache-Control': 'no-cache',
  'Content-Type': 'application/json;charset=UTF-8',
}

const localApi = axios.create({
  headers: defaultHeaders,
  baseURL: './',
  timeout: 120000,
})

export const downloadConfig = (): Promise<Record<string, any>> => localApi.get('config.json')
