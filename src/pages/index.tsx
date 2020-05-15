import * as React from "react"
import { Grid, Box, Heading, Text, Link } from "theme-ui"
import { IoLogoGithub, IoLogoTwitter } from "react-icons/io"
import Image from "../components/Image"
import { profileImage } from "../constants/images"
import { githubProfileUrl, twitterProfileUrl } from "../constants/sns"
import SeoMeta from "../components/SeoMeta"

export default function IndexPage() {
  return (
    <main>
      <SeoMeta
        title="kanjiyomoda.com"
        description="k-yomoの技術ブログです。GoやGCPなどを中心に雑多に書いていこうと思います。"
        image={profileImage.src}
      />
      <Grid gap={2} columns={[1, 2, "1fr 3fr"]}>
        <Box px={2} sx={{ textAlign: ["center"] }}>
          <Image img={profileImage} alt="プロフィールアイコン" style={{ width: 150 }} />
          <div>
            <Link href={githubProfileUrl}>
              <IoLogoGithub size={25} style={{ margin: "5px 3px" }} />
            </Link>
            <Link href={twitterProfileUrl}>
              <IoLogoTwitter size={25} style={{ margin: "5px 3px" }} />
            </Link>
          </div>
        </Box>
        <Box px={2} sx={{ textAlign: ["center", "left"] }}>
          <Heading>Kanji Yomoda</Heading>
          <Text mt={2}>Software Engineer at M3, Inc.</Text>
        </Box>
      </Grid>
      <style jsx>{`
        main {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
      `}</style>
    </main>
  )
}
