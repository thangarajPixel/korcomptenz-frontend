
const PdfViewSection = ({ blobUrl }: { blobUrl: string }) => {
  return (
    <iframe
      src={blobUrl}
      className="w-full h-screen"
    />
  )
}

export default PdfViewSection