import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { SocialMediaIconsReact } from "social-media-icons-react";

import { selectProfile } from "../../redux/profile/profile.selectors";

import "./profile.styles.scss";

const profileImage = require("../../assets/profile.png");

const Header = ({ profile }) => {
  console.log(profile);
  return (
    <div className="profile-header">
      <div className="details">
        <img src={profileImage} alt="Nadav" />
        <div className="titles">
          <span className="name">{profile.fullName}</span>
          <span className="position">{profile.title}</span>
          <span className="email">{profile.email}</span>
          <span className="phone">{profile.phone}</span>
          <div className="social">
            {profile.social.map((cur) => (
              <SocialMediaIconsReact key={cur.id} icon={cur.icon} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  profile: selectProfile,
});
export default connect(mapStateToProps)(Header);
