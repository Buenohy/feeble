type ButtonProps = {
  text: string;
}

export default function ButtonDownload({ text } : ButtonProps) {
  return (
    <button type="button" className="bg-transparent border border-gray-500 py-3 px-5 rounded-full cursor-pointer font-medium text-lg text-gray-900">{text}</button>
  )
}
