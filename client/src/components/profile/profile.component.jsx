import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectProfile } from "../../redux/profile/profile.selectors";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  ProfileHeader,
  DetailsContainer,
  NameContainer,
  TitlesContainer,
  IconContainer,
  LinkContainer,
  ProfileSpan,
} from "./profile.styles.jsx";
import { selectHiddenOrVisible } from "../../redux/lights/lights.selectors";

const profileImage = require("../../assets/profile.png");

const Profile = ({ profile, hiddenOrVisible }) => (
  <ProfileHeader hiddenOrVisible={hiddenOrVisible}>
    {hiddenOrVisible === "visible" ? <ProfileSpan>Profile</ProfileSpan> : null}
    {hiddenOrVisible === "visible" ? (
      <DetailsContainer hiddenOrVisible={hiddenOrVisible}>
        <img src={profileImage} alt="Nadav" />
        <TitlesContainer>
          <NameContainer>{profile.fullName}</NameContainer>
          <span className="position">{profile.title}</span>
          <span className="email">{profile.email}</span>
          <span className="phone">{profile.phone}</span>
          <IconContainer>
            {profile.socials.map((social) => (
              <LinkContainer key={social.id} href={social.url} target="_blank">
                <FontAwesomeIcon icon={social.icon} size="2x" />
              </LinkContainer>
            ))}
          </IconContainer>
        </TitlesContainer>
      </DetailsContainer>
    ) : null}
  </ProfileHeader>
);

const mapStateToProps = createStructuredSelector({
  profile: selectProfile,
  hiddenOrVisible: selectHiddenOrVisible,
});
export default connect(mapStateToProps)(Profile);
