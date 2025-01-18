




interface sortDataByTypeProps {
    data: {
        id: number;
        title: string;
        imageUrl: string;
        artist_display: string;
        is_public_domain: boolean;
        artist_title: string;
    }[],
    type: 'asc' | 'desc' | ''
}

export const sortDataByType = ({ data, type }: sortDataByTypeProps) => {


    switch (type) {

        case 'asc': {
            const sortedData = [...data].sort((a, b) => {
                return a.title.localeCompare(b.title)
            })
            return sortedData
        }

        case 'desc': {
            const sortedData = [...data].sort((a, b) => {
                return b.title.localeCompare(a.title)
            })
            return sortedData
        }

        default: {
            return data
        }




    }



}