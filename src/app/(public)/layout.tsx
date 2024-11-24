import React from "react"
import LayoutBody from "./body"
import { getLanguageFromCookie } from "@/utils/language"

export default async function PublicLayout(props: { children: React.ReactNode }) {
   // fetch the language from cookies or session
   const language = getLanguageFromCookie()

   return <LayoutBody {...props} />
}
