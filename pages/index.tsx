import NextLink from "next/link";
import styled from "styled-components";

export default function Home() {
  return   <span>
            <h1>Hello, Home page!</h1>
            <NextLink href='/foo'>
              <span>Link to 404 page</span>
            </NextLink>
            </span>
}
