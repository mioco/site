import Head from 'next/head'

export default function Home() {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-GLXZ3M346G');
  }
  

  return (
    <div className="container">
      <Head>
        <title>osyo</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta content="width=device-width,initial-scale=1.0,minimum-scale=1.0" name="viewport"></meta>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-GLXZ3M346G"></script>
      </Head>

      <main>
        <a href="//blog.osyo.space">blog</a>
        <a href="//lib.osyo.space">playground</a>
        <a href="//github.com/mioco">github</a>
      </main>

      <footer>
        © Osyo, 2020.
      </footer>

      <style>{`
        .container {
          display: flex;
          width: 100vw;
          height: 100vh;
          flex-direction: column;
        }

        main {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        a {
          font-size: 18px;
          color: #fff;
          text-decoration: none;
        }

        a + a {
          margin-left: 16px;
        }

        footer {
          color: #fff;
          text-align: center;
          padding: 16px;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background-color: #81b8fa;
          overflow: hidden;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
