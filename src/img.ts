export interface Img {
    id: string
    title: string
    url: string
    images: {
        downsized_medium: {
            height: string
            width: string
            size: string
            url: string
        }
    }
}