export default function fetchImages(searchRequest, page) {
    const KEY = '21938296-6f6e29c510a17a0a43204ed70';
    const BASE_URL = 'https://pixabay.com/api/';
    const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${searchRequest}&page=${page}&per_page=12&key=${KEY}`;

    return fetch(url).then(response => {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(new Error(` ${searchRequest} was not found`));
    });
}



