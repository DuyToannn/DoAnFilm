const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'aaa1a416b271fc536562e52b7dcc947b',
    filmUrl:'https://www.2embed.to/embed/tmdb/movie?id=',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;
