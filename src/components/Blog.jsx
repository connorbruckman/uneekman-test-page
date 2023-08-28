import React from "react";
import PageHeader from "./PageHeader";
import BlogCard from "./BlogCard";
import Carousel from "react-bootstrap/Carousel";
//  imgSrc, date, title, content, readMoreLink

function Blog() {
  const viagraBottle = import.meta.env.VITE_VIAGRA_TIER_ONE;
  const cialisBottle = import.meta.env.VITE_CIALIS_TIER_ONE;
  const levitraBottle = import.meta.env.VITE_LEVITRA_TIER_ONE;
  const athlete = import.meta.env.VITE_ATHLETE;
  const richPiana = import.meta.env.VITE_RICH_PIANA;

  return (
    <div>
      <PageHeader
        header="Our Blog"
        description="Read articles about erectile dysfunction and other men's health issues."
      />
      <div className="section sec-news">
        <div className="container">
          <Carousel>
            <Carousel.Item interval={8000}>
              <div className="row">
                <BlogCard
                  imgSrc={viagraBottle}
                  date="March 13th, 2020"
                  title="What is Sildenafil?"
                  content="Sildenafil, commonly known by its trade name Viagra, holds a significant role in the realm of men's health. Sildenafil serves as a key player in addressing the concerns surrounding men's health. This article delves into the multifaceted applications of Sildenafil, its dosage strengths, and the form in which it is administered."
                  readMoreLink="/blog/sildenafil"
                />
                <BlogCard
                  imgSrc={cialisBottle}
                  date="March 13th, 2020"
                  title="What is Tadalafil?"
                  content="Tadalafil, often prescribed under the trade name Cialis, holds a significant role in the realm of men's health. Tadalafil serves as a key player in addressing the concerns surrounding men's health. This article delves into the multifaceted applications of Tadalafil, its dosage strengths, and the form in which it is administered."
                  readMoreLink="/blog/tadalafil"
                />
                <BlogCard
                  imgSrc={levitraBottle}
                  date="March 13th, 2020"
                  title="What is Vardenafil?"
                  content="Vardenafil, often prescribed under the trade name Levitra, holds a significant role in the realm of men's health. Primarily utilized for the treatment of erectile dysfunction, this medication also addresses symptoms associated with benign prostatic hypertrophy (enlarged prostate). In this article, we delve into the details of Vardenafil, its dosages, and its form of administration."
                  readMoreLink="/blog/vardenafil"
                />
              </div>
            </Carousel.Item>

            <Carousel.Item interval={8000}>
              <div className="row">
                <BlogCard
                  imgSrc={athlete}
                  date="March 13th, 2020"
                  title="Viagra Improving Performance Beyond the Bedroom"
                  content="Athletes, driven by their pursuit of enhanced performance, now stand as high-earning figures, with salaries rivaling small corporations. The NFL, for instance, rakes in over $10 billion yearly, marking the commercialization of professional sports. The realm of performance improvement is not confined to athletes; even corporate professionals turn to stimulants like ADHD medications to excel in their careers. This drive to succeed transcends fields, underscored by the fact that competitiveness is innate to human nature. The unexpected journey of Viagra (Sildenafil) exemplifies this phenomenon. Originally developed to treat erectile dysfunction, the little blue pill has found a new arena among athletes, offering a performance boost on the sports field rather than just in the bedroom."
                  readMoreLink="/blog/athletes-sildenafil"
                />
                <BlogCard
                  imgSrc={richPiana}
                  date="March 13th, 2020"
                  title="Sildenafil and Bodybuilding: The Relation, the Revelation!"
                  content="In the dynamic realm of fitness and muscle-building, bodybuilding supplements have emerged as invaluable assets in the pursuit of excellence. Designed to complement a balanced diet, these supplements play a pivotal role in optimizing muscle growth, enhancing athletic performance, and achieving fitness goals. This article delves into the fascinating world of bodybuilding supplements, exploring their utility, the science that underpins their effectiveness, and their role in shaping the journey of bodybuilders."
                  readMoreLink="/blog/bodybuilding-sildenafil"
                />
                <BlogCard
                  imgSrc={viagraBottle}
                  date="March 13th, 2020"
                  title="What is Sildenafil?"
                  content="Sildenafil is commonly prescribed for the treatment of erectile dysfunction. A sildenafil troche is a vasoactive medicine that is usually used for treating erectile..."
                  readMoreLink="/blog/sildenafil"
                />
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Blog;
