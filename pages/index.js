import Layout from '../comps/MyLayout.js'
import Markdown from 'react-markdown'

export default (props) => (
  <Layout>
   <h1>{props.url.query.title}</h1>
   <div className="markdown">
     <Markdown source={`
This is our blog post.
Yes. We can have a [link](/about).
And we can have a title as well.

### This is a title

And here's the content.
     `}/>
     <p className="example">Lorem ipsum test words go here but theyre not rendering because my atom has no react syntax highlighting HALP</p>
   </div>
   <style jsx global>{`
     .markdown {
       font-family: 'Arial';
     }

     .markdown a {
       text-decoration: none;
       color: blue;
     }

     .markdown a:hover {
       opacity: 0.6;
     }

     .markdown h3 {
       margin: 0;
       padding: 0;
       text-transform: uppercase;
     }
  `}</style>
  <Link href='/about' as={ process.env.BACKEND_URL + '/about'}><a>About</a></Link>
  </Layout>
)
