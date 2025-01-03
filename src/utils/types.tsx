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
    data: { id: number }[],
    pagination: {
        current_page: number,
        total_pages: number,
    }

}

export interface UseArtWorksApiAxiosProps {
    searchValue: string,
    selectedPage: number,
}

export interface OtherGalleryProps { otherArtWorks: any[] }



export interface UseArtWorkApiAxiosProps {
    id: number
}