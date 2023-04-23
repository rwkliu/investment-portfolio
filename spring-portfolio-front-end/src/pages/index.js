import Head from 'next/head'
import Link from 'next/link'
import Footer from '../../components/footer-component'
import Navbar from '../../components/navbar'
import ListInvestments from '../../components/list-investments'
import FundsDisplay from '../../components/funds-display'
import Dropdown from '../../components/dropdown'

import { sortTitle, sortActions } from '../../data/sort-titles'

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
      <FundsDisplay funds={10000000} currency={"USD"} />
      <div className="container text-center">
        <div className="badge bg-dark fs-2">Investments</div>
        <div className="d-flex justify-content-between">
            <button class="btn btn-primary">Add investment</button>
            <Dropdown title={sortTitle} items={sortActions} />
        </div>
        <ListInvestments />
      </div>
      <Footer footerText={"Created by Ricky"}/>
    </>
  )
}
