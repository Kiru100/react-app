

interface LikeProps {
    onClick: () => void;
}


export default function Like({onClick}: LikeProps) {
  return (
    <div onClick={onClick}>
        Like


    </div>
  )
}
