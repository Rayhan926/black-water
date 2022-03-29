import { useEffect, useRef } from "react"
import { useState } from "react"
import { BsFillPlayFill } from "react-icons/bs"

function VideoPlayer() {
    const [isShowControls, setIsShowControls] = useState(false)
    const videoRef = useRef(null)

    const playVideoHandler = () => {
        videoRef.current.play()
        setIsShowControls(true)
    }

    useEffect(() => {
        const showOverly = () => {
            setIsShowControls(false)
        }
        videoRef.current.addEventListener('pause', showOverly)

        return () => {
            videoRef?.current?.removeEventListener('pause', showOverly)
        }
    }, [videoRef])

    return (
        <div className="relative overflow-hidden">
            {/* Overly --Start-- */}
            {!isShowControls && <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-[105%] h-[105%] z-[5] flex items-center justify-center bg-black/80">
                <div className="w-[108px] h-[108px] rounded-full bg-[#242228] flex items-center justify-center cursor-pointer hover:bg-purple duration-150 text-white hover:scale-110" onClick={playVideoHandler}>
                    <BsFillPlayFill color="#000" size={55} />
                </div>
            </div>}
            {/* Overly --End-- */}
            <video src="/bitcoin_video.mp4" controls={isShowControls} ref={videoRef}></video>
        </div>
    )
}

export default VideoPlayer
