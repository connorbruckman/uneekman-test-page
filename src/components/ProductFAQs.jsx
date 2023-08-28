import React from "react";
import Accordion from "react-bootstrap/Accordion";
import PageHeader from "/src/components/PageHeader";

const ProductFAQs = () => {
  const viagraTierOne = import.meta.env.VITE_VIAGRA_TIER_ONE;
  const cialisTierOne = import.meta.env.VITE_CIALIS_TIER_ONE;
  const levitraTierOne = import.meta.env.VITE_LEVITRA_TIER_ONE;

  return (
    <div style={{ backgroundColor: "#fefefe" }}>
      <div>
        <PageHeader
          header="Product FAQs"
          description="Learn more about the erectile dysfunction products that Uneekman has to offer"
        />
        <div className="container pt-5">
          {/* Sildenafil / Viagra */}
          <div className="d-inline-block">
            <h4
              className="text-white py-1 px-2 mx-auto d-inline-block"
              style={{
                background: "#a7cced",
                background: "linear-gradient(140deg, #306ee8 0%, #3038e8 100%)",
                fontWeight: "bold",
                borderRadius: "8px",
              }}
            >
              Sildenafil nitrate
            </h4>
            <h5 className="d-inline-block mx-2">Generic Viagra</h5>
          </div>

          <div className="row">
            <div className="col-md-8 col-sm-12">
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>What is male impotence?</Accordion.Header>
                  <Accordion.Body>
                    Male impotence is the inability to obtain an erection or the
                    inability to maintain an erection. There are various causes
                    for ED, including poor blood flow, chronic illness, too much
                    alcohol, etc. ED can also indicate emotional or relationship
                    problems. Sildenafil citrate works to overcome any causes of
                    ED and will provide you with a drastically improved sex
                    life.
                    <hr />
                    Beyond ED, sildenafil citrate can help with other common
                    sexual dysfunction, including premature ejaculation, delayed
                    or absent ejaculation, or lack of interest in sex. Working
                    to improve your health and make your life easier, this
                    generic form of Viagra is a popular medication throughout
                    the world.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    What are the causes of male impotence (ED)?
                  </Accordion.Header>
                  <Accordion.Body>
                    Sexual arousal in males is a complicated process. It
                    involves hormones, emotions, nerves, blood vessels, and the
                    brain. If a problem with any of these develops, male
                    impotence can occur. Common in males age 30 or older,
                    erectile function can hinder relationships and lower
                    confidence.
                    <hr />
                    There are a variety of causes for Male Impotence. Some
                    common physical causes include:
                    <ul>
                      <li>High cholesterol</li>
                      <li>Clogged blood vessels</li>
                      <li>Heart problems</li>
                      <li>Diabetes</li>
                      <li>Obesity</li>
                      <li>Tobacco use</li>
                      <li>Alcoholism and other forms of substance abuse</li>
                    </ul>
                    There are also a variety of psychological causes of Male
                    Impotence. Some common psychological causes include:
                    <ul>
                      <li>Depression, or other mental health conditions</li>
                      <li>Stress</li>
                      <li>Poor communication in a relationship</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    How does sildenafil citrate (generic Viagra) mitigate the
                    symptoms of male impotence?
                  </Accordion.Header>
                  <Accordion.Body>
                    Sildenafil citrate was formulated to target a broad range of
                    symptoms associated with male impotence. These symptoms
                    encompass challenges in achieving and maintaining erections,
                    including instances of premature ejaculation, inconsistent
                    erections, and sudden loss of rigidity. Addressing these
                    symptoms is made simple through a few doses of sildenafil
                    citrate. The medication takes effect within hours,
                    effectively alleviating many of the adverse effects of ED.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    How should sildenafil citrate be taken?
                  </Accordion.Header>
                  <Accordion.Body>
                    Generic Viagra should only be administered or prescribed by
                    a doctor or pharmacist. Your doctor or pharmacist will give
                    you clear directions on how it should be taken.
                    <hr />
                    Generally, the pill must be taken at least a full hour
                    before sex is expected. It must also be consumed with a
                    glass of water. If you fear accidental overdose has
                    occurred, emergency medical treatment should be sought out
                    immediately.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    How does sildenafil citrate work?
                  </Accordion.Header>
                  <Accordion.Body>
                    Sildenafil Citrate is a PDE5 inhibitor that relaxes penile
                    muscles and enables proper blood vessel dilation. Upon
                    entering the bloodstream, it directly targets and inhibits
                    the PDE5 enzyme, which regulates blood flow. With this
                    enzyme disabled, the penis can achieve erection upon sexual
                    stimulation. This well-documented and thoroughly studied
                    medication is effective for all men, regardless of age or
                    duration of impotence.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Why is sildenafil citrate the best male impotence
                    medication?
                  </Accordion.Header>
                  <Accordion.Body>
                    Numerous clinical trials have rigorously assessed, tested,
                    and tracked the outcomes of generic Viagra usage, revealing
                    its efficacy in approximately 80% of men. With an FDA seal
                    of approval, this drug is not only safe but also backed by
                    comprehensive documentation of its results. Moreover, its
                    extensive history and testing have led to its inclusion in
                    most health insurance plans, ensuring affordability and
                    convenient accessibility.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="1" className="pb-2">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    What are the potential side effects of sildenafil nitrate?
                  </Accordion.Header>
                  <Accordion.Body>
                    While generally well-tolerated and safe, there are potential
                    side effects associated with this drug, including skin
                    flushing, rashes, blurry vision, dizziness, and headaches.
                    Rare side effects such as hearing loss, blindness, and
                    prolonged erections exceeding 4 hours can also occur. If
                    experiencing these rare side effects, immediate contact with
                    emergency medical services is crucial.
                    <hr />
                    As an oral medication, but adhering to your doctor's or
                    pharmacist's guidance is imperative to prevent adverse
                    effects. Administering this generic Viagra 30 minutes to an
                    hour prior to sexual activity is essential. It's important
                    to note that multiple erections might occur within a single
                    dose. Overdosing should be strictly avoided, as it can have
                    severe consequences.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="col-md-4 col-sm-12 my-auto">
              <img
                src={viagraTierOne}
                alt="sildenafil-bottle"
                className="w-100"
              />
            </div>
          </div>
        </div>
        {/* Tadalafil / Cialis */}
        <div className="container">
          <div className="d-inline-block">
            <h4
              className="text-white py-1 px-2 mx-auto d-inline-block"
              style={{
                background: "#eece9d",
                background: "linear-gradient(140deg, #dd9c3b 0%, #dd673b 100%)",
                fontWeight: "bold",
                borderRadius: "8px",
              }}
            >
              Tadalafil
            </h4>
            <h5 className="d-inline-block mx-2">Generic Cialis</h5>
          </div>
          <div className="row">
            <div className="col-md-8 col-sm-12">
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Can tadalafil be used to treat male impotence (ED)?
                  </Accordion.Header>
                  <Accordion.Body>
                    Most patients are recommended a starting dose of 10 mg,
                    depending on their doctors advise. Medication must be taken
                    prior to any anticipated sexual activity. Depending on the
                    individual tolerance and efficacy of the drug, dosage may be
                    increased as high as 20 mg or as low as 5 mg. The maximum
                    recommended dosing is once a day for most patients.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    How does Tadalafil treat male impotence (ED)?
                  </Accordion.Header>
                  <Accordion.Body>
                    The medication comes in the form of pills. Tadalafil
                    (Generic Cialis) increases and improves the blood flow
                    throughout the body, specifically blood flow to the penis to
                    enable users to achieve erection up to 36 hours after
                    intake. Tadalafil will not work if there is no sexual
                    stimulation of the penis – that is, it will not
                    automatically create an erection. During sexual activity,
                    however, Tadalafil can increase the hardness of your
                    erection as well as the ease of achieving it.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Why should I choose tadalafil to treat male impotence?
                  </Accordion.Header>
                  <Accordion.Body>
                    Using Tadalafil as needed has been shown to improve erectile
                    function compared against the use of a placebo for up to 36
                    hours following dosing. When advising patients on the
                    correct use of tadalafil, consider this information to
                    ensure optimal results.
                    <hr />
                    The prescription generic Tadalafil is designed for oral
                    administration and comes in almond-shaped tablets. Each pill
                    contains dosing in the following amounts: 2.5, 5. 10, or 20
                    mg. Inactive ingredients consist of croscarmellose sodium,
                    hydroxypropyl cellulose, hypromellose, iron oxide, lactose
                    monohydrate, magnesium stearate, microcrystalline cellulose,
                    sodium lauryl sulfate, talc, titanium dioxide, and
                    triacetin.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    How should I take Tadalafil?
                  </Accordion.Header>
                  <Accordion.Body>
                    This medication works in the same manner as Cialis, because
                    it is the same ingredients and active medication as Cialis.
                    It is the generic version, meaning it uses the same active
                    ingredient, in the same potency, but is not sold under the
                    brand name Cialis. This means that Tadalafil users enjoy the
                    same benefits as Cialis, including:
                    <ul>
                      <li>Effectiveness</li>
                      <li>Duration</li>
                      <li>Prescription requirements</li>
                      <li>Side effects</li>
                    </ul>
                    {/* Is this true? */}
                    Tadalafil may be taken on a full or empty stomach.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    What are the side effects of tadalafil?
                  </Accordion.Header>
                  <Accordion.Body>
                    Headache, stomach upset, back pain, muscle pain, stuffy
                    nose, flushing, or dizziness may occur. If any of these
                    effects persist or worsen, tell your doctor or pharmacist
                    promptly. To reduce the risk of dizziness and
                    lightheadedness, get up slowly when rising from a sitting or
                    lying position. Remember that your doctor has prescribed
                    this medication because he or she has judged that the
                    benefit to you is greater than the risk of side effects.
                    Many people using this medication do not have serious side
                    effects.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    What precautions should I be take before using Tadalafil?
                  </Accordion.Header>
                  <Accordion.Body>
                    Before taking tadalafil, tell your doctor or pharmacist if
                    you are allergic to it; or if you have any other allergies.
                    This product may contain inactive ingredients, which can
                    cause allergic reactions or other problems. Talk to your
                    pharmacist for more details.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="1" className="pb-2">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Does Tadalafil interact with other medications?
                  </Accordion.Header>
                  <Accordion.Body>
                    Keep a list of all the products you use (including
                    prescription/nonprescription drugs and herbal products) and
                    share it with your doctor and pharmacist. Do not start,
                    stop, or change the dosage of any medicines without your
                    doctor's approval. A product that may interact with this
                    drug is riociguat.
                    <hr />
                    Tadalafil can cause a serious drop in your blood pressure
                    when used with nitrates, which can lead to dizziness,
                    fainting, and rarely heart attack or stroke.
                    <hr />
                    Do not use tadalafil with any of the following: certain
                    drugs used to treat chest pain/angina (nitrates such as
                    nitroglycerin, isosorbide), recreational drugs called
                    "poppers" containing amyl or butyl nitrite. If you are also
                    taking an alpha-blocker medication (such as doxazosin,
                    tamsulosin) to treat an enlarged prostate/BPH or high blood
                    pressure, your blood pressure may drop which can lead to
                    dizziness or fainting. Your doctor may start treatment with
                    a lower dose of tadalafil or adjust your alpha blocker
                    medication to minimize your risk of low blood pressure.
                    <hr />
                    Other medications can affect the removal of tadalafil from
                    your body, which may affect how tadalafil works. Examples
                    include azole antifungals (such as itraconazole,
                    ketoconazole), macrolide antibiotics (such as
                    clarithromycin, erythromycin), HIV protease inhibitors (such
                    as fosamprenavir, ritonavir), hepatitis C virus protease
                    inhibitors (such as boceprevir, telaprevir), rifampin, among
                    others.
                    <hr />
                    Do not take this medication with any other product that
                    contains tadalafil or other similar medications used to
                    treat erectile dysfunction-ED or pulmonary hypertension
                    (such as sildenafil, vardenafil).
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="col-md-4 col-sm-12 my-auto">
              <img
                src={cialisTierOne}
                alt="sildenafil-bottle"
                className="w-100"
              />
            </div>
          </div>
        </div>

        {/* Vardenafil / Levitra */}
        <div className="container pb-5">
          <div className="d-inline-block">
            <h4
              className="text-white py-1 px-2 mx-auto d-inline-block"
              style={{
                background: "#ffcdfd",
                background: "linear-gradient(140deg, #ff42f6 0%, #ba2db4 100%)",
                fontWeight: "bold",
                borderRadius: "8px",
              }}
            >
              Vardenafil
            </h4>
            <h5 className="d-inline-block mx-2">Generic Levitra</h5>
          </div>
          <div className="row">
            <div className="col-md-8 col-sm-12">
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Can vardenafil be used to treat male impotence (ED)?
                  </Accordion.Header>
                  <Accordion.Body>
                    Vardenafil is an FDA-approved treatment for male impotence.
                    The medication works best if taken approximately 30 minutes
                    before a sexual encounter. When taking vardenafil, you will
                    not get an erection until you are sexually aroused. In
                    clinical trials, Vardenafil has been shown to work well for
                    most men, regardless of age.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    How does Vardenafil treat male impotence?
                  </Accordion.Header>
                  <Accordion.Body>
                    Vardenafil relaxes the muscles in the penis and increases
                    blood flow, which allows you to get an erection for sexual
                    activity. You will not get an erection until you are
                    sexually stimulated. After a sexual encounter, the blood
                    flow will naturally decrease and your erection will subside.
                    Most men find that vardenafil starts working right away. It
                    works equally well for men who have occasional and frequent
                    problems with male impotence. Vardenafil can help you get an
                    erection, even if you have had male impotence for a long
                    time.
                    <hr />
                    You can take vardenafil in 10 mg or 20 mg doses. Always
                    consult your doctor before taking Vardenafil. A US-licensed
                    physician can help you determine the right dose.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Why should I choose Vardenafil to treat male impotence?
                  </Accordion.Header>
                  <Accordion.Body>
                    If other male impotence treatments have failed, vardenafil
                    might still work well for you. Vardenafil is a relatively
                    fast-acting medication that takes effect in approximately 30
                    minutes and lasts for up to 6 hours. Some men find that they
                    can get more than one erection from a single dose. It can be
                    taken at any time of the day, with or without food, so it’s
                    easy to integrate into your lifestyle.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    How should I take vardenafil?
                  </Accordion.Header>
                  <Accordion.Body>
                    Vardenafil is an oral medication that can be taken
                    approximately 30 minutes before sex. Only take vardenafil as
                    directed by a US-licensed physician. Never take vardenafil
                    more than once in a 24-hour period and never mix it with
                    other male impotence medications.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    What are the side effects of vardenafil?
                  </Accordion.Header>
                  <Accordion.Body>
                    Vardenafil is generally well-tolerated, but minor side
                    effects have been reported. Typical minor side effects
                    include headache, flushing, stomach upset, nasal congestion,
                    UTIs, sensitivity to light, and vision changes. If you
                    experience bothersome side effects while taking vardenafil,
                    contact your doctor.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    What precautions should I be take before using vardenafil?
                  </Accordion.Header>
                  <Accordion.Body>
                    Your doctor will need to review your medical history and
                    current health status before prescribing Vardenafil. It’s
                    particularly important to inform your doctor about
                    cardiovascular issues, including angina, heart failure,
                    irregular heartbeat, heart attack, high blood pressure, low
                    blood pressure, and QT syndrome.
                    <hr />
                    Also tell your doctor if you have liver problems, kidney
                    problems, ulcers, or bleeding disorders. If you have
                    previously experienced an erection that lasted more than 4
                    hours, or if you have anatomical penile abnormalities, be
                    sure to inform your doctor. Other important conditions to
                    disclose include sickle cell anemia, multiple myeloma, and
                    leukemia. Based on your medical history, your doctor can
                    help you choose the right male impotence treatment for you.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="1" className="pb-2">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Does vardenafil interact with other medications?
                  </Accordion.Header>
                  <Accordion.Body>
                    Vardenafil may interact with other medications, so it’s
                    important to provide a complete list of current prescription
                    and non-prescription medications. This includes
                    over-the-counter medications, vitamins, and herbal
                    supplements. Never start or stop a medication without
                    speaking to your doctor first.
                    <hr />
                    It’s important to tell your doctor if you are currently
                    taking nitrates, alpha-blockers, Flomax, Hytrin, Cardura,
                    Uroxatral, Minipress, quinidine, amiodarone, procainamide,
                    or sotalol. Never take Vardenafil with other medications
                    used to treat male impotence.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="col-md-4 col-sm-12 my-auto">
              <img
                src={levitraTierOne}
                alt="sildenafil-bottle"
                className="w-100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFAQs;
