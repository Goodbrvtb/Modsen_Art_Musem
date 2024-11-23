export interface ArtWorkType {
    data: {
        image_id: string,
        id: number,
        title: string,
        artist_display: string,

    }

}

export interface SearchArtWorkType {
    data: { id: number }[]

}

export interface useArtWorksApiAxiosProps {
    searchValue: string
}

export interface OtherGalleryProps { otherArtWorks: any[] }

export interface SpecialGalleryProps { artWorks: any[] }