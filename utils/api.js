
const api= 'https://yts.lt/api/v2/';

class Api {
    async getSuggestion(id){
        const query = await fetch( `${api}movie_suggestions.json?movie_id=${id}`);
        const {data} = await query.json();
        return data
    }
    async getmovies(){
        const query = await fetch( `${api}list_movies.json`);
        const {data} = await query.json();
        return data
    }
}
export default new Api();