"use client";
import Link from "next/link";
import { Fragment } from "react";
import Polling from "./Polling";
import LongPolling from "./LongPolling";
import { jsxCodeEx1, jsxCodeEx2, jsxCodeEx3 } from "./utils";

const ReactQuery = () => {
  return (
    <Fragment>
      <div>
        <h1>React Query</h1>
        <h2>What is polling?&quot; or &quot;How does polling work?</h2>

        <div>
          Polling is a technique used in software development to repeatedly
          check for updates or new data at regular intervals. It involves a
          client (such as a web browser or application) making periodic requests
          to a server or service to retrieve the latest information. This is
          commonly used when real-time updates are required but a more complex
          system (like WebSockets or push notifications) is not in use.
        </div>
        <h3>How Polling Works</h3>
        <div>
          <ul>
            <li>
              Initial Request: The client sends a request to the server (usually
              an API endpoint) to fetch data.
            </li>
            <li>
              Wait for a Response: The server processes the request and sends
              the data back to the client. This could be any type of data, such
              as a JSON object or status updates.
            </li>
            <li>
              Set an Interval: After receiving the data, the client sets a timer
              (e.g., using setInterval in JavaScript) to repeatedly send
              requests at specific intervals (e.g., every 5 seconds).
            </li>
            <li>
              Repeat: The client continues sending requests at the interval,
              fetching new data from the server, and updating the UI or
              processing the data.
            </li>
            <li>
              Stop Polling: Polling continues until the client explicitly stops
              it (e.g., when the user navigates away from a page or a condition
              is met).
            </li>
          </ul>
        </div>
        <h3>Example Use Cases for Polling</h3>
        <div>
          <ul>
            <li>
              Live Feeds: Updating content such as news, stock prices, or social
              media feeds.
            </li>
            <li>
              Monitoring: Tracking the status of long-running processes or
              tasks, like file uploads, database operations, etc.
            </li>
            <li>
              Chat Applications: Periodically checking for new messages in a
              chat system.
            </li>
          </ul>
        </div>
        <Polling />
        <div className="jsxCode">
          <strong className="example">Example: 1</strong>
          <pre>
            <code>{jsxCodeEx1}</code>
          </pre>
        </div>
      </div>

      <div>
        <h2>what is long polling and How Long Polling Works?</h2>
        <div>
          Long polling is a variation of the traditional polling technique used
          to enable near-real-time communication between a client (such as a
          browser) and a server. Unlike regular polling, where the client sends
          requests at fixed intervals regardless of whether new data is
          available, long polling reduces the frequency of requests and network
          overhead by waiting for the server to send a response when new data
          becomes available.
        </div>
        <h3>How Long Polling Works</h3>
        <div>
          <ul>
            <li>
              Client Sends a Request: The client makes an HTTP request to the
              server, expecting new data.
            </li>
            <li>
              Server Holds the Request: If no new data is available, the server
              holds the request open instead of responding immediately.
            </li>
            <li>
              Server Responds When Data is Ready: Once new data is available,
              the server sends a response to the client.
            </li>
            <li>
              Client Processes the Response: The client processes the data
              received from the server.
            </li>
            <li>
              Repeat: After receiving the response, the client immediately sends
              another request to the server to wait for more updates.
            </li>
          </ul>
        </div>
        <div className="jsxCode">
          <strong className="example">Example: Long Polling</strong>
          <pre>
            <code>{jsxCodeEx3}</code>
          </pre>
        </div>
        <div className="jsxCode">
          <strong className="example">API end point</strong>
          <pre>
            <code>{jsxCodeEx2}</code>
          </pre>
        </div>
        <LongPolling />
      </div>

      <hr />
      <Link
        href="https://www.youtube.com/watch?v=VtWkSCZX0Ec&list=PLC3y8-rFHvwjTELCrPrcZlo6blLBUspd2"
        target="blank"
      >
        Tutorial
      </Link>
      <h1>React Query</h1>
      <div>
        <strong>Waht is React Query</strong>A Library for Fetching Data in a
        react Application
      </div>
      <div>
        As we used the useEffect hook for data Fetching and useState hook to
        maintain component state like loading, error or resulting data. If data
        is needed throughout the app, we tend to use state management library
      </div>
      <div>
        Most of the state management libraries are good for working with client
        state like theme of application or modal is open or not.
      </div>
      <div>
        State management libraries are not good for{" "}
        <i>asynchronous or server state</i>{" "}
        <strong>because server state is very different to client state</strong>
      </div>
      <h2>Client State Vs Server State</h2>
      <div>
        <strong>Client State: </strong>Persisted in your app memory and
        accessing or updating it is syncronous
        <div>
          <strong>Server State: </strong>Persisted remotely and require
          asyncronous APIs for fetching or updating.
          <div>
            Also Server state unlike client state has shared ownership. Data cna
            be updated by someone else without your knowledge which quiclky lead
            to UI data may not be in sync with the remote data. It can be more
            challenging when you have to deal with caching, deduping multiple
            requests for the same data, Updating stale data in the background,
            performance optimisation where comes to pagination and lazy loading
            etc. Addressing all these scenarios in your application can require
            a substantial amount of time and effort if you attempt to handle
            everything on your own. Alternatively, you can take a smarter
            approach by using a library that simplifies managing these
            situations effectively.And the library is{" "}
            <strong>React-Query.</strong>
          </div>
        </div>
      </div>
      <div>
        <h2>Will discuss</h2>
        <ul>
          <li>Basic Queries</li>
          <li>Poll data</li>
          <li>React Query dev tools</li>
          <li>Create reusable query hooks for data fetching</li>
          <li>Query By ID</li>
          <li>Parallel Queries</li>
          <li>Dynamic Queries</li>
          <li>Dependendent Queries</li>
          <li>Infinite and paginated queries</li>
          <li>
            Server state is not just fetching it also need updating
            <ul>
              <li>Update data using Mutations</li>
              <li>Invalidate queries when mutation is successfull</li>
              <li>Optimistic upda</li>
            </ul>
          </li>
          <li>Axios Interceptor</li>
        </ul>
      </div>
    </Fragment>
  );
};

export default ReactQuery;
