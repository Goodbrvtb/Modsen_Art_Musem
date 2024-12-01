export interface ArtWorkType {
    data: {
        image_id: string,
        id: number,
        title: string,
        artist_display: string,
        is_public_domain: boolean,

    }

}

export interface SearchArtWorkType {
    data: { id: number }[]

}

export interface UseArtWorksApiAxiosProps {
    searchValue: string
}

export interface OtherGalleryProps { otherArtWorks: any[] }

export interface SpecialGalleryProps { artWorks: any[] }

export interface UseArtWorkApiAxiosProps {
    id: number
}