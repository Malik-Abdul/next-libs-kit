"use client";
import { FC, Fragment } from "react";
import { jsxCodeSSG, jsxCodeSSR, JsxCodeISR } from "./utils";

const Main: FC = () => {
  return (
    <Fragment>
      <article>
        <h1>Rendering Concepts</h1>
        <section>
          <h2>JavaScript bundle</h2>
          <div className="paragraph">
            A JavaScript bundle is a single file (or set of files) that contains
            all the JavaScript code required for a web application to run. It
            combines multiple JavaScript files, including custom code and
            third-party libraries, into a single optimized file. This bundling
            process helps improve performance by reducing the number of requests
            made to the server and ensuring the code is optimized for faster
            loading and execution. Tools like Webpack, Rollup, and Parcel are
            commonly used to create JavaScript bundles.
          </div>
        </section>
        <section>
          <h2>Rendering</h2>
          <div className="paragraph">
            The process of generating the visual representation of a UI from
            code (e.g., HTML, CSS, and JavaScript) so it can be displayed in the
            browser.
          </div>
        </section>
        <section>
          <h2>CSR: Client-Side Rendering</h2>
          <div className="paragraph">
            Refers to a web rendering technique where the browser is responsible
            for rendering the entire page by downloading and executing
            JavaScript. The JavaScript code runs in the browser, generates the
            HTML dynamically, and renders it on the client-side
          </div>
          <div className="paragraph">
            <strong>Dynamic Interactivity: </strong> in CSR allows web apps to
            update parts of a page dynamically without reloading, creating a
            smooth and engaging user experience. JavaScript frameworks like
            React or Vue handle updates efficiently using the virtual DOM. This
            approach powers SPAs, enabling instant navigation and seamless
            transitions. Examples include social media apps where liking a post
            or loading comments happens instantly. CSR ensures a faster,
            app-like experience by minimizing server interactions.
          </div>
          <div className="paragraph">
            <strong>Advantages of CSR:</strong>
            <ul>
              <li>Highly interactive once loaded.</li>
              <li>Perfect for dynamic UIs like SPAs.</li>
              <li>
                Reduces server load by offloading rendering to the client.
              </li>
            </ul>
            <strong>Disadvantages of CSR:</strong>
            <ul>
              <li>Slower initial load due to large JavaScript.</li>
              <li>SEO issues since content is client-rendered.</li>
              <li>Requires JavaScript to be enabled for functionality.</li>
            </ul>
          </div>
        </section>
        <section>
          <h2>SSG: Static Site Generation</h2>
          <div className="paragraph">
            <strong>How it Works: </strong>The page is generated at build time.
            When you build your application, Next.js pre-renders the page and
            generates the HTML files. The HTML is then served as static files,
            which can be cached by CDNs.
          </div>
          <div className="paragraph">
            <strong>Use Cases: </strong>SSG is suitable for pages with content
            that doesn't change frequently, such as blogs, documentation, or
            product listings.
          </div>
          <div className="paragraph">
            <strong>Performance: </strong>Faster than SSR, because the pages are
            pre-generated and served as static files from a CDN or server,
            reducing the time to load.
          </div>
          <div className="paragraph">
            <strong>SEO: </strong>Also great for SEO because the full HTML is
            available at build time and can be indexed by search engines.
          </div>
          <div className="jsxCode">
            <strong className="example">Example: SSG</strong>
            <pre>
              <code>{jsxCodeSSG}</code>
            </pre>
          </div>
        </section>
        <section>
          <h2>SSR: Server-Side Rendering</h2>
          <div className="paragraph">
            <strong>How it Works:</strong> The page is generated on the server
            on each request. When a user visits the page, the server fetches the
            data, generates the HTML, and sends it to the browser.{" "}
          </div>
          <div className="paragraph">
            <strong>Use Cases: </strong>SSR is suitable for pages that need to
            display dynamic data that changes frequently or is personalized
            based on user-specific information.
          </div>
          <div className="paragraph">
            <strong>Performance: </strong>
            Slower compared to SSG, as the server has to generate the page on
            each request.
          </div>
          <div className="paragraph">
            <strong>SEO: </strong>Good for SEO because the full HTML is
            generated on the server and sent to the browser. The page is fully
            rendered when it arrives in the browser.
          </div>
          <div className="jsxCode">
            <strong className="example">Example: SSR</strong>
            <pre>
              <code>{jsxCodeSSR}</code>
            </pre>
          </div>
        </section>
        <section>
          <h2>What If you need to update the content of an SSG ?</h2>
          <div className="paragra">
            If you need to update the content of an SSG (Static Site Generation)
            page after it has been built, there are several strategies you can
            use in Next.js to handle dynamic updates without rebuilding the
            entire site every time. Here are the options:
          </div>
          <div className="paragra">
            <strong>1. Incremental Static Regeneration (ISR): </strong>
            Next.js provides Incremental Static Regeneration (ISR), which allows
            you to update static pages after the site has been built without
            rebuilding the entire site. With ISR, you can specify how often you
            want the page to be regenerated in the background. <br />
            You specify a revalidate period (in seconds) in getStaticProps. This
            tells Next.js to regenerate the page after the given interval.
          </div>
          <div className="jsxCode">
            <strong className="example">Example: ISR</strong>
            <pre>
              <code>{JsxCodeISR}</code>
            </pre>
          </div>
          <div className="paragra">
            <strong>2. Manual Rebuild/Deploy (via CI/CD): </strong>
            If the content update needs to be done manually or is not frequent,
            you can:
            <br />
            Trigger a rebuild via a Continuous Integration/Continuous Deployment
            (CI/CD) pipeline when content changes (e.g., via a webhook or GitHub
            Actions).
          </div>
          <div className="paragra">
            <strong>3. Client-Side Fetching for Updates: </strong>Another way to
            keep content up-to-date is to fetch the latest data on the client
            side when the page loads. This can be done using React hooks (like
            useEffect with fetch or axios) or React Query. This approach does
            not affect the static nature of the page, but it allows the page to
            be updated dynamically after it loads.
          </div>
        </section>
        <section>
          <h2>Client Components:</h2>
          <div className="paragra">
            Components rendered entirely on the client side. They are
            interactive and rely on JavaScript to handle state and user actions.
          </div>
        </section>
        <section>
          <h2>Hydration:</h2>
          <div className="paragra">
            The process where a server-rendered page is "enhanced" by attaching
            client-side JavaScript to make it interactive.
          </div>
        </section>
        <section>
          <h2>Server Components:</h2>
          <div className="paragra">
            React components rendered on the server, often used for static or
            non-interactive content. These can reduce the amount of JavaScript
            sent to the client.
          </div>
        </section>
      </article>
    </Fragment>
  );
};
export default Main;
