export function urlFormat(url, ...keywords) {
    return url.concat(keywords.join('/'), '/')
}