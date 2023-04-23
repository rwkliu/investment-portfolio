import Head from 'next/head'
import Link from 'next/link'
import Footer from '../../components/footer-component'

export default function Home() {
  return (
    <>
      <Head>
        <title>My Spring Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav class="navbar bg-dark"> 
        <div class="container-fluid">
          <Link href="/" class="navbar-brand mb-0" style={{fontSize: "35px", color: "white"}}>My Spring Portfolio</Link>
          <button type="button" class="btn btn-primary">
            Notifications <span class="badge text-bg-secondary">4</span>
          </button>
        </div>
      </nav>
      <div className="container text-center mb-5">
        <div className="badge bg-secondary fs-2">Remaining Funds</div>
        <div className="d-flex justify-content-center fs-1">
          <div className="badge bg-secondary">$</div>
          <div className="badge bg-secondary" style={{width: "8em"}}>10,000,000.00</div>
          <div className="badge bg-secondary">USD</div>
          <button type="button" className="btn btn-primary" style={{marginLeft: "10px"}}>Add funds</button>
        </div>
      </div>
      <div className="container text-center">
        <div className="badge bg-dark fs-2">Investments</div>
        <div className="d-flex flex-row-reverse dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Sort
          </button>
        </div>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr style={{textAlign: "center", color: "white"}}>
                <th>Investment Name</th>
                <th>investment Type</th>
                <th>Funds Invested</th>
                <th>Date Invested</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
      <Footer footerText={"Created by Ricky"}/>
    </>
  )
}
