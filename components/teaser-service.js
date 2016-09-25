import Teaser from './teaser';

class TeaserService {
    fetchTeasersResult() {
        console.log('fetchTeasersResult() called...');
        const url = 'http://jsonplaceholder.typicode.com/posts/';
        //const url = 'http://dise.bonnier.news/articles?offset=0&size=100&orderBy=DATE&order=DESC';
        return fetch(url)
            .then((response) => {
                return response.json();
            })
            .catch((error) => {
              console.log('Error. Teaser service could not fetch!', error);
            });
    }
}

export default new TeaserService();
