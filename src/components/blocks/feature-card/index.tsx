"use client"

import Image from "next/image"
import { Box, Container, Grid, Stack, Typography, useTheme } from "@mui/material"
import styled from "@emotion/styled"
import { IFeature, IFeatureCard } from "./types"
import { blockData } from "./data"

type Props = {
   block: IFeatureCard
   data: any
   language?: string
}

const NextImage = styled(Image)({
   borderRadius: 8,
   overflow: "hidden",
   objectFit: "cover",
   objectPosition: "center",
   width: "100%",
   height: "100%"
})

export const FeatureCard = ({ block }: Props) => {
   const theme = useTheme()

   // destructure the block
   const {
      subTitle = blockData?.subTitle,
      title = blockData?.title,
      description = blockData?.description,
      features,
      thumb
   } = block || {}

   const image = thumb?.data?.attributes?.url || "https://via.placeholder.com/540x400"
   const imageAlt = thumb?.data?.attributes?.alternativeText || "featured Image"

   return (
      <Stack>
         <Box
            id='featured-section'
            sx={{
               width: "100%",
               bgcolor: theme.palette.background.paper,
               padding: { xs: "50px 0", md: "50px 0" }
            }}>
            <Container maxWidth='lg'>
               <Box
                  sx={{
                     display: "flex",
                     justifyContent: "center"
                  }}>
                  <Stack py={8} spacing={5} sx={{ maxWidth: "1100px", justifyContent: "center", alignItems: "center" }}>
                     <Stack spacing={1}>
                        <Typography
                           sx={{
                              color: theme.palette.primary.main,
                              fontSize: "16px",
                              fontWeight: "500",
                              textAlign: "center",
                              textTransform: "uppercase"
                           }}>
                           {subTitle}
                        </Typography>
                        <Typography
                           color={theme.palette.text.primary}
                           fontWeight={700}
                           fontSize={32}
                           textAlign={"center"}>
                           {title}
                        </Typography>
                        <Typography
                           sx={{
                              pt: 1,
                              color: theme.palette.text.secondary,
                              fontSize: "18px",
                              fontWeight: "500",
                              textAlign: "center"
                           }}>
                           {description}
                        </Typography>
                     </Stack>
                  </Stack>
               </Box>

               <Grid container spacing={2} alignItems='center'>
                  {/* Left Side Image Part */}
                  <Grid
                     item
                     xs={12}
                     md={7}
                     sx={{
                        display: "flex",
                        justifyContent: "center"
                     }}>
                     <Box
                        sx={{
                           position: "relative",
                           minHeight: {
                              xs: 300,
                              sm: 500
                           },
                           width: "100%",
                           height: "100%"
                        }}>
                        <NextImage src={image} alt={imageAlt} fill />
                     </Box>
                  </Grid>

                  {/*  Right Side Text Part */}
                  <Grid
                     item
                     xs={12}
                     md={5}
                     sx={{
                        display: "flex",
                        mt: { xs: 4, md: 0 },
                        justifyContent: { xs: "center", md: "right" }
                     }}>
                     {features && features?.length > 0 && (
                        <Box
                           sx={{
                              width: "100%",
                              height: "100%",
                              maxWidth: 458,
                              pl: 3,
                              display: "flex",
                              flexDirection: "column",
                              gap: 3
                           }}>
                           {features?.map((item: IFeature, index: number) => (
                              <Box
                                 key={index}
                                 sx={{
                                    py: 1.5,
                                    px: 2,
                                    backgroundColor: theme.palette.background.default,
                                    "&:hover": {
                                       backgroundColor: theme.palette.primary.main,
                                       "& span": {
                                          color: theme.palette.primary.contrastText + " !important"
                                       },
                                       "& h6": {
                                          color: theme.palette.primary.contrastText + " !important"
                                       }
                                    },
                                    borderRadius: "50px 0 0 50px",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    cursor: "pointer",
                                    transitionDuration: "0.3s"
                                 }}>
                                 <Typography
                                    variant='caption'
                                    sx={{
                                       color: theme.palette.text.primary,
                                       fontSize: "20px",
                                       fontWeight: "500"
                                    }}>
                                    {"<"}
                                 </Typography>
                                 <Typography
                                    variant='subtitle1'
                                    sx={{
                                       color: theme.palette.text.primary,
                                       fontSize: "18px",
                                       fontWeight: "500"
                                    }}>
                                    {item?.textData}
                                 </Typography>
                              </Box>
                           ))}
                        </Box>
                     )}
                  </Grid>
               </Grid>
            </Container>
         </Box>
      </Stack>
   )
}
