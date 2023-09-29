import NextLink from "next/link";
import type {
  GetStaticProps,
  GetStaticPaths,
} from 'next'

interface PageProps  {
  meta: {
    title: string,
    body: string
  }
}

export const getStaticPaths = (async () => {
  return {
    paths: [
      {
        params: {
          name: 'page1',
        },
      }, 
      {
        params: {
          name: 'page2',
        },
      }, 
    ],
    fallback: false
  }
}) satisfies GetStaticPaths

export const getStaticProps = (async (context) => {
  return { props: {meta: {title: "pageTitleExample", body: "pageBodyExample"} } };
}) satisfies GetStaticProps

export default function Page({
      meta: {
        title: title,
        body: body
      }
      }: PageProps) {
  return   <span>
              <h1>{title}</h1>
              <p>{body}</p>
              <NextLink href='/missing-page'>
                <span>Link to missing page</span>
              </NextLink>
            </span>
}
