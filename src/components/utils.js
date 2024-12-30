const jsxCodeSSR = `
export async function getServerSideProps(context) {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
`;
const jsxCodeSSG = `
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
`;

const JsxCodeISR = `
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  return {
    props: {
      data,
    },
    revalidate: 60, // Regenerate the page every 60 seconds
  };
}
`;
export { jsxCodeSSG, jsxCodeSSR, JsxCodeISR };
