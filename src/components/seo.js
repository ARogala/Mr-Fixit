import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import icon from "../images/toolbox-repairing-icon-blue.png"

export const Seo = ({ title, description, pathname, children }) => {
  const { title: defaultTitle, description: defaultDescription, siteUrl } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="icon" href={icon} />
      {children}
    </>
  )
}