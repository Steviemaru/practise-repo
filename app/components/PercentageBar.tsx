
type Props = {
  progress:number;
  fill:string 
};

export default function PercentageBar({progress,fill}: Props) {

  return (
<div className="w-40  h-4 bg-gray-200 rounded-md overflow-hidden ">
<div className={`h-full transition-all ${fill}`} style={{width: `${progress}%`}} />
</div>  
  );
}