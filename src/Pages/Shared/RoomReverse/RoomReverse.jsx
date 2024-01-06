import Button from "../Button/Button";
import Calender from "../Calender/Calender";

const RoomReverse = ({ Rooms }) => {
  return (
    <div>
      <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white">
        <div className="flex items-center gap-1 p-4">
          <div className="text-2xl font-semibold">$ {Rooms?.price}</div>
          <div className="font-light text-neutral-600">night</div>
        </div>
        <hr />
        <div className="flex justify-center">
          <Calender />
        </div>
        <hr />
        <div className="p-4">
          <Button label={"Reserve"} />
        </div>
        <hr />
        <div className="p-4 flex items-center justify-between font-semibold text-lg">
          <div>Total</div>
          <div>$ {Rooms?.price}</div>
        </div>
      </div>
    </div>
  );
};

export default RoomReverse;