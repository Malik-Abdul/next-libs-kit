"use client";
import Link from "next/link";
import { Fragment } from "react";
import {
  jsxCodeEx1,
  jsxCodeEx2,
  jsxCodeEx3,
  UseQueryHookJSX,
  cacheTime,
  staleTime,
  refetchInterval,
  refetchIntervalInBackground,
  enabled,
  refetchFunction,
  refetchFunctionOnClick,
  attachCallBack,
} from "./utils";

const RQTheory = () => {
  return (
    <Fragment>
      <article>
        <h1>Understanding the React Query</h1>
        <section>
          <h2>Prerequisites</h2>
          <div>
            <h3>What is polling?&quot; or &quot;How does polling work?</h3>
            <div>
              Polling is a technique used in software development to repeatedly
              check for updates or new data at regular intervals. It involves a
              client (such as a web browser or application) making periodic
              requests to a server or service to retrieve the latest
              information. This is commonly used when real-time updates are
              required but a more complex system (like WebSockets or push
              notifications) is not in use.
            </div>
            <h3>How Polling Works</h3>

            <div>
              <ul>
                <li>
                  Initial Request: The client sends a request to the server
                  (usually an API endpoint) to fetch data.
                </li>
                <li>
                  Wait for a Response: The server processes the request and
                  sends the data back to the client. This could be any type of
                  data, such as a JSON object or status updates.
                </li>
                <li>
                  Set an Interval: After receiving the data, the client sets a
                  timer (e.g., using setInterval in JavaScript) to repeatedly
                  send requests at specific intervals (e.g., every 5 seconds).
                </li>
                <li>
                  Repeat: The client continues sending requests at the interval,
                  fetching new data from the server, and updating the UI or
                  processing the data.
                </li>
                <li>
                  Stop Polling: Polling continues until the client explicitly
                  stops it (e.g., when the user navigates away from a page or a
                  condition is met).
                </li>
              </ul>
            </div>
            <h3>Example Use Cases for Polling</h3>

            <div>
              <ul>
                <li>
                  Live Feeds: Updating content such as news, stock prices, or
                  social media feeds.
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
            {/* <div className="page-break"></div> */}
            <div className="jsxCode">
              <strong className="example">Example: 1</strong>
              <pre>
                <code>{jsxCodeEx1}</code>
              </pre>
            </div>

            <div>
              <h3>What is long polling and How Long Polling Works?</h3>
              <div>
                Long polling is a variation of the traditional polling technique
                used to enable near-real-time communication between a client
                (such as a browser) and a server. Unlike regular polling, where
                the client sends requests at fixed intervals regardless of
                whether new data is available, long polling reduces the
                frequency of requests and network overhead by waiting for the
                server to send a response when new data becomes available.
              </div>
              <h3>How Long Polling Works</h3>
              <div>
                <ul>
                  <li>
                    Client Sends a Request: The client makes an HTTP request to
                    the server, expecting new data.
                  </li>
                  <li>
                    Server Holds the Request: If no new data is available, the
                    server holds the request open instead of responding
                    immediately.
                  </li>
                  <li>
                    Server Responds When Data is Ready: Once new data is
                    available, the server sends a response to the client.
                  </li>
                  <li>
                    Client Processes the Response: The client processes the data
                    received from the server.
                  </li>
                  <li>
                    Repeat: After receiving the response, the client immediately
                    sends another request to the server to wait for more
                    updates.
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
            </div>
          </div>
        </section>
        <section>
          <h2>React Query Start</h2>
          <div>
            <Link
              href="https://www.youtube.com/watch?v=VtWkSCZX0Ec&list=PLC3y8-rFHvwjTELCrPrcZlo6blLBUspd2"
              target="blank"
            >
              Tutorial
            </Link>

            <div>
              <strong>Waht is React Query? </strong>A Library for Fetching Data
              in a react Application
            </div>

            <div>
              As we used the useEffect hook for data Fetching and useState hook
              to maintain component state like loading, error or resulting data.
              If data is needed throughout the app, we tend to use state
              management library
            </div>
            <div>
              Most of the state management libraries are good for working with
              client state like theme of application or modal is open or not.
            </div>
            <div>
              State management libraries are not good for{" "}
              <i>asynchronous or server state</i>{" "}
              <strong>
                because server state is very different to client state
              </strong>
            </div>
            <h3>Client State Vs Server State</h3>
            <div>
              <strong>Client State: </strong>Persisted in your app memory and
              accessing or updating it is syncronous
              <div>
                <strong>Server State: </strong>Persisted remotely and require
                asyncronous APIs for fetching or updating.
                <div className="paragraph">
                  Also Server state unlike client state has shared ownership.
                  Data cna be updated by someone else without your knowledge
                  which quiclky lead to UI data may not be in sync with the
                  remote data. It can be more challenging when you have to deal
                  with caching, deduping multiple requests for the same data,
                  Updating stale data in the background, performance
                  optimisation where comes to pagination and lazy loading etc.
                  Addressing all these scenarios in your application can require
                  a substantial amount of time and effort if you attempt to
                  handle everything on your own. Alternatively, you can take a
                  smarter approach by using a library that simplifies managing
                  these situations effectively.And the library is{" "}
                  <strong>React-Query.</strong>
                </div>
              </div>
            </div>
            <div>
              <h3>Will discuss</h3>
              <ul>
                <li>Basics of React Query</li>
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
            <div>
              <h3>1. Basics of React Query</h3>
              <div>
                <strong>Instalation</strong>{" "}
                <Link
                  target="balank"
                  href="https://tanstack.com/query/v3/docs/framework/react/installation"
                >
                  https://tanstack.com/query/v3/docs/framework/react/installation
                </Link>
              </div>
              <div>
                <strong>Devtools</strong>{" "}
                <Link
                  target="balank"
                  href="https://tanstack.com/query/v3/docs/framework/react/devtools"
                >
                  https://tanstack.com/query/v3/docs/framework/react/devtools
                </Link>
              </div>
              <div>
                <strong>useQuery hook</strong>{" "}
                <Link
                  target="balank"
                  href="https://tanstack.com/query/v3/docs/framework/react/reference/useQuery"
                >
                  https://tanstack.com/query/v3/docs/framework/react/reference/useQuery
                </Link>
              </div>
              <h4>1.1. Use Query Hook</h4>
              <div className="paragraph">
                Is a hook that used for all data fetching needs. This hook
                requires atleast 2 arguments.The first argument is unique key to
                identify this query, simmilar to how you have a unique row in
                database. The second parameter, useQuery accepts a function that
                returns a promice. In our example this functions makes a get
                request to the server.
              </div>
              <div className="jsxCode">
                <strong className="example">
                  Use of useQuery, isLoading, data, isError, error
                </strong>
                <pre>
                  <code>{UseQueryHookJSX}</code>
                </pre>
              </div>
              <h4>1.2. Query Cache</h4>
              <div>
                <strong>How useQuery works with respecting Cacheing?</strong>
              </div>
              <div className="paragraph">
                The first time useQuery is fired for a specific key, the flag
                isLoading is set to true, and a network request is sent to fetch
                the data. When the request is completed, it is cached using the
                query key and fetch function as the unique identifiers. Now when
                we navigate to the other page and revisit the useQuery page, the
                React Query checks if the data for this query exists in the
                cache. If it does, the cached data is immediately returned
                without isLoading set to true. That is the reason we do not see
                the loading text for subsequent requests. However, the React
                Query knows that the server data might have updated, and the
                cache might not contain the latest data. So a background refetch
                is triggered for the same query, and if the fetch is successful,
                then the new data is updated in the UI. Since the new data is
                the same as the cached data, we do not see any change in the UI.
                <div className="paragraph">
                  <strong>
                    If isLoading is not change, does useQuery provides another
                    boolean flag to indicate the background refetching of the
                    query?
                  </strong>
                </div>
                <div>The answer is Yes and the falg is called isFetching.</div>
                <div className="paragraph">
                  If log isLoading and isFetching flags, both will help us
                  better track the network activity. If hard reload the browser,
                  initially both flags will be true. When the data fetching is
                  complete both will set to false.
                </div>
                <div className="paragraph">
                  If data at the background does changed, for example navigate
                  to another page and update the db.json file, now navigate back
                  to useQuery page. You will observe that the UI contain old
                  data and will update after sometime, especially wehn
                  throtlling to 3g network. Also in console the isLoading
                  remains false but isFetching will changes from true to false.
                  So in this way react query out of the box is to better user
                  experience and will not show everytime loading indicator.
                </div>
                <div>
                  <strong>
                    The next question is about the cache time, how we can
                    configure it?
                  </strong>
                </div>
                <div className="paragraph">
                  The react query sets a default value of 5 minutes for query
                  cahce. If you want to change that, pass as a third argument in
                  useQuery. The third argument is an object where you cna set
                  multiple properties. The cacheTime is one of them, let set it
                  to 5 seconds as 5000 miliseconds.
                </div>
                <div>
                  For the observation just navigate the tab and wait for 5
                  seconds then againg navigate to query page and you will see
                  the loading text and the data will load.
                </div>
                <div className="jsxCode">
                  <strong className="example">cacheTime</strong>
                  <pre>
                    <code>{cacheTime}</code>
                  </pre>
                </div>
              </div>
              <h4>1.3. Stale Time</h4>
              <div>
                Another use of query cache is to reduce number of network
                requests for data that does not necessorly change to often.{" "}
                <br />
                For example our list of users does not change often and it is
                okay if the use cease stale data for a while. In such cases we
                can use cache query results without having to refetch in the
                background. To achieve that behaviour we configure another
                property called staleTime.
              </div>
              <div>
                Let Observe: When we navigate the other page and come back to
                Query page, we can see that a network request triggered to fetch
                data, navigate again to other page and again come Query page,
                everytime the network request triggered. But as a developer I
                know that the list of users doesnot changed often.
              </div>
              <div className="jsxCode">
                <strong className="example">staleTime</strong>
                <pre>
                  <code>{staleTime}</code>
                </pre>
              </div>
              <div>
                Now if we observe the network request when you navigate the
                pages the new network request will not triggered and will
                trigger after 30 seconds. Also the ReactQueryDevtools will not
                show the fresh query means will remain fresh for 30 seconds and
                after that it will show the satle query. In easy words the
                quesry will remain fresh for 30 seconds and not will triggered
                the background request for fetch fresh data, but will trigger
                after 30 seconds when query will be stale.
              </div>
              <div>
                So Our flags isLoading is false and isFetching also false. There
                is no additional request withing the 30 seconds time frame. With
                the halp of stale time you will controll the number of network
                requests during the stale time couppled with the query tab.
              </div>
              <div>
                Default staleTime is 0 seconds. As every visit to the Query
                pages there is a background reffetch request and it is the
                safest value of staleTime
              </div>
              <h4>1.4. Refetch Options</h4>
              <h5>refetchOnMount</h5>
              <div>
                Default value is true, means every time switch the pages the
                Query will trigger the nework request. The best option is true.
              </div>
              <div>
                If set it to false then just first time fetch fresh data and
                nvere fetch new data when navigate to Query page.
              </div>
              <div>
                If set it to string always, so irrespective of weather the query
                data is stale or not, the query always fetch the data when the
                component mounts.
              </div>
              <h5>refetchOnWindowFocus</h5>
              <div>
                <strong>Default value is true: </strong>
                The UI is in sync with remote data. Means when focus to the
                window the updated data will be in UI, no need to refresh the
                page. Query will refetch on window focus. You can set it false
                or string always irrespective to weather the query is satle or
                not.
              </div>
              <div>
                <h4>1.5. useQuery on click</h4>
                <div>
                  First of all pass the configuration enabled and set it to
                  false. This will stop the auto fire the get request for
                  fetching the data.
                </div>
                <div className="jsxCode">
                  <strong className="example">enabled</strong>
                  <pre>
                    <code>{enabled}</code>
                  </pre>
                </div>
                <div>
                  useQuery returns a function called refetch, to manually
                  trigger the query. We can pass it in onClick handler like this
                </div>
                <div className="jsxCode">
                  <strong className="example">refetchFunction</strong>
                  <pre>
                    <code>{refetchFunction}</code>
                  </pre>
                </div>
                <div className="jsxCode">
                  <strong className="example">refetchFunctionOnClick</strong>
                  <pre>
                    <code>{refetchFunctionOnClick}</code>
                  </pre>
                </div>
                <div>
                  Now data will fetched onClick button, but Query cache and
                  stale time still play the same role e.g isLoading etc.
                </div>
              </div>
              <div>
                <h4>
                  1.6. Callbacks with useQuery: Success and Error Callbacks
                </h4>
                <div>
                  While we are dealing with data fetching, sometimes we might to
                  perform a sideeffect when the query completes for example
                  enable button or opening modal when data is ready etc. For
                  this react query provieds us success and error callbacks as
                  configurations or options to the useQuery hook. First of all
                  we will define 2 fuctions and which will be called when the
                  Query succeed or the Query failed.
                </div>
                <div>
                  Now we have to attach these functions to useQuery hook
                </div>
                <div>
                  React Query can automatically injects data into these
                  callbacks
                </div>
                <div className="jsxCode">
                  <strong className="example">
                    Success and Error Callbacks
                  </strong>
                  <pre>
                    <code>{attachCallBack}</code>
                  </pre>
                </div>
              </div>
            </div>
            <div>
              <h3>2. Poll data or Polling</h3>
              <div>
                Fetching data at regular intervals. For example if you have a
                component that shows the real time price of different stocks,
                you might to fetch data every second to update the UI. This
                ensures the UI will always be in sync with remote data
                irespective of configurations like refetchOnMount or
                refetchOnWindowFocus which is dependent on user interaction. For
                poll data we will use another configuration called
                refetchInterval, by default it set to false. How ever you can
                set to a number in miliseconds which will result in a continus
                refetch of the query at that interval. For example if I set it
                to 2000, the Query will automatically refetch every 2 seconds.
              </div>
              <div className="jsxCode">
                <strong className="example">refetchInterval</strong>
                <pre>
                  <code>{refetchInterval}</code>
                </pre>
              </div>
              <div>
                The polling or refetching will automatically paused if the
                window losses focus. But if you want to refetch at regular
                intervales, there is another configuration that is
                refetchIntervalInBackground and set it to true
              </div>
              <div className="jsxCode">
                <strong className="example">refetchIntervalInBackground</strong>
                <pre>
                  <code>{refetchIntervalInBackground}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>
      </article>
    </Fragment>
  );
};

export default RQTheory;
