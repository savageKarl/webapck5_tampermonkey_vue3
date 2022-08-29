import axios from "axios";
import type { AxiosRequestConfig } from "axios";

import { setupInterceptor } from "@/utils/https/interceptors/index";

interface IResponse<T> {
  data: T;
  code: number;
  msg: string;
  message: string;
}

const instance = axios.create({
  baseURL: "",
  timeout: 5000,
});

export async function request<T = any>(
  config: AxiosRequestConfig
): Promise<IResponse<T>> {
  setupInterceptor(instance);

  return (await instance(config)).data;
}
