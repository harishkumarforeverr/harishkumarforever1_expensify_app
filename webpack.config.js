const path = require("path");

module.exports={
    entry:"./src/app.js",
    output:{
        path:path.join(__dirname,'public'),
        filename:"bundle.js"
    },
    module:{
      rules:[ 
        {
          test:/\.js$/,
          loader:"babel-loader",
          exclude:[
            /node_modules/
            // /\.test.js$/
          ]
        }, 
        {
          test:/\.s?css$/,
          use : [
              'style-loader',
              'css-loader',
              'sass-loader'
          ] 
        } 
      ]
    }, 
    devtool:"cheap-module-source-map",
    devServer:{
      contentBase:path.join(__dirname,'public'),
      port:9090,
      historyApiFallback:true
    },
    mode:"development"  
}