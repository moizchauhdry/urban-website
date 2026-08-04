import { ABOUT_US_PAGE } from '../../data/aboutUsPage.js'

/** Centered About Us heading and intro copy. */
export default function AboutIntro() {
  const { title, lead } = ABOUT_US_PAGE.intro

  return (
    <section className="about-page-intro section">
      <div className="container">
        <h1 className="about-page-title">{title}</h1>
        <p className="about-page-lead">{lead}</p>
      </div>
    </section>
  )
}
