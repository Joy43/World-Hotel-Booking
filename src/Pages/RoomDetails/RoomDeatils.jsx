import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loder/Loading";
import { Helmet } from "react-helmet-async";
// import Date from "../Shared/Date/Date";
import RoomReverse from "../Shared/RoomReverse/RoomReverse";

const RoomDeatils = () => {
  const { id } = useParams();
  const [Rooms, setRooms] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    fetch("/rooms.json")
      .then((res) => res.json())
      .then((data) => {
        const singleRoom = data.find((room) => room._id === id);
        setRooms(singleRoom);
        setloading(false);
      });
  }, [id]);
  if (loading) return <Loading />;
  return (
    <div className="pt-12 mb-8 ">
      <Helmet>
        <title>{Rooms?.title}</title>
      </Helmet>

      <div className="flex flex-col w-full bg-white rounded shadow-lg sm:w-3/4 md:w-1/2 lg:w-3/5">
        {/* -----------image--------------- */}
        <div>
          <img
            src={Rooms.image}
            className="w-full  bg-top bg-cover rounded-t "
            alt=""
          />
        </div>

        <div className="flex flex-col w-full md:flex-row">
          {/* -------------- date------ */}

          <div>
            <RoomReverse></RoomReverse>
          </div>
          {/* -----------------card-------------- */}
          <div className="p-4 font-normal text-gray-800 md:w-3/4">
            {/*----------  avater --------------- */}
            <div className="inline-flex gap-3">
              <div>Hosted by {Rooms?.host?.name}</div>

              <img
                className="rounded-full"
                height="30"
                width="30"
                alt="Avatar"
                src={Rooms?.host?.image}
              />
            </div>
            <div
              className="
                flex 
                flex-row 
                items-center 
                gap-4 
                font-light
                text-neutral-500
              "
            >
              <div>{Rooms?.guests} guests</div>
              <div>{Rooms?.bedrooms} rooms</div>
              <div>{Rooms?.bathrooms} bathrooms</div>
            </div>
            <hr />
            {/* ----------- */}

            <p className="leading-normal">{Rooms.description}</p>
            <div className="flex flex-row items-center mt-4 text-gray-700">
              <div className="w-1/2 flex justify-end">
                <img src="" alt="" className="w-8" />
              </div>
            </div>
          </div>
          {/* ------------------- */}
        </div>
      </div>
    </div>
  );
};

export default RoomDeatils;
