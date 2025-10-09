import React from 'react'
import "./ui.css";

const DangerousHtml = ({ html }: { html: string }) => {
  return (
    <div className="rich-text" dangerouslySetInnerHTML={{ __html: html }} />
  )
}

export default DangerousHtml