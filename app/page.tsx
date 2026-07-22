import Image from "next/image";

const logoPath = "/logo.png";
const aboutStory = "/Gallery/about-us.jpg";
const healthCamp = "/Gallery/health-camp.jpg";
const healthCampDps = "/Gallery/health-camp-at-dps.jpg";
const healthCheckup = "/Gallery/health-checkup-program.jpg";
const healthCheckupPhoto = "/Gallery/health-checkup.jpg";
const deenDayalCamp = "/Gallery/health-camp-in-deen-dayal-vidyalaya.jpg";
const certificate12A = "/Certifications/certificate-12a.jpg";
const certificateFcra = "/Certifications/certificate-fcra.jpg";
const certificateRegistration = "/Certifications/certificate-registration.jpg";
const certificateNiti = "/Certifications/certificate-niti-ayog.jpg";
const certificatePan = "/Certifications/certificate-pan-card.jpg";
const awardGovernor = "/awards/award-governor-of-up.jpg";
const awardGovernor2 = "/awards/award-governor.jpg";
const awardHomeMinister = "/awards/award-ex-home-minister.jpg";
const awardBharat = "/awards/award-bharat-vikas-parishad.jpg";

const stats = [
    { value: "1998", label: "charitable work started" },
    { value: "30k+", label: "students reached yearly" },
    { value: "15+", label: "villages covered in rural health" },
    { value: "6292", label: "population in the outreach block" }
];

const trustMarks = [
    "Societies Act 21/1860 registration",
    "FCRA recognized",
    "12A and 80G style compliance support",
    "NITI Aayog identity"
];

const programs = [
    {
        title: "School health program",
        text:
            "Mobile medical teams screen children from nursery through degree college, build health awareness, and support follow-up care."
    },
    {
        title: "Rural health outreach",
        text:
            "Preventive care, maternal support, immunization, and health education for underserved villages where access is limited."
    },
    {
        title: "General public health camps",
        text:
            "Regular camps for blood donation, pathology, vaccination, and screening for chronic and fatal diseases."
    },
    {
        title: "Industrial health checks",
        text:
            "Workplace medical programs for factory staff and workers, with periodic screening and referrals where needed."
    },
    {
        title: "Women and child health",
        text:
            "Nutrition, breast cancer awareness, eye and dental screening, family planning education, and child welfare."
    },
    {
        title: "Awareness and rehabilitation",
        text:
            "Leprosy, AIDS, sanitation, hygiene, street child welfare, vocational training, and adult education initiatives."
    }
];

const certifications = [
    {
        title: "NGO registration",
        image: certificateRegistration,
        note: "Foundational identity and registration proof"
    },
    {
        title: "FCRA certificate",
        image: certificateFcra,
        note: "Foreign contribution compliance"
    },
    {
        title: "12A certificate",
        image: certificate12A,
        note: "Tax-exempt trust framework"
    },
    {
        title: "NITI Aayog registration",
        image: certificateNiti,
        note: "Government platform listing"
    },
    {
        title: "PAN card",
        image: certificatePan,
        note: "Organizational financial identity"
    }
];

const awards = [
    {
        title: "Honoured by the Governor of UP",
        image: awardGovernor,
        note: "State-level recognition for public service"
    },
    {
        title: "Governor appreciation",
        image: awardGovernor2,
        note: "Recognition for community healthcare work"
    },
    {
        title: "Ex Home Minister tribute",
        image: awardHomeMinister,
        note: "Formal honour from public leadership"
    },
    {
        title: "Bharat Vikas Parishad",
        image: awardBharat,
        note: "Organizational felicitation"
    }
];

const gallery = [
    {
        title: "School health camp",
        image: healthCampDps,
        note: "Children screened in a school setting"
    },
    {
        title: "Community camp",
        image: healthCamp,
        note: "General public health outreach"
    },
    {
        title: "Program story",
        image: healthCheckup,
        note: "Program poster and field moments"
    },
    {
        title: "Checkup session",
        image: healthCheckupPhoto,
        note: "Doctor-led screening and consultation"
    },
    {
        title: "Village school visit",
        image: deenDayalCamp,
        note: "Educational and health support work"
    },
    {
        title: "About the NGO",
        image: aboutStory,
        note: "Original site context and mission statement"
    },
    {
        title: "School health procession",
        image: "/Gallery/gallery-20200617-wa0005.jpg",
        note: "Awareness march with volunteers and placards"
    },
    {
        title: "Campus group screening",
        image: "/Gallery/gallery-20200617-wa0002.jpg",
        note: "Children gathered for a school health activity"
    },
    {
        title: "Community awareness march",
        image: "/Gallery/gallery-20200617-wa0004.jpg",
        note: "Health messaging carried into the community"
    },
    {
        title: "Oral screening session",
        image: "/Gallery/gallery-20200619-wa0010.jpg",
        note: "Medical staff guiding a focused checkup"
    },
    {
        title: "Follow-up consultation",
        image: "/Gallery/gallery-20200619-wa0012.jpg",
        note: "Doctor-led examination and advice"
    },
    {
        title: "School screening desk",
        image: "/Gallery/gallery-20200617-wa0003.jpg",
        note: "Student checkup and record review"
    }
];

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
    return (
        <div className="section-heading">
            <p className="eyebrow">{eyebrow}</p>
            <h2>{title}</h2>
            <p className="section-text">{text}</p>
        </div>
    );
}

