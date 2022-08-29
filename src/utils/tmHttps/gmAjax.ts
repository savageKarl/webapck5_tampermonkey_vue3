import { serialize } from "../functions";

interface Options {
  url: string;
  method: "GET" | "POST" | "HEAD";
  data?: { [index: string]: any };
  params?: { [index: string]: any };
  headers?: { [index: string]: any };
  timeout?: number;
  cookie?: string;
  binary?: boolean;
  responseType?: "arraybuffer" | "blob" | "json" | "stream";
  [index: string]: any;
}

interface ResponseResult<T> {
  data: T;
  code: number;
  msg: string;
}

/** 封装油猴的ajax请求函数，可以解决跨域问题 */
export function gmAjax<T = unknown>(optionsOverride: Options) {
  return new Promise<ResponseResult<T>>((resolve, reject) => {
    // 将传入的参数与默认设置合并
    const options = {
      timeout: 3000,
      responseType: "json",
      onabort: () => {
        reject(new Error(JSON.stringify({ errorType: "abort_error" })));
      },
      ontimeout: () => {
        reject(new Error(JSON.stringify({ errorType: "timeout_error" })));
      },
      onerror: () => {
        reject(new Error(JSON.stringify({ errorType: "onerror" })));
      },
      onload: (res: any) => {
        resolve(res.response);
      },
    } as any;
    for (const k in optionsOverride) {
      // 有data要给他序列化，如果是get请求，还要加上url
      if (k === "data") {
        options[k] = serialize(optionsOverride[k] as any);
      } else {
        options[k] = optionsOverride[k];
      }
    }
    if (optionsOverride.method === "GET" && optionsOverride.params) {
      (options as any).url += `?${serialize(optionsOverride.params)}`;
    }
    GM_xmlhttpRequest(options);
  });
}
