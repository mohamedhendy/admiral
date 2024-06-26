

export default async (path: string, options: any = {}) => {
    options.headers = {
        ...options.headers,
        "Access-Control-Allow-Origin": "*",
    }
    return await fetch(path, options)
}
