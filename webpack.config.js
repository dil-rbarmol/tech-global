const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true, // Clean the output directory before emit
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Match all .js files
        exclude: /node_modules/, // Exclude node_modules directory
        use: {
          loader: 'babel-loader', // Transpile JavaScript using Babel
          options: {
            presets: ['@babel/preset-react'], // Use React preset for Babel
          },
        },
      },
      {
        test: /\.scss$/, // Match all .scss files
        use: [
          'style-loader', // Inject CSS into the DOM
          'css-loader', // Translates CSS into CommonJS modules
          {
            loader: 'postcss-loader', // Apply PostCSS transformations (like autoprefixer)
            options: {
              sourceMap: true, // Required for resolve-url-loader to function properly
              postcssOptions: {
                plugins: [
                  require('autoprefixer'), // Automatically add vendor prefixes to CSS
                ],
              },
            },
          },
          {
            loader: 'resolve-url-loader', // Resolves relative paths in url() statements
            options: {
              sourceMap: true, // Required for proper function with Sass
            },
          },
          {
            loader: 'sass-loader', // Compiles Sass to CSS
            options: {
              sourceMap: true, // Required for resolve-url-loader to work correctly
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // Match image files
        type: 'asset/resource', // Handle images as assets/resources
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i, // Match font files
        type: 'asset/resource', // Handle fonts as assets/resources
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/videos/[name][ext]', // Output path in dist
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Use the 'index.html' file from 'public' directory
      favicon: './public/favicon.ico', // Add a favicon
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Serve static files from 'public' directory
    },
    compress: true, // Enable gzip compression
    port: 3000, // Server will run on port 3000
    open: true, // Automatically open the browser
    hot: true, // Enable Hot Module Replacement
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'], // Resolve these file extensions
  },
  mode: process.env.NODE_ENV || 'development',
};
