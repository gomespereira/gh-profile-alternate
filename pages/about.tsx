import Layout from 'components/layout'

export default function About() {
  return (
    <Layout>
      <section>
        <p className="text-justify">This is a side project created for learning purposes.</p>
        <br/>
        <p className="text-justify">
          If you are interested in knowing more about this project please visit the&nbsp;
          <a
            className="text-blue-900 font-bold hover:underline"
            href="https://github.com/gomespereira/gh-profile-standard"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub repository
          </a>
          .
        </p>
      </section>
    </Layout>
  )
}
