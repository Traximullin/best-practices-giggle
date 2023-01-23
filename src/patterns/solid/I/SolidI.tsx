import { FC } from "react"
import Thumbnail from "./Thumbnail"

export type Video = {
    title: string
    duration: number
    coverUrl: string
}

type Props = {
    items: Array<Video>
}

const VideoList:FC<Props> = ({items}) => {
    return (
        <ul>
            {
                items.map(item => 
                    <Thumbnail
                        key={item.title}
                        video={item}
                    /> 
                )
            }
        </ul>
    )
}



export default VideoList
