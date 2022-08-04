import React from "react";
import classes from "./Info.module.css";

const Info = (props) => {
  return (
    <div id="info" className={classes.info}>
      <h1>Snow Removal Services - Snow Tractors</h1>
      <p className={classes.info_paragraph}>
        If you're tired of snow plows driving on your lawn and ruining it, not
        to mention piling up high snow banks along and at the ends of your
        driveway, <span className={classes.bold_span}>give us a call!</span>{" "}
        High piles of snow are a safety hazard and prevent you from seeing
        oncoming traffic as you are backing outy of your driveway. Also, who
        wants to always fix the lawn damage in the spring from what the snow
        plow has done. We can solve these problems along with giving you the
        most cost effective and efficient way to clear snow from your driveway.
        It's not too late to take advantage of our services.{" "}
        <span className={classes.bold_span}>
          Fill out the form below to receive a free quote!
        </span>
      </p>
      <div className={classes.picture}></div>
      <p className={classes.info_paragraph}>
        At this time we only service accounts in the Burnt Hills Area.
      </p>
      <h1>Why Our Snow Removal Service Is Better</h1>
      <p className={classes.info_paragraph}>
        We provide residential snow blowing services using a tractor and an
        inverted snowblower.{" "}
        <span className={classes.bold_span}>
          {" "}
          No other snow removal service does it better.
        </span>
      </p>
      <ul className={classes.info_list}>
        <li>
          <p>
            <span className={classes.bold_span}>No Lawn Damage. </span>
            We don't cause any lawn damage. Therefore it saves you time and
            money by not having to repair your lawn in the spring.
          </p>
        </li>
        <li>
          <p>
            <span className={classes.bold_span}>Safer Driveway. </span>
            No accumulation of high snow piles along your driveway or at the
            corners.
          </p>
        </li>
        <li>
          <p>
            <span className={classes.bold_span}>Deeper Snow. </span>
            We can go through and clear deeper snow than a snow plow can.
          </p>
        </li>
        <li>
          <p>
            <span className={classes.bold_span}>Cleaner Lines. </span>
            We make your driveway look like it was done professionally, not by
            someone who just pushes snow wherever there is room. The sides of
            your driveway will have clean straight lines.
          </p>
        </li>
        <li>
          <p>
            <span className={classes.bold_span}>Tight Areas. </span>
            We can remove snow from the areas that a plow won't be able to
            reach.
          </p>
        </li>
      </ul>
      <p className={classes.info_paragraph}>
        Being a snow removal customer of ours means that after every official
        snowfall of 2 inches or more, we will automatically show up and remove
        the snow from your driveway and walkways (if requested).{" "}
        <span className={classes.bold_span}>
          There is no need to call us, we automatically take care of it.
        </span>
      </p>
      <h1>Seasonal Plan</h1>
      <p className={classes.info_paragraph}>
        With our seasonal plan you have the opoprtunity to save money. The
        seasonal contract has one fixed reasonable cost for the entire 5 months
        season, November 15th - April 15th. No matter how many times it snows,
        our tractors will be there to clear your driveway when there is a
        minimum of 2 inches of snow on the ground. There are{" "}
        <span className={classes.bold_span}>
          No extra hidden costs. No surprise charges. No charges for return
          trips.
        </span>
      </p>
    </div>
  );
};

export default Info;