function ImageCard({
    image,
    title,
    note,
    compact = false
}: {
    image: string;
    title: string;
    note: string;
    compact?: boolean;
}) {
    return (
        <figure className={`image-card ${compact ? "image-card--compact" : ""}`}>
            <div className="image-card__media">
                <Image src={image} alt={title} fill sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <figcaption>
                <strong>{title}</strong>
                <span>{note}</span>
            </figcaption>
        </figure>
    );
}

export default function Home() {
    return (
        <main className="site-shell">
            <header className="site-header">
                <div className="brand">
                    <span className="brand-mark">
                        <Image src={logoPath} alt="Smt. Meera Rani Samajik Utthan Sansthan logo" fill sizes="80px" priority />
                    </span>
                    <div>
                        <p>Smt. Meera Rani Samajik Utthan Sansthan</p>
                        <span>Healthcare for schools, villages, and underserved communities</span>
                    </div>
                </div>

                <nav aria-label="Primary" className="site-nav">
                    <a href="#about">About</a>
                    <a href="#programs">Programs</a>
                    <a href="#certifications">Certifications</a>
                    <a href="#awards">Awards</a>
                    <a href="#gallery">Gallery</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>

            <section className="hero">
                <div className="hero-copy">
                    <p className="eyebrow">Healthcare NGO · Kanpur Nagar</p>
                    <h1>Healthcare support for schools and underserved communities.</h1>
                    <p className="hero-text">
                        Since 1998, Smt. Meera Rani Samajik Utthan Sansthan has supported school health
                        screenings, rural outreach, industrial checkups, public camps, and awareness
                        programs focused on women, children, and underserved communities.
                    </p>

                    <div className="hero-actions">
                        <a className="button button-primary" href="#programs">
                            Explore programs
                        </a>
                        <a className="button button-secondary" href="#contact">
                            Contact the NGO
                        </a>
                    </div>

                    <div className="trust-strip" aria-label="Organization trust markers">
                        {trustMarks.map((item) => (
                            <span key={item}>{item}</span>
                        ))}
                    </div>
                </div>

                <aside className="hero-aside" aria-label="Featured NGO imagery">
                    <div className="hero-panel-plain">
                        <div className="hero-image">
                            <Image src={healthCampDps} alt="School health camp" fill sizes="(max-width: 768px) 100vw, 40vw" priority />
                        </div>

                        <div className="hero-badge">
                            <p>Registered, compliant, and community focused</p>
                            <strong>Healthcare with measurable local impact</strong>
                            <span>School camps, rural outreach, and public health support</span>
                            <div className="hero-badge__list" aria-label="Featured service areas">
                                <div className="hero-badge__item">
                                    <span className="hero-badge__dot" aria-hidden="true" />
                                    <div>
                                        <strong>School screenings</strong>
                                        <p>Health checks and follow-up support for students.</p>
                                    </div>
                                </div>
                                <div className="hero-badge__item">
                                    <span className="hero-badge__dot" aria-hidden="true" />
                                    <div>
                                        <strong>Village outreach</strong>
                                        <p>Preventive care and awareness in underserved areas.</p>
                                    </div>
                                </div>
                                <div className="hero-badge__item">
                                    <span className="hero-badge__dot" aria-hidden="true" />
                                    <div>
                                        <strong>Health camps</strong>
                                        <p>Community checkups, consultations, and referrals.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </section>

            <section className="stats-grid" aria-label="Core statistics">
                {stats.map((stat) => (
                    <article key={stat.label} className="stat-card">
                        <strong>{stat.value}</strong>
                        <span>{stat.label}</span>
                    </article>
                ))}
            </section>

            <section id="about" className="section section--split">
                <div>
                    <SectionHeading
                        eyebrow="About"
                        title="A long-running organization with a clear public mission."
                        text="The original site framed the NGO as a community institution with recognition from government, public, and social bodies. The redesign keeps that credibility visible while making the experience easier to understand on mobile and desktop."
                    />
                </div>

                <div className="about-panel">
                    <p>
                        The legacy material describes a wide service footprint: school checkups, industrial
                        health, rural care, general camps, leprosy support, AIDS awareness, women and child
                        welfare, sanitation, education, and vocational development.
                    </p>
                    <p>
                        This redesign turns that breadth into a clean, readable structure so visitors can see
                        what the NGO does, why it matters, and how its credibility is established.
                    </p>
                </div>
            </section>

            <section id="programs" className="section">
                <SectionHeading
                    eyebrow="Programs"
                    title="Core healthcare programs organized around real community need."
                    text="The original site contains a large list of initiatives. Here they are grouped into six focused program pillars that make the mission clearer without losing the underlying scope."
                />

                <div className="program-grid">
                    {programs.map((program) => (
                        <article key={program.title} className="program-card">
                            <p className="program-card__label">Community program</p>
                            <h3>{program.title}</h3>
                            <p>{program.text}</p>
                        </article>
                    ))}
                </div>

                <div className="program-note">
                    Additional legacy initiatives include family planning awareness, polio awareness,
                    handicapped support, environment awareness, water sanitation, agriculture development,
                    women rights, adult education, and senior citizen welfare.
                </div>
            </section>

            <section className="section impact-band">
                <div>
                    <p className="eyebrow">Impact</p>
                    <h2>Designed to serve where access is hardest.</h2>
                </div>

                <div className="impact-copy">
                    <p>
                        The organization’s rural outreach focused on nine villages in Block Shivrajpur, Tehsil
                        Bilhour, covering maternal care, immunization, health education, and preventive support
                        for a population of 6292 people.
                    </p>
                    <p>
                        The school health program references roughly 30,000 students reached per year, which is
                        the clearest single proof point in the provided copy and why school health should stay
                        central in the narrative.
                    </p>
                </div>
            </section>

            <section id="certifications" className="section">
                <SectionHeading
                    eyebrow="Certifications"
                    title="Compliance and registration documents presented clearly."
                    text="These scans make the organization’s identity concrete. In the new layout they are surfaced as a wall of proof instead of being buried behind multiple page clicks."
                />

                <div className="document-grid">
                    {certifications.map((item) => (
                        <ImageCard
                            key={item.title}
                            image={item.image}
                            title={item.title}
                            note={item.note}
                            compact
                        />
                    ))}
                </div>
            </section>

            <section id="awards" className="section">
                <SectionHeading
                    eyebrow="Awards"
                    title="Recognition from civic and public leaders."
                    text="The source material includes multiple honours and felicitation images. They are displayed here as a confidence-building proof section."
                />

                <div className="award-grid">
                    {awards.map((item) => (
                        <ImageCard key={item.title} image={item.image} title={item.title} note={item.note} />
                    ))}
                </div>
            </section>

            <section id="gallery" className="section">
                <SectionHeading
                    eyebrow="Gallery"
                    title="Field moments, screenings, and school visits."
                    text="The gallery is intentionally editorial: a few larger anchors with supporting images keep the page fast while still showing the NGO’s day-to-day work."
                />

                <div className="gallery-grid">
                    {gallery.map((item) => (
                        <figure key={item.title} className="gallery-card">
                            <div className="gallery-card__media">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 33vw"
                                />
                            </div>
                            <figcaption>
                                <strong>{item.title}</strong>
                                <span>{item.note}</span>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </section>

            <section id="contact" className="section contact-panel">
                <div>
                    <p className="eyebrow">Contact</p>
                    <h2>Talk to the organization or request program information.</h2>
                    <p className="contact-text">
                        102 Murli Niwas, 851 - Lakhanpur, Vikas Nagar, Kanpur Nagar 208024
                        <br />
                        meera_organisation@rediffmail.com
                        <br />
                        +91 9839678594
                    </p>
                </div>

                <div className="contact-actions">
                    <a className="button button-primary" href="mailto:meera_organisation@rediffmail.com">
                        Email the NGO
                    </a>
                    <a className="button button-secondary" href="tel:+919839678594">
                        Call the office
                    </a>
                </div>
            </section>

            <footer className="footer">
                <p>Smt. Meera Rani Samajik Utthan Sansthan</p>
                <span>Healthcare, awareness, education, and community service since 1998.</span>
            </footer>
        </main>
    );
}