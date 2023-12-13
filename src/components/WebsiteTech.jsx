
const WebsiteTech = ({icon, name}) => {
    return (
        <div className="flex gap-2 items-center border rounded-full py-1 font-semibold text-md px-2 bg-white text-[#1A1429]">
            <img className="h-6" src={icon} alt="" />
            <p>{name}</p>
        </div>
    );
};

export default WebsiteTech;