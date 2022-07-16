import pug from 'gulp-pug'
import gulp from 'gulp'
import sass from 'sass'
import gsass from 'gulp-sass'
// import {data} from './fakeData.js'

const {src, dest, series, parallel , watch} = gulp
export function pugTranspile(){
        return src('./src/pages/**/*.pug')
                .pipe(pug({verbose: true, pretty: true, /* data, */ self:true}))
                .pipe(dest('./dist/'))
}

const sassPlug  = gsass(sass)

export function sassTranspile(){
        return src('./src/sass/**/*.sass')
                .pipe(sassPlug().on("error", sassPlug.logError))
                .pipe(dest('./dist/css'))
}


export default ()=>watch(
        ["./src/**/*"],
        { ignoreInitial: false },
        parallel(sassTranspile, pugTranspile)
        )