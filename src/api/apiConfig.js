const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'aaa1a416b271fc536562e52b7dcc947b',
    defaultLanguage: 'vi-VN',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

// const testAPI = {
//     filmURL:''
// }

export default apiConfig;
