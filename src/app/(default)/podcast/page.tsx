import React from "react";
import PodcastSection from "./utils/podcast-section";
import SubscribeSection from "./utils/subscribe-section";

const podcastData = {
  title: "Basics Of Cloud",
  description:
    "Implementing a cloud solution might help you stay ahead of the competition. Today's episode will take you through basics of cloud computing, uses and benefits of cloud computing, types of cloud service models & deployment models and as well as tell you about the myths of cloud.",
  speakerName: "Nishanth Golle",
  speakerTitle: "Lead Consultant",
  speakerImage: "/assets/tempory/podcast1.png", // Replace with actual image path
  waveformImage: "/assets/tempory/podcast2.png", // Replace with actual waveform image
};

const platformsData = [
  {
    name: "Pocket Casts",
    text: "Listen on",
    logo: "/assets/tempory/image 1.png",
    url: "#",
  },
  {
    name: "Spotify Podcasts",
    text: "Listen on",
    logo: "/assets/tempory/image 2.png",
    url: "#",
  },
  {
    name: "Anchor",
    text: "",
    logo: "/assets/tempory/image 3.png",
    url: "#",
  },
];

export default async function PodcastPage() {
  return (
    <React.Fragment>
      <PodcastSection {...podcastData} />
      <SubscribeSection platforms={platformsData} />
    </React.Fragment>
  );
}
