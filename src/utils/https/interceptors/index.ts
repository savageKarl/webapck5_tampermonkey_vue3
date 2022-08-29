import type { AxiosInstance } from 'axios';

export function setupInterceptor(instance: AxiosInstance) {
  instance.interceptors.request.use(function(config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });


  instance.interceptors.response.use(function(response){
    return response;
  }, function(error) {
    return Promise.reject(error);
  })
}