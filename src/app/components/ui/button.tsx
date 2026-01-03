type ButtonProps = {
  text: string;
}

export default function Button({ text } : ButtonProps) {
  return (
    <button type="button" className="bg-primary-feeble py-2.75 px-4.5 rounded-full cursor-pointer font-medium text-base">{text}</button>
  )
}
