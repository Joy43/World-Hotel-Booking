import { useEffect, useState } from "react";
import Roomcard from "./Roomcard";
import { useSearchParams } from "react-router-dom";
import Heading from "../../../Shared/Heading/Heading";
import Loading from "../../../Shared/Loder/Loading";

const Rooms = () => {
  const [Rooms, setRooms] = useState([]);
  const [params, useParams] = useSearchParams();
  const [loading, setloading] = useState(false);
  const category = params.get("category");

  useEffect(() => {
    setloading(true);
    fetch("./rooms.json")
      .then((res) => res.json())
      .then((data) => {
        if (category) {
          const filtered = data.filter((room) => room.category === category);
          setRooms(filtered);
        } else {
          setRooms(data);
        }
        setloading(false);
      });
  }, [category]);
  if (loading) return <Loading />;
  return (
    <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {Rooms && Rooms.length > 0 ? (
        Rooms.map((room) => <Roomcard key={room._id} room={room}></Roomcard>)
      ) : (
        <Heading
          className="text-center"
          center={true}
          title="Not Available in this category"
          subtitle="Select other category"
        ></Heading>
      )}
    </div>
  );
};

export default Rooms;
