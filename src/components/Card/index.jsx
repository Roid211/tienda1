import Button from "../Button";

const Card = ({id, title, description, image, edad, onPress, price }) => {
  return (
  <div className="p-[12px] gap-[12px] flex  rounded-lg  rounded-lg  max-w-fit bg-[#2f2f2f]">
<div style={{
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "240px",
    height: "200px",
}}/>
  <div className="text-gray-200 py-[24px] px-[48px] w-max flex flex-col  items-start justify-between max-h-full ">
<div className=" text-3xl">
 <h1 className=" font-medium ">{title}</h1>
 </div>
 <div className="">
 <p className="text-gray-200">{description}</p>
 <div/>
 <p className="text-gray-200">{edad}</p>
 </div>
 <div>
 <p>{"$" + price}</p>
 </div>
 
</div>
  <div className=" flex max-w-fix flex items-center justify-center pr-[18npx]">
 <Button onPress={()=>{onPress(id)}}  variant="secondary">Eliminar</Button>
 
</div>
</div>
);
};

export default Card;