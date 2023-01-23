import { FC } from 'react';
import { Video } from "./SolidI"

type Props = {
    video: Video
}

const Thumbnail: FC<Props> = ({video}) => (
    <img
        src={video.coverUrl}
        alt="video"
    />
)

export default Thumbnail
