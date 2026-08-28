
const PdfViewSection = ({ blobUrl }: { blobUrl: string }) => {
  return (
    <iframe
      src={blobUrl}
      title="PDF document viewer"
      className="w-full h-screen"
    />
  )
}

export default PdfViewSection