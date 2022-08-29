const path = require("path");

const BannerPlugin = require("webpack/lib/BannerPlugin");
const fs = require("fs");

const { DefinePlugin } = require('webpack');
const { VueLoaderPlugin } = require("vue-loader");
const TerserPlugin = require('terser-webpack-plugin');

const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");

module.exports = function (env) {
// 通过npm run build:header编译出的路径
const header_path = "dist/app_header.js";
  if (!fs.existsSync(header_path)) {
    throw "文件" + header_path + "不存在，请先执行 yarn build:header 编译！";
  }
  const header = fs.readFileSync(header_path, "utf-8");
  return {
    mode: env.NODE_ENV,
    watch: env.NODE_ENV === 'development',
    entry: "./src/main.ts",
    output: {
      filename: "main.user.js",
      path: path.resolve(__dirname, "dist"),
      clean: false,
      publicPath: "./",
    },
    devtool: "inline-cheap-source-map",
    resolve: {
      // 先尝试 ts 后缀的 TypeScript 源码文件
      extensions: [".ts", ".js"],
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    optimization: {
      minimizer: [
        new TerserPlugin({
          // 不将 comments进行抽离
          extractComments: false,
          // 是否使用多线程进行编译 --- 默认值就是true
          // 可以设置为number，即手动指定设置多少进程进行打包
          // 也可以设置为true，此时parallel的值就是cpus.length - 1
          // parallel: true,
        })
      ]
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          loader: "ts-loader",
          options: { appendTsSuffixTo: [/\.vue$/], transpileOnly: true },
        },
        {
          test: /\.s[ac]ss$/i,
          use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
        },
        {
          // 使用 PostCSS 处理 CSS 文件
          test: /\.css$/,
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
        {
          test: /\.vue$/,
          loader: "vue-loader",
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset",
          parser: {
            dataUrlCondition: {
              maxSize: 100000 * 1024, // 小于 100kb 的文件将会被当作 asset/inline 类型对待，即会进行 base64 编码；否则会被当作 asset/resource 类型对待，即会被做单独的打包
            },
          },
        },
      ],
    },
    plugins: [
      new VueLoaderPlugin(), // 打包vue必须使用的插件
      AutoImport({
        resolvers: [ElementPlusResolver()], // 自动导入组件
      }),
      Components({
        resolvers: [ElementPlusResolver()], // 自动导入组件
      }),
      new DefinePlugin({
        __VUE_OPTIONS_API__: false, 
        __VUE_PROD_DEVTOOLS__: false,
      }),
      new BannerPlugin({
        banner: header,
      }),
    ]
  };
};
