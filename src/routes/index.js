import Home from './Home.svelte'
import Movie from './Movie.svelte'
import About from '~/routes/About.svelte'

export default{//페이지 변경에 대한 객체 데이터(리터럴)
    '/':Home,
    '/movie/:id': Movie,
    '/about':About
    }