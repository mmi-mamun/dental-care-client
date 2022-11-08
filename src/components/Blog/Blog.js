import React from 'react';
import Post from '../Post/Post';

const Blog = () => {
    const blogPosts = [
        {
            title: "What is the difference between SQL and NoSQL?",

            firstPart: `SQL databases are primarily called RDBMS or Relational Databases. Traditional RDBMS uses SQL syntax and queries to analyze and get the data for further insights. They are used for OLAP systems. SQL databases are table based databases. SQL databases have a predefined schema. SQL databases are vertically scalable. Examples: Oracle, Postgres, and MS-SQL.`,

            secondPart: `NoSQL databases are primarily called as Non-relational or distributed database. NoSQL database system consists of various kind of database technologies. These databases were developed in response to the demands presented for the development of the modern application. NoSQL databases can be document based, key-value pairs, graph databases. NoSQL databases use dynamic schema for unstructured data. NoSQL databases are horizontally scalable. Examples: 	MongoDB, Redis, Neo4j, Cassandra, Hbase.`,

            author: "Richard Peterson",
            imgUrl:
                "https://gowithcode.com/wp-content/uploads/2021/04/sql-vs-nosql.jpg",
        },


        {
            title: "What is JWT? How does it work? ",

            firstPart: `JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted. `,

            secondPart: `Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.
            
            Firstly, User sign-in using username and password or google/facebook. Secondly, Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. After than, User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. Finally, Resource server then verifies the authenticity of the token using the secret salt/ public key.`,
            author: "Suresh Kumar",
            imgUrl: "https://res.cloudinary.com/practicaldev/image/fetch/s--paCGhFRY--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/tppls6i2nbdqevr2nybr.png",
        },

        {
            title: "What is the difference between javascript and Node JS?",

            firstPart: `Javascript is a programming language that is used for writing scripts on the website. Javascript can only be run in the browsers. 	It is basically used on the client-side. Javascript is capable enough to add HTML and play with the DOM. Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. Javascript is used in frontend development. 	Some of the javascript frameworks are RamdaJS, TypedJS, etc. `,

            secondPart: `NodeJS is a Javascript runtime environment. We can run Javascript outside the browser with the help of NodeJS. It is mostly used on the server-side. Nodejs does not have capability to add HTML tags. V8 is the Javascript engine inside of node.js that parses and runs Javascript. Nodejs is used in server-side development. Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm. `,
            author: "TARuN",
            imgUrl:
                "https://static.javatpoint.com/javascriptpages/images/javascript-vs-nodejs.png",
        },

        {
            title: "How does NodeJS handle multiple requests at the same time?",
            firstPart: `NodeJS server uses an EventQueue, which queues incoming client requests and an EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded and acts as a listener for the EventQueue which processes incoming requests based on FIFO policy.`,

            secondPart: `When a new request comes in, NodeJS checks if it requires any blocking IO operations, if not, the EventLoop processes it and sends the response back to the client directly. If yes, then the request is forwarded to the thread manager, which then based on an algorithm, picks up an idle thread from the pool and lets it process the request. After completion of the request processing operation, the thread, returns the response back to the EventLoop which is then forwarded to the client. Thus, even if an incoming request needs blocking IO, the thread pool allows it to run asynchronously in the background without blocking the EventLoop and it gives a seamless experience of NodeJS handling multiple incoming requests concurrently without any persistent delays or bottlenecks.`,
            author: "goli202084",
            imgUrl:
                "https://forum.golibrary.co/wp-content/uploads/2020/04/nodejs.png",
        }
    ];

    return (
        <div className="posts-container">
            {blogPosts.map(post =>
                <Post key={post.title} post={post} />
            )}
        </div>
    );
};

export default Blog;