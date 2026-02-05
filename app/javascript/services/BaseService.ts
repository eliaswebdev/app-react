import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export type RequestOptions = AxiosRequestConfig;

/**
 * BaseService
 * Classe base para criar serviços de API usando axios.
 * - fornece uma instância axios configurável
 * - métodos HTTP genéricos (get/post/put/patch/delete)
 * - helpers para obter apenas `data` e gerenciar token de autenticação
 */
export default class BaseService {
  protected client: AxiosInstance;

  constructor(baseURL?: string, defaultOptions?: AxiosRequestConfig) {
    this.client = axios.create({
      baseURL: baseURL || "/",
      headers: {
        "Content-Type": "application/json",
      },
      ...defaultOptions,
    });

    this.client.interceptors.response.use(
      (response) => response,
      (error) => {
        // Normaliza a rejeição para facilitar tratamento nos callers
        if (error && error.response) return Promise.reject(error.response);
        return Promise.reject(error);
      },
    );
  }

  setAuthToken(token?: string | null) {
    if (token) {
      this.client.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete this.client.defaults.headers.common["Authorization"];
    }
  }

  request<T = any>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.client.request<T>(config);
  }

  get<T = any>(url: string, params?: any, options?: RequestOptions) {
    return this.client.get<T>(url, { params, ...options });
  }

  post<T = any>(url: string, data?: any, options?: RequestOptions) {
    return this.client.post<T>(url, data, options);
  }

  put<T = any>(url: string, data?: any, options?: RequestOptions) {
    return this.client.put<T>(url, data, options);
  }

  patch<T = any>(url: string, data?: any, options?: RequestOptions) {
    return this.client.patch<T>(url, data, options);
  }

  delete<T = any>(url: string, options?: RequestOptions) {
    return this.client.delete<T>(url, options);
  }

  // Conveniência: retorna apenas o `data` da resposta
  async fetchData<T = any>(promise: Promise<AxiosResponse<T>>): Promise<T> {
    const res = await promise;
    return res.data;
  }
}
