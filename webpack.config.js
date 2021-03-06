const path = require("path"); 
const dotEnv=require("dotenv");
const webpack=require("webpack");
module.exports=(env)=>{  
  // console message 
  if(process.env.NODE_ENV==='test'){ 
        console.log("your using test database of firebase ");
        dotEnv.config({
          path:".env.test"
        })
  }else if(process.env.NODE_ENV==='development'){   
      console.log("your using developmemnt/production firebase ");
      dotEnv.config({
        path:".env.development"
      }) 
  }
  console.log("process.env.NODE_ENV",process.env.NODE_ENV);
  console.log(env.production?"your running your build in Procution Mode":"your running your build in Development Mode");
  // variable declartion
  const envMode=env.production?"production":"development";
  const miniCssExtractPlugin=require("mini-css-extract-plugin"); 
  return {
    entry:[ 
    "./src/app.js",
    "@babel/polyfill"
    ],
    output:{
        path:path.join(__dirname,'public',"dist"),
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
                 sourceMap:true,
                  url:false
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
      }),
      new webpack.DefinePlugin({  
        "process.env.FIREBASE_API_KEY" : JSON.stringify(process.env.FIREBASE_API_KEY),
        "process.env.FIREBASE_AUTH_DOMAIN" : JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
         "process.env.FIREBASE_DATA_BASE_URL" : JSON.stringify(process.env.FIREBASE_DATA_BASE_URL),
         "process.FIREBASE_PROJECT_ID" : JSON.stringify(process.FIREBASE_PROJECT_ID),
         "process.env.FIREBASE_STORAGE_BUCKET" : JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
         "process.env.FIREBASE_MESSAGING_SENDER_ID" : JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
         "process.env.FIREBASE_APP_ID" : JSON.stringify(process.env.FIREBASE_APP_ID),
         "process.env.FIREBASE_MEASUREMENT_ID" : JSON.stringify(process.env.FIREBASE_MEASUREMENT_I)     
      })
    ],
    devtool:env.production?"source-map":"eval-cheap-module-source-map",
    devServer:{
      contentBase:path.join(__dirname,'public'),
      port:9090,
      historyApiFallback:true,
      publicPath:"/dist/", 
    },
    mode:envMode 
 }
}