import React, { Fragment } from "react"
import type { Metadata } from "next"
import { find } from "@/lib/strapi"
import { StrapiSeoFormate } from "@/lib/strapiSeo"
import { getLanguageFromCookie } from "@/utils/language"
import { getPublicComponents } from "@/components"

export default async function Home() {
   const language = getLanguageFromCookie()

   //* fetch the home page api with different block data
   const { data, error } = await find(
      "api/home-page",
      {
         populate: {
            blocks: {
               populate: "*"
            }
         },
         publicationState: "live",
         locale: language ? [language] : ["en"]
      },
      "no-store"
   )

   const blocks = data?.data?.attributes?.blocks || []

   return (
      <Fragment>
         {/* render home page block section  */}
         {blocks?.map((block: { __component: keyof typeof getPublicComponents }, index: number) => {
            const BlockConfig = getPublicComponents[block.__component]

            if (BlockConfig) {
               const { component: ComponentToRender } = BlockConfig
               //@ts-ignore
               return <ComponentToRender key={index} language={language} block={block} />
            }
            return null
         })}
      </Fragment>
   )
}

// * generate metadata for the page seo data at server side call
export async function generateMetadata(): Promise<Metadata> {
   const language = getLanguageFromCookie()
   //* fetch seo data
   const product = await find(
      "api/home-page",
      {
         populate: {
            seo: {
               populate: "*"
            }
         },
         publicationState: "live",
         locale: language ? [language] : ["en"]
      },
      "force-cache"
   )

   return StrapiSeoFormate(product?.data?.data?.attributes?.seo)
}
