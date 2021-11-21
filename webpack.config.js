const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')

const env = String(process.env.NODE_ENV).toLowerCase()

module.exports = {
  mode: env || 'development',
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
    path: path.resolve(__dirname, 'dist'), // Output build directory name
    publicPath: '/', // The bundled files will be available in the browser under this path.
  },
  plugins: [
    new CleanWebpackPlugin(), // Remove HTML file and re-create on each build
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'async',
    }), // Load bundle scripts asynchronously
  ],
  devServer: {
    // host: '0.0.0.0', // Uncomment this, If you want your server to be accessible externally(Mobile etc.)
    port: 3001, // Port number to listen for requests
    open: true, // To open the browser after server had been started
    contentBase: path.join(__dirname, './public'), // where to serve content(static files) from,
    inline: true, // Inject scripts into the bundle to show live reloading and build messages in the browser console.
    hot: true, // Enables HMR
    historyApiFallback: true, // In case 404 responses, root(index.html) file will be served,
  },
  devtool: env === 'production' ? false : 'source-map', // How source codes are mapped/shown in the browser
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(eot|png|svg|jpg|gif|woff|woff2|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
}
