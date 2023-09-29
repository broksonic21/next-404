import { GetStaticProps } from "next/types";

export default function NotFoundPage({foo: bar}) {
    return bar;
  };
  

  const getStaticProps: GetStaticProps = async ({ preview = false }) => {
    const pageData = {foo: "text should show"};
    return {
      props: { ...pageData, preview },
    };
  };

  export { getStaticProps };
