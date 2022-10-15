import React from "react";
import classes from "./BackgroundSource.module.css";

function BackgroundSource(props) {
  let photoDetails = {
    photographer: "",
    photographerLink: "",
    photoLink: "",
  };

  const getPhotoData = () => {
    switch (props.backgroundClass) {
      default:
        photoDetails.photographer = "Joshua Reddekopp";
        photoDetails.photographerLink =
          "https://unsplash.com/@joshuaryanphoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
        photoDetails.photoLink =
          "https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
        break;
      case "base":
        photoDetails.photographer = "Joshua Reddekopp";
        photoDetails.photographerLink =
          "https://unsplash.com/@joshuaryanphoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
        photoDetails.photoLink =
          "https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
        break;
      case "clear-1":
        photoDetails.photographer = "mosi knife";
        photoDetails.photographerLink =
          "https://unsplash.com/@mosiknife?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
        photoDetails.photoLink =
          "https://unsplash.com/s/photos/sunny-sky?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
        break;
      case "clear-0":
        photoDetails.photographer = "Ashwini Chaudhary(Monty)";
        photoDetails.photographerLink =
          "https://unsplash.com/@suicide_chewbacca?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
        photoDetails.photoLink =
          "https://unsplash.com/s/photos/night-sky?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
        break;
      case "partly-1":
        photoDetails.photographer = "mosi knife";
        photoDetails.photographerLink =
          "https://unsplash.com/@mosiknife?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
        photoDetails.photoLink =
          "https://unsplash.com/s/photos/sunny-sky?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
        break;
      case "partly-0":
        photoDetails.photographer = "Anton Kraev";
        photoDetails.photographerLink =
          "https://unsplash.com/@antohakraev?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
        photoDetails.photoLink =
          "https://unsplash.com/s/photos/cloudy-night?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
        break;
      case "cloud-1":
        photoDetails.photographer = "CHUTTERSNAP";
        photoDetails.photographerLink =
          "https://unsplash.com/@chuttersnap?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
        photoDetails.photoLink =
          "https://unsplash.com/s/photos/clouds?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
        break;
      case "cloud-0":
        photoDetails.photographer = "Anandu Vinod";
        photoDetails.photographerLink =
          "https://unsplash.com/@anandu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
        photoDetails.photoLink =
          "https://unsplash.com/s/photos/cloudy-night?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
        break;
      case "mist-1":
        photoDetails.photographer = "Eric Muhr";
        photoDetails.photographerLink =
          "https://unsplash.com/@ericmuhr?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
        photoDetails.photoLink =
          "https://unsplash.com/s/photos/fog?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
        break;
      case "mist-0":
        photoDetails.photographer = "m wrona";
        photoDetails.photographerLink =
          "https://unsplash.com/@mwrona?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
        photoDetails.photoLink =
          "https://unsplash.com/s/photos/dark-mist?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
        break;
      case "rain-1":
        photoDetails.photographer = "Joy Stamp";
        photoDetails.photographerLink =
          "https://unsplash.com/@joyfulphotos?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
        photoDetails.photoLink =
          "https://unsplash.com/s/photos/rain?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
        break;
      case "rain-0":
        photoDetails.photographer = "Valentin Müller";
        photoDetails.photographerLink =
          "https://unsplash.com/@wackeltin_meem?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
        photoDetails.photoLink =
          "https://unsplash.com/s/photos/cloudy-night?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
        break;
      case "snow-1":
        photoDetails.photographer = "Nadiia Ploshchenko 🇺🇦";
        photoDetails.photographerLink =
          "https://unsplash.com/@still_loony?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
        photoDetails.photoLink =
          "https://unsplash.com/s/photos/snowfall?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
        break;
      case "snow-0":
        photoDetails.photographer = "Almas Salakhov";
        photoDetails.photographerLink =
          "https://unsplash.com/@therealslkhv?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
        photoDetails.photoLink =
          "https://unsplash.com/s/photos/snowfall-night?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
        break;
      case "sleet-1":
        photoDetails.photographer = "Sigmund";
        photoDetails.photographerLink =
          "https://unsplash.com/@sigmund?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
        photoDetails.photoLink =
          "https://unsplash.com/s/photos/sleet?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
        break;
      case "sleet-0":
        photoDetails.photographer = "Sigmund";
        photoDetails.photographerLink =
          "https://unsplash.com/@sigmund?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
        photoDetails.photoLink =
          "https://unsplash.com/s/photos/sleet?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
        break;
      case "storm-1":
        photoDetails.photographer = "Jonathan Bowers";
        photoDetails.photographerLink =
          "https://unsplash.com/@jbowersphotography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
        photoDetails.photoLink =
          "https://unsplash.com/s/photos/storm?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
        break;
      case "storm-0":
        photoDetails.photographer = "Brandon Morgan";
        photoDetails.photographerLink =
          "https://unsplash.com/@littleppl85?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
        photoDetails.photoLink =
          "https://unsplash.com/s/photos/storm?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
        break;
      case "hail-1":
        photoDetails.photographer = "Marcel Strauß";
        photoDetails.photographerLink =
          "https://unsplash.com/@martzzl?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
        photoDetails.photoLink =
          "https://unsplash.com/s/photos/hail?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
        break;
      case "hail-0":
        photoDetails.photographer = "Marcel Strauß";
        photoDetails.photographerLink =
          "https://unsplash.com/@martzzl?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
        photoDetails.photoLink =
          "https://unsplash.com/s/photos/hail?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
        break;
    }

    return photoDetails;
  };

  getPhotoData();

  return (
    <div className={`${classes["photo-source"]} ${classes[props.isDay]}`}>
      <img
        src={require(`../../assets/footer-icons/photo_${props.isDay}.png`)}
        alt="By:"
      ></img>
      <a href={photoDetails.photographerLink}>{photoDetails.photographer}</a> on{" "}
      <a href={photoDetails.photoLink}>Unsplash</a>
    </div>
  );
}

export default BackgroundSource;
