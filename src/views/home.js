import React, { useEffect } from 'react'
import FeatureCard from '../components/feature-card'
import GalleryCard3 from '../components/gallery-card3'
import Question from '../components/question'
import './home.css'

const cardImages = [
  "imgs/cardImgs/card1.jpg",
  "imgs/cardImgs/card2.jpg",
  "imgs/cardImgs/card3.jpg",
  "imgs/cardImgs/card4.jpg",
  "imgs/cardImgs/card5.jpg",
  "imgs/cardImgs/card6.jpg",
  "imgs/cardImgs/card7.jpg",
  "imgs/cardImgs/card8.jpg",
  "imgs/cardImgs/card9.jpg",
  "imgs/cardImgs/card10.jpg",
  "imgs/cardImgs/card11.jpg",
  "imgs/cardImgs/card12.jpg",
]
const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
        else {
          entry.target.classList.remove("show")
        }
      })
    })

    const hiddenElemnts = document.querySelectorAll(".hidden")
    hiddenElemnts.forEach(el => observer.observe(el))
  }, [])

  return (
    <div className="home-container">
      <div className='head'>
        <div className="home-header">
          <header data-thq="thq-navbar" className="home-navbar-interactive">
            <span className="home-logo"><img src="imgs/logo.svg" alt="" /></span>
            <div data-thq="thq-mobile-menu" className="home-mobile-menu">
              <div className="home-nav">
                <div className="home-top">
                  <span className="home-logo1">REALSPACE</span>
                </div>
              </div>
              <div>
                <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
        </div>
        <div className="home-hero">
          <div className="home-hero1">
            <div className="home-container01 hidden2 hidden">
              <h1 className="home-hero-heading heading1">
                Find Your Perfect Rental Space
              </h1>
              <span className="home-hero-sub-heading">
                Rent with ease and convenience
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-details">
        <div className="home-details1">
          <div className="home-container02 hidden">
            <span className="home-text sectionTitle">
              <span>Details</span>
              <br></br>
            </span>
            <h2 className="home-details-heading heading2">
              Why Choose Our Real Estate Website?
            </h2>
            <span className="home-details-sub-heading">
              Our platform offers a comprehensive database of rental spaces,
              making it easy for users to find their ideal home or office. With
              advanced search filters and detailed property listings, we ensure
              a seamless experience for both tenants and landlords. Start your
              search today and find the perfect rental space that suits your
              lifestyle.
            </span>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1472224371017-08207f84aaae?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTQ3NjEzN3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
            className="home-details-image hidden"
          />
        </div>
      </div>
      <div className="home-features">
        <div className="home-features-container">
          <div className="home-features1">
            <div className="home-container03 hidden">
              <span className="home-text03 sectionTitle">
                <span>features</span>
                <br></br>
              </span>
              <h2 className="home-features-heading heading2">
                Find Your Perfect Rental Space
              </h2>
              <span className="home-features-sub-heading">
                Discover a wide range of rental spaces and simplify your search
                process.
              </span>
            </div>
            <div className="home-container04">
              <FeatureCard
                Heading="Advanced Search"
                SubHeading="Easily find your ideal rental space with our advanced search options."
              ></FeatureCard>
              <FeatureCard
                Heading="Detailed Listings"
                SubHeading="Get comprehensive information about each rental space, including photos, amenities, and pricing."
              ></FeatureCard>
              <FeatureCard
                Heading="Saved Searches"
                SubHeading="Save your favorite searches and receive notifications when new rental spaces that match your criteria become available."
              ></FeatureCard>
              <FeatureCard
                Heading="User Reviews"
                SubHeading="Read reviews from other users to get insights and recommendations on rental spaces."
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>
      <div className="home-gallery">
        <div className="home-gallery1">
          <h1 className="home-gallery-heading heading2 hidden">
            Find Your Perfect Rental Space
          </h1>
          <span className="home-gallery-sub-heading hidden">
            Browse through our gallery to see the available rental spaces
          </span>
          <div className="home-container29">
            {cardImages?.length > 0 &&
              cardImages?.map(img => {
                return (
                  <GalleryCard3
                    image_src={img}
                    rootClassName="rootClassName"
                  ></GalleryCard3>
                )
              })
            }
          </div>
        </div>
      </div>
      <div className="home-banner">
        <div className="home-banner1 hidden">
          <h1 className="home-banner-heading heading2">
            Discover Your Dream Rental Space
          </h1>
          <span className="home-banner-sub-heading">
            Explore a wide range of rental options tailored to your needs.
          </span>
          <button className="home-banner-button button">Learn More</button>
        </div>
      </div>
      <div className="home-faq">
        <div className="home-faq-container">
          <div className="home-faq1">
            <div className="home-container30 hidden">
              <span className="home-text40 sectionTitle">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="home-text43 heading2">Common questions</h2>
              <span className="home-text44">
                <span>
                  Here are some of the most common questions that we get.
                </span>
                <br></br>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <div className="home-container31">
              <Question
                Answer="You can search for rental spaces on our website by using the search bar on the homepage. Simply enter your desired location, price range, and any other specific requirements, and click the search button."
                Question="How can I search for rental spaces on your website?"
              ></Question>
              <Question
                Answer="Yes, you can easily filter the search results based on your preferences. Our website provides various filters such as location, price range, number of bedrooms, amenities, and more. You can select the desired filters to narrow down your search."
                Question="Can I filter the search results based on my preferences?"
              ></Question>
              <Question
                Answer="Once you find a rental space that interests you, you can contact the property owner or agent directly through our website. Each listing will have a contact button or form where you can send your inquiry or request for more information."
                Question="How do I contact the property owner or agent for a rental space?"
              ></Question>
              <Question
                Answer="No, our website is completely free to use for users searching for rental spaces. There are no hidden fees or charges."
                Question="Are there any fees for using your website to find rental spaces?"
              ></Question>
              <Question
                Answer="Yes, you can save your favorite rental spaces by creating an account on our website. Once you have an account, you can easily bookmark and access your saved listings from your dashboard."
                Question="Can I save my favorite rental spaces for future reference?"
              ></Question>
            </div>
          </div>
        </div>
      </div>
      <div className="home-footer">
        <footer className="home-footer1">
          <div className="home-container32">
            <span className="home-logo2">REALSPACE</span>
          </div>
          <div className="home-separator"></div>
          <div className="home-container33">
            <span className="home-text61">
              © 2024 RealSpace, All Rights Reserved.
            </span>
            <div className="home-icon-group1">
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon10">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon12">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon14">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home
