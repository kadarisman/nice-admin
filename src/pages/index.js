import Layout from '../layouts/Layout'
import Dashboard from '../components/Dashboard'
import HeadPage from '../layouts/part/Head'

export default function Home() {
  return (
    <>    
    <HeadPage title="Nice Admin"/> 
      <Layout>
        <main className="main" id="main">
           <Dashboard/>
        </main>
      </Layout>
    </>
  )
}
