const VideoTitle = ({title, overview}) => {
    return (
        <div className="w-screen aspect-video absolute pt-[32%] md:pt-[24%] px-6 text-white bg-gradient-to-r from-black">
            <h1 className="text-md md:text-3xl font-bold">{title}</h1>
            <p className="hidden md:inline-block py-4 w-1/4 text-sm">{overview}</p>
            <div className="">
                <button className="bg-white text-black p-1 w-16 md:p-2 md:w-28 bg-opacity-85 rounded-sm hover:opacity-75">▶ Play</button>
                <button className="hidden md:inline-block bg-gray-400 text-black mx-2 p-2 w-28 bg-opacity-50 rounded-sm hover:opacity-80">ì More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle;