export type IFeature = {
   textData: string
}

export type IFeatureCard = {
   subTitle: string
   title: string
   description: string
   thumb: {
      data: {
         id: 1
         attributes: {
            alternativeText: string | null
            url: string
         }
      }
   }
   features: IFeature[]
}
