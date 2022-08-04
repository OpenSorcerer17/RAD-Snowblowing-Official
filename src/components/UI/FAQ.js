import React from "react";
import FAQItem from "./FAQItem";
import classes from "./FAQ.module.css";

const FAQ = (props) => {
  return (
    <div id="faq" className={classes.faq}>
      <h1 id={classes.faq_header}>Frequently Asked Questions</h1>
      <FAQItem
        question="What areas do we cover?"
        answer="We service residential driveways in the Burnt Hills Area."
      />
      <FAQItem
        question="What is the minimum snow fall that mus be on the ground for us to take action?"
        answer="We automatically get tires rolling after 2 inches of snow has fallen."
      />
      <FAQItem
        question="Is there a limit to the number of times you service property each winter?"
        answer="No. It doesn't matter if it snows 5 times or 50 times."
      />
      <FAQItem
        question="Do you clean right up to my garage door?"
        answer="We try to get as close as possible. This will vary with the skill of our operators. On average we stay about 1 foot away from garage doors and buildings. We also stay about 2 feet away from vehicles parked in driveways."
      />
      <FAQItem
        question="Do you offer snow shoveling services?"
        answer="If requested we will provide shoveling service going from the driveway to your front door. This is an additional charge."
      />
      <FAQItem
        question="Do you mark my driveway?"
        answer="Yes, we will mark the sides of your driveway with several snow stakes so that our tractor operators do not drive on your lawn. We will take down the stakes after the season is over."
      />
      <FAQItem
        question="What months do you provide snowblowing service?"
        answer="Our seasonal services runs from November 15th to April 15th."
      />
      <FAQItem
        question="Will my driveway be cleared before 7AM?"
        answer="We would love to guarantee this but it's all too dependent on when it starts to snow, therefore we cannot guarantee it. We constantly monitor the snow fall conditions and being clearing when the snowfall starts to move out of the area. We can be there at any hour of the day or night. Obviously the later the snow stops the later we start."
      />
      <FAQItem
        question="When are seasonal contracts due?"
        answer="First payment is due by November 1st, and the second payment is due by January 1st."
      />
      <FAQItem
        question="What are our prices?"
        answer="Contact us for a free estimate and we will customize an estimate to fit your driveway. Our prices are based on the square footage of your driveway."
      />
      <FAQItem
        question="What methods of payment do you accept?"
        answer="Payment can be made by check to RAD Snowblowing."
      />
      <FAQItem
        question="Do you have a seasonal snowfall limit?"
        answer="No, we do not have a seasonal snowfall limit."
      />
      <FAQItem
        question="Do you offer any customer discounts?"
        answer="If you refer someone who signs up for our services, you will receieve a $25 discount."
      />
      <FAQItem
        question="What if the city plows come by after you've already cleared my driveway?"
        answer="Contact us and we will make a return visit to clear your driveway at no additional charge."
      />
      <FAQItem
        question="If I call during a snowstorm, will there be someone in the office to answer the phone?"
        answer="Possibly, but sometimes our office manager is out helping the operators in the field with different duties. If he doesn't answer it is in your best interest to leave a message and your call will be returned ASAP."
      />
      <FAQItem
        question="Are we insured?"
        answer="Yes, we carry enough Liability insurance to cover all aspects of our business."
      />
      <FAQItem
        question="How can we contact you?"
        answer="On snow days we suggest calling us only if there is a special need, but you may have to leave a message."
      />
      <FAQItem
        question="Can I leave cars parked on my driveway?"
        answer="You can leave cars parked on your driveway and our operators will remove as much snow as possible while avoiding the vehicles. If you expect to have a car on your driveway during a storm we reccomend that you place it as far to the top or to the side of your driveway as possible."
      />
      <FAQItem
        question="Can you snowblow my gravel driveway?"
        answer="No, we cannot snowblow gravel driveways."
      />
      <FAQItem
        question="Do your tractors make loud noise?"
        answer="No, chances are you won't even know we are there!"
      />
      <FAQItem
        question="Your equipment looks big! Will it damage my driveway or grass?"
        answer="No, the tractor and blower will not crack your asphalt or concrete. Although it looks large, the weight of the machines are evenly distributed over the extra large surface area of its tires, meaning there is more weight per square inch being applied to your driveway from your cars compared to our machines. Our operators are trained to lower the blowers in a controlled manner so that unecessary jolts to the asphalt are minimized. Furthermore, the markers we install around the perimeter of your driveway will prevent our operators from driving on your grass."
      />
      <FAQItem
        question="What is your repair policy?"
        answer="Our operators are required to report any damages caused to your property. We will attempt to repair any damages after the snow event has expired. If it has to be repaired in the Spring we will do so."
      />
      <FAQItem
        question="What has to be done to prepare my driveway for our services?"
        answer="All Summer items such as flower pots / planters, downspouts, recycling bins, garbage cans, basketball hoops, children's toys, extension cords, or any other miscallaneous items need to be remove from the driveway so that our tractors do not come into contact with them. We are not responsible for damages to any of these items if they are left on your driveway."
      />
      <FAQItem
        question="After I receive an estimate what is the process?"
        answer={`We will email you our estimate. If acceptable, sign and return with 1st payment to: RAD Snowblowing, 6 Glenridge Rd. PO Box 2951, Schenectady NY 12302`}
      />
    </div>
  );
};

export default FAQ;
