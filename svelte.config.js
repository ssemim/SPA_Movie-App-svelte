const production = process.env.NODE_ENV === 'production'

function babelOptions(){
return{
    plugins: production 
    ? ['transform-remove-console'] 
    : []
}

}


module.exports= {
        preprocess:require('svelte-preprocess')({
            scss:{
                //스벨트 프로세스가 있으면 이 옵션이 필요없긴 함 
                prependData:'@import "./src/scss/main.scss";'
            },
            postcss: {
                plugins: [
                    require('autoprefixer')()
                ]
            },
            babel: babelOptions()

        })
}