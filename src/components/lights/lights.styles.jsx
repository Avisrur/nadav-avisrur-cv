@mixin flashlight($deg, $top, $right, $bottom, $left) {
  width: 100px;
  height: 100px;
  position: fixed;
  margin: auto;
  top: $top;
  right: $right;
  bottom: $bottom;
  left: $left;
  transform: rotate($deg);
}

.flashlight-top-right {
  @include flashlight(-135deg, 0, 0, null, null);
}
.flashlight-top-left {
  @include flashlight(135deg, 0, null, null, 0);
}

.flashlight-bottom-right {
  @include flashlight(-45deg, null, 0, 0, null);
}

.flashlight-bottom-left {
  @include flashlight(45deg, null, null, 0, 0);
}

.upper {
  background-color: #8c8c8c;
  height: 20px;
  width: 100px;
}

.lower {
  height: 0px;
  width: 40px;
  border-top: 80px solid #595959;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
}

.light {
  height: 0px;
  width: 100px;
  border-top: 80px solid rgba(255, 255, 51, 0.9);
  border-left: 100px solid transparent;
  border-right: 100px solid transparent;
  position: fixed;
  bottom: 100px;
  left: -100px;
  /* visibility: hidden; */
}
