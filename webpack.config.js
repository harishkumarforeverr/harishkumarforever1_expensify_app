const path = require("path");

module.exports=(env)=>{  
  // console message
  console.log(env.production?"your running your build in Procution Mode":"your running your build in Development Mode");
  // variable declartion
  const envMode=env.production?"production":"development";
  const miniCssExtractPlugin=require("mini-css-extract-plugin"); 
  return {
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
          ]
        }, 
        {
          test:/\.s?css$/,
          use : [
            miniCssExtractPlugin.loader,
            {
              loader :'css-loader',
              options:{
                 sourceMap:true
              }
            },
            {
              loader:'sass-loader',
              options:{
                sourceMap:true
              }
            } 
          ] 
        } 
      ]
    }, 
    plugins : [
      new miniCssExtractPlugin({
        filename:"styles.css"
      })
    ],
    devtool:env.production?"source-map":"eval-cheap-module-source-map",
    devServer:{
      contentBase:path.join(__dirname,'public'),
      port:9090,
      historyApiFallback:true
    },
    mode:envMode
}
}