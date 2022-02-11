import sanityClient from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

export const client = sanityClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-02-10',
    useCdn: true,
    token:"skx03zeY5MsjGCgTZbalPiFUF1nGMeORKlfUU6USZuo2xM3ZfH2zWJIitRhr0ACJpM0tk1m5Qt1UMr9ZITenTmQgUCkUPM0GBDxE09BpPaJWuaEA8sO081LCmL7jQbW8vQweEkH4II05RG1qjl02vQq6W3mcg5SZtPAX3ihzxb8YiQ4QZEaw"
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)