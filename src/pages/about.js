import React from "react"
import {Link} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/Footer"

const qualities = [
  {
    label: 'Accuracy',
    description:'In the world of business, there is no room for error. We know that that the profitability of your business depends greatly on our ability to provide you with accurate bookkeeping and write-ups. Our accountants will help you run your business efficiently by providing you with well-organized financial records.'
  },
  {
    label: 'Efficiency',
    description:'With tax and insurance laws constantly changing, you need a firm that can successfully guide you to informed decisions regarding the current economic state. Global Accounting is committed to keeping up with all the latest changes to ensure you both comply and prosper under the law.'
  },
  {
    label: 'Professionalism',
    description:'No matter how complex your financial situation, Global Accounting will be there when you need us to provide you with professional and objective financial advice. At Global Accounting Services Inc., we employ all of our expertise to ensure the growth and longevity of your wealth throughout the entire process.'
  }

];
const About = () => {
  return (
    <div>
      <Header/>
      <div className="about-us-wrapper">
        <div className="about-us container">
          <h1>We Are Global Accounting Brampton</h1>
          <div className="about image">img</div>
          <div className="about info">
            <div className="column info-1">Throughout the years, computerized accounting software may have changed the way we conduct business, but there are a few things that have always remained the same. We strive to guide our clients through complex financial entanglements in a straightforward and non-intimidating manner.</div>
            <div className="column info-2">Whether you need assistance with retirement planning or estate planning, or have recently started a business and are in need of our bookkeeping or financial forecasting services, we deliver solutions based on your specific situation. Not only does our comprehensive approach allow us to provide our clients with constructive financial solutions, it also gives us the opportunity to create life-long relationships.</div>
          </div>
          <div className="about stats"></div>
          <div className="about partners"></div>
          <div className="about reviews"></div>
          <div className="about qualities">
            {qualities.map((quality) =>
              <div className='wrapper'>
                <div className="label">
                  {quality.label}
                </div>
                .

              </div>
            )}
          </div>
          <div className="about team"></div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About
