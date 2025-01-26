




interface sortDataByTypeProps {
    data: {
        id: number;
        title: string;
        imageUrl: string;
        artist_display: string;
        is_public_domain: boolean;
        artist_title: string;
        date_end: number;
    }[],
    type: 'asc' | 'desc' | 'oldToNew' | 'newToOld'
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

        case 'oldToNew': {
            const sortedData = [...data].sort((a, b) => {
                return new Date(a.date_end).getTime() - new Date(b.date_end).getTime()
            })
            return sortedData
        }
        case 'newToOld': {
            const sortedData = [...data].sort((a, b) => {
                return new Date(b.date_end).getTime() - new Date(a.date_end).getTime()
            })
            return sortedData

        }





        default: {
            return data
        }




    }



}