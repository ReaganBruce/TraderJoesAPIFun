import React from "react";

const Home = () => {
  return (
    <>
      <main id="home" className="container">
        <section className="row justify-content-end">
          <div className="card col-md-12">
            <div className="card-body shadow bg-white">
              <img
                id="popcorn"
                src="https://www.traderjoes.com/TJ_CMS_Content/Images/fearless-flyer/uploads/article-5463/55428-popcorn-pickle.jpg"
              ></img>
              <img src="https://logos-download.com/wp-content/uploads/2016/06/Trader_Joes_logo_wordmark-700x105.png"></img>
              <img
                id="popcorn2"
                src="https://www.traderjoes.com/TJ_CMS_Content/Images/fearless-flyer/uploads/article-5463/55428-popcorn-pickle.jpg"
              ></img>
              <p id="text" className="card-text mt-2">
                Trader Joe’s is a national chain of neighborhood grocery stores. We are committed to
                providing our customers outstanding value in the form of the best quality products
                at the best everyday prices. Through our rewarding products and knowledgeable,
                friendly Crew Members, we have been transforming grocery shopping into a welcoming
                journey full of discovery and fun since 1967. At Trader Joe's, you won’t find a lot
                of branded items. Instead, you’ll discover a store full of unique and interesting
                products, along with everyday basics, in the Trader Joe's label. Our buyers travel
                the world searching for products we think are exceptional and will find a following
                among our customers. To earn a spot on our shelves, each product is submitted to a
                rigorous tasting panel process, in which every aspect of quality is investigated in
                context of the price we can offer. If a product is assessed as an outstanding value,
                it becomes a vital part of the Trader Joe's shopping adventure. We know that
                maintaining our everyday focus on value is vital, which is why we don’t have sales,
                we don’t offer coupons, and there are no loyalty programs or membership cards to
                swipe at our stores. Trader Joe’s believes every customer should have access to the
                best prices on the best products every day.
              </p>
            </div>
          </div>
        </section>
      </main>

      <img
        id="victorian"
        src="https://www.traderjoes.com/TJ_CMS_Content/Images/Digin/Uploads/guide-to-fruits-and-veggies.jpg"
      ></img>
    </>
  );
};

export default Home;
