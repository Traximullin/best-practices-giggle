import { FC } from "react"
import Thumbnail from "./Thumbnail"

export type Video = {
    title: string
    duration: number
    coverUrl: string
}

type LiveStream = {
    name: string
    previewUrl: string
}

type Props = {
    items: Array<Video | LiveStream>
}

const VideoList:FC<Props> = ({items}) => {
    return (
        <ul>
            {
                items.map(item => {
                    if("coverUrl" in item) {
                        return <Thumbnail
                        key={item.title}
                        video={item}
                        /> 
                    } else {
                        
                    }
                })
            }
        </ul>
    )
}



export default VideoList
