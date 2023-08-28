import React from "react";
import Accordion from "react-bootstrap/Accordion";
import PageHeader from "./PageHeader";

const FAQs = () => {
  return (
    <div style={{ backgroundColor: "#fefefe" }}>
      <div>
        <PageHeader
          header="Frequently Asked Questions"
          description="Learn more about Uneekman, including answers about ordering, shipments, and more."
        />

        <div className="container py-5">
          <div className="d-inline-block">
            <h4
              className="py-1 px-2 mx-auto d-inline-block"
              style={{
                fontWeight: "bold",
              }}
            >
              Ordering Prescription Medications Online
            </h4>
          </div>

          <div className="pb-2">
            <div className="">
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Is it safe to purchase prescription medications online
                    through UneekDose?
                  </Accordion.Header>
                  <Accordion.Body>
                    Ordering prescription medications online at UneekMan.com is
                    both safe and secure. UneekMan is a US-based corporation
                    that only works with US-licensed doctors and pharmacists.
                    When you place your order, you can be assured that you will
                    always receive authentic, FDA-approved medications produced
                    in a US facility.
                    <hr />
                    While purchasing prescription medications from UneekMan is
                    100% safe, we never recommend dealing with foreign companies
                    that operate outside of the United States. In a majority of
                    cases, these companies are selling counterfeit medications
                    that could put your health at risk. Unscrupulous online
                    pharmacies might say that they are selling “generic”
                    versions of FDA-approved medications. However, it’s
                    important to know that these counterfeit medications are
                    illegal in the United States. Brand-name medications,
                    including Viagra, are still protected by patent laws. As
                    such, counterfeit medications are typically manufactured in
                    countries that don’t have strong consumer protection laws.
                    That means that there is no way to verify that the
                    medication contains the specified ingredients.
                    <hr />
                    Never take a risk when it comes to your health and wellness.
                    Only order prescription medications from a reputable,
                    US-based online pharmacy like UneekMan.com.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Will my medical history and personal information be kept
                    secure and confidential?
                  </Accordion.Header>
                  <Accordion.Body>
                    Your privacy is important to us, which is why we protect
                    customer information using Secure Socket Layer (SSL) and
                    advanced data encryption. All personal information is kept
                    in a secure database with restricted permissions – the
                    physician handling your case is the only person who can gain
                    access to your confidential medical history. Our customer
                    service team can only view your basic information, which
                    includes your name, address, and contact number. We will
                    never share any of your information with a third party
                    unless required by law.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    What's included in an online medical consultation?
                  </Accordion.Header>
                  <Accordion.Body>
                    At UneekMan, we use telemedicine and online medical
                    consultations to increase access to medications and health
                    care. Telemedicine is popular among patients looking for an
                    affordable and convenient way to address common health
                    concerns. You won’t be required to visit your doctor for a
                    physical examination. Instead, we will send you a secure
                    online medical questionnaire that will be reviewed by a
                    US-licensed physician. For your safety, we do ask about your
                    last physical examination before dispensing your medication.
                    Online medical consultation is a great choice for patients
                    seeking treatment for non-life threatening conditions –
                    including male impotence and hair loss – since these
                    conditions typically don’t necessitate an immediate visit to
                    your doctor’s office.
                    <hr />
                    We are using telemedicine to improve healthcare delivery. We
                    are dedicated to our patients and strive to meet and exceed
                    all regulations pertaining to telemedicine. We only work
                    with US-licensed physicians and pharmacy wholesalers for
                    authentic, FDA-approved medications. In fact, every pill we
                    sell is purchased through a reputable pharmaceutical
                    wholesaler located in the US. That means that when you order
                    from UneekMan, you’re getting the exact same medication you
                    could get at your local pharmacy.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    How many prescription medications do you offer online?
                  </Accordion.Header>
                  <Accordion.Body>
                    We are always adding new medications to our inventory, in
                    order to better serve our customers. Please view our product
                    page to see a list of prescription medications available
                    through UneekMan. Our US-licensed physicians and pharmacists
                    specialize in male impotence, hair loss, weight loss,
                    smoking cessation, flu prevention, allergies, skin care, and
                    digestion problems.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Do I need a prescription to order medications online?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes, you will need a prescription to order FDA-approved
                    medications at UneekMan. For your convenience, we provide
                    you with two possible options: 1. If you do not already have
                    a prescription, we will connect you with a US-licensed
                    doctor. After reviewing the answers provided in your medical
                    questionnaire, the physician can determine if it’s safe for
                    you to take the requested medication. At UneekMan, we
                    provide this service free of charge. 2. For customers that
                    already have a valid prescription, you will be asked to fill
                    out the medical questionnaire, and then fax your
                    prescription information to 1-317-536-3100. We also accept
                    prescription information via email.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="1" className="pb-2">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    What can I expect after placing my order?
                  </Accordion.Header>
                  <Accordion.Body>
                    Immediately after placing your order, a US-licensed doctor
                    will review your medical information. In some instances, the
                    physician might need more information. If that’s the case,
                    we will contact you. If the physician approves your order,
                    it will be sent to the pharmacy. A US-licensed pharmacist
                    will dispense your medication and ship it via FedEx or USPS.
                    Inside the package, your pharmacist will include a copy of
                    your prescription, the receipt for your order, and
                    documentation that includes important information about your
                    medication. If you have questions about your medication, the
                    included contact details will allow you to contact the
                    pharmacy directly.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
          <div className="pb-2">
            <div className="d-inline-block">
              <h4
                className="py-1 px-2 mx-auto d-inline-block"
                style={{
                  fontWeight: "bold",
                }}
              >
                Shipment and Delivery
              </h4>
            </div>
            <Accordion defaultActiveKey="1">
              <Accordion.Item eventKey="0">
                <Accordion.Header>How do you handle shipping?</Accordion.Header>
                <Accordion.Body>
                  We know that our customers want to receive their medications
                  in a timely manner. For that reason, our policy is to ship
                  every order within 24 hours unless it needs to be compounded
                  then it may take up to 48 hours. Orders placed before 3 PM
                  Eastern Standard Time are typically shipped the same day
                  unless we need to request more information. Other issues can
                  cause delays, including incorrect address information, missing
                  contact information, or incorrect postal codes. Additional
                  communication between patient and doctor or patient and
                  pharmacist regarding medical issues can cause delays in some
                  cases. Same-day shipping is our goal, but it cannot be
                  guaranteed.
                  <hr />
                  If you place your order before 3 PM Eastern Standard Time, and
                  you’d like to receive your medication the next day, contact
                  one of our customer service representatives immediately after
                  placing your order. Before we ship your medication, we will
                  need to verify your online order. By contacting us first, it
                  will expedite the process and help us ship your medication
                  quickly.
                  <hr />
                  We offer several shipping options for our customers, including
                  overnight, 2-day, and Priority Mail (3-5 days). It’s important
                  to note that express shipping is based on the time when the
                  carrier picks up your package; it is not calculated based on
                  when you placed your online order. Carriers do not operate on
                  Sundays or holidays, so your package cannot be picked up or
                  delivered on those days.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion defaultActiveKey="1">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Will you ship medications to a PO Box or military(APO/FPO)
                  address?
                </Accordion.Header>
                <Accordion.Body>
                  Yes, we deliver medications to PO boxes and military (APO/FPO)
                  addresses. If you’d like to receive your order at a PO Box, we
                  will ship your order via USPS Priority Mail for delivery in 3
                  to 5 business days.
                  <hr />
                  If you’d like to receive your order at an APO/FPO address, we
                  will ship your order via USPS Military Mail for delivery in 3
                  to 7 days. However, you should allow up to 2 weeks,
                  particularly if you will be receiving your order overseas.
                  <hr />A signature is required upon delivery. We obtain
                  signatures for PO Box and APO/FPO shipments via postal service
                  domestic return receipts.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion defaultActiveKey="1">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Will I be able to receive my order at a FedEx shipping
                  facility?
                </Accordion.Header>
                <Accordion.Body>
                  Yes, if you are not available to sign for your package at your
                  home or business, you can choose to pick it up at a FedEx
                  shipping facility. If you need assistance, a member of our
                  customer service team can help you find a nearby FedEx
                  shipping facility. Alternatively, you can find the nearest
                  facility online at{" "}
                  <a href="https://www.fedex.com">www.FedEx.com</a> by typing in
                  your zip code. When selecting a location, be sure to choose a
                  “hold-at” facility or a FedEx Office/FedEx Kinkos location.
                  FedEx will hold your package for up to 7 days.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion defaultActiveKey="1">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Will I need to sign for my package upon delivery?
                </Accordion.Header>
                <Accordion.Body>
                  Yes, all medications require the signature of a person 18
                  years of age or older. Therefore, an adult must be available
                  to sign for the package at the time of delivery. If you are
                  not available to provide your signature, you can pick your
                  package up at a FedEx shipping facility or at your local Post
                  Office.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion defaultActiveKey="1">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Are the medications shipped with discreet packaging?
                </Accordion.Header>
                <Accordion.Body>
                  Yes, we understand that privacy is important to our customers.
                  Your medication will arrive in a discreet package that does
                  not indicate the contents. For your protection, we do not
                  include an invoice or packing slip on the outside of our
                  packages.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion defaultActiveKey="1">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Can I cancel my order before it is shipped?
                </Accordion.Header>
                <Accordion.Body>
                  Yes, if you would like to cancel your order before shipment,
                  please call 1-317-789-8004. Once your order has shipped, there
                  is no way to cancel your order.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion defaultActiveKey="1">
              <Accordion.Item eventKey="0">
                <Accordion.Header>How can I track my order?</Accordion.Header>
                <Accordion.Body>
                  When your order ships, we will send you a tracking number. To
                  use your number to view shipping, tracking, and delivery
                  information, visit{" "}
                  <a href="https://www.fedex.com">www.FedEx.com</a> or{" "}
                  <a href="https://www.usps.com">www.USPS.com</a> and enter your
                  tracking number in the box provided.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion defaultActiveKey="1">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  What happens if my package cannot be delivered?
                </Accordion.Header>
                <Accordion.Body>
                  If your package was shipped via USPS, your mail carrier will
                  leave a notice in your mailbox or attached to your door. The
                  note will include instructions detailing how to pick up your
                  package. USPS will hold packages for up to 14 business days.
                  To locate your item, call 1-800-272-8777.
                  <hr />
                  If your packages with shipped via FedEx, the carrier will
                  attempt to deliver your package three times, so you will have
                  more than one opportunity to receive your package. If you
                  cannot receive your package for any reason, contact FedEx at
                  1-800-463-3339 to arrange for pickup at a FedEx shipping
                  location near you.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion defaultActiveKey="1">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Can I return my order?</Accordion.Header>
                <Accordion.Body>
                  If your medication is unopened, you can return it under
                  specific circumstances, as long as your contact us within 24
                  hours of delivery. If your package was delivered to the wrong
                  address, or if you did not receive the correct medication,
                  contact a customer service representative for a
                  return-confirmation approval number. When returning your item,
                  it must be shipped in the original packaging with all the
                  included paperwork. If you have questions about a return,
                  please call us at 1-3317-789-8004 for assistance.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion defaultActiveKey="1" className="pb-2">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Can I change the address once my package has shipped?
                </Accordion.Header>
                <Accordion.Body>
                  Yes, if your package was shipped via FedEx, you can re-route
                  your package for an additional $10 fee after your order has
                  already shipped. This only applies to FedEx orders. USPS
                  shipments cannot be re-routed after shipment. If your package
                  was shipped via USPS, we will wait for the package to be
                  returned before shipping it to the correct address.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="pb-2">
            <div className="d-inline-block">
              <h4
                className="py-1 px-2 mx-auto d-inline-block"
                style={{
                  fontWeight: "bold",
                }}
              >
                Payment
              </h4>
            </div>
            <Accordion defaultActiveKey="1" className="pb-2">
              <Accordion.Item eventKey="0">
                <Accordion.Header>How can I pay for my order?</Accordion.Header>
                <Accordion.Body>
                  Payment options include Visa, MasterCard, and American
                  Express. If you prefer, you can also pay via money order. Your
                  payment information will be kept 100% secure. Your Card will
                  not be billed or processed under any other name. Please call
                  1-317-789-8004 if you have any questions about your purchase.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
