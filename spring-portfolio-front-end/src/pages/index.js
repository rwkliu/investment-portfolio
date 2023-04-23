import Head from 'next/head'
import Link from 'next/link'
import Footer from '../../components/footer-component'
import Navbar from '../../components/navbar'
import SortDropdown from '../../components/sort-dropdown'

export default function Home() {
  return (
    <>
      <Head>
        <title>My Spring Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar brandName={"My Spring Portfolio"} notificationName={"Notifications"} numAlerts={4}/>
      <div className="container text-center mb-5">
        <button type="button" className="btn btn-link" disabled style={{visibility: "hidden"}}>Add funds</button>
        <div className="badge bg-secondary fs-1">
          Remaining Funds
          <div className="d-flex fs-1" style={{paddingTop: "5px"}}>
            <div className="badge bg-secondary" style={{paddingLeft: "5px", paddingRight: "5px"}}>$</div>
            <div className="badge bg-secondary" style={{width: "7em", paddingLeft: "5px", paddingRight: "5px"}}>10,000,000.00</div>
            <div className="badge bg-secondary" style={{paddingLeft: "5px", paddingRight: "5px"}}>USD</div>
          </div>
        </div>
        <button type="button" className="btn btn-primary" style={{marginLeft: "10px"}}>Add funds</button>
      </div>
      <div className="container text-center">
        <div className="badge bg-dark fs-2">Investments</div>
        <div className="d-flex justify-content-between">
            <button class="btn btn-primary">Add investment</button>
            <SortDropdown />
        </div>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr style={{textAlign: "center", color: "white"}}>
                <th>Investment Name</th>
                <th>Investment Type</th>
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
